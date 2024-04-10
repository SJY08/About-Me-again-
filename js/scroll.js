// 스크롤 이펙트를 넣을 요소 검색
let box1 = document.querySelector(".scroll1");
let box2 = document.querySelector("#intro");
let box3 = document.querySelector(".scroll2");
let box4 = document.querySelector(".sns");

// 스크롤을 감지했을 때
window.addEventListener("scroll",function (){
    let value = window.scrollY;
    console.log("scrollY",value);
    //각각 벨류값(=스크롤y값)이 특정 값에 도달했을때, 각 요소에 이펙트 적용
    if(value<600){
        box1.style.animation = "about_slide 500ms ease-out forwards";
    }
    else{
        box1.style.animation = "about_backslide 500ms ease-out";
    };

    if(value>400){
        box2.style.animation = "about_slide 500ms ease-out forwards";
    }
    else{
        box2.style.animation = "about_backslide 500ms ease-out";
    };

    if(value>900){
        box3.style.animation = "about_slide 500ms ease-out forwards";
    }
    else{
        box3.style.animation = "about_backslide 500ms ease-out";
    };

    if(value>1400){
        box4.style.animation = "about_slide 500ms ease-out forwards";
    }
    else{
        box4.style.animation = "about_backslide 500ms ease-out";
    };
})