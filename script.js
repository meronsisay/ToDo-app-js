let addButton = document.querySelector(".add_task button");
let taskContainer = document.querySelector(".tasks ul");

function add_tasks(e) {
  e.preventDefault();

  let tasks = document.createElement("li");
  let addInput = document.querySelector(".add_task input");
  let editbtn = document.createElement("button");
  editbtn.textContent = "EDIT";

  if (!addInput.value) return;
  // add a task from the input
  tasks.textContent = addInput.value;
  tasks.classList.add("task-card");
  editbtn.classList.add("edit")


  // edit task
  editbtn.addEventListener("click", () => {
    if(tasks.isContentEditable){
       tasks.contentEditable = false;
       tasks.style.backgroundColor = "";
       editbtn.textContent = "Edit";
    }
    else{
       tasks.contentEditable = true;
       tasks.focus();
       tasks.style.backgroundColor = "rgb(227, 217, 238)";
       editbtn.textContent = "Save"
    }
   
  });

  // delete task
  tasks.addEventListener("click", () => {
    if (!tasks.isContentEditable) {
      tasks.remove();
      editbtn.remove();
    }
  });

  taskContainer.append(tasks);
  taskContainer.append(editbtn);
  addInput.value = "";
}

addButton.addEventListener("click", add_tasks);
