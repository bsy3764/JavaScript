const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    // localStorage는 모든걸 string으로 저장하므로
    // JSON.stringify() : JS Object를 string으로 바꿔줌
    // JSON : JavaScriy Object Notation
    // 데이터를 전달할 때, JS가 다룰 수 있도록 object로 바꿔주는 기능
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function printToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    printToDo(currentValue);
    toDoInput.value = "";   // submit하고 다시 작성을 대기해야 하므로 빈칸으로 만들기
}

function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if (loadedtoDos !== null){
        const parsedToDos = JSON.parse(loadedtoDos);
        // console.log(parsedToDos);
        parsedToDos.forEach(function(toDo) {
            printToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();