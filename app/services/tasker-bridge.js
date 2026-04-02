import { pushNotification } from "./notifications.js";

export function initTaskerBridge() {
  window.AegisBridge = {
    notify(title, message) {
      pushNotification(title || "Tasker", message || "Notification reçue", "info");
    },
    setWeather(label) {
      const widget = document.getElementById("weather-widget");
      if (widget) widget.textContent = `MÉTÉO ${label}`;
    },
    ping() {
      pushNotification("Bridge", "Passerelle Tasker simulée active.", "success");
    }
  };
}
