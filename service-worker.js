const CACHE_NAME = 'dc-invest-v1';
const assets = [
  '/',
  '/home.html',
  '/login.html',
  '/logo.png',
  // Yahan apni baki CSS/JS files ke naam bhi add karein
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
