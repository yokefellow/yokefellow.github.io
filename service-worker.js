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
    "revision": "bf5e0a6e28b6231e8fc27d5590b412d9"
  },
  {
    "url": "about/index.html",
    "revision": "32e25a406966499b4e6863b0158a0cc4"
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
    "url": "assets/js/1.3c923252.js",
    "revision": "547a97d69a8afa7633bf6a0943452af6"
  },
  {
    "url": "assets/js/10.8b25341e.js",
    "revision": "718d5c79338c4da8a06edb20e534fc4d"
  },
  {
    "url": "assets/js/11.3d50b3a5.js",
    "revision": "77bc8569b79a3d601a55b2d21b9d6980"
  },
  {
    "url": "assets/js/12.7ea7428d.js",
    "revision": "7315081f47448014a98e1f80708ea65d"
  },
  {
    "url": "assets/js/13.62b17f4a.js",
    "revision": "a055502583f1fbf0866b28ba3d37c1df"
  },
  {
    "url": "assets/js/14.d2eb5737.js",
    "revision": "d00e6c7e1c2aaeffe3c171c416fd5af2"
  },
  {
    "url": "assets/js/15.526922e6.js",
    "revision": "f3a75406d5531266173fede15efb821b"
  },
  {
    "url": "assets/js/16.41832590.js",
    "revision": "19eb2b5d2ec0d3b4645d5cbcd4f2a2c3"
  },
  {
    "url": "assets/js/17.c85e26da.js",
    "revision": "68d709055e9ee6672f3916bdf96d7c92"
  },
  {
    "url": "assets/js/18.e114a9c5.js",
    "revision": "5d0c97f552e89d926075d0d2e5a49e91"
  },
  {
    "url": "assets/js/19.ede6abe1.js",
    "revision": "be83049239eb98531a0a7335b19efd89"
  },
  {
    "url": "assets/js/20.8a93dda2.js",
    "revision": "4218a87abbcae851b7ff981131636cf6"
  },
  {
    "url": "assets/js/21.a54ac38c.js",
    "revision": "fbc8e7d2494a44409feed66ff93b175e"
  },
  {
    "url": "assets/js/22.aae9420d.js",
    "revision": "413ef90d01c9cb83d688ff85e1a9b7f7"
  },
  {
    "url": "assets/js/23.1a693d0f.js",
    "revision": "5f34588cbe5b4569d0fc49ff17baf83b"
  },
  {
    "url": "assets/js/4.d1df27a7.js",
    "revision": "54f20ecf8990dcce8d2e19ca9f17b97c"
  },
  {
    "url": "assets/js/5.20672a03.js",
    "revision": "702405219efb9c5f9b7a82075a1b136c"
  },
  {
    "url": "assets/js/6.54f4ed01.js",
    "revision": "89d03f3a278e0124c805225c482d6b49"
  },
  {
    "url": "assets/js/7.c6bb78c9.js",
    "revision": "36bb3b5c01ed0157bddd76721915746a"
  },
  {
    "url": "assets/js/8.445e57a5.js",
    "revision": "62ecb9fa936c1bdf8e6f8330181beda6"
  },
  {
    "url": "assets/js/9.b9477ac5.js",
    "revision": "2a1a59ab303e02561e07ab653de6d90c"
  },
  {
    "url": "assets/js/app.f299853c.js",
    "revision": "a7b89a04a96b04037d011f66cf5f755d"
  },
  {
    "url": "assets/js/vendors~flowchart.59293ff2.js",
    "revision": "6d91eb51ec4ef0659e263851c4641ba6"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "a7eaec87fc6a80929739c07722ee25a6"
  },
  {
    "url": "categories/index.html",
    "revision": "d4312de89ae11b36b09ddd3250ecbfbf"
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
    "revision": "927b47ba9faf1de48e85635b4453262b"
  },
  {
    "url": "online-tools/index.html",
    "revision": "4707c065bb84059e344ca8dd1cec5a8b"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "f561040eadb417e01e34643afd480070"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "8f6757c5811592402572a08212838a2e"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "ecde34ab4d11ae60618bbbcb5b770e07"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "2bf946453e50826a005dfcf9d303b0e4"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "59b121d309e44646c9d682afa70a4621"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "5960cd5b2015bf83b532ef368f6df665"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "cd9d2d3729d1eec96ee5bfa9e7bdb5bb"
  },
  {
    "url": "posts/index.html",
    "revision": "f8b2939ff9cb376bf71df98aec02464c"
  },
  {
    "url": "tag/index.html",
    "revision": "f1481e89fe36ee0755c857ab2aff317e"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "3bd630d9e1f189e629809d7b75311a40"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "27b4b8db62e1d4728e08bbe27ae97f93"
  },
  {
    "url": "timeline/index.html",
    "revision": "41f3306641b87a8213aca793c87ab15f"
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
