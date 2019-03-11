window.addEventListener("keypress", doOnKeyPress);
window.addEventListener("transitionend", doOnTransitionEnd);

function doOnKeyPress(event) {
    const pressedKey = event.keyCode;
    const dataAttribute = `data-key="${pressedKey}"`;

    const audioElement = document.querySelector(`audio[${dataAttribute}]`);
    if (!audioElement) {
        return;
    }

    // Reset current audio time to allow subsequent key presses
    audioElement.currentTime = 0;
    audioElement.play();

    const drumElement = document.querySelector(`div[${dataAttribute}]`);
    drumElement.classList.add("playing");
}

function doOnTransitionEnd(event) {
    const eventName = event.propertyName;
    if (eventName !== "transform") {
        return;
    }

    const drumElement = event.srcElement;
    drumElement.classList.remove("playing");
}