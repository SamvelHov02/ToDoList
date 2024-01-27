// initialize all the neccessary things
localStorage.setItem("tasks", ["test", "task"]);

const p = document.getElementById("next-par");
// event Listener 
p.addEventListener("click", function () {
    alert("Im not completly stupid");
});

const form = document.querySelector(".input-form");
const text = document.querySelector(".input-text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let todos = localStorage.getItem("tasks");
    let newToDos = todos.split(',');
    newToDos.push(text.value);
    localStorage.setItem("tasks", newToDos);
    text.value = "";
});

const taskInput = document.getElementById("task");
const taskContent = taskInput.content;