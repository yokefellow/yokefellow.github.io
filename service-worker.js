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
    "revision": "f8389274ed03a5053aa142ba1106c054"
  },
  {
    "url": "about/index.html",
    "revision": "a1d7a4498a7246f1e4942acdf089ca55"
  },
  {
    "url": "assets/css/0.styles.b66e4785.css",
    "revision": "94df3c7afdc1f75a48388477f8f8407d"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.5da8bfeb.js",
    "revision": "d364a3b728040763f81510099c1cf81b"
  },
  {
    "url": "assets/js/10.f673d627.js",
    "revision": "769226a853465e18f60e1d6bba1b9c94"
  },
  {
    "url": "assets/js/11.6c61d283.js",
    "revision": "c47f96b88b51c71595313fea082dbcc2"
  },
  {
    "url": "assets/js/12.0e912e7c.js",
    "revision": "63f0e31153138c93e4b43b09693d1cd9"
  },
  {
    "url": "assets/js/13.d67b561a.js",
    "revision": "3580587a14209e0d8a8becf54168c96b"
  },
  {
    "url": "assets/js/14.e08d3b86.js",
    "revision": "964b98e8faa9e09b2291ca7697c3656d"
  },
  {
    "url": "assets/js/15.f4144f05.js",
    "revision": "00a2722eb09dc50cb890153c3e77a72f"
  },
  {
    "url": "assets/js/16.c185d1f7.js",
    "revision": "5eea44dcf3271af052882ffd1345661b"
  },
  {
    "url": "assets/js/17.1166e739.js",
    "revision": "f7bd5a6ce3643b2b9401001c9ed97b8b"
  },
  {
    "url": "assets/js/18.01fefb3f.js",
    "revision": "81a897666cd126da6b9b7db091538e1c"
  },
  {
    "url": "assets/js/19.3bacc23a.js",
    "revision": "396703777e8804192f9a264abc702d6d"
  },
  {
    "url": "assets/js/20.d56b33d0.js",
    "revision": "811ce175fdaf3352936d9fc55dcdf3d3"
  },
  {
    "url": "assets/js/21.085dedfe.js",
    "revision": "3d58d5e1acdfbe885953ffacf9b453fb"
  },
  {
    "url": "assets/js/22.ffc4d344.js",
    "revision": "b7cf764e7496b56768631f50ade731f9"
  },
  {
    "url": "assets/js/4.917ea107.js",
    "revision": "5c1a26a175d70aa180e2814f180146c2"
  },
  {
    "url": "assets/js/5.73135302.js",
    "revision": "4a42b123f715f81e8e5f4477eb48f7b8"
  },
  {
    "url": "assets/js/6.31ad6bf4.js",
    "revision": "eb3d95386d66720b38bb10165d719da5"
  },
  {
    "url": "assets/js/7.7a680c4c.js",
    "revision": "5912f1c5afa55458e0fe52c045d8b203"
  },
  {
    "url": "assets/js/8.32b8ab04.js",
    "revision": "fcfdb079ff612ee071d03d327ad11b9d"
  },
  {
    "url": "assets/js/9.340448fd.js",
    "revision": "7b0359e26d9aff62e73a63f4130b0d56"
  },
  {
    "url": "assets/js/app.22ffce57.js",
    "revision": "61c7b5bce8fa426f2d7e45ad42e63458"
  },
  {
    "url": "assets/js/vendors~flowchart.e53d555c.js",
    "revision": "b293163f976bec42d1d3e49782e1a65a"
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
    "revision": "c7dbbc6ffcd17449526e6d1cbe9d547f"
  },
  {
    "url": "categories/index.html",
    "revision": "b05a214eabc0451c7b2efbbeada46d46"
  },
  {
    "url": "head.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "index.html",
    "revision": "c1a0f60fb2b4939d668b8d0859eac741"
  },
  {
    "url": "online-tools/index.html",
    "revision": "d247b6f2b941d9fcb94eb34327cf0dff"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "6191dd7632d1b2a0c7020082af2bb096"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "8375b2be802e466c7755c8903be789dc"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "47692eacb95697330351b207a28d25a9"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "7a8516f02e7cb28031aed99ffc49b09b"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "6f7d9a36faff6decbf09b21c1be3c5ea"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "7e694e082a9d66671a1cf99c152cfdf4"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "b8a4f3a5e37a3b3e3698ded5bf15bf62"
  },
  {
    "url": "posts/index.html",
    "revision": "247ac3e4d8943bf0685cbe2daa35c4df"
  },
  {
    "url": "tag/index.html",
    "revision": "86f6091727302d3116b020a134c6aa3f"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "247afacd698aba0c104bfbbb24b593a0"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "0a7bdc331538f87a13e65a902cdd68de"
  },
  {
    "url": "timeline/index.html",
    "revision": "2a6467d4b8be35eab3c601225055ca20"
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
