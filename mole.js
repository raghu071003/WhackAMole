let currentMoleTile;
let currPlantTile;
let score =0;
let gameover = false;
window.onload = function () {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
        tile.addEventListener('click',selectTile);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant,2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if(gameover){
        return;
    }
    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return; 
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameover){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML="";
    }
    let num = getRandomTile();
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";
    if(currentMoleTile && currentMoleTile.id == num){
        return;
    }
    
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameover){
        return;
    }
    if(this == currentMoleTile){
        score+=10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == currPlantTile){
        document.getElementById("gameover").innerText = "GAME OVER! Your Score is "+score.toString();
        gameover=true;
    }
}