import { startTimer } from "../../services/timers.js";

export function renderTimers() {
  const view = document.getElementById("view");

  view.innerHTML = `
    <section class="panel-grid">
      <article class="panel wide-panel">
        <h2>Timers</h2>
        <div class="button-row">
          <button id="t1" class="action-btn">5 min</button>
          <button id="t2" class="action-btn">10 min</button>
          <button id="t3" class="action-btn">25 min</button>
        </div>
      </article>
    </section>
  `;

  document.getElementById("t1").onclick = () => startTimer(300, "5 min");
  document.getElementById("t2").onclick = () => startTimer(600, "10 min");
  document.getElementById("t3").onclick = () => startTimer(1500, "Focus");
}

  view.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.timers.splice(Number(btn.dataset.remove), 1);
      persistTimers();
      renderTimers();
    });
  });
}
