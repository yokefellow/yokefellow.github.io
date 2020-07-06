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
    "revision": "60e6a9e3fd68ea3670bf5b196f19af7d"
  },
  {
    "url": "about/index.html",
    "revision": "e46569cd1192a893012588e3b2eb3b00"
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
    "url": "assets/js/10.f1cc25f3.js",
    "revision": "def23cce92b14e6d24beb1a118ab0f56"
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
    "url": "assets/js/13.150afa6d.js",
    "revision": "f9b69a4194648edaf9ba125c0f3e478e"
  },
  {
    "url": "assets/js/14.43d7874a.js",
    "revision": "5ab5acc0dfd6ba46f77c2bb6540a8bbb"
  },
  {
    "url": "assets/js/15.dc0cfde0.js",
    "revision": "f6c74b6b7a272495607f3c2145565e3f"
  },
  {
    "url": "assets/js/16.56d5be12.js",
    "revision": "ba5851ddb76151c10ec2753820d60035"
  },
  {
    "url": "assets/js/17.2da7976f.js",
    "revision": "713cc375cb072b72032f4bc12c8039c9"
  },
  {
    "url": "assets/js/18.d352379d.js",
    "revision": "1b222df13e1d744fb568ad34e1c9f9b6"
  },
  {
    "url": "assets/js/19.69215946.js",
    "revision": "260e46c17595c8ad4af3839577a8ef57"
  },
  {
    "url": "assets/js/20.73e60ffe.js",
    "revision": "5831616bbc146d653cb19fc816784252"
  },
  {
    "url": "assets/js/21.dce0d10d.js",
    "revision": "8fb3c3325f57553ee63b9e2a03f899a3"
  },
  {
    "url": "assets/js/4.d5336734.js",
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
    "url": "assets/js/app.12f31161.js",
    "revision": "230ffdbad50871445ad1f97887ae3b7a"
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
    "revision": "88f0b4e2f396dc4d0a07a71b64904853"
  },
  {
    "url": "categories/index.html",
    "revision": "c0249de337f904b39bbfb7926e6d1bbb"
  },
  {
    "url": "head.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "index.html",
    "revision": "83e8e4e8ee5c25c0d9c97a691de9e6b3"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "f369c10b853392ce8d124e2f1f4f3f2d"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "bd38312f3663d4c117874b8642c89909"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "d600dff747d809c41da6b79f4c32f209"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "ee1c014f30f7ec1e964b5f9913f1955a"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "c46bb07d4a6a15f8d904e0bce4cdc985"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "0adcc752e6da5bce4d42efca27d0ad87"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "bea2cdffb293370914eab81fa98b4a93"
  },
  {
    "url": "posts/index.html",
    "revision": "e436843a4935cd3797cf05cbbe80d5e8"
  },
  {
    "url": "tag/index.html",
    "revision": "2c6431bd6da35cb1c6f9f4596cc52640"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "0825d00d0a9a472a68bd131994e7b8ad"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "8cfa43048b6f45738f4757f8f2c56a89"
  },
  {
    "url": "timeline/index.html",
    "revision": "25d36e941971aea4852fa4956f1b7bdf"
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
