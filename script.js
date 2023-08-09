let isAudioPlaying = false;
const playButton = document.getElementById("playButton");
const audioPlayer = document.getElementById("audioPlayer");

playButton.addEventListener("click", toggleAudio);

function toggleAudio() {
    if (isAudioPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    
    isAudioPlaying = !isAudioPlaying;
    updatePlayButton();
}

function updatePlayButton() {
    const playButtonIcon = document.getElementById("IconChangeColor");

    if (isAudioPlaying) {
        playButtonIcon.style.fill = "#191919"; // Keep the play button black
    } else {
        playButtonIcon.style.fill = "#191919"; // Keep the play button black
    }
}

