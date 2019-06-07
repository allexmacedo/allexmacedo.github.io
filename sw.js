importScripts('/allexmacedo.github.io/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/allexmacedo.github.io/_nuxt/0eab488cc901252f33c3.js",
    "revision": "621db2b4953157c468a8e419efcc90bc"
  },
  {
    "url": "/allexmacedo.github.io/_nuxt/17daa6569f7016c58885.js",
    "revision": "d3904e0974c53ebfedff050d07079b89"
  },
  {
    "url": "/allexmacedo.github.io/_nuxt/23f2dc3596b4e52bb0ae.js",
    "revision": "94fbe854fd924e843d64037b34b1a5fc"
  },
  {
    "url": "/allexmacedo.github.io/_nuxt/370def7f88ebba0aadde.js",
    "revision": "58af80208417c137b8c14f7ff1e26cc5"
  },
  {
    "url": "/allexmacedo.github.io/_nuxt/6679d099ddbfaec78fd2.js",
    "revision": "5a47f42803181cbe03650d10fb9bb733"
  }
], {
  "cacheId": "allexmacedo.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/allexmacedo.github.io/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/allexmacedo.github.io/.*'), workbox.strategies.networkFirst({}), 'GET')
