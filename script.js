const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskDatetime = document.getElementById("task-datetime");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const taskText = taskInput.value.trim();
    const taskDateVal = taskDatetime.value;
    
    if (!taskText || !taskDateVal) return;

    createTaskElement(taskText, taskDateVal);
    
    taskInput.value = "";
    taskDatetime.value = "";
});

function createTaskElement(text, datetime) {
    const li = document.createElement("li");
    li.className = "todo-item";

    const formattedDate = new Date(datetime).toLocaleString();

    li.innerHTML = `
        <div class="task-details">
            <span class="task-text">${text}</span>
            <span class="task-date">📅 ${formattedDate}</span>
        </div>
        <div class="todo-actions">
            <button class="complete-btn">Complete</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    const completeBtn = li.querySelector(".complete-btn");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");
    const taskTextSpan = li.querySelector(".task-text");
    const taskDateSpan = li.querySelector(".task-date");

    completeBtn.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    editBtn.addEventListener("click", function() {
        if (li.classList.contains("completed")) return;

        const currentText = taskTextSpan.innerText;
        const newText = prompt("Edit your task:", currentText);
        
        if (newText !== null && newText.trim() !== "") {
            taskTextSpan.innerText = newText.trim();
        }
    });

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    todoList.appendChild(li);
}