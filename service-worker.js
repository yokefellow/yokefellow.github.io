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
    "revision": "870a3121e0fda7587c29f270d9d5fd4d"
  },
  {
    "url": "about/index.html",
    "revision": "4ec61eda44a51efdba5695a928c9f6cd"
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
    "url": "assets/js/1.f84d8d8f.js",
    "revision": "0727540c3a51d43a289df229d556a359"
  },
  {
    "url": "assets/js/10.e1546577.js",
    "revision": "8c75740f4a089f1ed07f65f4a0118c30"
  },
  {
    "url": "assets/js/11.db7ccec9.js",
    "revision": "476389c6399d5928cc1408a00eaa25bf"
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
    "url": "assets/js/4.7c97f1d5.js",
    "revision": "ade7f2d08609761ef788671692a1d5df"
  },
  {
    "url": "assets/js/5.6a9b9ae3.js",
    "revision": "0be374e3d4ed1db09f236fc9bb43a1f5"
  },
  {
    "url": "assets/js/6.ee110ac5.js",
    "revision": "2a7af17d1fed33f63140393e5edca300"
  },
  {
    "url": "assets/js/7.f1701ef3.js",
    "revision": "59e79e9927f2fced557b9a35783de138"
  },
  {
    "url": "assets/js/8.5774f8e2.js",
    "revision": "341dfa864db721256b70d48f34ceedce"
  },
  {
    "url": "assets/js/9.c3e08312.js",
    "revision": "19a24033ef84cbfcd3b366a473177df1"
  },
  {
    "url": "assets/js/app.cbbaf131.js",
    "revision": "5ae7dd11aa81de1f3ff406f3407be792"
  },
  {
    "url": "assets/js/vendors~flowchart.a97f2360.js",
    "revision": "b895d17276a916bd1fdcce2478c4a7f3"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "f100579a7a3a7521923263c7323d47c4"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "d86b0dbfc021919e7be4753da38ee25d"
  },
  {
    "url": "categories/index.html",
    "revision": "3c74f1709eda22ce1eb6651d397338a1"
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
    "revision": "4c1ec90dbc110d5c32ef9e737cd4ca6b"
  },
  {
    "url": "online-tools/index.html",
    "revision": "679f920b0fca183dfcbb57ed877bfe00"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "67e71473f3c42c858e70ef5b955ad3ee"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "bf3c43e490aebd15303ad1433f2c8a94"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "0730873e2ba2b1c4ab654ebc1e46c501"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "9807d27ff7a94325cb68b20b25afedcb"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "431fb5820c1335ab899c574c8fb28688"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "abf982e12da24058b23c864f70fb64bb"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "dab05c8b0ffd915e3fc829d9cb5ecd6a"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "9681be553f4a657f7bab6e73822a91d6"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "afdb01f266435dec2223764184f95648"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "f9154f6e40dbb375eb8d16b1e0eb6813"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-3.html",
    "revision": "c18bc75648c04afef23ec281633d2a3d"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "a2938bf9e541865de9ac3badf942007a"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "de4ee4da11aca27d59a8fc82780304a9"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "3d392e4e220552a8b29ae01a62fd68ce"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "33441aefbee1368a7b5ec577d83d9b80"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "f8ec909012da7584c0a77a13d077f586"
  },
  {
    "url": "tag/index.html",
    "revision": "fabaf538cc4237bd0b3f50614c150de2"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "fd91095067d9de5c9e3289a1bfccb48f"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "414bf2ce9a4900581c1142a9c2646e6f"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "df6040f654ff3c1c4dcda8daefc8bbd1"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "e0443ec8ffdf5dc56685c0e4c8ab143a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "1832eafc2497124178ef430a297642f6"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "5b8e2bf3c1a8da0d108df3c0f937814b"
  },
  {
    "url": "timeline/index.html",
    "revision": "831052c9ba3325c313e1839e0163b602"
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
