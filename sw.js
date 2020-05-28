// Why can't I use module inside sw
// Because it's standalone
// Ba dum tss
// That's not even funny

// Cache things
const CACHE_NAME = 'KNACK-IS-BACK-BAYBEE-V-9'
const CACHED_ITEMS = [
    // HTML
    './',
    './index.html',

    // CSS
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './css/color.css',
    './css/card.css',
    './css/style.css',

    // JS
    './node_modules/jquery/dist/jquery.slim.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',

    './js/lib/idb.js',

    './js/components/club-highlight.js',
    './js/components/random-club.js',
    './js/components/single-standing.js',
    './js/components/standings.js',

    './js/api.js',
    './js/app.js',
    './js/constants.js',
    './js/helper.js',
    './js/leagues.js',
    './js/program.js',
    './js/routes.js',

    // Images

    // Icons and Manifest
    './img/icons/android-chrome-192x192.png',
    './img/icons/android-chrome-512x512.png',
    './img/icons/apple-touch-icon.png',
    './img/icons/favicon-16x16.png',
    './img/icons/favicon-32x32.png',
    './img/icons/favicon.ico',
    './manifest.json',
]

// API Things
const API_URL = 'api.football-data.org/v2'

self.addEventListener('install', (e) => {
    e.waitUntil(addCache());

    async function addCache() {
        try {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(CACHED_ITEMS);
            console.log('Berhasil nambahin cache, alhamdulillah')
        } catch (error) {
            console.error(`Hmmm kok error ya saat nambahin cache: ${error}`)
        }
    }
})

self.addEventListener('fetch', (e) => {
    e.respondWith(loadCache())

    async function getFromCache(cache) {
        const response = await cache.match(e.request)
        return response || fetch(e.request)
    }

    async function loadCache() {
        try {
            if (e.request.url.indexOf(API_URL) > -1) {
                const cache = await caches.open(CACHE_NAME)
                const cacheResponse = await cache.match(e.request)

                if (cacheResponse) {
                    console.log(`Memperbarui cache: ${e.request.url}`)
                    cache.add(e.request)
                        .then(() => {
                            console.log(`Cache berhasil diperbarui (${e.request.url})`)
                        })
                        .catch(e => {
                            console.error(`Update cache gagal, nih error: ${e}`)
                        })
                    return cacheResponse
                }

                await cache.add(e.request)
                return getFromCache(cache)
            } else {
                const cache = await caches.open(CACHE_NAME)
                return getFromCache(cache)
            }
        } catch (e) {
            console.error(e)
        }
    }
})

self.addEventListener('activate',  (e) => {
    e.waitUntil(deleteOldCache())

    async function deleteOldCache() {
        const cacheNames = await caches.keys()
        await Promise.all(
            cacheNames.map(cacheName => {
                if (cacheName !== CACHE_NAME) {
                    console.log(`Menghapus cache ${cacheName}`)
                    return caches.delete(cacheName)
                }
            })
        )
    }
})