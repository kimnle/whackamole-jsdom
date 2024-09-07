let gameTimeRemaining = 0;
let defaultGameDuration = 120;
let gameCountdownInterval = null;

// if (gameTimeRemaining > 0) {
    
// }

function startGame(desiredGameTime = defaultGameDuration) {
    gameTimeRemaining = desiredGameTime;
    console.log("Started the game. Game time remaining is now: " + gameTimeRemaining);

    gameCountdownInterval = setInterval(() => {
        gameTimeRemaining -= 1;
        console.log("Game time remaining is counting down, it is now... " + gameTimeRemaining);
        
        if (gameTimeRemaining <= 0) {
            // if game has no time remaining, stop subtracting from it!!
            clearInterval(gameCountdownInterval);
            console.log("Game has finished!!");
        }

    }, 1000);
}

// startGame();     // gameTimeRemaining becomes 120
// startGame(60)    // gameTimeRemaining 60

function stopGame() {
    gameTimeRemaining = 0;
    console.log("Stopped the game. Game time remaining is now: " + gameTimeRemaining);
}

let startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", () => {
    startGame(3);
});

let stopGameButton = document.getElementById("stopGameButton");
stopGameButton.addEventListener("click", () => {
    stopGame();
});