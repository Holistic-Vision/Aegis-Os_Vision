const listeners = new Map();

export function on(eventName, callback) {
  if (!listeners.has(eventName)) listeners.set(eventName, []);
  listeners.get(eventName).push(callback);
}

export function emit(eventName, payload) {
  const callbacks = listeners.get(eventName) || [];
  callbacks.forEach((cb) => cb(payload));
}
