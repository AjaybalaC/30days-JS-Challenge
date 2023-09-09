const audioPlayer = document.getElementById('audio-player');
const playlist = document.querySelectorAll('.playlist a');

playlist.forEach(song => {
    song.addEventListener('click', function (e) {
        e.preventDefault();
        const songUrl = this.getAttribute('href');
        audioPlayer.src = songUrl;
        audioPlayer.play();
    });
});
