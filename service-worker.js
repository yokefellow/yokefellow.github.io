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
    "revision": "54f1dabee67ca7959b09e9b3dab92b50"
  },
  {
    "url": "about/index.html",
    "revision": "ded186639d411fd544b60867a394d290"
  },
  {
    "url": "assets/css/0.styles.19df921b.css",
    "revision": "dc3148c61a580a5a767f556245d07df4"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.8eda513c.js",
    "revision": "7c2dd9aaa9f027be565b0f55b7702420"
  },
  {
    "url": "assets/js/10.b04dad0e.js",
    "revision": "208e50531fe0766189adb84cf0c5b93a"
  },
  {
    "url": "assets/js/11.9a8a8f47.js",
    "revision": "da946f102956c6a8874b24a40c086835"
  },
  {
    "url": "assets/js/12.7e9356a8.js",
    "revision": "f2a685410e79f3cd56862db0db252a4c"
  },
  {
    "url": "assets/js/13.59b79bf7.js",
    "revision": "1701e7c8967dc0caf83a1333be873612"
  },
  {
    "url": "assets/js/14.3015ea6b.js",
    "revision": "5ab5acc0dfd6ba46f77c2bb6540a8bbb"
  },
  {
    "url": "assets/js/15.c13c2850.js",
    "revision": "285f64de20d658a78e877b814a782552"
  },
  {
    "url": "assets/js/16.7d96926a.js",
    "revision": "e76e8691b7f8a52efbb04e662b0b9d67"
  },
  {
    "url": "assets/js/17.80275dc2.js",
    "revision": "713cc375cb072b72032f4bc12c8039c9"
  },
  {
    "url": "assets/js/18.312b4ba4.js",
    "revision": "387e2d988ac55a788397111a417fb590"
  },
  {
    "url": "assets/js/19.b1d69ced.js",
    "revision": "87b4c6cec160d31c4c9bec8518b6b5d4"
  },
  {
    "url": "assets/js/20.9d2477ee.js",
    "revision": "ae2cad375696e887020494522a1d038d"
  },
  {
    "url": "assets/js/21.87dee99a.js",
    "revision": "c2786ae7f4fdca36721a7b7daf021728"
  },
  {
    "url": "assets/js/22.6dc3980f.js",
    "revision": "b1073440c66722c531e49a567513a190"
  },
  {
    "url": "assets/js/4.696bc782.js",
    "revision": "ec2a27494762245293f5afac082e06a9"
  },
  {
    "url": "assets/js/5.89b62738.js",
    "revision": "55f26e1d827717e75c844041cc58025f"
  },
  {
    "url": "assets/js/6.61f6e72e.js",
    "revision": "9a910c92d24188894acb2addf873c58b"
  },
  {
    "url": "assets/js/7.5fb34369.js",
    "revision": "c3dc890dea910222dc6911d959eb40f2"
  },
  {
    "url": "assets/js/8.49f7d16d.js",
    "revision": "59ed086c07ef035e6bb0612cf5dc2ba4"
  },
  {
    "url": "assets/js/9.6bf14519.js",
    "revision": "8fba2fc991e36e6838685a556c8c5b1a"
  },
  {
    "url": "assets/js/app.a01b1a14.js",
    "revision": "c9887aaab50de8e619fdd6310e4ad676"
  },
  {
    "url": "assets/js/vendors~flowchart.a44968fa.js",
    "revision": "e6a7f521a8f9e50b73da8f689c120885"
  },
  {
    "url": "avatar.png",
    "revision": "4a3add9980ba13981478da29898ebd40"
  },
  {
    "url": "banner.jpg",
    "revision": "d25ef3bdf7c40aa6104d924e9314731c"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "a3c01d84ba62303f646b13ab862a00e8"
  },
  {
    "url": "categories/index.html",
    "revision": "88bd4566b4679506b1288400ad5101c2"
  },
  {
    "url": "head.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "index.html",
    "revision": "cb72517d4ad8350ea0ba3507c6fdbd07"
  },
  {
    "url": "online-tools/index.html",
    "revision": "c32b659863ed6a34b82d889e91e0041f"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "d7e38543dc0fd72b602d8ced9a239e9e"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "4fb0ee0895669ee7150289de1820c5b4"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "968b194c2e6b02e772793aa8e0aeb050"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "8cc6fb416c07ef3c020976f4dc75597e"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "c5b2fc3f19e10b6916c78ae4bfb821c1"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "b5bd97efc6d2b4121f7ed4aa58d30d60"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "b039f08e4ea1342a6d7a52974eaefd47"
  },
  {
    "url": "posts/index.html",
    "revision": "c663b95a29b6efa6ca23c90f3a999c45"
  },
  {
    "url": "tag/index.html",
    "revision": "8805c65839a32e7d3c94678a086b2fb8"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "7778e0d3fe19beec42dde5e111012852"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "f9ed5feaf3b16e6780d250ff2dc41c58"
  },
  {
    "url": "timeline/index.html",
    "revision": "1acb960bc5d59cc41c0143a3ffbe9c89"
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
