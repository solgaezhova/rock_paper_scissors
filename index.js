prompt("Let's play 'Rock, paper, scissors' game! We are going to have five rounds. Good luck!")

const validOptions = ["rock", "paper", "scissors"]

let playerScore = 0;
let computerScore = 0;

const game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = userInput();
        let computerSelection = computerPlay();
        console.log(`%cPlayer selection: ${playerSelection}`, "color: blue");
        console.log(`%cComputer selection: ${computerSelection}`, "color: red");
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
    }

    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log(`You won this game with the score ${playerScore} to ${computerScore}. Congratulations!`);
    }
    else if (playerScore < computerScore) {
        console.log(`You lost this game with the score ${playerScore} to ${computerScore}. Don't get upset, try again!`);
    }
    else {
        console.log("This game is a draw. Try again!");
    }
}

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection == computerSelection) {
        return "This round is a draw!";
    } else if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`
    }
    else {
        computerScore++;
        return `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`
    }
}

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

let userInput = () => {
    let inputValid = false;
    while (!inputValid) {
        let playerSelection = prompt("Print 'rock', 'paper', or 'scissors'").toLowerCase().trim();
        if (validOptions.includes(playerSelection)) {
            inputValid = true;
            return playerSelection;
        } else {
            console.log("Your input was wrong. Please provide a valid input: 'rock', 'paper', or 'scissors'");
        }
    }
}

let computerPlay = () => {
    return validOptions[Math.floor(Math.random() * validOptions.length)];
}

game();

