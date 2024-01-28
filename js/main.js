// initialize all the neccessary things
localStorage.setItem("tasks", ["test", "task"]);

const p = document.getElementById("next-par");
// event Listener 
p.addEventListener("click", function () {
    alert("Im not completly stupid");
});

const form = document.querySelector(".input-form");
const text = document.querySelector(".input-text");

// Event Listener for task submition 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let todos = localStorage.getItem("tasks");
    let newToDos = todos.split(',');
    newToDos.push(text.value);
    localStorage.setItem("tasks", newToDos);
    createNewTask(text.value);
    text.value = "";
});

const taskInput = document.getElementById("task");
const taskContent = taskInput.content;

// add Tasks to document
const createNewTask = (text) => {
    const taskList = document.querySelector(".task-list");
    let taskLi = document.createElement("li");
    taskLi.className = `task-li-element-${text}`;
    taskLi.appendChild(document.createTextNode(text));
    taskList.appendChild(taskLi);
    console.log(taskLi);
}

const deleteTask = (className) => {

}