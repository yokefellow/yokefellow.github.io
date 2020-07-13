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
    "revision": "71c4398530d39f61cda9820284d2db82"
  },
  {
    "url": "about/index.html",
    "revision": "af82b1eb302c4a6791af174f5e11a6da"
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
    "url": "assets/js/app.29eb9a7d.js",
    "revision": "bcc45651325b139b40bbbfa17befc1cb"
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
    "revision": "7c1ff6b9b135b76f52dcac28c88e472f"
  },
  {
    "url": "categories/index.html",
    "revision": "c44f375a59fa14d1d9e9b9990da431d5"
  },
  {
    "url": "head.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "index.html",
    "revision": "5390227a5a4a87d0019f725e12d9b2a8"
  },
  {
    "url": "online-tools/index.html",
    "revision": "d07071eac3ffbbffe51e50e44ca3c416"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "cceadb17346f8177e3512d666adf89c8"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "3a715f9596f07eb1ff85f7ce65669724"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "cc68ba93d306ac8cb98109312a8aa9a9"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "f933e9063c48248cf87fb69d353d1e75"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "95de62ff71e79722ae04a298e156e412"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "b6968934cc8b67ee8cc806d978ff569d"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "2b80f80f641d45aae6c3905217ed54c4"
  },
  {
    "url": "posts/index.html",
    "revision": "c83492f8e0390fa045f97b34bb88d252"
  },
  {
    "url": "tag/index.html",
    "revision": "67a80105d6ea51d9bac67028b308bc0f"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "81c2fb4333f1acc7419f9628b135eb54"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "1e3687a2e5568fae61da9fccf3e91655"
  },
  {
    "url": "timeline/index.html",
    "revision": "87f192069bf084869254f14039a34feb"
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
