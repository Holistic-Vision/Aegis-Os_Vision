import { loadHUD } from '../modules/hud/hud.js';

window.addEventListener('load', () => {
    console.log("Aegis OS Booting...");
    document.getElementById("loader").remove();

    loadHUD();
});
