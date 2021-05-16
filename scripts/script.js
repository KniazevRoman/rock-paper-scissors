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

function game(playerSelection) {
    playerSelection = gestures[playerSelection.toLowerCase()];

    let computerSelection = computerPlay();

    let winner = playRound(playerSelection, computerSelection);
    let lastGameResult = document.querySelector('.last-game__result');

    if (winner == 'player') {
        victories++;
        lastGameResult.textContent = "You win!";
    }

    if (winner == 'computer') {
        defeats++;
        lastGameResult.textContent = "You loose!";
    }

    if (winner == 'none') {
        draws++;
        lastGameResult.textContent = "Draw!";
    }

    document.querySelector('.results__victories-counter').textContent = victories;
    document.querySelector('.results__defeats-counter').textContent = defeats;
    document.querySelector('.results__draws-counter').textContent = draws;

    document.querySelector('.last-game__choise_player .gestures__item').src = `imgs/${playerSelection.name}.png`;
    document.querySelector('.last-game__choise_computer .gestures__item').src = `imgs/${computerSelection.name}.png`;
}

function selectGesture(elem) {
    if(lastGame.classList.contains('last-game_hidden')) {
        lastGame.classList.remove('last-game_hidden');
    }

    for (let playerControl of playerControls) {
        if (playerControl.classList.contains('gestures__image-container_selected')) {
            playerControl.classList.remove('gestures__image-container_selected');
        }
    }

    elem.classList.toggle('gestures__image-container_selected');
    game(elem.dataset.gesture);
}

let victories = 0;
let defeats = 0;
let draws = 0;

let lastGame = document.querySelector('.last-game');

let controls = document.querySelector('.controls');
controls.addEventListener('click', function(event) {
    if (event.target.closest('div').classList.contains('gestures__image-container')) {
        selectGesture(event.target.closest('div'));
    } else if (event.target.classList.contains('gestures__image-container')) {
        selectGesture(event.target);
    }
})