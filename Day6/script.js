function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        return;
    }
    
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    
    const taskLabel = document.createElement("label");
    taskLabel.innerText = taskText;
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            taskLabel.style.textDecoration = "line-through";
        } else {
            taskLabel.style.textDecoration = "none";
        }
    });
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskLabel);
    taskList.appendChild(taskItem);
    
    taskInput.value = "";
}
