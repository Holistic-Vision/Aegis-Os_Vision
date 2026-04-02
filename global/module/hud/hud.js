export function loadHUD() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="hud">
            <h1>Aegis OS</h1>
            <div id="time"></div>
        </div>
    `;

    setInterval(() => {
        document.getElementById("time").innerText =
            new Date().toLocaleTimeString();
    }, 1000);
}
