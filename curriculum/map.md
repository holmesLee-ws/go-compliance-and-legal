# 커리큘럼 지도

큰 윤곽만 둔다. 강의 내용은 여기 없다. 튜터가 세션마다 학습자의 업무·수준에 맞춰 조사하고 만든다.

- 기본 순서는 L → K → R → P → C → X다. 선수 관계만 지키면 학습자의 업무에 맞춰 순서를 바꿔도 된다.
- 목표 수준은 그 모듈을 마쳤다고 볼 최소 수준이다. 수준의 뜻은 [tutor/assessment.md](../tutor/assessment.md)에 있다.
- 「국내 근거」가 뼈대이고 「글로벌 비교」는 비교 축이다. 대괄호 번호는 아래 [출처](#출처)를 가리킨다. 조문 번호는 여기 적지 않는다. 세션에서 공식 출처로 확인해 쓴다([tutor/legal-sources.md](../tutor/legal-sources.md)).
- 「개정 잦음」 표시가 있는 모듈은 시작할 때 소관 법령의 현행 시행일을 확인한다.
- `[문서형]`은 업무에 쓸 수 있는 문서가 산출물이라는 뜻이다. 학습자의 업무에 맞게 바꿔도 된다.
- 모듈 id는 진도 기록의 키다. 바꾸면 `learner/state.json`이 깨지므로, 고칠 때는 새 id를 만든다.
- `node tools/check.mjs`로 형식·선수 관계·출처를 검사한다(리포 관리자용, 학습자에게는 필요 없다).

## L · 법과 계약의 기초

### L1 · 법의 지도와 법령 읽기
- 선수: 없음
- 핵심 질문: 업무 질문 하나에 어떤 법이 걸리고, 그 법의 현행 내용은 어디서 확인하는가?
- 목표: Apply — 업무 질문에 걸리는 법률·시행령·고시·판례를 찾아 위계와 시행일을 확인한다.
- 만들어 볼 것: [문서형] 내 업무에 걸리는 법령 목록과 확인 시점표
- 국내 근거: 국가법령정보센터의 법령·행정규칙·판례 체계 [K01]
- 글로벌 비교: 영국·EU의 공식 법령 열람처에서 같은 질문을 찾아보는 연습 [G01][G02]. 법체계 자체의 차이(영미법에서 판례가 갖는 구속력)는 개념 수준에서만 다룬다
- 경계·연결: 없음

### L2 · 계약의 성립과 효력
- 선수: L1
- 핵심 질문: 메일 몇 통과 구두 약속은 언제 계약이 되고, 언제 무효가 되는가?
- 목표: Apply — 청약·승낙, 대리권, 무효·취소 사유로 계약 성립과 효력을 판단한다.
- 만들어 볼 것: [문서형] 「이 합의는 계약인가」 판단표
- 국내 근거: 민법 총칙(법률행위·대리)과 채권 각칙(계약) [K02]
- 글로벌 비교: 국제물품매매계약에 관한 유엔협약(CISG)의 계약 성립 규칙 [G03]
- 경계·연결: 전자계약·전자서명 시스템은 go-mis

### L3 · 채무불이행과 책임 배분
- 선수: L2
- 핵심 질문: 납기가 늦거나 품질이 나쁠 때 누가 무엇을 얼마나 책임지는가?
- 목표: Apply — 손해배상·손해배상액의 예정(지체상금)·해제·하자 책임을 사실관계에 적용한다.
- 만들어 볼 것: [문서형] 납기·품질 위험을 나누는 조항 비교표
- 국내 근거: 민법의 채무불이행·손해배상·계약 해제 규정 [K02], 상법 상행위편의 상사매매(목적물 검사·하자 통지) [K06]
- 글로벌 비교: CISG의 계약 위반 구제 수단과 손해배상 [G03]
- 경계·연결: 없음

### L4 · 계약서 검토 실무
- 선수: L3
- 핵심 질문: 상대가 보낸 계약서에서 무엇을 먼저 보고, 어떤 조항을 고쳐 달라고 할 것인가?
- 목표: Evaluate — 조항안(책임 제한, 해지, 준거법·관할)을 위험과 협상력으로 비교해 고른다.
- 만들어 볼 것: [문서형] 내 업무 계약 유형의 검토 체크리스트
- 국내 근거: 민법 [K02], 약관의 규제에 관한 법률 [K03]
- 글로벌 비교: 국제 계약의 준거법·분쟁 해결 조항과 외국중재판정의 승인·집행에 관한 뉴욕협약 [G04]
- 경계·연결: 협상 기법 일반은 go-leadership-negotiation, 근로계약은 go-hr, 해외 진출 계약 구조는 go-global-business

### L5 · 분쟁·소송·중재 대응 기초
- 선수: L3
- 핵심 질문: 분쟁 조짐이 보인 첫 72시간에 무엇을 해야 나중에 지지 않는가?
- 목표: Apply — 증거 보전·소멸시효·내용증명·소송과 중재의 선택을 사실관계에 맞게 정한다.
- 만들어 볼 것: [문서형] 분쟁 초기 대응 절차서(자료 보존 지시 포함)
- 국내 근거: 민사소송법 [K04], 중재법 [K05], 민법의 소멸시효 [K02], 상법의 상사시효 [K06]
- 글로벌 비교: 뉴욕협약에 따른 중재판정 집행 [G04], 미국 민사소송의 증거개시(discovery)와 자료 보존 의무 [G05]
- 경계·연결: 협상 기법은 go-leadership-negotiation

## K · 회사법과 지배구조

### K1 · 주식회사의 기관과 권한
- 선수: L1
- 핵심 질문: 이 결정은 대표이사·이사회·주주총회 중 누가 해야 유효하고, 주주는 어떤 권리로 그 결정에 관여하는가?
- 목표: Apply — 결정 사안(신주 발행, 주식 양도 제한, 중요 자산 처분 등)별로 권한 기관과 필요한 절차를 짚는다.
- 만들어 볼 것: [문서형] 우리 회사 의사결정 권한표
- 국내 근거: 상법 회사편의 주식회사 기관 규정 [K06]
- 글로벌 비교: 영국 Companies Act 2006의 회사 기관 구조 [G06]
- 경계·연결: 스톡옵션·투자 계약은 go-startup-agile, 법인 등기·인감 실무는 go-general-affairs

### K2 · 이사의 의무와 책임 — 개정 잦음
- 선수: K1
- 핵심 질문: 이사는 누구를 위해 일하고, 어떤 결정에서 민사·형사 책임을 지는가?
- 목표: Apply — 선관주의·충실의무, 자기거래, 회사기회 유용, 경영판단, 배임 책임을 사실관계에 적용한다.
- 만들어 볼 것: [문서형] 이사회 안건 이해충돌 점검표
- 국내 근거: 상법의 이사 의무·책임 규정과 그 개정, 특별배임 [K06], 형법의 업무상 배임 [K13]. 배임죄 개편 논의가 있어 모듈 시작 때 현황을 확인한다
- 글로벌 비교: 영국 Companies Act 2006의 이사의 일반 의무 [G07]
- 경계·연결: 없음

### K3 · 주주총회와 이사회 운영 실무
- 선수: K1
- 핵심 질문: 소집·결의·의사록 중 하나만 틀려도 결정이 흔들리는 이유는 무엇인가?
- 목표: Apply — 소집 절차·결의 요건·의사록을 점검해 하자를 찾는다.
- 만들어 볼 것: [문서형] 이사회 소집부터 의사록까지 체크리스트
- 국내 근거: 상법의 주주총회·이사회 운영 규정 [K06]
- 글로벌 비교: 영국 Companies Act 2006의 결의 방식 [G06]
- 경계·연결: 없음

### K4 · 지배구조와 준법통제
- 선수: K2
- 핵심 질문: 이사회는 회사의 법 위반을 어떻게 알고 막을 책임이 있는가?
- 목표: Evaluate — 준법통제 체계(준법통제기준·준법지원인·감사·보고 라인) 설계안을 비교해 고른다.
- 만들어 볼 것: [문서형] 이사회 준법 보고 구성안
- 국내 근거: 상법의 상장회사 준법통제기준·준법지원인 규정 [K06], 이사의 감시의무·내부통제 구축 의무에 관한 대법원 판례(판례 번호는 세션에서 확인) [K24]
- 글로벌 비교: 미국 델라웨어 회사법 [G36]과 이사회 감독 의무 판례(Caremark·Marchand — 판결문은 세션에서 원문 확인), G20/OECD 기업지배구조 원칙 [G08], 미국 법무부 평가 지침의 경영진·이사회 감독 항목 [G09]
- 경계·연결: 지속가능성 공시·ESG 평가는 go-esg, 내부회계관리는 go-icfr, 전사 위험관리·GRC는 go-control

## R · 규제 영역

### R1 · 공정거래법의 지도 — 개정 잦음
- 선수: L1
- 핵심 질문: 우리 사업의 어떤 행동이 공정거래법의 어느 유형에 걸릴 수 있는가?
- 목표: Explain — 시장지배적 지위 남용·부당한 공동행위·불공정거래행위가 각각 막으려는 해악을 자기 사업으로 설명한다.
- 만들어 볼 것: [문서형] 우리 사업 공정거래 위험 지도
- 국내 근거: 독점규제 및 공정거래에 관한 법률 [K07]
- 글로벌 비교: 미국 반트러스트법(Sherman Act 등) [G10], EU 기능조약의 경쟁 규정 [G11]
- 경계·연결: 기업결합 신고·지주회사 규제는 go-strategy

### R2 · 담합과 경쟁사 접촉
- 선수: R1
- 핵심 질문: 협회 모임에서 경쟁사와 나눈 대화가 담합이 되는 지점은 어디인가?
- 목표: Apply — 합의·정보 교환·자진신고(리니언시)를 사실관계에 적용해 위험을 판정한다.
- 만들어 볼 것: [문서형] 경쟁사 접촉 행동 지침(모임 전후 할 일)
- 국내 근거: 공정거래법의 부당한 공동행위 규정과 공정거래위원회 고시 [K07][K08]
- 글로벌 비교: Sherman Act의 카르텔 규제 [G10], EU 기능조약의 공동행위 금지 [G11]
- 경계·연결: 영업 현장 대응은 go-sales

### R3 · 거래상 지위와 불공정거래행위
- 선수: R1
- 핵심 질문: 큰 거래처의 「협조 요청」은 언제 위법한 강요가 되는가?
- 목표: Apply — 거래상 지위 남용과 불공정거래행위 유형을 거래 장면에 적용한다.
- 만들어 볼 것: [문서형] 거래처 요청 점검표(비용 전가·반품·경영 간섭)
- 국내 근거: 공정거래법의 불공정거래행위 규정 [K07]
- 글로벌 비교: 일본 독점금지법의 우월적 지위 남용 지침 [G12]. 다른 법역에 같은 일반 규정이 있는지는 세션에서 확인한다
- 경계·연결: 영업 실무는 go-sales

### R4 · 하도급법 — 개정 잦음
- 선수: L2
- 핵심 질문: 발주서 한 장과 대금 지급일이 왜 회사 전체의 법적 위험이 되는가?
- 목표: Apply — 적용 대상, 서면 발급, 대금 지급, 부당 감액·반품, 기술자료 요구를 발주 장면에 적용한다.
- 만들어 볼 것: [문서형] 하도급 발주 체크리스트
- 국내 근거: 하도급거래 공정화에 관한 법률 [K09]
- 글로벌 비교: 일본 중소수탁거래적정화법(구 하청법, 2026-01-01 개정 시행) [G12], EU 상거래 지급 지연 지침 [G13]
- 경계·연결: 구매·하도급 운영 실무는 go-scm·go-project-management

### R5 · 대리점법과 유통 거래
- 선수: R3
- 핵심 질문: 본사가 대리점에 정할 수 있는 것과 정하면 안 되는 것의 경계는 어디인가?
- 목표: Apply — 구입 강제·이익 제공 강요·판매 목표 강제·경영 간섭을 유통 계약에 적용한다.
- 만들어 볼 것: [문서형] 대리점 계약·운영 점검표
- 국내 근거: 대리점거래의 공정화에 관한 법률 [K10]
- 글로벌 비교: EU 수직적 합의 일괄면제 규칙 [G14]
- 경계·연결: 영업 조직 운영은 go-sales

### R6 · 전자상거래와 소비자 보호 — 개정 잦음
- 선수: L2
- 핵심 질문: 온라인 판매 화면의 버튼 하나가 왜 법 위반이 되는가?
- 목표: Apply — 통신판매업자의 정보 제공, 청약철회, 소비자를 속이는 화면 설계를 판매 화면에 적용한다.
- 만들어 볼 것: [문서형] 온라인 판매 화면 점검표
- 국내 근거: 전자상거래 등에서의 소비자보호에 관한 법률 [K11], 약관의 규제에 관한 법률 [K03]
- 글로벌 비교: EU 소비자 권리 지침 [G15]
- 경계·연결: 표시광고·마케팅 동의는 go-marketing, 상품 화면 설계·접근성은 go-product, 청약철회·환불 처리 실무는 go-cx, 개인정보는 go-security

### R7 · 청탁금지법과 접대 — 개정 잦음
- 선수: L1
- 핵심 질문: 공공기관 담당자에게 하는 식사·선물·강의료는 어디까지 괜찮은가?
- 목표: Apply — 적용 대상, 가액 기준, 예외 사유를 접대 장면에 적용한다.
- 만들어 볼 것: [문서형] 접대·선물 사전 승인 기준
- 국내 근거: 부정청탁 및 금품등 수수의 금지에 관한 법률과 시행령 [K12]
- 글로벌 비교: 미국 연방 공무원의 외부 선물 수수 규정 [G37]과 영국 Bribery Act 2010 법무부 지침의 접대 기준 [G16][G17]. 청탁금지법은 대가성 없이도 금액으로 금지하고 Bribery Act는 부정한 의도를 묻는다는 구조 차이를 비교 축으로 쓴다
- 경계·연결: 영업 접대 실무와 공공조달은 go-sales

### R8 · 뇌물과 해외 부패
- 선수: R7
- 핵심 질문: 해외 에이전트에게 준 수수료가 왜 본사의 뇌물 사건이 되는가?
- 목표: Evaluate — 국내 형사 책임과 해외 반부패법의 적용 범위를 비교해 거래 구조의 위험을 판정한다.
- 만들어 볼 것: [문서형] 해외 에이전트 계약의 반부패 조항과 승인 절차
- 국내 근거: 형법의 뇌물·배임수증재 규정(배임 계열 개편 논의가 있어 모듈 시작 때 현황 확인) [K13], 국제상거래에 있어서 외국공무원에 대한 뇌물방지법 [K14]
- 글로벌 비교: 미국 해외부패방지법(FCPA) [G18], 영국 Bribery Act 2010의 뇌물 방지 실패 책임 [G16][G17], OECD 뇌물방지협약 [G19], 영국의 사기 방지 실패 책임 [G35]
- 경계·연결: FCPA 회계 장부·내부통제 조항의 운영은 go-icfr, 해외 진출 실무는 go-global-business

### R9 · 중대재해처벌법과 경영책임자 — 개정 잦음
- 선수: K4
- 핵심 질문: 경영책임자와 이사회는 안전보건 의무 이행을 어떻게 보고받고 감독했다고 증명하는가?
- 목표: Apply — 경영책임자의 안전보건 확보 의무를 이사회 보고·감독 체계에 적용한다(K4와 연결).
- 만들어 볼 것: [문서형] 이사회 안전보건 보고 안건과 의사록 구성안
- 국내 근거: 중대재해 처벌 등에 관한 법률과 시행령 [K15]
- 글로벌 비교: 영국 기업 과실치사법(Corporate Manslaughter and Corporate Homicide Act 2007) [G20], ISO 45001 [G21]
- 경계·연결: 안전보건관리체계 구축·위험성평가·의무 이행 점검 실무는 go-hse, 노동법 일반은 go-hr

## P · 지식재산

### P1 · 지식재산의 지도
- 선수: L1
- 핵심 질문: 우리 회사의 기술·이름·콘텐츠는 각각 어떤 권리로 지키는가?
- 목표: Explain — 특허·상표·저작권·영업비밀이 무엇을 언제부터 어떻게 보호하는지 자기 회사 자산으로 설명한다.
- 만들어 볼 것: [문서형] 우리 회사 IP 자산 목록과 보호 수단
- 국내 근거: 특허법 [K16], 상표법 [K17], 저작권법 [K18], 부정경쟁방지 및 영업비밀보호에 관한 법률 [K19]
- 글로벌 비교: 파리협약·특허협력조약(PCT)·마드리드 시스템 [G22][G23][G24]
- 경계·연결: AI 산출물의 저작권은 go-ai

### P2 · 영업비밀과 인력 이동
- 선수: P1
- 핵심 질문: 퇴사자가 가져간 파일이 영업비밀로 보호받으려면 회사가 미리 무엇을 해 두었어야 하는가?
- 목표: Apply — 비밀관리성 등 보호 요건과 침해 유형을 인력 이동 장면에 적용한다.
- 만들어 볼 것: [문서형] 입사·퇴사자 영업비밀 체크리스트
- 국내 근거: 부정경쟁방지 및 영업비밀보호에 관한 법률 [K19]
- 글로벌 비교: 미국 영업비밀보호법(Defend Trade Secrets Act of 2016) [G25], EU 영업비밀 지침 [G26]
- 경계·연결: 전직 금지 약정의 노동법 쟁점은 go-hr, 기술적 보호 조치는 go-security

### P3 · 저작권·소프트웨어·오픈소스
- 선수: P1
- 핵심 질문: 직원이 만든 코드·디자인은 누구 것이고, 가져다 쓴 오픈소스는 무엇을 요구하는가?
- 목표: Apply — 업무상저작물과 오픈소스 라이선스 의무를 사용 장면에 적용한다.
- 만들어 볼 것: [문서형] 오픈소스 사용 승인 절차
- 국내 근거: 저작권법 [K18]
- 글로벌 비교: 베른협약 [G27], OSI 승인 라이선스와 SPDX 라이선스 목록 [G28][G29]
- 경계·연결: AI 학습·산출물 쟁점은 go-ai, 소프트웨어 공학은 go-develop

### P4 · IP 계약과 직무발명
- 선수: P2, L4
- 핵심 질문: 외주 개발·공동 개발·직원 발명에서 권리는 누구에게 가고, 그 대가는 어떻게 정하는가?
- 목표: Evaluate — 개발 위탁·라이선스 계약의 권리 귀속안을 비교하고 직무발명 절차를 점검한다.
- 만들어 볼 것: [문서형] 개발 위탁 계약의 IP 조항 비교안
- 국내 근거: 발명진흥법의 직무발명 규정 [K20], 특허법 [K16], 저작권법 [K18]
- 글로벌 비교: 일본 특허법의 직무발명 규정 [G38]. 다른 나라 제도는 세션에서 원 기관 자료로 확인한다
- 경계·연결: 하도급 기술자료 요구는 R4, IP 사업화·직무발명 보상 운영은 go-innovation-rnd

## C · 컴플라이언스 프로그램

### C1 · 컴플라이언스 위험 평가
- 선수: R1, R7
- 핵심 질문: 회사가 지킬 법이 수십 개일 때 무엇부터 막을지 어떻게 정하는가?
- 목표: Evaluate — 법 영역별 위험을 발생 가능성·영향·통제 수준으로 평가해 우선순위를 정한다.
- 만들어 볼 것: [문서형] 컴플라이언스 위험 평가표
- 국내 근거: 공정거래위원회의 공정거래 자율준수 프로그램(CP) 제도 [K21], 개별 법률의 양벌규정(법인이 「상당한 주의와 감독」을 했으면 면책되는 단서, 조문은 그 법에서 확인) [K01]
- 글로벌 비교: ISO 37301 [G30], 미국 법무부 기업 컴플라이언스 프로그램 평가 지침 [G09]
- 경계·연결: 전사 위험관리·GRC는 go-control

### C2 · 컴플라이언스 프로그램 설계
- 선수: C1, K4
- 핵심 질문: 「규정이 있다」와 「프로그램이 작동한다」는 무엇이 다른가?
- 목표: Develop — 위험 평가에 맞춘 준법 프로그램의 구성요소(책임자, 규정, 교육, 모니터링, 신고, 제재, 개선)를 설계한다.
- 만들어 볼 것: [문서형] 컴플라이언스 운영 규정 초안
- 국내 근거: 상법의 준법통제기준 [K06], 공정위 CP 제도 [K21], 양벌규정 면책의 「상당한 주의와 감독」 [K01]
- 글로벌 비교: ISO 37301 [G30], ISO 37001 [G31], 미국 법무부 평가 지침 [G09], 영국 법무부 Bribery Act 지침의 여섯 원칙 [G17]
- 경계·연결: 내부회계관리제도는 go-icfr, 전사 위험관리는 go-control

### C3 · 정책·교육·통제의 내재화
- 선수: C1
- 핵심 질문: 교육을 받고도 직원이 같은 실수를 하는 이유는 무엇이고, 무엇이 행동을 바꾸는가?
- 목표: Apply — 위험별로 정책·교육·업무 통제(승인, 점검)를 짝짓는다.
- 만들어 볼 것: [문서형] 위험별 정책·교육·통제 짝짓기표
- 국내 근거: 공정위 CP 제도의 교육·점검 요소 [K21]
- 글로벌 비교: 미국 법무부 평가 지침의 정책·교육 항목 [G09]
- 경계·연결: 통제 설계·테스트 방법은 go-control·go-icfr, 교육 운영은 go-hr

### C4 · 신고 채널과 내부 조사
- 선수: C1
- 핵심 질문: 제보가 들어온 순간부터 조사 결과 보고까지 무엇을 지켜야 회사와 제보자가 모두 보호되는가?
- 목표: Apply — 신고자 보호, 조사 범위·독립성, 증거 보존, 결과 조치를 제보 장면에 적용한다.
- 만들어 볼 것: [문서형] 내부 조사 절차서
- 국내 근거: 공익신고자 보호법 [K22], 부패방지 및 국민권익위원회의 설치와 운영에 관한 법률의 부패행위 신고 [K25], 청탁금지법의 신고 규정 [K12]
- 글로벌 비교: EU 공익신고자 보호 지침 [G32], 미국 증권거래위원회 내부고발자 프로그램 [G33]
- 경계·연결: 징계·직장 내 괴롭힘 조사는 go-hr, 조사 중 개인정보 처리는 go-security

### C5 · 당국 조사와 위기 대응
- 선수: C4, L5
- 핵심 질문: 공정위 조사관이나 수사기관이 사무실에 온 첫 한 시간에 무엇을 하고 무엇을 하지 않는가?
- 목표: Apply — 현장조사·압수수색의 범위 확인, 변호인 연락, 자료 보존, 대외 소통을 단계별로 정한다.
- 만들어 볼 것: [문서형] 현장조사 대응 매뉴얼
- 국내 근거: 공정거래법의 조사 규정 [K07], 형사소송법의 압수·수색 규정 [K23]
- 글로벌 비교: EU 경쟁법 집행 규칙의 현장조사 권한 [G34], 미국 법무부 평가 지침의 협조·자진신고 항목 [G09]
- 경계·연결: 위기 커뮤니케이션은 go-corporate-communications, 위기관리 체계·업무연속성은 go-resilience

### C6 · 제3자 위험과 실사
- 선수: R8, C1
- 핵심 질문: 거래처·에이전트·인수 대상의 위법이 왜 우리 회사의 책임이 되는가?
- 목표: Evaluate — 제3자 위험 등급에 따라 실사 깊이·계약 조항·모니터링을 정한다.
- 만들어 볼 것: [문서형] 거래처 위험 등급별 실사 질문서
- 국내 근거: 국제상거래뇌물방지법의 법인 책임 [K14], 하도급법·대리점법상 거래 관계 [K09][K10]
- 글로벌 비교: 미국 법무부 평가 지침의 제3자 관리 항목 [G09], ISO 37001 [G31], 영국 Bribery Act 지침 [G17]
- 경계·연결: 공급망 인권·환경 실사(CSDDD)는 go-esg, 수출통제·제재 심사는 go-scm, 인수 실사의 가치평가는 go-valuation

## X · 졸업 프로젝트

### X1 · 우리 회사 준법 프로그램 초안
- 선수: C2, C4, C6
- 핵심 질문: 배운 것을 내 회사(또는 내가 고른 가상 회사)의 실제 위험에 맞춘 프로그램으로 묶을 수 있는가?
- 목표: Develop — 위험 지도, 핵심 규정 2개, 업무 체크리스트, 신고·조사 절차, 이사회 보고안을 한 묶음으로 만든다.
- 만들어 볼 것: [문서형] 준법 프로그램 초안 묶음(익명화)
- 국내 근거: 상법 [K06], 공정위 CP 제도 [K21], 학습자 업종에 걸리는 개별 법령 [K01]
- 글로벌 비교: ISO 37301 [G30], 미국 법무부 평가 지침 [G09]과 대조해 빈칸을 찾는다
- 경계·연결: 내부통제·노무·개인정보 영역은 각 go-* 리포의 산출물과 연결한다

## 이 지도의 경계

같은 주제의 「그 업무를 잘하는 법」은 다른 리포에 있다. 이 리포는 「무엇이 위법이고 회사가 그것을 어떻게 막고 대응하는가」를 다룬다.

| 주제 | 리포 |
|---|---|
| 노동법·근로계약 | go-hr |
| 산업안전·중대재해 의무 이행 실무 | go-hse |
| 개인정보·정보보호(개인정보 수집·이용 동의 포함) | go-security |
| AI 규제·AI와 저작권 | go-ai |
| 내부회계관리제도 | go-icfr |
| 전사 위험관리·내부통제 총론 | go-control |
| 표시광고·광고성 정보 수신 동의 | go-marketing |
| 영업·공공조달 실무 | go-sales |
| 상품 화면·접근성 | go-product |
| 청약철회·환불·불만 처리 | go-cx |
| 구매·하도급 운영 | go-scm, go-project-management |
| 기업결합·지주회사 | go-strategy |
| 자본시장법·공시·내부자거래 | go-finance |
| 세법 | go-tax |
| 지속가능성 공시·공급망 실사 | go-esg |
| 스톡옵션·투자 계약 | go-startup-agile |
| 협상 기법 | go-leadership-negotiation |
| 전자문서·전자계약 시스템 | go-mis |
| 법인 등기·인감·문서 보존 | go-general-affairs |
| 위기 커뮤니케이션 | go-corporate-communications |
| 위기관리·업무연속성 | go-resilience |
| IP 사업화·직무발명 보상 운영 | go-innovation-rnd |
| 해외 진출 실무 | go-global-business |

학습자가 원하면 튜터가 선택 모듈로 더한다. 선택 모듈 id는 `E`로 시작하고 `learner/state.json`에만 둔다.

## 출처

조회일은 이 지도를 쓸 때 확인한 날이다. 세션에서는 다시 확인한다.

### 국내

국내 법령의 현행 시행일은 2026-11-14 국회법률정보시스템 <https://likms.assembly.go.kr/law> 에서 확인했다(국가법령정보센터가 그날 21시까지 점검 중이었다). 시행 예정 개정이 따로 있는 법령은 그렇게 적었다.

- [K01] 국가법령정보센터(법제처) — 법령·행정규칙·판례 검색 <https://www.law.go.kr> (조회 2026-11-14)
- [K02] 민법 — 시행 2026-03-17판 <https://www.law.go.kr/법령/민법> (조회 2026-11-14)
- [K03] 약관의 규제에 관한 법률 — 현행판 번호가 출처마다 달라 재확인 필요 <https://www.law.go.kr/법령/약관의규제에관한법률> (조회 2026-11-14)
- [K04] 민사소송법 — 시행 2026-10-02판 <https://www.law.go.kr/법령/민사소송법> (조회 2026-11-14)
- [K05] 중재법 — 시행 2025-10-01판 <https://www.law.go.kr/법령/중재법> (조회 2026-11-14)
- [K06] 상법 — 시행 2026-09-10판. 2025-07-22 개정으로 이사의 충실의무 대상에 주주가 더해졌고(제382조의3, 공포일 시행), 일부 조문은 2027-01-01 시행 예정. 준법통제기준·준법지원인은 제542조의13 <https://www.law.go.kr/법령/상법> (조회 2026-11-14)
- [K07] 독점규제 및 공정거래에 관한 법률 — 시행 2026-11-13판, 2027-09-09 시행 예정 개정 있음. 공정거래 자율준수 평가 근거는 제120조의2 <https://www.law.go.kr/법령/독점규제및공정거래에관한법률> (조회 2026-11-14)
- [K08] 공정거래위원회 — 소관 법령·고시·지침 <https://www.ftc.go.kr> (조회 2026-11-14)
- [K09] 하도급거래 공정화에 관한 법률 — 시행 2026-10-02판 <https://www.law.go.kr/법령/하도급거래공정화에관한법률> (조회 2026-11-14)
- [K10] 대리점거래의 공정화에 관한 법률 — 시행 2026-10-02판 <https://www.law.go.kr/법령/대리점거래의공정화에관한법률> (조회 2026-11-14)
- [K11] 전자상거래 등에서의 소비자보호에 관한 법률 — 시행 2026-07-21판 <https://www.law.go.kr/법령/전자상거래등에서의소비자보호에관한법률> (조회 2026-11-14)
- [K12] 부정청탁 및 금품등 수수의 금지에 관한 법률 — 시행 2025-01-21판. 가액 기준은 시행령에 있다 <https://www.law.go.kr/법령/부정청탁및금품등수수의금지에관한법률> (조회 2026-11-14)
- [K13] 형법 — 시행 2026-10-02판. 뇌물은 제7장 공무원의 직무에 관한 죄(제129조~제133조), 횡령·배임은 제40장(제355조~제357조) <https://www.law.go.kr/법령/형법> (조회 2026-11-14)
- [K14] 국제상거래에 있어서 외국공무원에 대한 뇌물방지법 — 현행판 번호가 출처마다 달라 재확인 필요 <https://www.law.go.kr/법령/국제상거래에있어서외국공무원에대한뇌물방지법> (조회 2026-11-14)
- [K15] 중대재해 처벌 등에 관한 법률 — 시행 2022-01-27판. 시행령에 세부 의무가 있고 시행령은 자주 바뀐다 <https://www.law.go.kr/법령/중대재해처벌등에관한법률> (조회 2026-11-14)
- [K16] 특허법 — 시행 2025-11-11판 <https://www.law.go.kr/법령/특허법> (조회 2026-11-14)
- [K17] 상표법 — 시행 2025-11-11판 <https://www.law.go.kr/법령/상표법> (조회 2026-11-14)
- [K18] 저작권법 — 시행 2026-10-29판 <https://www.law.go.kr/법령/저작권법> (조회 2026-11-14)
- [K19] 부정경쟁방지 및 영업비밀보호에 관한 법률 — 시행 2026-05-28판 <https://www.law.go.kr/법령/부정경쟁방지및영업비밀보호에관한법률> (조회 2026-11-14)
- [K20] 발명진흥법 — 직무발명 규정 <https://www.law.go.kr/법령/발명진흥법> (조회 2026-11-14)
- [K21] 공정거래 자율준수제도(CP) 운영·평가에 관한 규정 — 공정거래위원회 고시 제2025-3호 <https://www.ftc.go.kr/www/selectBbsNttView.do?bordCd=6&key=21&searchCtgry=4&nttSn=46027> (조회 2026-11-14)
- [K22] 공익신고자 보호법 — 시행 2026-10-01판 <https://www.law.go.kr/법령/공익신고자보호법> (조회 2026-11-14)
- [K23] 형사소송법 — 압수·수색 규정 <https://www.law.go.kr/법령/형사소송법> (조회 2026-11-14)
- [K24] 대법원 사법정보공개포털 — 판례 검색 <https://portal.scourt.go.kr> (조회 2026-11-14)
- [K25] 부패방지 및 국민권익위원회의 설치와 운영에 관한 법률 <https://www.law.go.kr/법령/부패방지및국민권익위원회의설치와운영에관한법률> (조회 2026-11-14)

### 글로벌

- [G01] 영국 법령 공식 열람(The National Archives) <https://www.legislation.gov.uk> (조회 2026-11-14)
- [G02] EU 법령 공식 열람 EUR-Lex <https://eur-lex.europa.eu> (조회 2026-11-14)
- [G03] United Nations Convention on Contracts for the International Sale of Goods (Vienna, 1980) — 대한민국 당사국(2005-03-01 발효) <https://uncitral.un.org/en/texts/salegoods/conventions/sale_of_goods/cisg> (조회 2026-11-14)
- [G04] Convention on the Recognition and Enforcement of Foreign Arbitral Awards (New York, 1958) — 대한민국 당사국 <https://uncitral.un.org/en/texts/arbitration/conventions/foreign_arbitral_awards> (조회 2026-11-14)
- [G05] Federal Rules of Civil Procedure(미국 연방민사소송규칙) <https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure> (조회 2026-11-14)
- [G06] Companies Act 2006(영국) <https://www.legislation.gov.uk/ukpga/2006/46/contents> (조회 2026-11-14)
- [G07] Companies Act 2006 Part 10 Chapter 2 — General duties of directors <https://www.legislation.gov.uk/ukpga/2006/46/part/10/chapter/2> (조회 2026-11-14)
- [G08] OECD Recommendation of the Council on Principles of Corporate Governance(OECD/LEGAL/0413, 2023-06-08 개정, 「G20/OECD 기업지배구조 원칙 2023」의 근거 문서) <https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0413> (조회 2026-11-14)
- [G09] U.S. Department of Justice Criminal Division, Evaluation of Corporate Compliance Programs(Updated September 2024) <https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl> (조회 2026-11-14)
- [G10] U.S. Department of Justice Antitrust Division, The Antitrust Laws <https://www.justice.gov/atr/antitrust-laws-and-you> (조회 2026-11-14)
- [G11] Treaty on the Functioning of the European Union, Articles 101·102 <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:12016E101> <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:12016E102> (조회 2026-11-14)
- [G12] 일본 공정취인위원회 — 中小受託取引適正化法(구 하청법, 개정법 2026-01-01 시행)과 優越的地位の濫用に関する独占禁止法上の考え方 <https://www.jftc.go.jp/partnership_package/toritekihou.html> <https://www.jftc.go.jp/dk/guideline/unyoukijun/yuetsutekichii.html> (조회 2026-11-14)
- [G13] Directive 2011/7/EU on combating late payment in commercial transactions <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0007> (조회 2026-11-14)
- [G14] Commission Regulation (EU) 2022/720(수직적 합의 일괄면제) <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R0720> (조회 2026-11-14)
- [G15] Directive 2011/83/EU on consumer rights <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0083> (조회 2026-11-14)
- [G16] Bribery Act 2010(영국) — section 7 Failure of commercial organisations to prevent bribery <https://www.legislation.gov.uk/ukpga/2010/23/section/7> (조회 2026-11-14)
- [G17] Ministry of Justice, Bribery Act 2010 guidance(적절한 절차의 여섯 원칙) <https://www.gov.uk/government/publications/bribery-act-2010-guidance> (조회 2026-11-14)
- [G18] U.S. Department of Justice, Foreign Corrupt Practices Act — A Resource Guide to the U.S. FCPA(Second Edition, 2020)와 Guidelines for Investigations and Enforcement of the FCPA(2025-06-09). 집행 기조가 바뀌고 있어 세션에서 최신 여부를 확인한다 <https://www.justice.gov/criminal/criminal-fraud/foreign-corrupt-practices-act> <https://www.justice.gov/criminal/criminal-fraud/fcpa-resource-guide> (조회 2026-11-14)
- [G19] OECD Convention on Combating Bribery of Foreign Public Officials in International Business Transactions(OECD/LEGAL/0293) <https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0293> (조회 2026-11-14)
- [G20] Corporate Manslaughter and Corporate Homicide Act 2007(영국) <https://www.legislation.gov.uk/ukpga/2007/19/contents> (조회 2026-11-14)
- [G21] ISO 45001:2018 Occupational health and safety management systems — 유료 표준, 개요만 공개. 조회 때 페이지 접근이 막혀 판 상태는 검색 요약으로만 확인했다 <https://www.iso.org/standard/63787.html> (조회 2026-11-14)
- [G22] Paris Convention for the Protection of Industrial Property(WIPO) <https://www.wipo.int/treaties/en/ip/paris/> (조회 2026-11-14)
- [G23] Patent Cooperation Treaty(WIPO) <https://www.wipo.int/pct/en/> (조회 2026-11-14)
- [G24] Madrid System(WIPO) <https://www.wipo.int/madrid/en/> (조회 2026-11-14)
- [G25] Defend Trade Secrets Act of 2016, Public Law 114-153 <https://www.govinfo.gov/app/details/PLAW-114publ153> (조회 2026-11-14)
- [G26] Directive (EU) 2016/943(영업비밀 보호) <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016L0943> (조회 2026-11-14)
- [G27] Berne Convention for the Protection of Literary and Artistic Works(WIPO) <https://www.wipo.int/treaties/en/ip/berne/> (조회 2026-11-14)
- [G28] Open Source Initiative, Licenses <https://opensource.org/licenses> (조회 2026-11-14)
- [G29] SPDX License List <https://spdx.org/licenses/> (조회 2026-11-14)
- [G30] ISO 37301:2021 Compliance management systems(Amd 1:2024 있음) — 유료 표준, 개요만 공개 <https://www.iso.org/standard/75080.html> (조회 2026-11-14)
- [G31] ISO 37001:2025 Anti-bribery management systems(제2판, 2016판은 폐지) — 유료 표준, 개요만 공개 <https://www.iso.org/standard/85816.html> (조회 2026-11-14)
- [G32] Directive (EU) 2019/1937 on the protection of persons who report breaches of Union law <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L1937> (조회 2026-11-14)
- [G33] U.S. Securities and Exchange Commission, Whistleblower Program <https://www.sec.gov/whistleblower> (조회 2026-11-14)
- [G34] Council Regulation (EC) No 1/2003(경쟁 규정 집행) — 현장조사 권한은 Article 20·21 <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003R0001> (조회 2026-11-14)
- [G35] Economic Crime and Corporate Transparency Act 2023(영국) — section 199 failure to prevent fraud, 2025-09-01 시행 <https://www.legislation.gov.uk/ukpga/2023/56/section/199> (조회 2026-11-14)
- [G36] Delaware Code Title 8 Chapter 1 — General Corporation Law <https://delcode.delaware.gov/title8/c001/> (조회 2026-11-14)
- [G37] 5 CFR Part 2635 Subpart B — Gifts From Outside Sources(미국 연방 공무원 윤리 기준) <https://www.ecfr.gov/current/title-5/chapter-XVI/subchapter-B/part-2635> (조회 2026-11-14)
- [G38] 일본 特許法(昭和34年法律第121号) — 職務発明 규정 <https://laws.e-gov.go.jp/law/334AC0000000121> (조회 2026-11-14)
