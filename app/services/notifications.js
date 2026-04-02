import { state } from "../core/state.js";

const notifications = [];

export function pushNotification(title, message, type = "info") {
  const notif = {
    id: Date.now(),
    title,
    message,
    type,
    time: new Date().toLocaleTimeString()
  };

  notifications.unshift(notif);

  renderNotification(notif);
}

export function getNotifications() {
  return notifications;
}

function renderNotification(n) {
  const container = document.getElementById("notification-container");

  if (!container) return;

  const el = document.createElement("div");
  el.className = "notif";
  el.innerHTML = `<strong>${n.title}</strong><br>${n.message}`;

  container.appendChild(el);

  setTimeout(() => el.remove(), 4000);
}
