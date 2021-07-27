// files that will be cached
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/dist/bundle.js',
  'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  '/dist/assets/icons/icon_192x192.png',
  '/dist/assets/icons/icon_512x512.png',
  '/dist/manifest.json',
];

const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

//install of the cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    //all files we want to cache are pre-cached
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      //after the install, the service worker is activated
      .then(self.skipWaiting())
  );
});

// Here we take care of cleaning up the old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches
      .keys()
      //caches that aren't new are sorted together in an array
      .then((cacheNames) => {
        return cacheNames.filter(
          (cacheName) => !currentCaches.includes(cacheName)
        );
      })
      //the old caches are then deleted
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  //a fetch request is made to api route network
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      caches.open(RUNTIME).then((cache) => {
        return fetch(event.request)
          .then((response) => {
            //a successful responded updates caches with most current data
            if (response.status === 200) {
              cache.put(event.request.url, response.clone());
            }
            return response;
          })
          .catch((error) => {
            console.log(error);
            return cache.match(event.request);
          });
      })
    );
  } else {
    //if the request failed, the current cache is retreived
    event.respondWith(
      caches.open(PRECACHE).then((cache) => {
        return cache.match(event.request).then((response) => {
          return response || fetch(event.request);
        });
      })
    );
  }
});
