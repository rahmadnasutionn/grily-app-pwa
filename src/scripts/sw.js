import 'regenerator-runtime';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { setCacheNameDetails } from 'workbox-core';
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies';
import CONFIG from './globals/config';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';

setCacheNameDetails({
    prefix: CONFIG.CACHE_NAME,
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime',
});

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
    new NetworkFirst({
        cacheName: 'dicoding-restaurant-grily',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
                maxEntries: 100
            }),
        ],
    }),
);

registerRoute(({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
                maxEntries: 50,
            }),
        ],
    }),
);

registerRoute(
    new RegExp(
        'https://use.fontawesome.com/b070c8f1df.js'
    ),
    new CacheFirst({
        cacheName: 'fontawesome'
    }),
);

registerRoute(({ url }) =>
    url.origin === 'https://fonts.googleapis.com' ||
    url.origin === 'https://fonts/gstatic.com',
    new StaleWhileRevalidate({
        cacheName: 'fonts-google',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
            }),
        ],
    }),
);

registerRoute(({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
    new StaleWhileRevalidate({
        cacheName: 'cache-assets',
    }),
);

cleanupOutdatedCaches();

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});