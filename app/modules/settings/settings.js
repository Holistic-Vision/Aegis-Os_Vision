import { save, load } from "../../services/storage.js";
import { pushNotification } from "../../services/notifications.js";

export function renderSettings() {
  const savedColor = load("themeColor", "cyan");
  const mirrorMode = load("mirrorMode", false);
  const view = document.getElementById("view");

  view.innerHTML = `
    <section class="panel-grid">
      <article class="panel wide-panel">
        <h2>Settings</h2>
        <label>
          Couleur HUD
          <select id="theme-select">
            <option value="cyan" ${savedColor === "cyan" ? "selected" : ""}>Cyan</option>
            <option value="orange" ${savedColor === "orange" ? "selected" : ""}>Orange</option>
            <option value="green" ${savedColor === "green" ? "selected" : ""}>Green</option>
            <option value="red" ${savedColor === "red" ? "selected" : ""}>Red</option>
          </select>
        </label>
        <div class="button-row" style="margin-top:16px;">
          <button id="mirror-toggle" class="action-btn">${mirrorMode ? "Désactiver miroir" : "Activer miroir"}</button>
          <button id="demo-alert" class="action-btn">Alerte test</button>
        </div>
      </article>
    </section>
  `;

  document.getElementById("theme-select")?.addEventListener("change", (e) => {
    save("themeColor", e.target.value);
    document.body.dataset.theme = e.target.value;
  });

  document.getElementById("mirror-toggle")?.addEventListener("click", () => {
    const next = !load("mirrorMode", false);
    save("mirrorMode", next);
    document.body.classList.toggle("mirror-mode", next);
    renderSettings();
  });

  document.getElementById("demo-alert")?.addEventListener("click", () => {
    pushNotification("Aegis", "Alerte visuelle de test.", "info");
  });
}
