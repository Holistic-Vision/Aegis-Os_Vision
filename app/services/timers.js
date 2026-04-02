import { pushNotification } from "./notifications.js";

const timers = [];

export function startTimer(seconds, label = "Timer") {
  const end = Date.now() + seconds * 1000;

  const interval = setInterval(() => {
    if (Date.now() >= end) {
      clearInterval(interval);
      pushNotification("Timer", `${label} terminé`, "success");
    }
  }, 500);

  timers.push({ label, end });
}

import { startTimer } from "../../services/timers.js";

export function renderTimers() {
  const view = document.getElementById("view");

  view.innerHTML = `
    <section class="panel">
      <h2>Timers</h2>
      <button id="t1">5 min</button>
      <button id="t2">10 min</button>
      <button id="t3">25 min</button>
    </section>
  `;

  document.getElementById("t1").onclick = () => startTimer(300, "5 min");
  document.getElementById("t2").onclick = () => startTimer(600, "10 min");
  document.getElementById("t3").onclick = () => startTimer(1500, "Focus");
}
