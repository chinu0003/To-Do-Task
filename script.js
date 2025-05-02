//Creating Tasks
function createTask(inputvalue){
    newTask=document.createElement("li");
    document.querySelector(".pendingTasks").appendChild(newTask);

    newCheckbox=document.createElement("input");
    newCheckbox.type="checkbox"
    newTask.appendChild(newCheckbox);

    newText=document.createElement("p");
    newText.innerText=inputvalue;
    newTask.appendChild(newText);

    // newEditButton=document.createElement("button");
    // newEditButton.innerHTML="Edit";
    // newEditButton.classList.add("editButton");
    // newTask.appendChild(newEditButton);

    newDeleteButton=document.createElement("button");
    newDeleteButton.classList.add("deleteButton");
    newDeleteButton.innerHTML="Delete";
    newTask.appendChild(newDeleteButton);
}

//Adding Task to the pending list
const createTaskButton = document.querySelector(".addTask button");
createTaskButton.addEventListener('click', function() {
    const inputField = document.querySelector(".addTask input");
    const inputValue = inputField.value;
    createTask(inputValue);
    inputField.value = ""; // clear the input field after adding a task
});
document.querySelector(".addTask input").addEventListener('keypress', function(event) {
    if(event.key=="Enter"){
        const inputField = document.querySelector(".addTask input");
        const inputValue = inputField.value;
        createTask(inputValue);
        inputField.value = ""; // clear the input field after adding a task
    }
});

//Editing Task in pending Tasks
// document.querySelector(".pendingTasks").addEventListener("click",function(event){
//     if(event.target.className=="editButton"){
//         listElementToEdit=event.target.parentElement.children[1];
//         console.log(listTextToEdit);
//         document.querySelector(".addTask input").value=listElementToEdit.innerText;
//     }
// });

//Deleting Tasks from pending Tasks
document.querySelector(".pendingTasks").addEventListener("click", function(event){
    if(event.target.className == "deleteButton") {
        const listItem = event.target.parentElement;
        listItem.remove();
    }
});

//Deleting Tasks from Done Tasks
document.querySelector(".doneTasks").addEventListener("click", function(event){
    if(event.target.className == "deleteButton") {
        const listItem = event.target.parentElement;
        listItem.remove();
    }
});

//Transfering to Completed Task div after checkbox is checked
document.querySelector(".pendingTasks").addEventListener("click",function(event){
    if(event.target.nodeName=="INPUT"){
        if(event.target.checked==true){
            listToTransfer=event.target.parentElement;
            document.querySelector(".doneTasks").appendChild(listToTransfer);
        }
    }
});

//Transfering to Pending Tasks if again uncheck the checkbox
document.querySelector(".doneTasks").addEventListener("click",function(event){
    if(event.target.nodeName=="INPUT"){
        if(event.target.checked==false){
            listToTransfer=event.target.parentElement;
            document.querySelector(".pendingTasks").appendChild(listToTransfer);
        }
    }
});