!function(){"use strict";const e=["client/client.e5cc89ac.js","client/index.d7d49a0b.js","client/client.d499a1d8.js"].concat(["service-worker-index.html","media/1F44B.svg","media/favicon.png","media/portrait.png","sitemap.txt"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586232561375").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586232561375"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586232561375").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
