import { loadTrack, play, pause, stop } from "../../services/media.js";

export function renderMedia() {
  const view = document.getElementById("view");

  view.innerHTML = `
    <section class="panel-grid">
      <article class="panel wide-panel">
        <h2>Media</h2>

        <input type="file" id="file-input" accept="audio/*" />

        <div class="button-row">
          <button id="play">Play</button>
          <button id="pause">Pause</button>
          <button id="stop">Stop</button>
        </div>
      </article>
    </section>
  `;

  document.getElementById("file-input").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    loadTrack(url);
  });

  document.getElementById("play").onclick = play;
  document.getElementById("pause").onclick = pause;
  document.getElementById("stop").onclick = stop;
}
