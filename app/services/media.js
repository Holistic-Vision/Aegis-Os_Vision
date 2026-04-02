import { state } from "../core/state.js";

let audio = new Audio();

export function loadTrack(url) {
  audio.src = url;
  state.media.currentTitle = "Fichier local chargĂ©";
  state.media.sourceType = "local";
}

export function play() {
  audio.play();
  state.media.isPlaying = true;
}

export function pause() {
  audio.pause();
  state.media.isPlaying = false;
}

export function stop() {
  audio.pause();
  audio.currentTime = 0;
  state.media.isPlaying = false;
}

export function getState() {
  return {
    currentTime: audio.currentTime,
    duration: audio.duration,
    paused: audio.paused
  };
}

export function togglePlayback() {
  if (audio.paused) {
    audio.play();
    state.media.isPlaying = true;
    return true;
  }
  audio.pause();
  state.media.isPlaying = false;
  return false;
}

export function setTrack(title, sourceType = "local") {
  state.media.currentTitle = title;
  state.media.sourceType = sourceType;
}

