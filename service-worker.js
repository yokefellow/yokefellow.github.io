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
    "revision": "20a2e3dedb9553f8c5a685eca7350a7d"
  },
  {
    "url": "about/index.html",
    "revision": "ff970fc47eaedce12cbae6a426c894bd"
  },
  {
    "url": "assets/css/0.styles.b66e4785.css",
    "revision": "94df3c7afdc1f75a48388477f8f8407d"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.f2a211a3.js",
    "revision": "d364a3b728040763f81510099c1cf81b"
  },
  {
    "url": "assets/js/10.935311d5.js",
    "revision": "769226a853465e18f60e1d6bba1b9c94"
  },
  {
    "url": "assets/js/11.270479b8.js",
    "revision": "c47f96b88b51c71595313fea082dbcc2"
  },
  {
    "url": "assets/js/12.db578429.js",
    "revision": "63f0e31153138c93e4b43b09693d1cd9"
  },
  {
    "url": "assets/js/13.575eb2f1.js",
    "revision": "3580587a14209e0d8a8becf54168c96b"
  },
  {
    "url": "assets/js/14.42a9508d.js",
    "revision": "964b98e8faa9e09b2291ca7697c3656d"
  },
  {
    "url": "assets/js/15.ca12d5af.js",
    "revision": "00a2722eb09dc50cb890153c3e77a72f"
  },
  {
    "url": "assets/js/16.81823241.js",
    "revision": "e2a966565eb6aebc63b31b1c0db813b4"
  },
  {
    "url": "assets/js/17.94087c25.js",
    "revision": "f7bd5a6ce3643b2b9401001c9ed97b8b"
  },
  {
    "url": "assets/js/18.db67f4bb.js",
    "revision": "81a897666cd126da6b9b7db091538e1c"
  },
  {
    "url": "assets/js/19.fa26d72b.js",
    "revision": "396703777e8804192f9a264abc702d6d"
  },
  {
    "url": "assets/js/20.d54ae79f.js",
    "revision": "811ce175fdaf3352936d9fc55dcdf3d3"
  },
  {
    "url": "assets/js/21.74f0005b.js",
    "revision": "3d58d5e1acdfbe885953ffacf9b453fb"
  },
  {
    "url": "assets/js/22.ffc4d344.js",
    "revision": "b7cf764e7496b56768631f50ade731f9"
  },
  {
    "url": "assets/js/4.17853fab.js",
    "revision": "5c1a26a175d70aa180e2814f180146c2"
  },
  {
    "url": "assets/js/5.36540c5c.js",
    "revision": "4a42b123f715f81e8e5f4477eb48f7b8"
  },
  {
    "url": "assets/js/6.39950f73.js",
    "revision": "eb3d95386d66720b38bb10165d719da5"
  },
  {
    "url": "assets/js/7.aadd55a8.js",
    "revision": "5912f1c5afa55458e0fe52c045d8b203"
  },
  {
    "url": "assets/js/8.866914f8.js",
    "revision": "fcfdb079ff612ee071d03d327ad11b9d"
  },
  {
    "url": "assets/js/9.340448fd.js",
    "revision": "7b0359e26d9aff62e73a63f4130b0d56"
  },
  {
    "url": "assets/js/app.99684b0c.js",
    "revision": "ef06677823de2d52d2354f1ae256a908"
  },
  {
    "url": "assets/js/vendors~flowchart.e53d555c.js",
    "revision": "b293163f976bec42d1d3e49782e1a65a"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "8c654d059f70ab8653b50b0d6a9a3e5e"
  },
  {
    "url": "categories/index.html",
    "revision": "5444141c5ad06a3a8754942bf8c5c871"
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
    "revision": "320b11df3a960f2ba1d1cd169c0694d7"
  },
  {
    "url": "online-tools/index.html",
    "revision": "cf4bfcfc96061805ef507d65c0f69c90"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "25940e493f35b2d8a748b400bc776a18"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "61201d1d2b580b2e5d9cbfcb4fb35d44"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "a7a7e4873cb800a29085789923afd73e"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "dedfd71bdbfb3fc6023cde296565d566"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "3bdc01db6f8f941e23239eccb2e4e536"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "66900b6c4b024565b61bcfd8c267c684"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "2647f876931c07e759ea927c02492d8a"
  },
  {
    "url": "posts/index.html",
    "revision": "08a42000d259034cd4e5bc411bf75071"
  },
  {
    "url": "tag/index.html",
    "revision": "1d8dc8e32c5e5774111730ae753b876c"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "6880d2b40dfc8cb62cff51612dde32ad"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "43391690b262333b8c214d66755f3ef2"
  },
  {
    "url": "timeline/index.html",
    "revision": "782152257a86e42b0f035a016c79d43c"
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
