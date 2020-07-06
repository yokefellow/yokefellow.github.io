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
    "revision": "d2d0d47721c62168edcef0e7d731fc19"
  },
  {
    "url": "about/index.html",
    "revision": "3e5e23c7980a59f3e3095f473396053c"
  },
  {
    "url": "assets/css/0.styles.8521561e.css",
    "revision": "dc3148c61a580a5a767f556245d07df4"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.ed863d3b.js",
    "revision": "bd96a1cfaa60549ef11a1508404c8793"
  },
  {
    "url": "assets/js/10.2d38f860.js",
    "revision": "15a69dc0368e1b70b0e642f882a7b98d"
  },
  {
    "url": "assets/js/11.1f361409.js",
    "revision": "bb05c497858ce443a71d487ee7f4c75a"
  },
  {
    "url": "assets/js/12.50fea408.js",
    "revision": "453f3c410b9aea0dede1f24e3abc97ed"
  },
  {
    "url": "assets/js/13.50daba1f.js",
    "revision": "1168908f9c95126cedf46e5968f441a3"
  },
  {
    "url": "assets/js/14.c6f67525.js",
    "revision": "ddfe5d2c53c857234802afa2d18298c5"
  },
  {
    "url": "assets/js/15.9dbdf037.js",
    "revision": "f94bebdf0ac2c9aff0a9e95a302c20f6"
  },
  {
    "url": "assets/js/16.5553a890.js",
    "revision": "7ec90b5c607f5a666daefb983ec6c378"
  },
  {
    "url": "assets/js/17.252048ab.js",
    "revision": "cd973ecca149c6af61c323d7dd68f4bf"
  },
  {
    "url": "assets/js/18.4bd8fe1b.js",
    "revision": "8ff872206d43d390c30f71c4d43b178a"
  },
  {
    "url": "assets/js/19.14b8d6ff.js",
    "revision": "87f68ee7f29b0a71436d3295123e8425"
  },
  {
    "url": "assets/js/20.052fb233.js",
    "revision": "007738dc38a92b02568f8bc65af3162d"
  },
  {
    "url": "assets/js/21.34266c0f.js",
    "revision": "f4fe6323a7baee5d1a469b346fff2f80"
  },
  {
    "url": "assets/js/4.64b9626f.js",
    "revision": "ce047eff363d4c0825f88b93a99026df"
  },
  {
    "url": "assets/js/5.756d3d88.js",
    "revision": "adb2e7da91f1e820505e06503081de99"
  },
  {
    "url": "assets/js/6.42d35879.js",
    "revision": "de645a5d24b2c5cd8104d8938e1deeee"
  },
  {
    "url": "assets/js/7.03417b99.js",
    "revision": "f54479d4a295fd2d82ce8d7bfae89042"
  },
  {
    "url": "assets/js/8.3047bb3a.js",
    "revision": "8d6f667183c91656d81bdcd99024acf9"
  },
  {
    "url": "assets/js/9.2b65c3d2.js",
    "revision": "c60a84ac072f63e9d188d94a74bbf04f"
  },
  {
    "url": "assets/js/app.694af990.js",
    "revision": "9297ed666592fde3f700f27bc59208d4"
  },
  {
    "url": "assets/js/vendors~flowchart.5cc5a19a.js",
    "revision": "6cf2a2fd4b7533a727666918c738fd86"
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
    "revision": "6418ba997a777db0e13fce54769538a7"
  },
  {
    "url": "categories/index.html",
    "revision": "83f515f239ecb46c37cbc956f0e6782f"
  },
  {
    "url": "head.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "index.html",
    "revision": "e36afeaa22dade5e56e6a692cfd09a39"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "049f464874ef2cdf5fef0f2485fb33d0"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "bb310c6365ee7606aaadd9528c7ce15a"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "5c87684dbe2d99dec2bce30f42380662"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "b2066f7a0c60cf793183fca8e5c874ea"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "da6b7855a69abbb1f27a9a2652f2ed50"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "71caee9bb486d27d13ff196dd6a4d9a5"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "6167d0f76065a42a09b883a4adfdb363"
  },
  {
    "url": "posts/index.html",
    "revision": "1893e63db9cc988a581b3352dcbda5b3"
  },
  {
    "url": "tag/index.html",
    "revision": "dc21089a4536c6c8096ecfb2bc9fc5d0"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "d7d16c0ed3a29bad689774ef828e5548"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "e60154499f49f223907fee9c7e6b86a5"
  },
  {
    "url": "timeline/index.html",
    "revision": "3480570abc3cebd8df258f37f216c623"
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
