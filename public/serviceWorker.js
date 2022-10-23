let CACHE_NAME = 'my_daily_quotes_cache';
const urlsToCache = ['/', '/index.html'];

self.addEventListener('install', function (event) {
	// Perform install steps
	event.waitUntill(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
	self.skipWaiting();
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});
