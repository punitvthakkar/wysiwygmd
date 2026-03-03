const CACHE_NAME = 'wymd-v2';
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

// IndexedDB helper for Web Share Target API
const DB_VERSION = 1;
const DB_NAME = 'wymd_share_db';

async function storeFileInIndexedDB(file) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('shared_files')) {
                db.createObjectStore('shared_files');
            }
        };
        request.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction('shared_files', 'readwrite');
            const store = tx.objectStore('shared_files');
            store.put(file, 'latest_shared_file');
            tx.oncomplete = () => resolve();
            tx.onerror = (err) => reject(err);
        };
        request.onerror = (err) => reject(err);
    });
}

self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);

    if (e.request.method === 'POST' && url.pathname === '/wysiwygmd/_share-target') {
        e.respondWith(
            (async () => {
                try {
                    const formData = await e.request.formData();
                    const file = formData.get('md_file');
                    if (file) {
                        await storeFileInIndexedDB(file);
                    }
                    return Response.redirect('/wysiwygmd/?loadShared=true', 303);
                } catch (error) {
                    console.error("Error handling shared file:", error);
                    return Response.redirect('/wysiwygmd/?error=share_failed', 303);
                }
            })()
        );
        return;
    }

    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
