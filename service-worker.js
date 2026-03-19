const CACHE_NAME = 'dc-invest-v1';

self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
