const C ="<ul>\n" +
    "                <li>\n" +
    "                    <h3>C언어</h3>\n" +
    "                    <img src=\"img/C.png\" width=\"700px\">\n" +
    "                </li>\n" +
    "                <li><p class=\"p\">\n" +
    "                    웹프로그래밍 수업으로 배운 teble을 활용해 C언어 수업 내용을 정리해보고 싶었습니다.<br>\n" +
    "                    입학한지 1주쯤 무렵, css도 js도 아는거 없이 순수 html로 만들려했었기에,<br>\n" +
    "                    디자인이 굉장히 밋밋합니다.<br>\n" +
    "                    후에 수업으로 내용 정리한게 더 추가되어 새로 만들고 있습니다.<br>\n" +
    "                    아마 다 만들면 다른학교 친구 중 코딩을 입문하는 친구나,<br>\n" +
    "                    내년에 저희 학교에 입학할 신입생들한테 선물로 보내주지 않을까 싶습니다.\n" +
    "                </p></li>\n" +
    "            </ul>";

const timetable ="<ul>\n" +
    "                <li>\n" +
    "                    <h3>10기 시간표</h3>\n" +
    "                    <img src=\"img/timetable.png\" width=\"700px\">\n" +
    "                </li>\n" +
    "                <li><p class=\"p\">\n" +
    "                    C언어 내용 정리한 것을 친구들에게 보여주고 신나서 테이블을 더 써보고 싶었습니다.<br>\n" +
    "                    당시에 생각난게 시간표였고 이왕이면 선생님 역할을 만들고, 시간표를 조정할 수 있는<br>\n" +
    "                    컴시간 알리미처럼 바뀌는 시간표도 표시할 수 있었으면 좋았겠지만,<br>\n" +
    "                    아쉽게도 처음 HTML을 시작한 저로써는 불가능한 얘기였습니다.<br>\n" +
    "                    원하는 기능까지는 못 넣더라도 셀렉터를 넣어 1반부터 4반까지 만들고 싶었습니다.<br>\n" +
    "                    하지만 구글링마저 잘 못했던 저는 친구의 구원으로 완성하게 돼었습니다.<br>\n" +
    "                    당시의 저는 css도 배운적이 없었지만,<br>\n" +
    "                    멘토링 때 사용한 코드를 뜯어 아마추어식 공부를 했습니다.<br>\n" +
    "                    10기 시간표 코드는 github에 올라와있습니다.\n" +
    "                </p></li>\n" +
    "            </ul>";

const popcat = "<ul>\n" +
    "                <li>\n" +
    "                    <h3>POPCAT</h3>\n" +
    "                    <img src=\"img/pop.png\" width=\"700px\">\n" +
    "                </li>\n" +
    "                <li><p class=\"p\">\n" +
    "                    안드로이드 멘토링 당시 만들었던 팝캣이 생각나 심심할 때 만들었습니다.<br>\n" +
    "                    디자인 자체도 단순하고, 기능도 단순하여 얼마 안걸려 만들었던 걸로 기억합니다.<br>\n" +
    "                    css를 이용해 클릭을 하면 pop하는 고양이가 나오게 만들고, js로 카운트와 리셋을 만들었습니다.<br>\n" +
    "                    '10기 시간표' 제작을 통해 js로 html 내용을 갈아끼울 수 있음을 알게 되어<br>\n" +
    "                    제 예상보다 훨씬 더 쉽게 느껴졌습니다.<br>\n" +
    "                    처음에 귀찮아서 소리는 안 넣었었는데, 저에게 html 기초를 가르쳐줬던 친구가<br>\n" +
    "                    소리도 넣어달라 하여 나중에 추가하여 완성시켰습니다.<br>\n" +
    "                    popcat 코드는 github에 올라와 있습니다.\n" +
    "                </p></li>\n" +
    "            </ul>";

// 셀렉터 넣을 요소 검색
const selector = document.getElementById("selector");

// 셀렉터가 change한 걸 감지 했을때 리로드
selector.addEventListener("change", reload);

reload();

function reload() {
    // 셀렉터의 벨류값이 옵션과 일치 할때 각각 C, timetable, popcat변수 내용을 벨류아이디 안에 넣음
    switch (selector.value){
        case "C언어" :
            document.getElementById("value").innerHTML= C;
            break;
        case "10기 시간표":
            document.getElementById("value").innerHTML= timetable;
            break;
        case "POPCAT" :
            document.getElementById("value").innerHTML = popcat;
            break;
    }
}