import { state } from "../../core/state.js";
import { getWeatherSummary } from "../../services/weather.js";

export function initSystemStats() {
  updateSystemStats();
  setInterval(updateSystemStats, 10000);
}

async function updateSystemStats() {
  state.system.network = navigator.onLine ? "ONLINE" : "OFFLINE";

  if (navigator.getBattery) {
    const battery = await navigator.getBattery();
    state.system.battery = `${Math.round(battery.level * 100)}%`;
  } else {
    state.system.battery = "N/A";
  }

  state.system.weather = await getWeatherSummary();

  const networkEl = document.getElementById("network-widget");
  const batteryEl = document.getElementById("battery-widget");
  const weatherEl = document.getElementById("weather-widget");

  if (networkEl) networkEl.textContent = `NET ${state.system.network}`;
  if (batteryEl) batteryEl.textContent = `BAT ${state.system.battery}`;
  if (weatherEl) weatherEl.textContent = `MÉTÉO ${state.system.weather}`;

  if (document.getElementById("system-network")) {
    document.getElementById("system-network").textContent = `Réseau : ${state.system.network}`;
    document.getElementById("system-battery").textContent = `Batterie : ${state.system.battery}`;
    document.getElementById("system-weather").textContent = `Météo : ${state.system.weather}`;
  }
}

export function renderSystem() {
  const view = document.getElementById("view");
  view.innerHTML = `
    <section class="panel-grid">
      <article class="panel">
        <h2>État système</h2>
        <p id="system-network">Réseau : ${state.system.network}</p>
        <p id="system-battery">Batterie : ${state.system.battery}</p>
        <p id="system-weather">Météo : ${state.system.weather}</p>
        <p id="system-geo">Bridge Android / Tasker : en attente</p>
      </article>
    </section>
  `;
}
