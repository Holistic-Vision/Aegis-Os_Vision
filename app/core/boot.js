import { startEngine } from "./engine.js";

const bootStatus = document.getElementById("boot-status");
const bootScreen = document.getElementById("boot-screen");
const app = document.getElementById("app");

const bootSteps = [
  "Chargement du noyau...",
  "Synchronisation de l'état...",
  "Initialisation de l'interface HUD...",
  "Connexion des services locaux...",
  "Aegis OS Vision prêt."
];

function showBootError(error) {
  console.error("BOOT ERROR:", error);
  bootStatus.textContent = "ERREUR BOOT : " + (error?.message || error || "inconnue");
}

async function runBootSequence() {
  try {
    for (const step of bootSteps) {
      bootStatus.textContent = step;
      await new Promise((resolve) => setTimeout(resolve, 450));
    }

    bootScreen.classList.add("fade-out");
    app.classList.remove("hidden");
    startEngine();
  } catch (error) {
    showBootError(error);
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(console.error);
  });
}

runBootSequence();
