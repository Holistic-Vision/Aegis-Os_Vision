---

## 9) Ce qui manque encore volontairement

Cette base est solide, mais elle n'est pas encore reliée à :
- Spotify API
- YouTube API
- météo réelle
- notifications système Android natives
- Tasker/Shizuku/AutoVoice
- APK wrapper

Ces points demandent une couche d'intégration supplémentaire. La structure actuelle est faite pour les recevoir sans refonte.

---

## 10) Ordre de build recommandé

1. Faire tourner cette base localement
2. Stabiliser HUD + navigation
3. Brancher météo réelle
4. Brancher audio local
5. Ajouter mode miroir HUD
6. Ajouter bridge Android / Tasker
7. Emballer en WebView / APK

---

## 11) V2 — patchs concrets à ajouter maintenant

### `app/services/weather.js`

```javascript
const DEFAULT_LAT = 45.764;
const DEFAULT_LON = 3.087;

async function getCoords() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({ latitude: DEFAULT_LAT, longitude: DEFAULT_LON });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(pos.coords),
      () => resolve({ latitude: DEFAULT_LAT, longitude: DEFAULT_LON }),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 600000 }
    );
  });
}

export async function getWeatherSummary() {
  try {
    const coords = await getCoords();
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,weather_code&timezone=auto`;
    const res = await fetch(url);
    const data = await res.json();
    const temp = Math.round(data.current.temperature_2m);
    const code = data.current.weather_code;
    const label = weatherCodeToText(code);
    return `${temp}°C ${label}`;
  } catch {
    return "N/A";
  }
}

function weatherCodeToText(code) {
  const map = {
    0: "Clair",
    1: "Peu nuageux",
    2: "Nuageux",
    3: "Couvert",
    45: "Brume",
    48: "Brouillard",
    51: "Bruine",
    61: "Pluie",
    71: "Neige",
    80: "Averses",
    95: "Orage"
  };
  return map[code] || "Variable";
}
