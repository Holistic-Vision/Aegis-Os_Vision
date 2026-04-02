import { buildNav, navigate } from "./router.js";
import { initClock } from "../services/clock.js";
import { initNotifications } from "../services/notifications.js";
import { initSystemStats } from "../modules/system/system.js";
import { initVoice } from "../services/voice.js";
import { initTaskerBridge } from "../services/tasker-bridge.js";
import { load } from "../services/storage.js";

export function startEngine() {
  applyPersistedUiState();
  buildNav();
  initClock();
  initNotifications();
  initSystemStats();
  initVoice();
  initTaskerBridge();
  wireGlobalButtons();
  navigate("dashboard");
}

function applyPersistedUiState() {
  const theme = load("themeColor", "cyan");
  const mirrorMode = load("mirrorMode", false);
  document.body.dataset.theme = theme;
  document.body.classList.toggle("mirror-mode", mirrorMode);
}

function wireGlobalButtons() {
  document.getElementById("notify-btn")?.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("aegis:openNotifications"));
  });

  document.getElementById("theme-btn")?.addEventListener("click", () => {
    const cycle = ["cyan", "orange", "green", "red"];
    const current = document.body.dataset.theme || "cyan";
    const next = cycle[(cycle.indexOf(current) + 1) % cycle.length];
    document.body.dataset.theme = next;
  });
}
