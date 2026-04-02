const PREFIX = "aegis:";

export function save(key, value) {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function load(key, fallback = null) {
  const raw = localStorage.getItem(PREFIX + key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}
