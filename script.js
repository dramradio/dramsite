let isAudioPlaying = false;

function toggleAudio() {
    const audioPlayer = document.getElementById("audioPlayer");
    const playButton = document.getElementById("playButton");
    
    if (isAudioPlaying) {
        audioPlayer.pause();
        playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><polygon points="0,0 100,50 0,100" fill="green" /></svg>';
    } else {
        audioPlayer.play();
        playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect x="0" y="0" width="100" height="100" fill="green" /></svg>';
    }
    
    isAudioPlaying = !isAudioPlaying;
}
