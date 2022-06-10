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
    "revision": "47999e064da54ac99ffb3c2721ca7340"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "d1650d6fb54a41b7adedc67f9e5af7d3"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "d9f741c101313030ba045568a50ff9df"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "a273cf44fa301f462b7c104921d14533"
  },
  {
    "url": "icons/android-icon-512x512.png",
    "revision": "8994c7aab37dc89f4a9e8e1c86799d11"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "06e8e0f6805c648a1be2c1333b306518"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "5a82aa0f776d793e0e970ec4ba0758ac"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "9289aad8dd74af971351530c61ad62b7"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "ec2a0a447230b7248e7171f8d48dac79"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "47999e064da54ac99ffb3c2721ca7340"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "80ac3d46d920d25ca9a18660b1ea0762"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "be1bf5b8ca5e4e39db6a0b4ebe5936fd"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "455093d6c01155bbd82dff0faf71d9d2"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "419ffce6eda9de9db2bb754714354c30"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "06e8e0f6805c648a1be2c1333b306518"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "65205d1c52a6bf43ff833f325f6b1a6e"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "b088153df25533e0bc38b372c7965647"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "b088153df25533e0bc38b372c7965647"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "e696ab9cba7a045d021ef9c2d0ab88ec"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "398cd2b4eaaa7c3f7b80fdb64223ac25"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "3ba7a674dbc29bbb296c92d967657f6c"
  },
  {
    "url": "icons/maskable-icon.png",
    "revision": "8994c7aab37dc89f4a9e8e1c86799d11"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "353d232dd207c3a15c14ae988f241732"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "b69483f537972b9d6bca510547c4e25e"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "4bdc93d3144b28c146d815609f31d666"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "88aa01b8eaddcd253120385108b62b6d"
  },
  {
    "url": "framework-b5f90ac3be19fb8a5912.js"
  },
  {
    "url": "styles.4afc1019d51e44cbd1df.css"
  },
  {
    "url": "app-c43b8c42d88a7b6b8b09.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4ae8d7ded9dfa94e9de2c09a18657113"
  },
  {
    "url": "polyfill-a51b0f63c35411c16aba.js"
  },
  {
    "url": "webpack-runtime-d7e945cbcf4cf8650b19.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8aa73df1fd82d7c0f5f863a1485d2ddc"
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
  if (!resources || !(await caches.match(`/app-c43b8c42d88a7b6b8b09.js`))) {
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
