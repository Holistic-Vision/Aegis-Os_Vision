export const state = {
  currentRoute: "dashboard",
  theme: "cyan",
  notifications: [],
  timers: [],
  media: {
    currentTitle: "Aucun média",
    sourceType: "local",
    isPlaying: false,
    volume: 70
  },
  system: {
    network: "--",
    battery: "--",
    weather: "--"
  },
  config: null
};

export function setState(patch) {
  Object.assign(state, patch);
}
