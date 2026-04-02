import { state } from "../../core/state.js";
import { save, load } from "../../services/storage.js";
import { pushNotification } from "../../services/notifications.js";

function getTimers() {
  state.timers = load("timers", state.timers);
  return state.timers;
}

function persistTimers() {
  save("timers", state.timers);
}

export function renderTimers() {
  getTimers();
  const view = document.getElementById("view");
  view.innerHTML = `
    <section class="panel-grid">
      <article class="panel wide-panel">
        <h2>Timers</h2>
        <div class="button-row">
          <button id="add-timer" class="action-btn">Ajouter 5 min</button>
        </div>
        <ul class="timer-list">
          ${state.timers.map((t, i) => `<li>${t.label} - ${t.minutes} min <button data-remove="${i}">Supprimer</button></li>`).join("") || "<li>Aucun timer</li>"}
        </ul>
      </article>
    </section>
  `;

  document.getElementById("add-timer")?.addEventListener("click", () => {
    state.timers.push({ label: `Timer ${state.timers.length + 1}`, minutes: 5 });
    persistTimers();
    pushNotification("Timer", "Nouveau timer créé.", "success");
    renderTimers();
  });

  view.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.timers.splice(Number(btn.dataset.remove), 1);
      persistTimers();
      renderTimers();
    });
  });
}
