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
    "revision": "a893d8360feafe01ea00f2ad1acaa836"
  },
  {
    "url": "about/index.html",
    "revision": "a075d9f98882d25d2100f05c2188c16b"
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
    "url": "assets/js/13.b680b823.js",
    "revision": "e6f127e4bd9216bdc86fbf468499f1cc"
  },
  {
    "url": "assets/js/14.59e34c2f.js",
    "revision": "0e77e321547e022ddb37413862e09625"
  },
  {
    "url": "assets/js/15.f8ad78cd.js",
    "revision": "b7ffeade3209b603cb4432f039a5173b"
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
    "url": "assets/js/app.d0004145.js",
    "revision": "4e1afaac3a5078526141126624adaf77"
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
    "revision": "ffbec8179075d0fc37e95a73be6a23fd"
  },
  {
    "url": "categories/index.html",
    "revision": "89ff47db34bf716523c53edc803fb8e2"
  },
  {
    "url": "head.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "index.html",
    "revision": "5c07dbee9da63aac3e6fc677e3270d74"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "82692a9efef96e50bed439de4e3f8427"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "241d344618928ecd81e26b28b29e7b63"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "bb8241ff975b2d86d111cdabd0fa57b0"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "551f8783d7e1e576b8d42716313d43e6"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "dc30ce599100cb5fdd92e7695cfe9525"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "abe6599c5145986514f02a20c2ad07d6"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "9e98b77a852120c508814f665873510f"
  },
  {
    "url": "posts/index.html",
    "revision": "480cc8f43b036c100b967adc919bfb63"
  },
  {
    "url": "tag/index.html",
    "revision": "706db29beb912e84e73f6446fb513840"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "47919fcbb4c64a989bbe1e23338de839"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "656766bf22061666f0706051e798e062"
  },
  {
    "url": "timeline/index.html",
    "revision": "371e59eb5faf57970b71fe58676b0349"
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
