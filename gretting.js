const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
// querySelector : 원하는 것을 가져올 수 있음, 클래스, 태그, 아이디 등
// getElementBy~~~

const USER_LS = "currentUser",
    SHOWING_CN = "showing";     // css의 .showing을 적용하려고

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // submit으로 엔터 누르면 새로고침을 방지하기
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);   // class에 showing을 추가하기
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    // 브라우저의 localStorage, 개발자 도구에서 application에서 확인 가능
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // currentUser가 없다면
        askForName();
    } else {    // currentUser가 있다면
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();