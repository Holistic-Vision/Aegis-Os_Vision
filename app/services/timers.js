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
