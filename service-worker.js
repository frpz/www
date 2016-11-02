// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var dataCacheName = 'weatherData-v1';
var cacheName = 'weatherPWA-final-1';
var filesToCache = [
  '/',
	'/favicon.ico',
	'/index.html',
	'/makestats-www-francis.sh',
	'/assets/fonts/fontawesome-webfont.eot',
	'/assets/fonts/fontawesome-webfont.svg',
	'/assets/fonts/fontawesome-webfont.woff',
	'/assets/fonts/fontawesome-webfont.woff2',
	'/assets/fonts/fontawesome-webfont.ttf',
	'/assets/fonts/FontAwesome.otf',
	'/assets/js/jquery.min.js',
	'/assets/js/jquery.poptrox.min.js',
	'/assets/js/util.js',
	'/assets/js/simrou.min.js',
	'/assets/js/skel.min.js',
	'/assets/js/handlebars-v1.3.0.js',
	'/assets/js/main.js',
	'/assets/js/ie/html5shiv.js',
	'/assets/js/ie/backgroundsize.min.htc',
	'/assets/js/ie/respond.min.js',
	'/assets/js/ie/PIE.htc',
	'/assets/css',
	'/assets/css/ie8.css',
	'/assets/css/images',
	'/assets/css/images/overlay.png',
	'/assets/css/main.css',
	'/assets/css/font-awesome.min.css',
	'/images/FrancisPugnere.png',
	'/images/photo-bg4.jpg',
	'/images/photo-bg3.jpg',
	'/images/fulls/oro.jpg',
	'/images/fulls/fireflux.jpg',
	'/images/fulls/jpower.jpg',
	'/images/fulls/bth.jpg',
	'/images/fulls/class4.jpg',
	'/images/fulls/kalligraph.jpg',
	'/images/photo-bg2.jpg',
	'/images/thumbs/oro.jpg',
	'/images/thumbs/fireflux.jpg',
	'/images/thumbs/jpower.jpg',
	'/images/thumbs/bth.jpg
	'/images/thumbs/class4.jpg',
	'/images/thumbs/kalligraph.jpg',
	'/images/photo-bg1.jpg',

];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
   */
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  if (e.request.url.indexOf(dataUrl) > -1) {
    /*
     * When the request URL contains dataUrl, the app is asking for fresh
     * weather data. In this case, the service worker always goes to the
     * network and then caches the response. This is called the "Cache then
     * network" strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
     */
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});

