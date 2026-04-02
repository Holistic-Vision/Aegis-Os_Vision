import { pushNotification } from "./notifications.js";

export function initVoice() {
  const btn = document.getElementById("voice-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    pushNotification("Voice", "Module vocal prêt à être relié à AutoVoice / Web Speech.", "info");
  });
}
