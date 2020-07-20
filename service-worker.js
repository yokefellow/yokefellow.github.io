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
    "revision": "00ac3b85d694cc4758b986314ebe0f35"
  },
  {
    "url": "about/index.html",
    "revision": "c134ef9df37508002b44e4a8871eb62f"
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
    "url": "assets/js/14.c46891a5.js",
    "revision": "17fc183f714569554565bcb5a192c544"
  },
  {
    "url": "assets/js/15.274303f3.js",
    "revision": "a13bcd994eadd55e23ded5f77c3c0708"
  },
  {
    "url": "assets/js/16.8820e393.js",
    "revision": "a095869859563fa28337561f4c3b3e88"
  },
  {
    "url": "assets/js/17.51acaa05.js",
    "revision": "237338113b1a523a6a16be44b9d631ed"
  },
  {
    "url": "assets/js/18.f9740abd.js",
    "revision": "5d0c97f552e89d926075d0d2e5a49e91"
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
    "url": "assets/js/26.69365909.js",
    "revision": "8d1eef9c68ff75fcb02cb34da0b6c9e8"
  },
  {
    "url": "assets/js/27.b90f003d.js",
    "revision": "407237a2b35f06404897cdb163ef61ff"
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
    "url": "assets/js/app.768979be.js",
    "revision": "7bf12cbe8e5cc5b7e4550b3e50c1f929"
  },
  {
    "url": "assets/js/vendors~flowchart.05fb136d.js",
    "revision": "0abda69029160de57aceedc0a5ef9856"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "f8bddd97706a42dcd5d83109dbbb591b"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "cbbc28e49cdc42211cb293a0310691c8"
  },
  {
    "url": "categories/index.html",
    "revision": "5120d37db03a9d378e0f1cebe1fddcd4"
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
    "revision": "81cc819954e2e004116373fa01fa1aa8"
  },
  {
    "url": "online-tools/index.html",
    "revision": "d6fe3f7595adac54d6ca7cff542fe820"
  },
  {
    "url": "posts/index.html",
    "revision": "53ef15986d9ff7b893e28424cf7053c3"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "bea8a2617c373cc58fc8326e347da431"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "3c9240efb04ceb1440404c5bce0a21ee"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "3642b70b0500661e406d07d7c8daef2a"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "dc95487cb05bcaf6434eeb6d0618df2d"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "b1b234200f05840d20dcbd4f681744d9"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "5554e8f7e75cc0505628a39e113e030c"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "f12f83e147bd47d21b6f8e67d834ef38"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "b0ecb569a598645d7c7e45a629a39185"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "0b3ccd56e29a3dbe377df182f212b579"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "824fccea9c456423d8ee9da151f06e43"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "c4dc153ec37b777fa08344c8e440922a"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "fd45b1509e8042c85bff3511e75bbab1"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "03a890fcef866fca667c147b97522876"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "c252b5f708afd7ff826360c0c56540cb"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "cd0ebcd4716544f64191426f07c13700"
  },
  {
    "url": "tag/index.html",
    "revision": "7c193b365ed5cb4d4899fc5484fb9513"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "18adc5017b9aa8cac61c79a13dad29d4"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "b497f2858ffaab03f96de42bb9508864"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "bac0edb4beef42e585acd2ff86c96ed0"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "b40c4fa96720b834c019b938a85ab29f"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "2254315b745b3aafe5247455e35e4768"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "9a7c5788c990fa6eef3a12876f213d45"
  },
  {
    "url": "timeline/index.html",
    "revision": "f345fea1ee3011c98a59f89fe1361da9"
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
