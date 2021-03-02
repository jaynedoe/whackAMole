//-------------- DECLARE VARIABLES ------------------//

//select all divs with square and mole classes
const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");

//select divs with time-left and score ids
const timeLeftElement = document.querySelector("#time-left");
let scoreElement = document.querySelector("#score");

//define result and hit position variables
let score = 0;
let molePosition;
let currentTime = 10;
let moleTimer = null;

// -------------- WRITE GAME FUNCTIONS ----------------//

//write a function that randomly selects a square for the mole to appear in
function randomSquare(){

    //first remove mole from all divs - clear the board
    square.forEach(element => {
        element.classList.remove("mole")
    })

    //select a random square
    let randomPosition = Math.floor(Math.random() * 9);
    randomPosition = square[randomPosition];

    //add the mole to the random square
    randomPosition.classList.add("mole");

    molePosition = randomPosition.id;

}

//add event listener to each square
square.forEach(element => {
    element.addEventListener("mouseup", () => {
        if(element.id === molePosition){
            score += 1;
            scoreElement.textContent = score;
        }
    })
});

//write a function that moves the mole at varying intervals
function moveMole(){
    moleTimer = setInterval(randomSquare, 1000);
}

//write a countdown function
function countDown(){
    currentTime --;
    timeLeftElement.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timer);
        clearInterval(moleTimer);
        alert("GAME OVER!");        
    }
}

// ------------  RUN GAME LOGIC -------------------- //

moveMole();
    
let timer = setInterval(countDown, 1000);



