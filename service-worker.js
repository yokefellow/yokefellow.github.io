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
    "revision": "a5d73c3df1f216ede206ab5ce4857c70"
  },
  {
    "url": "about/index.html",
    "revision": "f041d0b7e158380ac3fe4fd85cf4e1ed"
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
    "url": "assets/js/13.2845495b.js",
    "revision": "e1f02e9079efcf0530f22502993b817d"
  },
  {
    "url": "assets/js/14.3713be8b.js",
    "revision": "d00e6c7e1c2aaeffe3c171c416fd5af2"
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
    "url": "assets/js/app.99bb54fd.js",
    "revision": "d22dd6154ccdbf8a467879ca65e341d0"
  },
  {
    "url": "assets/js/vendors~flowchart.05fb136d.js",
    "revision": "0abda69029160de57aceedc0a5ef9856"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "8409b25bd6ea3e97edaeab897a408212"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "9e6437a36cc21ede168789b32d06214a"
  },
  {
    "url": "categories/index.html",
    "revision": "f9ab696683a6098482f2d9cda8fc4555"
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
    "revision": "bf1a839eb4d94b9b334af08e37c8c16a"
  },
  {
    "url": "online-tools/index.html",
    "revision": "347364545ea5f171ced6614e9d8d6a31"
  },
  {
    "url": "posts/index.html",
    "revision": "ca2c7cbc2c330d0e16a4dc990df83e9d"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "cde510da058853ef71126a553896b79f"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "452e4e4c266ef2f6886cb78905e9f63e"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "6cba47c5b618523e1f3fec29d61a515b"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "ad61fb69e67df1805d401dd082630ba8"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "2c3cc8d24700c95a8700d5085bea534f"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "77a931e11ef6756fc81e7a3405cff6bc"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "5c90ceb5beb111bb959a50c3b701e5e9"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "0ff2ecc3cf53a693c741319870cd280b"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "9f661db8b4ec804444776b2f39b1a9a2"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "253c5a038f350adf79486b134b7d9574"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "5ea7bb32f6d449376c2d64ab4d22a32b"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "7b53a49e00657efa2099f66e61458a2d"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "f2418c45d5d02ffd9c6adf28f7f8f191"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "7a72580301af5ac68108ee28e48ab21a"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "9b2bdc58a022f46cad324b21b23c0a78"
  },
  {
    "url": "tag/index.html",
    "revision": "d8ff504b7912870f302b0610a7bf77bb"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "197d1abb0cad3240ff489344bf62ae9d"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "9d443a532edfa73899b2d677d2092d99"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "99f71d0576c10a302a83c894baee65d5"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "654e0a6fec5d6ec17859ea6a7f08ae03"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9f634052a9298dde32720daef1f8a6b5"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "55b4521f8c37e78dcd30a1c539217201"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc4fb5baef8d0b54ba15cf0ea72578b2"
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
