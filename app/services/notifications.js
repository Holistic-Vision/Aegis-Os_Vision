import { state } from "../core/state.js";

export function pushNotification(title, message, level = "info") {
  const toastStack = document.getElementById("toast-stack");
  const id = crypto.randomUUID();
  state.notifications.unshift({ id, title, message, level, createdAt: Date.now() });

  const el = document.createElement("div");
  el.className = `toast toast-${level}`;
  el.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
  toastStack.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 4000);
}

export function initNotifications() {
  pushNotification("Aegis", "Système initialisé.", "success");
}
