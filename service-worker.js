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
    "revision": "f077eedd4162c2cb50957ac8dc1d537f"
  },
  {
    "url": "about/index.html",
    "revision": "d25ca791d6a88edb50c9be94dbcfe27b"
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
    "url": "assets/js/13.630a4a05.js",
    "revision": "e1f02e9079efcf0530f22502993b817d"
  },
  {
    "url": "assets/js/14.cd959ae3.js",
    "revision": "914dc06f139e87239bac05b3508aa7a6"
  },
  {
    "url": "assets/js/15.f6054f5b.js",
    "revision": "7535e897bd9e5253aa11b9d549723d6d"
  },
  {
    "url": "assets/js/16.49ffe79e.js",
    "revision": "793598e2a9be92a44e4d26ada60b69f0"
  },
  {
    "url": "assets/js/17.c85e26da.js",
    "revision": "68d709055e9ee6672f3916bdf96d7c92"
  },
  {
    "url": "assets/js/18.60dfb059.js",
    "revision": "d780f0f2fd13dc53cf0d0f3f4991da0d"
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
    "url": "assets/js/app.a5bc1886.js",
    "revision": "00e308b475ac45a0f26048e61239f79e"
  },
  {
    "url": "assets/js/vendors~flowchart.59293ff2.js",
    "revision": "6d91eb51ec4ef0659e263851c4641ba6"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "6edd2924167ae360892187b54de24ad5"
  },
  {
    "url": "categories/index.html",
    "revision": "b7b7917c646f186184a69de87e4a59de"
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
    "revision": "5c48db3b269843cba9a046c4141f713d"
  },
  {
    "url": "online-tools/index.html",
    "revision": "aa81172c6127ed37ef22d6f849fd3fe1"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "6d42924b67a84f73db59153ce92cf904"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "871481da5820baf5004b9acf4daa7f36"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "2c70bc1727bf3398d43a2380ec9fc715"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "ef38af86d63fff161f767cedfd753077"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "9bea1ffdb9a1ce0ce34a57430618e4dc"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "e8e64e782b5e5eae44c9f9dc847bf470"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "6cea0477178c63fa9a84efb0e2190baf"
  },
  {
    "url": "posts/index.html",
    "revision": "9c947abfb09f1d8d0ab56a375cae59c6"
  },
  {
    "url": "tag/index.html",
    "revision": "088d973f655843a720727d246f8f185c"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "e21903ad314870afcde212c162e6bc1e"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "eb104d318bf39a843aed1ed73c5a643e"
  },
  {
    "url": "timeline/index.html",
    "revision": "263ec429da607fce7d26bfb457eff18d"
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
