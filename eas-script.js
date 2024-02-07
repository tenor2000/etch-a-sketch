// Global Variables
var gridSize = 32;
var tileColor = 'black';

const container = document.getElementById("container");
const sketchbox = document.createElement("div");
sketchbox.classList = "sketchbox";


const controls = document.createElement("div");
controls.style.padding = "16px"
const sizeBtn = document.createElement("button")
sizeBtn.textContent = "Change Size";
sizeBtn.onclick = function () {newGridSize()}
const eraseBtn = document.createElement("button")
eraseBtn.textContent = "Erase";
eraseBtn.onclick = function () {clearGrid()}

controls.appendChild(sizeBtn);
controls.appendChild(eraseBtn);

// Color Palette
const palette = document.createElement("div")

const blackBtn = document.createElement("button")
const redBtn = document.createElement("button")
const blueBtn = document.createElement("button")
const greenBtn = document.createElement("button")
const yellowBtn = document.createElement("button")

blackBtn.classList = "button-black";
redBtn.classList = "button-red";
blueBtn.classList = "button-blue";
greenBtn.classList = "button-green";
yellowBtn.classList = "button-yellow";

blackBtn.onclick = function () {tileColor = 'black';}
redBtn.onclick = function () {tileColor = 'red';}
blueBtn.onclick = function () {tileColor = 'red';}
greenBtn.onclick = function () {tileColor = 'green';}
yellowBtn.onclick = function () {tileColor = 'yellow';}

palette.appendChild(blackBtn)
palette.appendChild(redBtn)
palette.appendChild(blueBtn)
palette.appendChild(greenBtn)
palette.appendChild(yellowBtn)

container.appendChild(controls);
container.appendChild(sketchbox);
container.appendChild(palette);

// Functions

function createGrid(size) {
    for (i=1; i <= (size**2); i++) {
        var tileSquare = document.createElement("div");
        tileSquare.classList = "sketchbox-tile";
        tileSquare.style.setProperty('--sketchbook-dimensions', size)
        sketchbox.appendChild(tileSquare);
        tileSquare.addEventListener("mouseover", (event) => drawColor(event.target))
    }
}

function newGridSize() {
    // Prompt the user for a new grid size
    var newSize = prompt("Enter a new grid size:", gridSize);

    // Check if the user entered a valid number
    if (newSize !== null && !isNaN(newSize) && newSize > 0 && newSize <= 100) {
    // Update gridSize and recreate the grid
    gridSize = parseInt(newSize, 10);
    // Remove existing grid content
    sketchbox.innerHTML = '';
    createGrid(gridSize);
    } else {
    alert("Please enter a valid number greater than 0 and less than 100.");
    }
}

function clearGrid() {
    // erase and display new grid
    sketchbox.innerHTML = '';
    createGrid(gridSize);
}

function drawColor(box) {
    box.style.backgroundColor = tileColor;
}


// etch-a-sketch production
createGrid(gridSize)