

let counter = 0;

function updateCounter() {
    counter += 1;
    document.querySelector("div p").innerText = `Counter: ${counter}`;
    
}

document.getElementById("increase").addEventListener("click", updateCounter);


function resetCounter() {
    counter = 0;
    document.querySelector("div p").innerText = `Counter: ${counter}`;
}

document.getElementById("reset").addEventListener("click", resetCounter);


function decreaseCounter() {
    counter -= 1;
  document.querySelector("div p").innerText = `Counter: ${counter}`;

}

document.getElementById("decrease").addEventListener("click", decreaseCounter);