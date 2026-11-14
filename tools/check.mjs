#!/usr/bin/env node
// 리포 관리자용 검사기. 학습자에게는 필요 없다.
// 검사: 커리큘럼 형식·선수 관계·모듈 수(R2), 미리 만든 시각 자료 없음(R5),
// 국내 근거·글로벌 비교의 출처 참조(R10), 출처의 공식 도메인·조회일과 조문 표기의 출처 번호(R11),
// [문서형] 비율(R12), CLAUDE.md의 tutor 포함, 설정 JSON 유효성.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");

const LEVELS = ["Explain", "Apply", "Evaluate", "Develop"];
const FIELDS = ["선수", "핵심 질문", "목표", "만들어 볼 것", "국내 근거", "글로벌 비교", "경계·연결"];
const AREAS = ["L", "K", "R", "P", "C", "X"];
const MAX_MODULES = 30;
const MAX_PER_AREA = 9;
const DOC_RATIO = 0.7;

// 공식 출처 도메인. 더할 때는 기관명을 주석에 적는다.
const OFFICIAL = [
  "law.go.kr", // 법제처 국가법령정보센터
  "likms.assembly.go.kr", // 국회법률정보시스템
  "elaw.klri.re.kr", // 한국법제연구원 영문법령
  "ftc.go.kr", // 공정거래위원회
  "acrc.go.kr", // 국민권익위원회
  "moel.go.kr", // 고용노동부
  "kipo.go.kr", // 지식재산처(구 특허청)
  "moj.go.kr", // 법무부
  "scourt.go.kr", // 대법원
  "legislation.gov.uk", // 영국 법령
  "gov.uk", // 영국 정부
  "europa.eu", // EU 기관(EUR-Lex·집행위원회·출판국)
  "uncitral.un.org", // 유엔국제상거래법위원회
  "justice.gov", // 미국 법무부
  "sec.gov", // 미국 증권거래위원회
  "congress.gov", // 미국 의회
  "uscode.house.gov", // 미국 법전
  "uscourts.gov", // 미국 연방법원
  "govinfo.gov", // 미국 정부출판국
  "oecd.org", // OECD
  "iso.org", // 국제표준화기구
  "wipo.int", // 세계지식재산기구
  "jftc.go.jp", // 일본 공정취인위원회
  "opensource.org", // Open Source Initiative
  "spdx.org", // SPDX(Linux Foundation)
];

function parseSources(text) {
  const sources = new Map();
  const problems = [];
  const at = text.indexOf("\n## 출처");
  if (at < 0) return { sources, problems: ["출처 절 없음"] };
  for (const line of text.slice(at).split("\n")) {
    const m = line.match(/^- \[([KG]\d{2})\] (.+)$/);
    if (!m) continue;
    const [, id, body] = m;
    if (sources.has(id)) problems.push(`출처 ${id}: 중복`);
    sources.set(id, body);
    const urls = [...body.matchAll(/<(https?:\/\/[^>]+)>/g)].map((u) => u[1]);
    if (!urls.length) problems.push(`출처 ${id}: URL 없음`);
    for (const u of urls) {
      let host = "";
      try { host = new URL(u).hostname; } catch { problems.push(`출처 ${id}: URL 형식 오류`); continue; }
      if (!OFFICIAL.some((d) => host === d || host.endsWith(`.${d}`))) problems.push(`출처 ${id}: 공식 도메인 아님 ${host}`);
    }
    if (!/조회 \d{4}-\d{2}-\d{2}/.test(body)) problems.push(`출처 ${id}: 조회일 없음`);
  }
  if (sources.size === 0) problems.push("출처 항목 없음");
  return { sources, problems };
}

function parseCurriculum(text, sources) {
  const modules = new Map();
  const problems = [];
  let docCount = 0;
  const perArea = new Map();
  const docPerArea = new Map();
  const body = text.split("\n## 이 지도의 경계")[0];
  const blocks = body.split(/^### /m).slice(1);
  for (const block of blocks) {
    const head = block.split("\n")[0];
    const m = head.match(/^([LKRPCX])(\d+) · (.+?)( — 개정 잦음)?$/);
    if (!m) { problems.push(`모듈 제목 형식 오류: ${head}`); continue; }
    const id = m[1] + m[2];
    if (modules.has(id)) problems.push(`${id}: 중복 id`);
    const fields = {};
    for (const line of block.split("\n").slice(1)) {
      const f = line.match(/^- ([^:]+): (.+)$/);
      if (f) fields[f[1]] = f[2];
    }
    for (const name of FIELDS) if (!fields[name]) problems.push(`${id}: 「${name}」 없음`);
    if (fields["목표"] && !LEVELS.some((l) => fields["목표"].startsWith(`${l} — `))) problems.push(`${id}: 목표 수준 형식 오류`);
    for (const name of ["국내 근거", "글로벌 비교"]) {
      const v = fields[name] || "";
      const refs = [...v.matchAll(/\[([KG]\d{2})\]/g)].map((r) => r[1]);
      if (!refs.length && !v.startsWith("해당 없음 — ")) problems.push(`${id}: 「${name}」에 출처 번호 없음`);
      for (const r of refs) if (!sources.has(r)) problems.push(`${id}: 없는 출처 ${r}`);
    }
    perArea.set(m[1], (perArea.get(m[1]) || 0) + 1);
    if ((fields["만들어 볼 것"] || "").startsWith("[문서형] ")) {
      docCount++;
      docPerArea.set(m[1], (docPerArea.get(m[1]) || 0) + 1);
    }
    const prereq = !fields["선수"] || fields["선수"] === "없음" ? [] : fields["선수"].split(",").map((s) => s.trim());
    modules.set(id, prereq);
  }
  for (const [id, prereq] of modules) for (const p of prereq) if (!modules.has(p)) problems.push(`${id}: 없는 선수 ${p}`);
  const state = new Map();
  const visit = (id, path) => {
    if (state.get(id) === 2 || !modules.has(id)) return;
    if (state.get(id) === 1) { problems.push(`선수 순환: ${[...path, id].join(" → ")}`); return; }
    state.set(id, 1);
    for (const p of modules.get(id)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const id of modules.keys()) visit(id, []);
  if (modules.size > MAX_MODULES) problems.push(`모듈 ${modules.size}개 > 상한 ${MAX_MODULES}`);
  for (const a of AREAS) {
    if ((perArea.get(a) || 0) > MAX_PER_AREA) problems.push(`영역 ${a}: 모듈 ${perArea.get(a)}개 > 상한 ${MAX_PER_AREA}`);
    if (!docPerArea.get(a)) problems.push(`영역 ${a}: [문서형] 산출물 없음`);
  }
  if (modules.size && docCount / modules.size < DOC_RATIO) problems.push(`[문서형] ${docCount}/${modules.size} < ${DOC_RATIO * 100}%`);
  return { modules, problems, docCount };
}

// 조문·조항 표기가 나온 줄에는 출처 번호가 있어야 한다(R11). 튜터 지침의 형식 설명 줄은 「제<번호>조」처럼 숫자가 없어 걸리지 않는다.
const ARTICLE = /제\s?\d+\s?조|\bSection\s+\d+|\bs\.\s?\d+\b|§\s?\d+|(조항|clause)\s+\d+(\.\d+)+/i;
function findUnsourcedArticles(name, text) {
  const hits = [];
  text.split("\n").forEach((line, i) => {
    if (ARTICLE.test(line) && !/\[[KG]\d{2}\]/.test(line)) hits.push(`${name}:${i + 1}`);
  });
  return hits;
}

function findVisualAssets(files) {
  const allowedJs = /^tools\/.*\.m?js$/;
  return files.filter((f) => /\.(html?|css|svg|png|jpe?g|gif|webp|avif)$/i.test(f) || (/\.m?js$/i.test(f) && !allowedJs.test(f)));
}

function findTemplateMarkup(name, text) {
  const hits = [];
  for (const m of text.matchAll(/(```|~~~)[\s\S]*?\1/g)) if (/<(!doctype|html|svg|style|canvas|script)\b/i.test(m[0])) hits.push(name);
  return hits;
}

function main() {
  const map = read("curriculum/map.md");
  const { sources, problems: sp } = parseSources(map);
  errors.push(...sp);
  const { modules, problems, docCount } = parseCurriculum(map, sources);
  errors.push(...problems);
  if (modules.size === 0) errors.push("모듈을 찾지 못함");

  const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean);
  for (const f of findVisualAssets(files)) errors.push(`미리 만든 시각 자료 금지: ${f}`);
  const docs = files.filter((x) => x.endsWith(".md") && existsSync(join(root, x)) && !x.startsWith("docs/build/"));
  for (const f of docs) {
    const t = read(f);
    for (const n of findTemplateMarkup(f, t)) errors.push(`복사용 마크업 금지: ${n}`);
    for (const h of findUnsourcedArticles(f, t)) errors.push(`출처 번호 없는 조문 표기: ${h}`);
  }

  const claude = read("CLAUDE.md");
  for (const t of readdirSync(join(root, "tutor")).filter((x) => x.endsWith(".md"))) {
    if (!claude.includes(`@tutor/${t}`)) errors.push(`CLAUDE.md가 tutor/${t}를 불러오지 않음`);
  }

  for (const p of [".claude/settings.json", "learner-template/state.json"]) {
    try { JSON.parse(read(p)); } catch (e) { errors.push(`${p}: JSON 오류 ${e.constructor.name}`); }
  }
  if (!existsSync(join(root, "learner-template/log.md"))) errors.push("learner-template/log.md 없음");
  for (const s of readdirSync(join(root, ".claude/skills"))) {
    if (statSync(join(root, ".claude/skills", s)).isDirectory() && !existsSync(join(root, ".claude/skills", s, "SKILL.md"))) errors.push(`스킬 ${s}: SKILL.md 없음`);
  }
  if (!read(".gitignore").split("\n").includes("learner/")) errors.push(".gitignore에 learner/ 없음");

  if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join("\n")); process.exit(1); }
  console.log(`OK 모듈 ${modules.size}개(문서형 ${docCount}), 출처 ${sources.size}개, 파일 ${files.length}개 검사`);
}

main();
