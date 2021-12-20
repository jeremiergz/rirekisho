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
    "url": "icons/android-icon-144x144.png",
    "revision": "de9546c77c238b66409e44b30669ea05"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "facb9c3b6cc40b8edc7db6ad1dc88673"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "f789b4678cf40499d6c3e0bd28927b70"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "b1791841564bd2e4fd59181b7a17c104"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "444e18f41f0874a7b27059adc8086bdd"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "112566117438da728db789b1629c1910"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "8ba3f7373b510b46aabe236c4ebcd5d9"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "8c208d9387e8cc17ee65fad74fdeff9f"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "de9546c77c238b66409e44b30669ea05"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "b9ec19154388ce3326eda0f29a44c229"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "84a74ee94915e0c859f9d85e8f72a37a"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "3a2544f22dee4f5e3b51857933a1f7b8"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "605257d71dc950937619fe789745f7c4"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "444e18f41f0874a7b27059adc8086bdd"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "10063437d4a3fba4f84eed3b7db383aa"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "3f5c2120af0e2b08873bf430e459c0ca"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "379cc37059b8353ffba377694ad6c2a2"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "112566117438da728db789b1629c1910"
  },
  {
    "url": "icons/maskable-icon.png",
    "revision": "facb9c3b6cc40b8edc7db6ad1dc88673"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "de9546c77c238b66409e44b30669ea05"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "95745d8392a6c548ec92c79836fc7f6e"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "be2ff1d79df4728992a3a860efbc482d"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "2775ad601a1a3617ced9043494e358a4"
  },
  {
    "url": "framework-1441509b3ef7a6cfe868.js"
  },
  {
    "url": "styles.6a5fa7d650996d14cb03.css"
  },
  {
    "url": "app-0fe0364a1ae7ebaf0d17.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "472695827aef5fdcc0afc39ae23c4131"
  },
  {
    "url": "webpack-runtime-3e71f27be37cf355ea48.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b867a4914300ef258932.js"
  },
  {
    "url": "polyfill-4e5ab3c1af7a5b786aa4.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "513bf26c02702b61dc499e0a91f91fe9"
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
  if (!resources || !(await caches.match(`/app-0fe0364a1ae7ebaf0d17.js`))) {
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
