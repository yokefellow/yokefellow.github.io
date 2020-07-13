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
    "revision": "12db32c4b0a41b1db4eb33f6c9539810"
  },
  {
    "url": "about/index.html",
    "revision": "8a1fb153196f8e7fea5b14c3a747d7a1"
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
    "url": "assets/js/1.0527e5ae.js",
    "revision": "7c2dd9aaa9f027be565b0f55b7702420"
  },
  {
    "url": "assets/js/10.b04dad0e.js",
    "revision": "208e50531fe0766189adb84cf0c5b93a"
  },
  {
    "url": "assets/js/11.26739087.js",
    "revision": "dbfe47de46a014ea092bf32566fd0b01"
  },
  {
    "url": "assets/js/12.2332a042.js",
    "revision": "7007eb66d238a3c4af1a56f674b78958"
  },
  {
    "url": "assets/js/13.26fa9203.js",
    "revision": "3362415d9d5deac020015d2867752159"
  },
  {
    "url": "assets/js/14.5ca21068.js",
    "revision": "b7b307cff664ab8abee3a92f89577c3a"
  },
  {
    "url": "assets/js/15.1870931b.js",
    "revision": "d672d68dca812ecd0abe2d6c0f471c04"
  },
  {
    "url": "assets/js/16.a9e667c8.js",
    "revision": "801b1f269bff0140ede5747ab004ad2e"
  },
  {
    "url": "assets/js/17.7137e510.js",
    "revision": "713cc375cb072b72032f4bc12c8039c9"
  },
  {
    "url": "assets/js/18.5a01d95b.js",
    "revision": "387e2d988ac55a788397111a417fb590"
  },
  {
    "url": "assets/js/19.fde7b6dc.js",
    "revision": "87b4c6cec160d31c4c9bec8518b6b5d4"
  },
  {
    "url": "assets/js/20.ca64dd2e.js",
    "revision": "ae2cad375696e887020494522a1d038d"
  },
  {
    "url": "assets/js/21.cb488efb.js",
    "revision": "c2786ae7f4fdca36721a7b7daf021728"
  },
  {
    "url": "assets/js/22.6dc3980f.js",
    "revision": "b1073440c66722c531e49a567513a190"
  },
  {
    "url": "assets/js/4.9249c941.js",
    "revision": "ec2a27494762245293f5afac082e06a9"
  },
  {
    "url": "assets/js/5.0741b8a6.js",
    "revision": "55f26e1d827717e75c844041cc58025f"
  },
  {
    "url": "assets/js/6.af9537c9.js",
    "revision": "9a910c92d24188894acb2addf873c58b"
  },
  {
    "url": "assets/js/7.09b13b19.js",
    "revision": "c3dc890dea910222dc6911d959eb40f2"
  },
  {
    "url": "assets/js/8.646e3c5c.js",
    "revision": "59ed086c07ef035e6bb0612cf5dc2ba4"
  },
  {
    "url": "assets/js/9.e19b469b.js",
    "revision": "8fba2fc991e36e6838685a556c8c5b1a"
  },
  {
    "url": "assets/js/app.302d4290.js",
    "revision": "c8ee55cc5260bf028548ebd8806496a2"
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
    "revision": "d59fca038e002f4fe3822f86dbb5b563"
  },
  {
    "url": "categories/index.html",
    "revision": "41f9411429c7d300ed840d804b6f9860"
  },
  {
    "url": "head.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "index.html",
    "revision": "16241cbad2c025a65f740ca9ce739f2b"
  },
  {
    "url": "online-tools/index.html",
    "revision": "5357c9334062e133bd408ddc7299109e"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "fdc4cdfc074ffdd53de7f75e5c780c0a"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "839782d39df5c753f9d03c1ea11e147e"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "401a6d8dac20410dd73800efb8ac36d8"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "ca245ba08c38ceafe33d06ac44562ee9"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "22960962e79d270b4578864ec2675641"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "17f5ccb6aa85771d6dcb3dc00f244b9f"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "4fee124d9403936401df00e3d4b2a340"
  },
  {
    "url": "posts/index.html",
    "revision": "1b68a1fc8cb44c1fb2cc9f7315a13cad"
  },
  {
    "url": "tag/index.html",
    "revision": "9c2d578a29cfd8fde81fc253eef719b1"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "4050d0d576b563b7ea96cf63d42ca3d0"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "bf394032f7433c51ea5c604e6e441563"
  },
  {
    "url": "timeline/index.html",
    "revision": "a0be7a565372e200484a4a08d7e11544"
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
