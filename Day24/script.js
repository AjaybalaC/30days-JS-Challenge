const bird = document.getElementById("bird");
const pipe = document.getElementById("pipe");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start-button");

let gravity = 2;
let birdPosition = 250;
let pipePosition = 400;
let score = 0;
let gameInterval;

function jump() {
    gravity = -15;
}

function startGame() {
    startButton.style.display = "none";
    gameInterval = setInterval(updateGame, 20);
}

function updateGame() {
    gravity += 1;
    birdPosition += gravity;
    pipePosition -= 5;

    if (birdPosition < 0) birdPosition = 0;

    bird.style.top = birdPosition + "px";
    pipe.style.left = pipePosition + "px";

    if (pipePosition < -50) {
        pipePosition = 400;
        score++;
        scoreDisplay.innerText = score;
    }

    if (
        birdPosition + bird.clientHeight > 600 ||
        birdPosition < 0 ||
        (pipePosition < 140 &&
            pipePosition + pipe.clientWidth > 100 &&
            (birdPosition < 220 || birdPosition + bird.clientHeight > 380))
    ) {
        clearInterval(gameInterval);
        startButton.style.display = "block";
        startButton.innerText = "Restart";
    }
}

startButton.addEventListener("click", startGame);
document.addEventListener("keydown", jump);
