function setup(){
    let place = document.getElementById("name");
    let button = document.createElement("button");
    button.innerHTML="Click to enter name";
    button.addEventListener("click", addName);
    place.appendChild(button);
}

function addName(){
    let myName = prompt("Enter name here");
    let place = document.getElementById("name");
    place.innerHTML = "<h3>"+myName+"</h3>";
}
