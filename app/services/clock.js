export function initClock() {
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  const update = () => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString("fr-FR");
    date.textContent = now.toLocaleDateString("fr-FR");
  };

  update();
  setInterval(update, 1000);
}
