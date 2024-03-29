import './style.css'

const button = document.querySelector("#btn");
const mainContainer = document.querySelector(".container");

// keep track of wether divWrapper is appended or not
let isDivAppended = false;

// function which create a input
function createButton() {
  // creating div wrapper.
  let divWrapper = document.createElement("div");
  // creating div element for html.
  let inputDiv = document.createElement("div");
  // creating input element for html.
  let newInput = document.createElement("input");
  // setting attributes for input and place holder to display where to enter text.
  newInput.setAttribute("type", "text");
  newInput.setAttribute("placeholder", "Enter text here");
  // giving class name to input element to be able to customize in css
  newInput.classList.add("inp");

  // adding class to the wrapper/
  divWrapper.classList.add("dWrapper");
  // giving class name for input container.
  inputDiv.classList.add("inputContainer");
  // adding inputDiv to div wrapper.
  divWrapper.appendChild(inputDiv);

  // adding input to div and html.
  inputDiv.appendChild(newInput);
  //adding all elements to html

  mainContainer.appendChild(divWrapper);
  isDivAppended = true; // Update the flag
}

// function onClick to create a input with attribute text when pressed  the button.
function onClick() {
  let divWrapper = document.querySelector(".dWrapper");
  if (!isDivAppended) {
    createButton();
  } else {
    mainContainer.removeChild(divWrapper);
    isDivAppended = false; // Update the flag
  }
}

const saveTasks = [];

function keyPress(event) {
  const inputPress = document.querySelector(".inp");
  if (event.key === "Enter" && inputPress === document.activeElement) {
    event.preventDefault();
    inputPress.select();
    inputPress.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputPress.value);

    saveTasks.push(inputPress.value);

    const taskDiv = document.getElementById("tasks");
    taskDiv.innerHTML = "";

    // Create and append new task elements
    saveTasks.forEach((task) => {
      const taskItem = document.createElement("div");
      taskItem.classList.add("styleTask");
      taskItem.textContent = task;
      taskDiv.appendChild(taskItem);
    });
  }
}

button.addEventListener("click", onClick);
document.addEventListener("keydown", keyPress);







