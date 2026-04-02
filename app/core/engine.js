import { buildNav, navigate } from "./router.js";
import { initClock } from "../services/clock.js";
import { initNotifications } from "../services/notifications.js";
import { initSystemStats } from "../modules/system/system.js";
import { initVoice } from "../services/voice.js";

export function startEngine() {
  buildNav();
  initClock();
  initNotifications();
  initSystemStats();
  initVoice();
  wireGlobalButtons();
  navigate("dashboard");
}

function wireGlobalButtons() {
  document.getElementById("notify-btn")?.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("aegis:openNotifications"));
  });

  document.getElementById("theme-btn")?.addEventListener("click", () => {
    document.body.classList.toggle("theme-alt");
  });
}
