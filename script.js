function changeContent()
{
    let con = document.getElementById("content");
    let name = document.getElementById("selectedCompany");
    let sel = document.getElementById("selector");
    let selValue = sel.options[sel.selectedIndex].value;

    if(selValue == "https://krafton.com/")
    {
        name.innerHTML = "크래프톤";
        con.innerHTML = krafton;
    }
    else
    {
        name.innerHTML = "넥슨";
        con.innerHTML = nexon;
    }
}

function imgClick() 
{
    let sel = document.getElementById("selector");
    let selValue = sel.options[sel.selectedIndex].value;

    let win = window.open();
    win.location = selValue;
}

let krafton = new String(`
<img src="Krafton_Logo.png" onclick="imgClick()">
<header class="subHeader">기업소개</header>
<article class="subArticle"> 
    크래프톤은 특정 장르에서 경쟁력 있는 제작 능력을 갖춘 독립스튜디오들로 구성되어 있습니다. 
        현재는 ‘펍지 스튜디오’, ‘블루홀스튜디오’, ‘라이징윙스', ‘스트라이킹 디스턴스 스튜디오’, ‘드림모션’과 
        여러 제작팀이 전 세계 게이머들에게 최고의 게임 경험을 제공하기 위해 개발에 임하고 있습니다. 
        배틀로얄 장르의 ‘PUBG: 배틀그라운드(PUBG: BATTLEGROUNDS)’와 '배틀그라운드: NEW STATE(PUBG: NEW STATE)', 
        MMORPG ‘테라(TERA)’, ‘엘리온(ELYON)’과 캐주얼 게임을 PC, 모바일, 콘솔 등 다양한 플랫폼에서 즐길 수 있게 제작하고 있습니다. 
        게임 개발뿐만 아니라 딥러닝과 엔터테인먼트 등 새로운 분야의 사업을 발굴하며 기술 기업으로서 강점도 발휘하고 있습니다.
        <hr>
</article> 

<header class="subHeader">근무환경</header>
<article class="subArticle"> 
        <table class="subTable">
            <tr><th>연금, 보험</th> <td>국민연금, 고용보험, 산재보험, 건강보험</td></tr>
            <tr><th>휴무,휴가,회사</th> <td>주5일근무, 연차, 정기휴가, 경조휴가, 반차, Refresh휴가, 산전 후 휴가, 육아휴직, 워크샵/MT</td></tr>
            <tr><th>보상,수당,지원</th> <td>각종 경조금 지원, 인센티브제, 직원대출제도, 본인/가족 의료비 지원, 야간교통비 지급, 기념선물 지급, 체력단련비 지원, 문화생활비 지급</td></tr>
            <tr><th>교육, 연수</th> <td>신입사원교육(OJT), 직무능력 향상교육</td></tr>
            <tr><th>사내시설, 장애인 지원</th> <td>사내식당, 휴게실, 카페테리아, 탁아시설, 주차장</td></tr>
            <tr><th>생활편의, 여가행사</th> <td>사내 동호회 운영, 통근버스 운행, 건강검진, 중식제공, 석식제공, 휴양시설 지원</td></tr>
        </table>
        <hr>
</article> 

<header class="subHeader">채용 공고 (언리얼 엔진 관련)</header>
<article class="subArticle"> 
    <details>
        <summary>[BATTLEGROUNDS] UE4 Contents Programmer (경력 무관)</summary>
            <p>진행 업무</p>
            <li>PUBG 게임 클라이언트 개발 (Unreal Engine 4, PC/XBOX/PS4)</li>
            <li>PUBG 게임 서버 개발 (Unreal Engine 4 Dedicated Server)</li>
            <li>배틀 로얄/게임 모드 개발, 개선</li>
            <li>성능 최적화 및 버그 수정</li>
            <li>핵 대응을 위한 시스템 개발, 코드 개선</li>
            <li>서비스 모니터링을 위한 기능 및 툴 개발</li>
            <li>서드 파티 기능의 연동 및 관리</li>

            <p>필요 역량</p>
            <li>Unreal Engine 경험자 (특히 UE4 경험자)</li>
            <li>상용 게임 프로젝트 개발 경험</li>
            <li>콘솔 프로젝트 경험자</li>
            <li>라이브 서비스 경험자</li>
            <li>전산학과, 컴퓨터공학과 전공/부전공 우대</li>
            <li>열정적인 PUBG 플레이어</li>
            <li>영어 커뮤니케이션 능력</li>

            <p>전형 과정</p>
            <li>서류전형 > 전화 인터뷰 (Phone Interview) > 직무 테스트 (Technical Fit Test) >  
                실무면접 (Technical Fit Interview) > 최종면접 (Culture Fit Interview) > 합격 및 입사</li>
    </details>
        <hr>

        <header class="subHeader">실무자 기업 평가</header>
            <article class="subArticle"> 
                "업무 관련된 지원이 많이 되고, 팀 내 분위기가 수평적이고 유연한 편" <br><br>
                "좋은 분위기에서 일할 수 있는 곳. 사람들이 좋고 보수적인 문화가 없어 열심히 일한다면 마음편하게 일할 수 있을 것입니다."<br><br>
                "원히트원더 어쩌다 성공했다보니 개발력이 많이 부족함. 펍지는 모르겠지만 크래프톤에는 블루홀출신 고인물들이 너무 많음"<br><br>
                "내가 할일만 잘하면 다른 외부 스트레스 없이 다닐 수 있었음"<br><br>
                "전체적으로 직원들이 한숨보다 즐겁게 근무하는 곳"
    </article> 
</article> 
</article>
`);

let nexon = new String(`
<img src="Nexon_Logo.png" onclick="imgClick()">
<header class="subHeader">기업소개</header>
<article class="subArticle"> 
    1994년 설립, 올해로 창립 20주년을 맞이한 (주)넥슨은 연 매출 2조 8천억원,(2013년 말 넥슨 일본법인 연결매출 기준) 사원수 3,500명 규모의 글로벌 게임회사 입니다.
    2002년 일본, 2005년 미국, 2007년 유럽에 현지법인을 설립하며 일찌감치 해외 시장 개척에 앞장서온 넥슨은 현재 일본,중국,대만 등 
    동아시아 3국을 비롯해 북미지역과 유럽, 남미 등 전 세계 110여개국에 진출해 150여 개의 게임을 서비스 중이며, 현재 14억 명의 
    사용자(계정)을 확보하고 있습니다. 경기도 성남시 분당구 판교로에 위치하고 있으며, 온라인, 모바일, 소셜 게임의 개발 및 서비스 
    사업을 하고 있습니다.
        <hr>
</article> 

<header class="subHeader">근무환경</header>
<article class="subArticle"> 
        <table class="subTable" id="nexonTable">
            <tr><th>쾌적한 근로환경</th> <td>의자계의 샤넬, ‘허먼밀러 에어론’ 기본 탑재</td></tr>
            <tr><th>선택적 근로시간제도</th> <td>월 근로시간만 채우면 자율적으로 근로시간 조정하여 근무</td></tr>
            <tr><th>포괄임금제 폐지</th> <td>PC-OFF  제도로 밸런스 있는 삶을 적극적으로 지원</td></tr>
            <tr><th>복지포인트</th> <td>어디든 사용가능한 연 250만원의 현금성 복지 포인트 제공</td></tr>
            <tr><th>사내대출 </th> <td>자원 목돈이 필요할 때, 5천만원까지 생활 안정을 위한 대출 지원</td></tr>
            <tr><th>넥다 포인트</th> <td>연 60만원 커피와 빵, 저녁식사 등 자유롭게 사용</td></tr>
            <tr><th>넥슨 캐시</th> <td>연 36만원 넥슨 게임도 즐길 수 있는 넥슨캐시도 지급</td></tr>
            <tr><th>생일선물</th> <td>5만원 상당의 상품권이나 마일리지로 자유롭게 선택하여 수령</td></tr>
            <tr><th>명절선물</th> <td>가족과 더 풍성한 명절을 위해 연 44만원 지급</td></tr>
            <tr><th>사내식당</th> <td>다양한 종류의 중식 무료 제공 (석식 이용 가능)</td></tr>
            <tr><th>넥슨다방(사내카페)</th> <td>사내카페, 베이커리 등 다양한 음료와 간식 마련</td></tr>
            <tr><th>도토리소풍(사내 어린이집)</th> <td>만 1세~5세까지 최고의 보육과 창의교육 서비스 제공</td></tr>
            <tr><th>사내피트니스</th> <td>최고급 퀄리티의 피트니스 장비와 전문트레이너, GX수강까지</td></tr>
            <tr><th>골프시설</th> <td>타석 연습실부터 스크린골프 시설 누구나 이용 가능</td></tr>
            <tr><th>보건실</th> <td>전문 간호사가 상주하는 Health Point에서 건강 UP</td></tr>
            <tr><th>건강검진 </th> <td>종합건강검진 제공은 물론 건강검진 휴가까지</td></tr>
            <tr><th>리프레시 휴가</th> <td>근속 3년 단위로 10일~20일 휴가와 지원금까지</td></tr>
            <tr><th>내마음읽기</th> <td>내마음 건강을 위한 전문적인 진단/케어 프로그램</td></tr>
            <tr><th>콘도지원</th> <td>가족과 함께 하는 품격있는 시간을 위해 콘도와 리조트 지원</td></tr>
            <tr><th>Happy Mom 제도</th> <td>임산부를 위한 안전하고 건강한 회사 생활과 출산, 복귀 지원</td></tr>
            <tr><th>출산전후</th> <td>휴가 90일까지의 휴가 중 100% 급여를 지급(다태아의 경우 120일)</td></tr>
            <tr><th>육아휴직</th> <td>법정한도 1년에 추가로 1년을 더하여 최대 2년까지 가능</td></tr>
            <tr><th>상조 지원</th> <td>본인은 물론 가족의 중대조사 발생시 장례지도사 및 인력/물품 지원</td></tr>
            <tr><th>가족 경조사 지원</th> <td>경조사를 축하하고 위로하기 위해 휴가, 경조화환, 물품, 경조금을 지급</td></tr>
            <tr><th>독감예방접종</th> <td>매년 구성원들의 건강을 위해 독감 예방접종을 무료로 지원</td></tr>
            <tr><th>동호회</th> <td>열정과 즐거움 지원을 위해 동호회 설립을 돕고 매월 활동비를 지급</td></tr>
            <tr><th>스터디</th> <td>사내에서 자유롭게 스터디 구성하면 매월 교재나 간식비 지원</td></tr>
            <tr><th>사내외교육</th> <td>성장하고 싶은 넥슨인을 위한 다양한 교육을 적극 지원</td></tr>
            <tr><th>추천채용</th> <td>외부의 좋은 인재 추천시 직원에게 최대 200만원까지 보상금 지급</td></tr>
        </table>
        <hr>
</article> 

<header class="subHeader">채용 공고 (언리얼 엔진 관련)</header>
<article class="subArticle"> 
    <details>
        <summary>[프로젝트 HP] 게임프로그래머(클라이언트)</summary>
            <p>진행 업무</p>
            <li>신규 프로젝트 HP의 클라이언트 개발</li>

            <p>지원 자격</p>
            <li>컴퓨터 공학에 대한 전반적인 지식 (자료구조/알고리즘)</li>
            <li>C++ 프로그래밍 능력을 갖추신 분</li>
            <li>원만한 커뮤니케이션 능력을 갖추신 분</li>
            <li>제한된 시간내에 요구사항의 의도를 파악하고 구현하실 수 있는 분</li>

            <p>우대 사항</p>
            <li>액션 게임을 좋아하고 즐기시는 분</li>
            <li>게임 플레이 로직 구현에 강한 흥미를 가지신 분</li>
            <li>그래픽스 프로그래밍 경험</li>
            <li>언리얼 엔진 4 경험</li>
    </details>
    <br>
    <details>
        <summary>[신규개발본부] 부스팅실 비주얼테크조직 클라이언트 프로그래머 채용</summary>
            <p>주요업무</p>
            <li>Unreal Engine 5 게임 프로토타이핑 개발 전반</li>
            <li>(인게임 컨텐츠 및 시스템 구현을 메인으로 하고 렌더링-엔진 개발 일부)</li>

            <p>지원 자격</p>
            <li>새로운 기술 학습 및 R&D에 대한 의지와 욕구가 강하신 분</li>
            <li>C++ 언어 사용에 능숙하신 분</li>
            <li>기획, 아트 분야에 대한 관심과 이해가 높고 원활한 소통이 가능하신 분</li>
            <li>자발적이고 능동적으로 의사 결정이 가능하신 분</li>

            <p>우대 사항</p>
            <li>PC 및 최신 콘솔 하이엔드 그래픽 게임을 좋아하고 즐기시는 분</li>
            <li>액션 MORPG 개발 경험이 있으신 분</li>
            <li>Unreal Engine 4 이상 사용 경험이 있으신 분</li>
            <li>컴퓨터 그래픽스에 대한 기반 지식 및 프로그래밍 능력을 갖추신 분</li>
    </details>
    <br>
    <details>
        <summary>[프로젝트 P8] 클라이언트 프로그래머</summary>
            <p>주요업무</p>
            <li>UnrealEngine5 기반 3인칭 액션게임의 요구 컨텐츠 구현</li>
            <li>아이템, 인벤토리 관련 컨텐츠,아웃게임 컨텐츠 기능 구현</li>

            <p>지원 자격</p>
            <li>UnrealEngine4 또는 UnrealEngine5 기본적인 이해도를 가지고 계신 분</li>
            <li>UnrealEngine4 또는 UnrealEngine5 컨텐츠 구현상에서 UI 기능제작이 가능 하신 분</li>
            <li>기본적인 C++ 사용이 가능 하신 분</li>

            <p>우대 사항</p>
            <li>UnrealEngine4 또는 UnrealEngine5 기반의 슈팅,액션 게임의 컨텐츠 구현 경험</li>
            <li>UnrealEngine4 또는 UnrealEngine5 UI 구현 경험</li>
            <li>원활한 커뮤니케이션 능력</li>
    </details>
        <hr>

        <header class="subHeader">실무자 기업 평가</header>
            <article class="subArticle"> 
            "복지가 괜찮은 편이며 큰 욕심 없이 무난하게 다니기 좋음." <br><br>
            "공무원처럼 다닐 수 있는 나름 젊은(?) 게임회사"<br><br>
            "중소게임사에서 대기업이 된, 변화 과정에의 진통을 잘 이겨낸 철밥통st의 IT 기업"<br><br>
            "팀바팀이겠지만 개발자로서 성장하기 좋은 환경은 아니라고 생각함."<br><br>
            "넉넉한 자금력으로 직원들의 복지 혜택을 넓히는 미래지향적인 회사"
    </article> 
</article> 
</article>
`)