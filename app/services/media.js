let audio = new Audio();

export function loadTrack(url) {
  audio.src = url;
}

export function play() {
  audio.play();
}

export function pause() {
  audio.pause();
}

export function stop() {
  audio.pause();
  audio.currentTime = 0;
}

export function getState() {
  return {
    currentTime: audio.currentTime,
    duration: audio.duration,
    paused: audio.paused
  };
}
