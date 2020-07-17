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
    "revision": "bdc104d8516252c4a8ae064c9f4f633f"
  },
  {
    "url": "about/index.html",
    "revision": "ca5ef3ce656e9fe3154d349d6d434114"
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
    "url": "assets/js/14.85c3d0bb.js",
    "revision": "3b4ce30174926e66d057209b3bc55dd5"
  },
  {
    "url": "assets/js/15.f6054f5b.js",
    "revision": "7535e897bd9e5253aa11b9d549723d6d"
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
    "url": "assets/js/app.6e5d5bff.js",
    "revision": "30a3e2a1466cbc2c050d5f9ad338bff9"
  },
  {
    "url": "assets/js/vendors~flowchart.59293ff2.js",
    "revision": "6d91eb51ec4ef0659e263851c4641ba6"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "66194793ba805afc999683c5728a5bda"
  },
  {
    "url": "categories/index.html",
    "revision": "1fd4529c0f32d404dbac87dc898553b6"
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
    "revision": "64b7c72e09ad80c08ae65223722463f1"
  },
  {
    "url": "online-tools/index.html",
    "revision": "958dad96694ef58bd376b18d129d2638"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "6ca8094de03a74ff30d3499f22a9659e"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "4c925062e3e12416d624bd95935cc05c"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "3547900c554166a7f5de4795ef0a28cc"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "dbe48827f1b28504d98d2c5e35304047"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "5b5d083885c4fbdc783eaad0587b681d"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "f03e7399e4b4da052b451825f6a7b5a1"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "ddf4dda6214887835c0be74ba97d96ed"
  },
  {
    "url": "posts/index.html",
    "revision": "8455cb6ff6f3664875006252b46e415e"
  },
  {
    "url": "tag/index.html",
    "revision": "a639d34294d792013074c425b2e4d497"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "d9846d19557a352e9618025a18b806e8"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "f3ab06002081db57b67dd18c27e06166"
  },
  {
    "url": "timeline/index.html",
    "revision": "bb82fbaa839dc4b74325e85ff2c55b36"
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
