// initialize scores
let playerScore = 0;
let computerScore = 0;
let gameResults = [];

// get buttons
let button = document.querySelectorAll('button');

// randomized variable for rotation
//const randomInt = (Math.floor(Math.random() * 20 - 10)) + "deg";
// const root = document.querySelector(":root");
// root.style.setProperty('--random-int', randomInt + "deg")

//const hoverButton = document.querySelector("button:hover");
//hoverButton.style.setProperty(transform, randomInt);

// player buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// computer "buttons"
const rockComp = document.querySelector('.rock-comp');
const paperComp = document.querySelector('.paperComp');
const scissorsComp = document.querySelector('scissors-comp');


//outcome area
const playerChoiceIcon = document.getElementById('player-choice');
const computerChoiceIcon = document.getElementById('computer-choice');
// const img = document.createElement("img");

// round results
const playerRoundResult = document.querySelector('.player-round-result');
const compRoundResult = document.querySelector('comp-round-result')

// set computer choice
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let compNumber = Math.floor(Math.random() * 3);
    return choices[compNumber];
}


// play round
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    switch (playerChoice + computerChoice) {
        case 'rockscissors':
            playerChoiceIcon.innerHTML = `<img src="rock_1faa8.png" alt="rock">`;
            computerChoiceIcon.innerHTML = `<img src="scissors_2702-fe0f.png" alt="scissors">`;
            playerWin(playerChoice, computerChoice);
            break;
        case 'paperrock':
            playerChoiceIcon.innerHTML = `<img src="page-with-curl_1f4c3.png" alt="paper">`;
            computerChoiceIcon.innerHTML = `<img src="rock_1faa8.png" alt="rock">`;
            playerWin(playerChoice, computerChoice);
            break;
        case 'scissorspaper':
            playerChoiceIcon.innerHTML = `<img src="scissors_2702-fe0f.png" alt="scissors">`;
            computerChoiceIcon.innerHTML = `<img src="page-with-curl_1f4c3.png" alt="paper">`;
            playerWin(playerChoice, computerChoice);
            break;
        case 'rockpaper':
            playerChoiceIcon.innerHTML = `<img src="rock_1faa8.png" alt="rock">`;
            computerChoiceIcon.innerHTML = `<img src="page-with-curl_1f4c3.png" alt="paper">`;
            playerLose(playerChoice, computerChoice);
            break;
        case 'paperscissors':
            playerChoiceIcon.innerHTML = `<img src="page-with-curl_1f4c3.png" alt="paper">`;
            computerChoiceIcon.innerHTML = `<img src="scissors_2702-fe0f.png" alt="scissors">`;
            playerLose(playerChoice, computerChoice);
            break;
        case 'scissorsrock':
            playerChoiceIcon.innerHTML = `<img src="scissors_2702-fe0f.png" alt="scissors">`;
            computerChoiceIcon.innerHTML = `<img src="rock_1faa8.png" alt="rock">`;
            playerLose(playerChoice, computerChoice);
            break;
        case 'rockrock':
            playerChoiceIcon.innerHTML = `<img src="rock_1faa8.png" alt="rock">`;
            computerChoiceIcon.innerHTML = `<img src="rock_1faa8.png" alt="rock">`;
            playerTie(playerChoice, computerChoice);
            break;
        case 'paperpaper':
            playerChoiceIcon.innerHTML = `<img src="page-with-curl_1f4c3.png" alt="paper">`;
            computerChoiceIcon.innerHTML = `<img src="page-with-curl_1f4c3.png" alt="paper">`;
            playerTie(playerChoice, computerChoice);
            break;
        case 'scissorsscissors':
            playerChoiceIcon.innerHTML = `<img src="scissors_2702-fe0f.png" alt="scissors">`;
            computerChoiceIcon.innerHTML = `<img src="scissors_2702-fe0f.png" alt="scissors">`;
            playerTie(playerChoice, computerChoice);
            break;
    }
    if (playerScore === 5 || computerScore === 5) {
        console.log(playerScore, computerScore)
    }

}

function playerWin(playerChoice, computerChoice) {
    playerScore++;
    console.log("win!");

}

function playerLose(playerChoice, computerChoice) {
    computerScore++;
    console.log("lose!");
}

function playerTie(playerChoice, computerChoice) {
    console.log("tie!");
}

rockButton.addEventListener('click', () => { playRound('rock'); });
paperButton.addEventListener('click', () => { playRound('paper'); });
scissorsButton.addEventListener('click', () => { playRound('scissors'); });

