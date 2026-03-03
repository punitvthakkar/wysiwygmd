const CACHE_NAME = 'wymd-v1';
const ASSETS = [
    '/wysiwygmd/',
    '/wysiwygmd/index.html',
    '/wysiwygmd/icon.png',
    '/wysiwygmd/manifest.json'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
