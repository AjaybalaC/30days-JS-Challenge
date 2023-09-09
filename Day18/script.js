const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

const maxProgress = 100;
let currentProgress = 0;

function updateProgress() {
    currentProgress++;
    const progress = (currentProgress / maxProgress) * 80;
    progressBar.style.background = `conic-gradient(
        hsla(108, 96%, 22%, 0.589) ${progress}%,
        #e60f0f 0% 100%)`;
    progressText.textContent = `${progress.toFixed(0)}%`;

    if (currentProgress < maxProgress) {
        requestAnimationFrame(updateProgress);
    }
}

updateProgress();
