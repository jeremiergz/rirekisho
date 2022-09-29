/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "icons/icon-144x144.png",
    "revision": "8f133d3d2099f5cb88018255fbaba83b"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "3c076329dc84f398901f422608eb85bd"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "053e3e68a7d581405af5715d0fdf4faf"
  },
  {
    "url": "icons/icon-36x36.png",
    "revision": "80d911d4c4d92f22387126eb9ae4eb93"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "7f069506cad38f9e0573ddf4c9214d30"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "f815b7f63e8dab7bcf05a4e254ac0a56"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "d689a479af93855b7b16eb3cde41fe4e"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "4c0a14f46ad96bf454527b5f542fd7ad"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "affd5944a3ad8bb363fdf8542346cfd3"
  },
  {
    "url": "icons/maskable-icon.png",
    "revision": "d689a479af93855b7b16eb3cde41fe4e"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "b7213cdc5c9502a3df470e498cb5d7ef"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "c86f92f9dbf49d453aba15fb25d5fea2"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "7b71ff13b89bb7eb3a4cf5e0a1414ac8"
  },
  {
    "url": "framework-3b59f6229c1dc1a7fb6d.js"
  },
  {
    "url": "styles.64c163556a87ac6aecd4.css"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-2bc2c73837df261ae1d3.js"
  },
  {
    "url": "app-933ba768a223a849c113.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "87e4a9c9065c8635bbd54a3054895712"
  },
  {
    "url": "polyfill-e333c6ee7959e4555ec6.js"
  },
  {
    "url": "webpack-runtime-91c5612ff0fd42499142.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "2d34d3d90ef0fb3989d40bec68ce5708"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-933ba768a223a849c113.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
