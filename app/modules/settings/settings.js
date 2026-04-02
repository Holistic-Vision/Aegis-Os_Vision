import { save, load } from "../../services/storage.js";

export function renderSettings() {
  const savedColor = load("themeColor", "cyan");
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
      </article>
    </section>
  `;

  document.getElementById("theme-select")?.addEventListener("change", (e) => {
    save("themeColor", e.target.value);
    document.body.dataset.theme = e.target.value;
  });
}
