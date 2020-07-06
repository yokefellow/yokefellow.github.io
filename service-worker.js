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
    "revision": "9897df9e665ba02f3c332aae7fd98c24"
  },
  {
    "url": "about/index.html",
    "revision": "858b9f252005ca2d88b0cde4a6550c53"
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
    "url": "assets/js/app.d6977018.js",
    "revision": "23ca1bb37e3e17a4899a5ae7d21234ea"
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
    "revision": "e635b148c7546bc9260ea2d22fd2aaa9"
  },
  {
    "url": "categories/index.html",
    "revision": "5d562900ce7e2de18736213304c2f0e6"
  },
  {
    "url": "head.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "index.html",
    "revision": "809ada26a46fb1cc6e2e5b17871651f5"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "c08c01d78830622be8960877a804f85d"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "98f7fdaf4f005f920ddfebfb62a8e8ce"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "46a49acd53206b52843310e8eaa9e212"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "5af2c9446e3f7adfbc89209cc7213f67"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "05ce42ef15cb5383fcd511a322f2814f"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "d3f71d025c19943605c5c307478216ed"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "d74a45d4f7d02ca397bd3afd571c39e7"
  },
  {
    "url": "posts/index.html",
    "revision": "c87091223482b9938ee315077ea68962"
  },
  {
    "url": "tag/index.html",
    "revision": "b5d8c2355f53a59aa2982e991372d6fd"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "a9ad21dc67b7d1f9654a01d8135d6baa"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "37f2f7641e7d0ab5d7ae7dfcd4115cd7"
  },
  {
    "url": "timeline/index.html",
    "revision": "2bddeacddd20f53cd48f4a7a9f180de1"
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
