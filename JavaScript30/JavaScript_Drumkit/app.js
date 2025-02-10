window.addEventListener('keydown', function (e) {
    // Select the audio element corresponding to the key pressed
    const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Select the key for adding animation
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // Stop the function from running if no audio element or key element is found
    if (!audioElement || !key) return;

    // Rewind to the beginning of the audio so it can play from the start
    audioElement.currentTime = 0;

    // Play the sound corresponding to the key pressed
    audioElement.play();

    // Add the animation class to the key element
    key.classList.add('playing');
});

window.addEventListener('keyup', function (e) {
    // Select the key for removing animation
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // Stop the function if no key element is found
    if (!key) return;

    // Remove the animation class when the key is released
    key.classList.remove('playing');
});
