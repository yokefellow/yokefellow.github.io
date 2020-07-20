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
    "revision": "4e98208c95345ce723d73f376d2fecde"
  },
  {
    "url": "about/index.html",
    "revision": "f0cd04f23e3f4fc2ce5fdaa20a4595e2"
  },
  {
    "url": "assets/css/0.styles.3bac0953.css",
    "revision": "c08deb593b10a0d7e9a79edbe344c183"
  },
  {
    "url": "assets/img/home-bg.8e509a21.jpg",
    "revision": "8e509a21c7af5d61f2ff4895ef09c727"
  },
  {
    "url": "assets/js/1.9e4b7dde.js",
    "revision": "ae976cfda343f67f79ffb96deeb55443"
  },
  {
    "url": "assets/js/10.2ce5338a.js",
    "revision": "6ee709c61cf42b4f506550872189c230"
  },
  {
    "url": "assets/js/11.1f8f4085.js",
    "revision": "146e125b9febe9f0009ac8079d854455"
  },
  {
    "url": "assets/js/12.62636e2d.js",
    "revision": "af346b49fc4a2cd257361e3507d6ed49"
  },
  {
    "url": "assets/js/13.171d74c3.js",
    "revision": "0ebeee98a218a9c6059928256ae43105"
  },
  {
    "url": "assets/js/14.152157ef.js",
    "revision": "3b4ce30174926e66d057209b3bc55dd5"
  },
  {
    "url": "assets/js/15.99e30714.js",
    "revision": "addc47a86439bce66d1c0757fec0c44c"
  },
  {
    "url": "assets/js/16.8820e393.js",
    "revision": "a095869859563fa28337561f4c3b3e88"
  },
  {
    "url": "assets/js/17.4a2c459d.js",
    "revision": "680d17953150af69b36519aa2f16b06e"
  },
  {
    "url": "assets/js/18.34e75b69.js",
    "revision": "7ce984d1468868ef94ed89d87dcd27ce"
  },
  {
    "url": "assets/js/19.666898ba.js",
    "revision": "472e714278cfd73b16a9166819031d88"
  },
  {
    "url": "assets/js/20.2847d5c8.js",
    "revision": "fa501160ec784b861e045ba6391497bb"
  },
  {
    "url": "assets/js/21.84061499.js",
    "revision": "94a7e4032b2c899dd04aac9c07beb353"
  },
  {
    "url": "assets/js/22.55a170a8.js",
    "revision": "71afd46da9459e8438f53d694531680d"
  },
  {
    "url": "assets/js/23.aefb6ba9.js",
    "revision": "dc1546c090febed8a6b774c2285c326a"
  },
  {
    "url": "assets/js/24.309e871f.js",
    "revision": "b35f552edd90fd43464a415df6b27332"
  },
  {
    "url": "assets/js/25.e4d5639c.js",
    "revision": "6f3386e4dcbdae83370eb764583fabe9"
  },
  {
    "url": "assets/js/26.12718905.js",
    "revision": "2757ca262145951b1e308018cf5b1761"
  },
  {
    "url": "assets/js/27.a1ed0ae3.js",
    "revision": "5ddf41d52ab623d776c0d4ed48e9358f"
  },
  {
    "url": "assets/js/28.fdf998ea.js",
    "revision": "d4738e92333bc2600b00fc9b2f8b910a"
  },
  {
    "url": "assets/js/29.b5445975.js",
    "revision": "8c42a923816ebcbf3111fe053929da81"
  },
  {
    "url": "assets/js/30.c9ebe99d.js",
    "revision": "886cf0645a8145d5dd3d2de27335223b"
  },
  {
    "url": "assets/js/31.adb153ae.js",
    "revision": "2ad278dab094c1fd4f625ade20e1ff30"
  },
  {
    "url": "assets/js/4.a7d68d20.js",
    "revision": "cd4347da7f30fdab876287154e9b29f6"
  },
  {
    "url": "assets/js/5.a3f9350a.js",
    "revision": "286de1f514d9ef06dea8f1a5736a80db"
  },
  {
    "url": "assets/js/6.7a0d0c63.js",
    "revision": "0681fdbd34f9a4a6a4b1008c5221a169"
  },
  {
    "url": "assets/js/7.dae7a857.js",
    "revision": "359cab9d059015d24d107b2a612810cb"
  },
  {
    "url": "assets/js/8.f0fc8bd6.js",
    "revision": "5e803afd9f8a6146cd3cb4285dacb47c"
  },
  {
    "url": "assets/js/9.8c371d83.js",
    "revision": "a80a619d8a907eeddf1528766fd57e6f"
  },
  {
    "url": "assets/js/app.f1c06fc1.js",
    "revision": "72a7a399b6524959b0aa9a16f82c2a18"
  },
  {
    "url": "assets/js/vendors~flowchart.05fb136d.js",
    "revision": "0abda69029160de57aceedc0a5ef9856"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "606f2df7909d1dffc6ebc22b85346048"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "e5520fcf93dd7ee03a183d6563ab6f71"
  },
  {
    "url": "categories/index.html",
    "revision": "797b16f3316587f3c569393a3edb36e1"
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
    "revision": "fa1af942e4d55956198de519823c6be5"
  },
  {
    "url": "online-tools/index.html",
    "revision": "d87e235b91636311bc89f513a6fe3410"
  },
  {
    "url": "posts/index.html",
    "revision": "54fb958753488f95aecda88f094922b8"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "6189ead45808a3893614e81cb4dc0ded"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "ca97557ce6c1dc1202bdfdb08f1dad32"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "0a5452fdd3ccaecc5ab8b8cfd9fe7cf3"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "dd84c1793163badb5669a19bb884f36e"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "71b45eb844bedf883a6c0cee3f957408"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "bdd86dddcd11ad95a93ffe060a8ef13f"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "f563b9aff36038f33ade060b503ca605"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "44f84884b929eccc02e67c0d5096efca"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "43a534517889df07fadb2c5b8f50187c"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "c5e43b506a68318668118d702a7c59c4"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "71e7fb29c4d9c6e00b35f3900cf6fb98"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "9304fb29c26a442696e8dd8bf33b9d67"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "3281be2d65063853bc77601140cb30d6"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "0e127596a1932c9ca56550c04168fd60"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "351559b1708f491de557a05b2a804174"
  },
  {
    "url": "tag/index.html",
    "revision": "23825e0a9f01707f707bba79bf948195"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "43291790970efd9f1dd9d8773f8185bb"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "df4954012d7ef275465f0c4722cba0d8"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "ba214fc859c66d06a7a8ea6b40917800"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "4206835831218426dfe8a708f5edd395"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e04b6e71ba3781a598196ed6b022c1f2"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "6ede464f5798021c5b3e692813e61d02"
  },
  {
    "url": "timeline/index.html",
    "revision": "af8efdf94ec45a563942e2dece149d5f"
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
