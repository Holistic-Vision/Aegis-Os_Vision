const CACHE_NAME = "aegis-os-vision-v1";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/app/ui/theme.css",
  "/app/ui/layout.css",
  "/app/ui/animations.css",
  "/app/ui/components.css",
  "/app/core/boot.js",
  "/app/core/engine.js",
  "/app/core/router.js",
  "/app/core/state.js",
  "/app/core/events.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
