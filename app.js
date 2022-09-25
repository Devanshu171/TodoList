const container = document.getElementById("container");
const addButton = document.querySelector("button");
const taskInputElement = document.querySelector("input");
const taskCountElement = document.querySelector("span");

function getNewList(task) {
  let list = document.createElement("li");
  list.className = "list";
  let taskp = document.createElement("p");
  let removeBtn = document.createElement("button");
  let moveUpBtn = document.createElement("button");
  let moveDownBtn = document.createElement("button");
  removeBtn.addEventListener("click", function () {
    list.remove();
    taskCountElement.innerHTML = container.childElementCount;
  });
  moveUpBtn.addEventListener("click", function () {
    if (list.previousElementSibling) {
      list.parentNode.insertBefore(list, list.previousElementSibling);
    }
  });
  moveDownBtn.addEventListener("click", function () {
    if (list.nextElementSibling) {
      list.parentNode.insertBefore(list.nextElementSibling, list);
    }
  });
  removeBtn.className = "remove";
  moveUpBtn.className = "moveUp";
  moveDownBtn.className = "moveDown";

  removeBtn.innerHTML = "&#10006";
  moveUpBtn.innerHTML = "&#8593;";
  moveDownBtn.innerHTML = "&darr;";
  taskp.textContent = task;
  list.appendChild(removeBtn);
  list.appendChild(moveUpBtn);
  list.appendChild(moveDownBtn);
  list.appendChild(taskp);
  return list;
}

function addTask() {
  const task = taskInputElement.value;
  if (task.length === 0) return;
  const list = getNewList(task);
  container.appendChild(list);
  taskCountElement.innerHTML = container.childElementCount;
  taskInputElement.value = "";
}
addButton.addEventListener("click", addTask);

// const removeINput
