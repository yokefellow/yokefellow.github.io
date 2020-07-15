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
    "revision": "1a013936c7c3c1c57253a2b49f512ff4"
  },
  {
    "url": "about/index.html",
    "revision": "f33e562df66b696634c35adc60ec36f1"
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
    "url": "assets/js/12.8a5ec875.js",
    "revision": "f2a685410e79f3cd56862db0db252a4c"
  },
  {
    "url": "assets/js/13.3b462f7a.js",
    "revision": "1e87e93ecec1b05a35187965b1c84ec9"
  },
  {
    "url": "assets/js/14.2931c079.js",
    "revision": "b9d7d32e418bcd341597c91db9dcc626"
  },
  {
    "url": "assets/js/15.55db0d6b.js",
    "revision": "720288531b516c0893175afb3c86968a"
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
    "url": "assets/js/app.b66d3c8d.js",
    "revision": "8899b765bcb01a2217f9d7c055165a51"
  },
  {
    "url": "assets/js/vendors~flowchart.e53d555c.js",
    "revision": "b293163f976bec42d1d3e49782e1a65a"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "33d255e3d542ad9e39d2ec852b6fe2fa"
  },
  {
    "url": "categories/index.html",
    "revision": "98f2b91570ed174074659c18a56b1db8"
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
    "revision": "1e0e531fb70ad39bbbb2a00c51108ef1"
  },
  {
    "url": "online-tools/index.html",
    "revision": "ca53af9b62013ea3bd224cc4358bbe18"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "0878dbccb8e5df83d75315ae73e66ca9"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "31bdcd88e432b98eee8c12da924419d4"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "de07f03e24c3906e38b64f133632266a"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "facfffdd2c5f225327374342e3640087"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "fb4255d262a1e9ce19d8754b2b323d92"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "12f8393236267f190aea7f37b1801742"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "c8edd1dcab2d20b5c693257f206322b6"
  },
  {
    "url": "posts/index.html",
    "revision": "6f232e8fa977a7384298a1a6a4cd046a"
  },
  {
    "url": "tag/index.html",
    "revision": "b173eb3d6e4784be58d0233caf6c7be9"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "61acc7a6ed3735489b53e2c34767feb0"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "1d6bbe4ad30a9aefb6ff17b4e11f64f0"
  },
  {
    "url": "timeline/index.html",
    "revision": "914358c8449fe8a8aa9775e0c8aa9834"
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
