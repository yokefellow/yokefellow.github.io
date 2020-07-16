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
    "revision": "e428afba4f9feed12ac6856042452b98"
  },
  {
    "url": "about/index.html",
    "revision": "bc2de5874c2ad3ab276b719ef51d5a8b"
  },
  {
    "url": "assets/css/0.styles.dec98ccd.css",
    "revision": "f57c99adff5434a60b3e0cad180bfe00"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.cb68da62.js",
    "revision": "d8bc8c54897ff6eab7ec61b3dcbd6515"
  },
  {
    "url": "assets/js/10.8b25341e.js",
    "revision": "718d5c79338c4da8a06edb20e534fc4d"
  },
  {
    "url": "assets/js/11.80153c71.js",
    "revision": "5084107286835c5bfff0d6d2fd958115"
  },
  {
    "url": "assets/js/12.48e3eac9.js",
    "revision": "7315081f47448014a98e1f80708ea65d"
  },
  {
    "url": "assets/js/13.09027f1d.js",
    "revision": "a055502583f1fbf0866b28ba3d37c1df"
  },
  {
    "url": "assets/js/14.e6ff704b.js",
    "revision": "d00e6c7e1c2aaeffe3c171c416fd5af2"
  },
  {
    "url": "assets/js/15.214077f2.js",
    "revision": "f3a75406d5531266173fede15efb821b"
  },
  {
    "url": "assets/js/16.aa530102.js",
    "revision": "19eb2b5d2ec0d3b4645d5cbcd4f2a2c3"
  },
  {
    "url": "assets/js/17.e82b7fab.js",
    "revision": "e25617f7243a04ba7e0002d786f41ab7"
  },
  {
    "url": "assets/js/18.badf53f3.js",
    "revision": "5d0c97f552e89d926075d0d2e5a49e91"
  },
  {
    "url": "assets/js/19.f3ae8efb.js",
    "revision": "be83049239eb98531a0a7335b19efd89"
  },
  {
    "url": "assets/js/20.c2819061.js",
    "revision": "906ea2dd3e94e83a761a119b011cba44"
  },
  {
    "url": "assets/js/21.9da2cc76.js",
    "revision": "fbc8e7d2494a44409feed66ff93b175e"
  },
  {
    "url": "assets/js/22.082bb66a.js",
    "revision": "413ef90d01c9cb83d688ff85e1a9b7f7"
  },
  {
    "url": "assets/js/23.1a693d0f.js",
    "revision": "5f34588cbe5b4569d0fc49ff17baf83b"
  },
  {
    "url": "assets/js/4.4ab570d3.js",
    "revision": "4702640821cc0746b8c956cf3e728933"
  },
  {
    "url": "assets/js/5.01957f68.js",
    "revision": "4dc79632ccea823d4211a1c6ca12db83"
  },
  {
    "url": "assets/js/6.4bb2c504.js",
    "revision": "cafea64ebba6d9a356734d59245d3a54"
  },
  {
    "url": "assets/js/7.1b0eb3c3.js",
    "revision": "800c38d84710f764266c5dc34adeb504"
  },
  {
    "url": "assets/js/8.81bb44ca.js",
    "revision": "62ecb9fa936c1bdf8e6f8330181beda6"
  },
  {
    "url": "assets/js/9.e199b533.js",
    "revision": "d5aa70957ea1f16358716410c100928c"
  },
  {
    "url": "assets/js/app.6d02f427.js",
    "revision": "757cbb5f4771a6174a94865f54b8eb30"
  },
  {
    "url": "assets/js/vendors~flowchart.59293ff2.js",
    "revision": "6d91eb51ec4ef0659e263851c4641ba6"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "f0d5962e86a2c26be72ab549e2202de1"
  },
  {
    "url": "categories/index.html",
    "revision": "8eb5dff20ec4227070e0ea8a94aa63d5"
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
    "revision": "696413075e012c1a73f49adf904fec6a"
  },
  {
    "url": "online-tools/index.html",
    "revision": "209a1a28abcf133f1404d4b5d0618d7c"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "69269f874d0323edf9d9d5374cfa77c6"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "c84662d1b44e0dbfac2a11376ecb590f"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "73aace3861573387baee970dda9ce052"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "8c09027d8204d0a35e361e9f2abc7777"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "217cb277a12167312960233dea540662"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "25cccbcf57a6584c9f446b7c6dd683f1"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "85896b092ba70daa12f88b1af0e02b28"
  },
  {
    "url": "posts/index.html",
    "revision": "49d163afaaf799910b6d61cfe9459c84"
  },
  {
    "url": "tag/index.html",
    "revision": "fbd29d433f55da63250c2e8eb28aeab7"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "818b0e090c04530531a4ac1154bdf416"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "14d789fbb8cc7b8ffa9e9175710b293c"
  },
  {
    "url": "timeline/index.html",
    "revision": "84501ddd02756cecfcc06b74e77ad756"
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
