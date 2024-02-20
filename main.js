import './style.css'

const button = document.querySelector("#btn")
const divContainer = document.querySelector('.container');



function onClick() {
    
    let newInput = document.createElement("input");
    newInput.setAttribute('type','text');
    newInput.setAttribute('placeholder','Enter text here');
    newInput.classList.add('inp');
    divContainer.appendChild(newInput);

   

}

button.addEventListener("click", onClick);
