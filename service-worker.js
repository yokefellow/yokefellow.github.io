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
    "revision": "9871591eb3616b3d2caadc7079f667ed"
  },
  {
    "url": "about/index.html",
    "revision": "8999ce873be86c7ec3ed046135ccdb26"
  },
  {
    "url": "assets/css/0.styles.f83879b5.css",
    "revision": "636508cedba4915ac8e63240e1325c7c"
  },
  {
    "url": "assets/img/home-bg.8e509a21.jpg",
    "revision": "8e509a21c7af5d61f2ff4895ef09c727"
  },
  {
    "url": "assets/js/1.be8c4f33.js",
    "revision": "dec75690f2d566f7aaccde4a8a99280a"
  },
  {
    "url": "assets/js/10.2b85c336.js",
    "revision": "e8d93f2384f901e8d4983e3dab6edbfc"
  },
  {
    "url": "assets/js/11.8d49824e.js",
    "revision": "f538bda2e58370de362d03409d73418b"
  },
  {
    "url": "assets/js/12.d1e31d66.js",
    "revision": "c6c6c33388917fbc814d70af0f22c489"
  },
  {
    "url": "assets/js/13.c3d11fe0.js",
    "revision": "df7ceaea39bfdfe498bb2b278a048752"
  },
  {
    "url": "assets/js/14.fac516f9.js",
    "revision": "0f43671e8d817e87817782a6d96ba3c7"
  },
  {
    "url": "assets/js/15.ab636468.js",
    "revision": "7de18c28dd9699410beb83c6013936f5"
  },
  {
    "url": "assets/js/16.7b9d7040.js",
    "revision": "ddadba6725a43cb0b1a4e72d283febe7"
  },
  {
    "url": "assets/js/17.da1afaf7.js",
    "revision": "3bce3f3e58075d2f1d0c02a7b7371117"
  },
  {
    "url": "assets/js/18.d4b6bc3f.js",
    "revision": "db422de3e86a6e12dcacf184b55ab646"
  },
  {
    "url": "assets/js/19.9b18130f.js",
    "revision": "556ec9f414af5c8017ebefae25fb3f81"
  },
  {
    "url": "assets/js/20.8cb4d12c.js",
    "revision": "070b7b513cdc872ff733f8638f93805d"
  },
  {
    "url": "assets/js/21.235b55e5.js",
    "revision": "729d360a5f9863d1f118c286667c8abe"
  },
  {
    "url": "assets/js/22.9d2e9a55.js",
    "revision": "846f5ef8b22158df50d4d4fbfb93d3fe"
  },
  {
    "url": "assets/js/23.18f4bdcb.js",
    "revision": "7a976f92987fa536a424043821c4bc16"
  },
  {
    "url": "assets/js/24.1c4e3903.js",
    "revision": "79615e9b3c9c2120911a88b49b968db6"
  },
  {
    "url": "assets/js/25.bbf0cbda.js",
    "revision": "1893238214335a943f5e8182437b6c82"
  },
  {
    "url": "assets/js/26.520f5866.js",
    "revision": "24218da22e6907212e9b8a484eb9908f"
  },
  {
    "url": "assets/js/27.1f4d1b67.js",
    "revision": "3fc9ab881a8edb55281ccd59a832efd3"
  },
  {
    "url": "assets/js/28.ea988a3a.js",
    "revision": "9b88f4095a1cbeb29b9a3ac1d4d11bda"
  },
  {
    "url": "assets/js/29.6362b9e4.js",
    "revision": "2a71b6f11ce72dab54ad5de7f8e6609c"
  },
  {
    "url": "assets/js/30.9c912756.js",
    "revision": "e0d1cb62e4389275c6892248471db2d6"
  },
  {
    "url": "assets/js/31.d09d1aef.js",
    "revision": "6d070d3af6953917954d1c094b1e5b85"
  },
  {
    "url": "assets/js/4.edbe0db8.js",
    "revision": "361aa62d9aa368ae0e669a2d566c5121"
  },
  {
    "url": "assets/js/5.4e2e11ba.js",
    "revision": "f43364696fc670d4ea09b430abe933c2"
  },
  {
    "url": "assets/js/6.433e8dd2.js",
    "revision": "4cb3db23ae703e99a9d7ceb1f388339f"
  },
  {
    "url": "assets/js/7.9d4011ca.js",
    "revision": "19fd1c25de4de3a0db1db59c85e1ff3b"
  },
  {
    "url": "assets/js/8.af744d3c.js",
    "revision": "c320176e5ce058b0afd8b0e9bab5e725"
  },
  {
    "url": "assets/js/9.7d7b04d7.js",
    "revision": "12495ff382a852b236dc5d3fb725e8b8"
  },
  {
    "url": "assets/js/app.c59ad53d.js",
    "revision": "e2ea8116e46a160d00d22fdcafa024a1"
  },
  {
    "url": "assets/js/vendors~flowchart.c0c4bd14.js",
    "revision": "972458d33e5b533890f78aa137142e48"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "c27ac62220ae8382d1c2e2fbfd4f0e18"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "e89eaef139ade37ea2c05cc55c9a0b24"
  },
  {
    "url": "categories/index.html",
    "revision": "c6bdb89829bf8874a7f4c5504ecfd37e"
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
    "revision": "6c4e9ed7f0fdd186644c0d879d7d23d2"
  },
  {
    "url": "online-tools/index.html",
    "revision": "844ee7edd88010b370e11b082c466315"
  },
  {
    "url": "posts/index.html",
    "revision": "126094683858e7b5f1c20eefe6498b35"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "f06e0ca8c969159c881467d47a41d9ce"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "bcf63d95281bcad90120439fff659003"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "853b9977308385f1ef36a7a7477d6d93"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "403680351cd38951a64cb139887d7f89"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "265d4e400de8e7e6c2f0240696d870e2"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "1f620bc3dbfc5076882dc3eb1d1046cd"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "cce8213be91a15033781968866ac4c66"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "852dcfc12f4e9d99edaafd3b2382ecf0"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "345d46039a2dfc1f0fa261cc489b6c84"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "e3a6dbf50bd5fff8f2bf62a5d7431cc9"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "ff6239441f445a5ebf7247f151874a64"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "daa04a63ede91b665249dbe4a7c8bc51"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "6fe106b7b70c11de42231a26a3a1331d"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "eead7863865a41df0bf4c54e1adc9cea"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "8e75396bbe54342443a8a7e265969f99"
  },
  {
    "url": "tag/index.html",
    "revision": "ac31cae30ae701b7bc0a28e8c08cf7c6"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "998c0bd86508829f4ea5ece264bfb02c"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "182e6286193ef5fb2388bd7a6e55c3f3"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "8bcb58b20ea5ebfe98648c0a697a1d8d"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "35890844eef778e30871045b31f9fc15"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "1bef00872c4ddf4f720e8264e6588784"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "2cff18f4745e48d4922ee594439ea2f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "d1eb49ca276dce7d9f52af06fa62fea8"
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
