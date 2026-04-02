import { togglePlayback, setTrack } from "../../services/media.js";
import { state } from "../../core/state.js";
import { pushNotification } from "../../services/notifications.js";

export function renderMediaPlayer() {
  const view = document.getElementById("view");
  view.innerHTML = `
    <section class="panel-grid">
      <article class="panel wide-panel">
        <h2>Media Center</h2>
        <p>Titre en cours : <strong id="media-title">${state.media.currentTitle}</strong></p>
        <div class="button-row">
          <button id="play-toggle" class="action-btn">${state.media.isPlaying ? "Pause" : "Lecture"}</button>
          <button id="load-local" class="action-btn">Charger local</button>
          <button id="load-spotify" class="action-btn">Spotify</button>
          <button id="load-youtube" class="action-btn">YouTube</button>
        </div>
      </article>
    </section>
  `;

  document.getElementById("play-toggle")?.addEventListener("click", () => {
    const playing = togglePlayback();
    renderMediaPlayer();
    pushNotification("Media", playing ? "Lecture démarrée." : "Lecture en pause.", "info");
  });

  document.getElementById("load-local")?.addEventListener("click", () => {
    setTrack("Playlist locale", "local");
    renderMediaPlayer();
  });

  document.getElementById("load-spotify")?.addEventListener("click", () => {
    setTrack("Playlist Spotify choisie par l'utilisateur", "spotify");
    renderMediaPlayer();
  });

  document.getElementById("load-youtube")?.addEventListener("click", () => {
    setTrack("Playlist YouTube choisie par l'utilisateur", "youtube");
    renderMediaPlayer();
  });
}
