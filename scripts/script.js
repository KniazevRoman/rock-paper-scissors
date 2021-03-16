let gestures = {
    'rock': {
        name: "rock",
        beats: "scissors",
        loose: "paper"
    },

    'paper': {
        name: "paper",
        beats: "rock",
        loose: "scissors"
    },

    'scissors': {
        name: "scissors",
        beats: "paper",
        loose: "rock"
    }
}

function computerPlay() {
    let result = Math.ceil(Math.random()*3);

    if (result === 1) {
        return gestures['rock'];
    } else if (result === 2) {
        return gestures['paper'];
    } else {
        return gestures['scissors'];
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.beats === computerSelection.name) {
        return `player`;
    } else if (playerSelection.loose === computerSelection.name) {
        return `computer`;
    } else {
        return `none`;
    }
}

function game() {
    let playerVictories = 0;
    let computerVictories = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your gesture?");
        playerSelection = gestures[playerSelection.toLowerCase()];

        let playerSelectionCheck = 0;
        while (!playerSelectionCheck) {
            if(playerSelection) {
                playerSelectionCheck = 1;
            }

            if(!playerSelectionCheck) {
                playerSelection = prompt("Enter your gesture again please");
                playerSelection = gestures[playerSelection.toLowerCase()];
            }
        }

        let computerSelection = computerPlay();

        let winner = playRound(playerSelection, computerSelection);

        if (winner == 'player') {
            playerVictories++;
        }

        if (winner == 'computer') {
            computerVictories++;
        }

        if (winner == 'none') {
            draws++;
        }
    }

    let result = '';

    if (playerVictories > computerVictories) {
        result = `You win! Your score is ${playerVictories} and computer score is ${computerVictories}. There were ${draws} rounds with the same figures.`;
    }

    if (playerVictories < computerVictories) {
        result = `You loose! Your score is ${playerVictories} and computer score is ${computerVictories} There were ${draws} rounds with the same figures.`;
    }

    if (playerVictories === computerVictories) {
        result = `It's a draw! Your score is ${playerVictories} and computer score is ${computerVictories} There were ${draws} rounds with the same figures.`
    }

    console.log(result);
}

game();