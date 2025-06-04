function setup(){
    let place = document.getElementById("name");
    let button = document.createElement("button");
    button.innerHTML="Click to enter name";
    button.addEventListener("click", addName);
    place.appendChild(button);
}

function addName(){
    let nameBox = document.getElementById("get-name");
    let myName = nameBox.value;
    let place = document.getElementById("name");
    place.innerHTML = "<h3>"+myName+"</h3>";
    let play = document.createElement("button");
    play.innerHTML = "Play RPS";
    play.addEventListener("click", howManyGames);
    place.appendChild(play);
    place.style.borderBottom = "none";
}

function howManyGames(){
    let title = document.getElementById("title");
    title.innerHTML = "RPS";
    let subtitle = document.getElementById("subtitle");
    subtitle.innerHTML = "How many rounds?";
    let rounds = document.createElement("input");
    rounds.id = "rounds";
    rounds.value = "Enter an odd number here.";
    let nameBox = document.getElementById("name");
    nameBox.appendChild(rounds);
}
