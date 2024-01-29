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
    if (text.value != ""){
        let todos = localStorage.getItem("tasks");
        let newToDos = todos.split(',');
        newToDos.push(text.value);
        localStorage.setItem("tasks", newToDos);
        createNewTask(text.value);
        text.value = "";
    }else{
        console.error("Error: Nothing was Submitted");
    }
});

const taskInput = document.getElementById("task");
const taskContent = taskInput.content;

let counter  = 0;

// add Tasks to document
const createNewTask = (text) => {
    // create element and attributes
    const taskList = document.querySelector(".task-list");
    let taskLi = document.createElement("li");
    taskLi.className = `task-li-element-${text}`;
    taskLi.appendChild(document.createTextNode(text));
    taskList.appendChild(taskLi);
    
    // set an event Listener for when tasks are completed
    taskLi.addEventListener("click", () => {
        taskLi.style.textDecorationLine= "line-through";
    });
}