import { state } from "../core/state.js";

export function pushNotification(title, message, type = "info") {
  const notif = {
    id: Date.now(),
    title,
    message,
    type,
    time: new Date().toLocaleTimeString()
  };

  state.notifications.unshift(notif);
  renderNotification(notif);
}

export function getNotifications() {
  return state.notifications;
}

export function initNotifications() {
  pushNotification("Aegis", "Système initialisé.", "success");
}

function renderNotification(n) {
  const container = document.getElementById("toast-stack");
  if (!container) return;

  const el = document.createElement("div");
  el.className = `toast toast-${n.type}`;
  el.innerHTML = `<strong>${n.title}</strong><span>${n.message}</span>`;
  container.appendChild(el);

  setTimeout(() => el.remove(), 4000);
}
