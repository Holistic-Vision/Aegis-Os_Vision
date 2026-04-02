import { renderDashboard } from "../modules/dashboard/dashboard.js";
import { renderMediaPlayer } from "../modules/media/media-player.js";
import { renderTimers } from "../modules/timers/timers.js";
import { renderSystem } from "../modules/system/system.js";
import { renderSettings } from "../modules/settings/settings.js";
import { state } from "./state.js";

const routes = {
  dashboard: renderDashboard,
  media: renderMediaPlayer,
  timers: renderTimers,
  system: renderSystem,
  settings: renderSettings
};

export function buildNav() {
  const nav = document.getElementById("main-nav");
  const items = [
    ["dashboard", "Dashboard"],
    ["media", "Media"],
    ["timers", "Timers"],
    ["system", "System"],
    ["settings", "Settings"]
  ];

  nav.innerHTML = items
    .map(
      ([key, label]) =>
        `<button class="nav-btn ${state.currentRoute === key ? "active" : ""}" data-route="${key}">${label}</button>`
    )
    .join("");

  nav.querySelectorAll("[data-route]").forEach((btn) => {
    btn.addEventListener("click", () => navigate(btn.dataset.route));
  });
}

export function navigate(routeName) {
  state.currentRoute = routeName;
  buildNav();
  const renderer = routes[routeName] || renderDashboard;
  renderer();
}
