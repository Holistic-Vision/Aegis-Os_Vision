import { state } from "../core/state.js";

export function togglePlayback() {
  state.media.isPlaying = !state.media.isPlaying;
  return state.media.isPlaying;
}

export function setTrack(title, sourceType = "local") {
  state.media.currentTitle = title;
  state.media.sourceType = sourceType;
}
