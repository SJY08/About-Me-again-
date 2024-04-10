// pop 클래스 검색
const button = document.querySelector(".pop");
let counter = 0;

// pop 클래스가 클릭 됐을때 counter값 증가, 해당 값을 하트 옆에 출력
button.addEventListener("click",()=>{
    counter = counter+1;
    document.querySelector(".heart").innerHTML=counter;
})