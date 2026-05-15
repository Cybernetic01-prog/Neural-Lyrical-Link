// This tells the phone to keep the app working even if you're offline
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('lyric-link-v1').then((cache) => {
      return cache.addAll(['./', 'index.html']); 
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
