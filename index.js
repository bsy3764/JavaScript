// alert("I'm Working. I'm JS!!");    // 경고창 띄우기
// console.log("I'm Working. I'm JS!!");    // 브라우저 Console 창에 기록

/*
// 변수 초기 선언시에만 let, var 사용(let 사용을 추천)
// 상수 선언시에는 const 사용
const a = 221;
let b = a - 5;
console.log(b);
*/

/*
// 자료형
// String & boolean & number & float
const st = "hello";
console.log(st);
const bo = true;
const nu = 123;
const fl = 3.14;
*/

/*
// Array : 파이썬의 리스트 같음
// Array 안에 object가 올 수 있음
// camel case : 소문자로 시작해 공백대신 대문자 사용. 예시 daysOfWeek
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", 5, true];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);   // 0부터 시작함
*/

/*
// object : 파이썬의 사전 같음
// object 안에 array가 올 수 있음
// Array와 다른 것 : 각 value에 이름을 줄 수 있음
// const(상수)지만 안의 value는 변경 가능
const info = {name: "nico", age: 55, gender: "Male"};
console.log(info);
console.log(info.gender);
info.age = 33;
console.log(info.age);
*/

/*
// Function
// console.log, alert는 내장함수
// console.log(console);   // console이란 object에 log란 function을 이용
function sayHello(name, age){
    console.log('Hello!', name, "! you are", age, "years old");
}
sayHello("Nico", 15);
*/

/*
// 백틱 : 키보드 탭 위, 1의 왼쪽, '~'(물결표) 쯤에 있는 '와 비슷하게 생긴 문자
// 멀티라인 문자열에 백틱이 사용됨
function sayHello(name, age){
    return `Hello! ${name}! you are ${age} years old`;
}
const nicolas = sayHello("Nico", 15);
console.log(nicolas);

const calculator = {
    plus: function(a, b){
        return a + b;
    }
}
const pl = calculator.plus(5, 5);
console.log(pl);
*/

/*
// HTML태그의 id를 선택하려면 document object의 getElementById 사용
// const title = document.getElementById("title");
const title = document.querySelector("#title"); // CSS같이 id면 #title, class면 .title
title.innerHTML = "hi, from JS";
title.style.color = "red";
document.title = "study JS!!";
// DOM : Document Object Module
// JS는 HTML의 모든 요소를 가져와 객체(object)로 바꿈
// 객체들의 함수들은 DOM형태로 변경 가능
// HTML에서 JS로 선택한 것은 객체가 됨
*/

/*
// event handler
// JS는 이벤트에 반응하기 위해 만듬
function handleResize(event){
    console.log("event");
}
window.addEventListener("resize", handleResize);    // 브라우저 사이즈 변경 이벤트가 발생하면
// handleResize 와 handleResize()는 다름!!!!!
// handleResize는 필요한 시점에 호출
// handleResize() 지금 당장 호출
const title = document.querySelector("#title");
function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);   // HTML에서 id가 title인 것을 클릭하면
*/


// 사용자에게 물어보기
const age = prompt("How old are you?");
console.log(age)
// if ~ else
if(age > 18){
    console.log("adult");
} else if (8 < age && age <= 18) {
    console.log("child");
} else {
    console.log("baby");
}