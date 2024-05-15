const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector(".add-task");


function addTask(){
    if(inputBox.value === ''){
        alert('You must first write a task. How busy are you to have a do nothing event as a part of to do 🤦‍♂️');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // span has to be declared in here else every time we add another task the x icon on the previous one vanishes
        let span = document.createElement("span");
        span.innerHTML = "remove";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}


// add task on button click
addButton.addEventListener('click', () => {
    addTask();
})
 
 
// add task on enter key press on keyboard
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter"){
        addTask();
    }
})


listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);

// this function makes sure our data isn't lost on hitting refresh and is stored in the browser but we also need to make sure that it stays the same when we open the browser again as well
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showAddedTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showAddedTasks();