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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ed994d8a9960108c55fb75a27775b332"
  },
  {
    "url": "about/index.html",
    "revision": "1af8f37c43bf34122adb76c5c1642861"
  },
  {
    "url": "assets/css/0.styles.3bac0953.css",
    "revision": "c08deb593b10a0d7e9a79edbe344c183"
  },
  {
    "url": "assets/img/home-bg.8e509a21.jpg",
    "revision": "8e509a21c7af5d61f2ff4895ef09c727"
  },
  {
    "url": "assets/js/1.6efcdb11.js",
    "revision": "fad49495acad71964f750812d81d1021"
  },
  {
    "url": "assets/js/10.0c6415c9.js",
    "revision": "6841421814be7589fb8d3d9f0f110134"
  },
  {
    "url": "assets/js/11.255af57d.js",
    "revision": "146e125b9febe9f0009ac8079d854455"
  },
  {
    "url": "assets/js/12.c39fc063.js",
    "revision": "af346b49fc4a2cd257361e3507d6ed49"
  },
  {
    "url": "assets/js/13.ca76e12d.js",
    "revision": "0ebeee98a218a9c6059928256ae43105"
  },
  {
    "url": "assets/js/14.85c3d0bb.js",
    "revision": "3b4ce30174926e66d057209b3bc55dd5"
  },
  {
    "url": "assets/js/15.8b6949e2.js",
    "revision": "9ff84eacc3e7aa5e2ecda4cd9884179f"
  },
  {
    "url": "assets/js/16.98f93dc7.js",
    "revision": "4bed3ae050c3ebd0e8367f0a18348990"
  },
  {
    "url": "assets/js/17.4d0cd18f.js",
    "revision": "c2e9348500e8f37cd28e5cb260fbc04b"
  },
  {
    "url": "assets/js/18.226dd2d1.js",
    "revision": "7ce984d1468868ef94ed89d87dcd27ce"
  },
  {
    "url": "assets/js/19.eeae580d.js",
    "revision": "31270ab40b68dbb65a12f961c3aa78ee"
  },
  {
    "url": "assets/js/20.6b0f40c6.js",
    "revision": "96cded69c7fda1b31473881cbebd3026"
  },
  {
    "url": "assets/js/21.584dc697.js",
    "revision": "94a7e4032b2c899dd04aac9c07beb353"
  },
  {
    "url": "assets/js/22.844edf3d.js",
    "revision": "fdef7c44e153ab2fe26edc7cdc1abe58"
  },
  {
    "url": "assets/js/23.2f183a7d.js",
    "revision": "b6a12f60b01cf42775bee195c19ccd47"
  },
  {
    "url": "assets/js/4.1df743a8.js",
    "revision": "cabcd6f9e375282bfef5fc8ae98eab12"
  },
  {
    "url": "assets/js/5.f10ab7cf.js",
    "revision": "20f77044201b1f9c2013789a7f66a67a"
  },
  {
    "url": "assets/js/6.5190feca.js",
    "revision": "b4517cd52616bc78c5455b860792ffdd"
  },
  {
    "url": "assets/js/7.1bbec6f8.js",
    "revision": "adac7f390930ad11e009375245fd6b13"
  },
  {
    "url": "assets/js/8.c90adf0b.js",
    "revision": "5e803afd9f8a6146cd3cb4285dacb47c"
  },
  {
    "url": "assets/js/9.3a6aa539.js",
    "revision": "95e6df277eb79c38bda1235f5691cf68"
  },
  {
    "url": "assets/js/app.9bae565c.js",
    "revision": "8c1e3c7c27eef07f5b4da6d9f10f8138"
  },
  {
    "url": "assets/js/vendors~flowchart.05fb136d.js",
    "revision": "0abda69029160de57aceedc0a5ef9856"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "7b6a64252c6e17c9fa1d399ffdb11e3a"
  },
  {
    "url": "categories/index.html",
    "revision": "0d6a467cfd7582dddbd1105220a82202"
  },
  {
    "url": "css/aplayer-custom.css",
    "revision": "4ab854222f35b4dfa176b3f25380553e"
  },
  {
    "url": "images/android-icon-192x192.png",
    "revision": "e5f482cf85280a9736e01e623eff192d"
  },
  {
    "url": "images/apple-icon-114x114.png",
    "revision": "e75ce305a6e47796873fd87df177d527"
  },
  {
    "url": "images/apple-icon-120x120.png",
    "revision": "c72749b54a300f14774cbb4c7783b171"
  },
  {
    "url": "images/apple-icon-144x144.png",
    "revision": "4e3f1267b6fb4b25b9b5156c6f14a5c7"
  },
  {
    "url": "images/apple-icon-152x152.png",
    "revision": "a684cce47b88169a00e3f323fe3cf989"
  },
  {
    "url": "images/apple-icon-180x180.png",
    "revision": "1b20d7189c2898d905abe21db5fd303a"
  },
  {
    "url": "images/apple-icon-57x57.png",
    "revision": "0e6ed8e655733eaf2963791f8a9ae69c"
  },
  {
    "url": "images/apple-icon-60x60.png",
    "revision": "c99165bda14c784ec09550950d4b2b77"
  },
  {
    "url": "images/apple-icon-72x72.png",
    "revision": "3272d55d3e03088ae48ed472b7214cce"
  },
  {
    "url": "images/apple-icon-76x76.png",
    "revision": "6cacea4f92a8ae99037a825290459db9"
  },
  {
    "url": "images/avatar.png",
    "revision": "4a3add9980ba13981478da29898ebd40"
  },
  {
    "url": "images/banner-1366x450.jpg",
    "revision": "286d09cb8eda5e3fb3666d2d6781d743"
  },
  {
    "url": "images/favicon-508x508.png",
    "revision": "643841f1935c70b39ee6364fe2b100ec"
  },
  {
    "url": "images/favicon.svg",
    "revision": "ec263efa46b86cdc039d1c0f2993eef8"
  },
  {
    "url": "images/original-banner.jpg",
    "revision": "d25ef3bdf7c40aa6104d924e9314731c"
  },
  {
    "url": "images/original-favicon.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "index.html",
    "revision": "1d829edd69a2698e98a1c3db47e2504c"
  },
  {
    "url": "online-tools/index.html",
    "revision": "e8314eb1588a1901e4ff5face2b30478"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "b19c73f9b3dc19fc26b243f279cd7a2f"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "240ad32c6b6fa5c1637a84fc2f4cd0d5"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "bc5488925e0d54e53380d4679dca97df"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "0ea782b7418d850f6864cb21ff30be17"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "42dfca9b57e4054666185b59bf550234"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "b13237f6ae36ccd6d71e64b9eb5df347"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "c9a421786f9c58061ce825247fb1b66f"
  },
  {
    "url": "posts/index.html",
    "revision": "c25c11508bc30a88c20559daf94b2909"
  },
  {
    "url": "tag/index.html",
    "revision": "1af8eba534fa1a1c093de250eb98329a"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "8849c91f1fe1cc4180b99be5c0468bc0"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "7ed50d4534e7a20667193502b2e2e043"
  },
  {
    "url": "timeline/index.html",
    "revision": "f406b0f417bec242cf782b0bd399b928"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
