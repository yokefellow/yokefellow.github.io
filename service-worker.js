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
    "revision": "02c2e434912e565fefa5066da0abf8fd"
  },
  {
    "url": "about/index.html",
    "revision": "bc41852b5222bdec9eeb9fd890ee856d"
  },
  {
    "url": "assets/css/0.styles.4c41d1f0.css",
    "revision": "79a8cde72da8e3121164d5fa6f050234"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.959debef.js",
    "revision": "776a989eacb6ab7413f9aa2086dc9844"
  },
  {
    "url": "assets/js/10.e1546577.js",
    "revision": "8c75740f4a089f1ed07f65f4a0118c30"
  },
  {
    "url": "assets/js/11.18467d13.js",
    "revision": "bd92c82ffae36832147668a96bbab9a5"
  },
  {
    "url": "assets/js/12.d298b563.js",
    "revision": "96db9f86a3b22444cf3742547a2f46dd"
  },
  {
    "url": "assets/js/13.28d7b5dc.js",
    "revision": "1179e8cef8089927e3ba36a19f18baaa"
  },
  {
    "url": "assets/js/14.af7cd53f.js",
    "revision": "caa1fc938e942bc8a8dd878d149279f6"
  },
  {
    "url": "assets/js/15.df01140b.js",
    "revision": "5485ae8ec18341b5cf65760f1b40b076"
  },
  {
    "url": "assets/js/16.71fcb42f.js",
    "revision": "db379d9a03a5f8882c1eeb6cc92fa1be"
  },
  {
    "url": "assets/js/17.aa56de4d.js",
    "revision": "0abd363fb76de3363ca5bb7c3c0d54e8"
  },
  {
    "url": "assets/js/18.4a78adc3.js",
    "revision": "a791af74ff2e698fea24f48f352d92ac"
  },
  {
    "url": "assets/js/19.bd0be9a5.js",
    "revision": "bed38f516b204b6001bffee7f31c3297"
  },
  {
    "url": "assets/js/20.40ece75d.js",
    "revision": "3607cb3db5ec9ed7b44277b027106bc3"
  },
  {
    "url": "assets/js/21.5f363fab.js",
    "revision": "5c94f0031e94783d5683bb81b30da043"
  },
  {
    "url": "assets/js/22.e940b917.js",
    "revision": "ead365dd1ee713483962e6e0745ea570"
  },
  {
    "url": "assets/js/23.9b7a505c.js",
    "revision": "3231648784aebb5aff6410dd7c3054f7"
  },
  {
    "url": "assets/js/24.68f5988f.js",
    "revision": "52e3ba0e54991206b825ca1926449673"
  },
  {
    "url": "assets/js/25.d45b3e99.js",
    "revision": "aceb43ed32b8c60d8a1bff75cdb76834"
  },
  {
    "url": "assets/js/26.1e1667dc.js",
    "revision": "e1cab9848ca8a05caf538ff0387ed094"
  },
  {
    "url": "assets/js/27.01f45b5c.js",
    "revision": "8e18626411c8e37a8948cb5ded7fb043"
  },
  {
    "url": "assets/js/28.b9ad5458.js",
    "revision": "2cfac68d65d9a125fc419d21686fad41"
  },
  {
    "url": "assets/js/29.75677e41.js",
    "revision": "a073ed8fa47ad7767fa7118c0de9d567"
  },
  {
    "url": "assets/js/30.7db61d36.js",
    "revision": "e7a310807276ac82272b0f47f1a82b05"
  },
  {
    "url": "assets/js/31.96b52f3e.js",
    "revision": "e8ab6243127398dcaa275b0f6f289794"
  },
  {
    "url": "assets/js/4.d02b38f0.js",
    "revision": "51b0b3735b55478b0e95c6d4b52af68c"
  },
  {
    "url": "assets/js/5.0c7a0b4a.js",
    "revision": "b14c09287c999e5a0f99f3b39fd0cfed"
  },
  {
    "url": "assets/js/6.3a1f2db2.js",
    "revision": "14dab85a86ae1a0e87d28d5880cd6f5e"
  },
  {
    "url": "assets/js/7.c71e448e.js",
    "revision": "3152e117851e86f64d6c89d9af064039"
  },
  {
    "url": "assets/js/8.5774f8e2.js",
    "revision": "341dfa864db721256b70d48f34ceedce"
  },
  {
    "url": "assets/js/9.cfa176c5.js",
    "revision": "b122a56c4cd7b326196a39d7869c498d"
  },
  {
    "url": "assets/js/app.e01fe86b.js",
    "revision": "c2c16e79dd2e4595abc4dfb675d5df9d"
  },
  {
    "url": "assets/js/vendors~flowchart.a97f2360.js",
    "revision": "b895d17276a916bd1fdcce2478c4a7f3"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "2cb3a4b3eebb9228b638db28faf2dbb8"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "effbc3e3383c329e4eccbed606ba3c97"
  },
  {
    "url": "categories/index.html",
    "revision": "b3f5da27edc2158b61c98161fbef12e9"
  },
  {
    "url": "css/aplayer-custom.css",
    "revision": "4ab854222f35b4dfa176b3f25380553e"
  },
  {
    "url": "css/vssue-custom.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
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
    "revision": "cd9cf2077077f8d579dd6549b85aaad7"
  },
  {
    "url": "online-tools/index.html",
    "revision": "3224a2f476d2184cbcfb23e1d84574f0"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "7dbea9a8303cc0b88318cef1379c9b2f"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "c13ab06a34c3ece086fbcd3a2090b806"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "8ed8bc59a79e92404829a5f7b9eed375"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "2fc7e55f1bc522f64e375cc657a692e7"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "2034914f4e844f902717d45d951ea99b"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "e7b09c29ad9727a2ee988453a310d40d"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "996eb3a3c8209703a5aec629c997d6c3"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "352f1628ff06b5dbf78ab68f7fb64aff"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "5d44175e1251c9e70be8a8229336e6c7"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "7400e98e8c51f59d0115d1cc0f04e2e6"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-3.html",
    "revision": "837e4064f608f398d7dd72cb95a62c4f"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "07b55309465cf9c406b1970c1cc0a029"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "c1efa9a85f8ac9d3d00be16c160320b4"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "d9d2b6f5669c215f7637eee48bbf36ef"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "d84bed43c0541b40542a1265ec937ee8"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "55ae56c40e8307f9e7ddc4ce040d0458"
  },
  {
    "url": "tag/index.html",
    "revision": "c11d3a69304b447b9f16a6fdc274a466"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "76739e50da71a800b754158376ebb9bf"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "e979c934c8368e15ea7b1bf9d7c2e1c3"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "957484df04568a9f59c2403d79eb302f"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "9adabbe4f69dad51a8baee7a0bbbe151"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e7f465ec9d73cb0f32ea644a2bdfef00"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "bf757daea4f86bb6e95cb87e12a4d5d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "e09e5d6c56c4cf37b52bffff1e19bdb6"
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
