//your JS code here. If required.
function playSound(soundFile) {
  const audio = new Audio(`sounds/${soundFile}`);
  audio.play();
}

function stopAllSounds() {
  const allSounds = document.querySelectorAll('audio');
  allSounds.forEach((audio) => audio.pause());
}
