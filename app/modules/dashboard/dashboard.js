import { state } from "../../core/state.js";

export function renderDashboard() {
  const view = document.getElementById("view");
  view.innerHTML = `
    <section class="panel-grid">
      <article class="panel hero-panel">
        <h1>Aegis OS Vision</h1>
        <p>Système modulaire évolutif pour HUD, médias, rappels, timers et intégrations externes.</p>
      </article>

      <article class="panel">
        <h2>Media</h2>
        <p>${state.media.currentTitle}</p>
        <p>Source : ${state.media.sourceType}</p>
      </article>

      <article class="panel">
        <h2>Notifications</h2>
        <p>${state.notifications.length} en mémoire</p>
      </article>

      <article class="panel">
        <h2>System</h2>
        <p>Réseau : <span id="dashboard-network">${state.system.network}</span></p>
        <p>Batterie : <span id="dashboard-battery">${state.system.battery}</span></p>
        <p>Météo : <span id="dashboard-weather">${state.system.weather}</span></p>
      </article>
    </section>
  `;
}
