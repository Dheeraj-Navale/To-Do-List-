const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-cunt");

// Add a new task
function addTask() {

    if (inputBox.value.trim() === "") {
        alert("You must write something!");
        return;
    }

    // Create task item
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Create delete button (×)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Clear input box
    inputBox.value = "";

    // Save tasks
    saveData();
}

// Handle task click and delete click
listContainer.addEventListener("click", function (e) {

    // Mark task as completed
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    // Delete task
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

// Save tasks to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load tasks when page opens
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Display saved tasks
showTask();