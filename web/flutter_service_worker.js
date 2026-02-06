'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "73b2a0f47d89353e5338b7680b50c4a9",
"assets/AssetManifest.bin.json": "236a8370e2d260ba7adf2351c7c3957d",
"assets/assets/fonts/Baloo_2/Baloo2-Bold.ttf": "f57ab981c1dec25a04bea3cce20ea18c",
"assets/assets/fonts/Baloo_2/Baloo2-ExtraBold.ttf": "15e8199eb1b3d423d8642f1837b3a9c4",
"assets/assets/fonts/Baloo_2/Baloo2-Medium.ttf": "cf867a5944fb838010f772a139620a75",
"assets/assets/fonts/Baloo_2/Baloo2-Regular.ttf": "20f6d0043a8ab7fd4a6466f6f6611685",
"assets/assets/fonts/Baloo_2/Baloo2-SemiBold.ttf": "61e1563819bc0ab5fc68673fc4909c99",
"assets/assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf": "51066f4d1d33630cd761e8cd0168d7b0",
"assets/assets/fonts/Nunito_Sans/NunitoSans-ExtraBold.ttf": "e6a9e16cac802736f3c92c47d94a52de",
"assets/assets/fonts/Nunito_Sans/NunitoSans-Light.ttf": "3a318cfcc78904616af13303520a69a1",
"assets/assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf": "fb98ed1700e8dfaf0764c11fc36a0a05",
"assets/assets/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf": "9c443ad7c0f391c4854a6b7c0f52788b",
"assets/assets/icons/cad_icon.svg": "20829dcbe14ff3d7c37b5cb1c47cdf3a",
"assets/assets/icons/comment.svg": "219ea84cf95372cd262276a4a203aaad",
"assets/assets/icons/electronics_icon.svg": "6a4885671a2037e830e72c367dbb8aaa",
"assets/assets/icons/hammer.svg": "9a950a4109e7b94b6f8198686842c19d",
"assets/assets/icons/robotics_icon.svg": "059adc4200a50378365fd5b7be7a11b0",
"assets/assets/icons/software_dev_icon.svg": "a855b5c1a9d13808227bb8e5062c809b",
"assets/assets/icons/spark.svg": "cdaf77ceda2e85a5d547837c4669aedc",
"assets/assets/icons/upgrade.svg": "33926adb2022c89f916796e248749c76",
"assets/assets/images/airplaneCad1.png": "abb90eea5d9884bff1f5ba78783b0f2a",
"assets/assets/images/bg.png": "8d8c6783651bf1122acd0303ff46654b",
"assets/assets/images/empty.png": "67ceccb0da9f462f3edac956b5e05540",
"assets/assets/images/jlGame.png": "965550c95c61396cca4af14bae2d0a8b",
"assets/assets/images/myWeb.png": "118f193e8e0fc800e340496a90ee5162",
"assets/assets/images/noteit.png": "aa6659c66688da9a92b537553e401384",
"assets/assets/images/planix.png": "7a0a655eec4df2b48ca1695c9009b64a",
"assets/assets/images/smartRobot.jpg": "0e21f7d76c0c57dbbeba800e1b4c0f65",
"assets/assets/images/swarmRobotics.png": "f0da09ec60d40167a8f5eeeba1f843a2",
"assets/assets/images/unitygame1.png": "87f84a6705be5c7d001a391939c588d5",
"assets/FontManifest.json": "bc90ea413f7466fb88fc24257b5f0ff3",
"assets/fonts/Baloo_2/Baloo2-Bold.ttf": "f57ab981c1dec25a04bea3cce20ea18c",
"assets/fonts/Baloo_2/Baloo2-ExtraBold.ttf": "15e8199eb1b3d423d8642f1837b3a9c4",
"assets/fonts/Baloo_2/Baloo2-Medium.ttf": "cf867a5944fb838010f772a139620a75",
"assets/fonts/Baloo_2/Baloo2-Regular.ttf": "20f6d0043a8ab7fd4a6466f6f6611685",
"assets/fonts/Baloo_2/Baloo2-SemiBold.ttf": "61e1563819bc0ab5fc68673fc4909c99",
"assets/fonts/MaterialIcons-Regular.otf": "a58ac7aa176bdb57aa155eeb349dc740",
"assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf": "51066f4d1d33630cd761e8cd0168d7b0",
"assets/fonts/Nunito_Sans/NunitoSans-ExtraBold.ttf": "e6a9e16cac802736f3c92c47d94a52de",
"assets/fonts/Nunito_Sans/NunitoSans-Light.ttf": "3a318cfcc78904616af13303520a69a1",
"assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf": "fb98ed1700e8dfaf0764c11fc36a0a05",
"assets/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf": "9c443ad7c0f391c4854a6b7c0f52788b",
"assets/icons/comment.svg": "219ea84cf95372cd262276a4a203aaad",
"assets/icons/hammer.svg": "9a950a4109e7b94b6f8198686842c19d",
"assets/icons/spark.svg": "cdaf77ceda2e85a5d547837c4669aedc",
"assets/icons/upgrade.svg": "33926adb2022c89f916796e248749c76",
"assets/images/airplaneCad1.png": "abb90eea5d9884bff1f5ba78783b0f2a",
"assets/images/bg.png": "8d8c6783651bf1122acd0303ff46654b",
"assets/images/empty.png": "67ceccb0da9f462f3edac956b5e05540",
"assets/images/jlGame.png": "965550c95c61396cca4af14bae2d0a8b",
"assets/images/myWeb.png": "118f193e8e0fc800e340496a90ee5162",
"assets/images/noteit.png": "aa6659c66688da9a92b537553e401384",
"assets/images/planix.png": "7a0a655eec4df2b48ca1695c9009b64a",
"assets/images/smartRobot.jpg": "0e21f7d76c0c57dbbeba800e1b4c0f65",
"assets/images/swarmRobotics.png": "f0da09ec60d40167a8f5eeeba1f843a2",
"assets/images/unitygame1.png": "87f84a6705be5c7d001a391939c588d5",
"assets/NOTICES": "2da8261876cbf5ad7813279e24415c42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3e5193b0c5a3d84553ad72b17d322de3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d83ddf7c54a6515f670b67117832b13e",
"/": "d83ddf7c54a6515f670b67117832b13e",
"main.dart.js": "d186241379245d11b3b6163592e49654",
"manifest.json": "601d766ee8a997ca0fecae10c58e50cb",
"version.json": "67a5f2df363ce4b29a56aa1153a9782f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
