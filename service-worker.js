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
    "revision": "42d7e4f9c6d7610e146ddf92f1c12905"
  },
  {
    "url": "about/index.html",
    "revision": "56084d31106239b584157ece030c874a"
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
    "url": "assets/js/15.8e04924d.js",
    "revision": "a0c4d19b38ec10806de699511dc0a686"
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
    "url": "assets/js/app.ae0969f7.js",
    "revision": "677defc015bf070e6824480e4824677a"
  },
  {
    "url": "assets/js/vendors~flowchart.c0c4bd14.js",
    "revision": "972458d33e5b533890f78aa137142e48"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "fb6f340fc74393ac051dc5a3c64c2ba3"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "e6299d54002671c12f71285515d7a9fd"
  },
  {
    "url": "categories/index.html",
    "revision": "f1214f12af8fb2bd5f4455002f14ce94"
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
    "revision": "4d00107d44f2a8c19f8febbaaccce0f4"
  },
  {
    "url": "online-tools/index.html",
    "revision": "35b2d777c45e5e3ee578b8c497a212c6"
  },
  {
    "url": "posts/index.html",
    "revision": "1dd6b041ab857b4e8342bdb6af7c5172"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "715a425d366de8296149b1d517c50004"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "46e7fb7db0012db2e71911207203a3af"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "2b9369fc81bedeb9126746e5a9c6fb81"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "e7ef8fd86cf14ed5b4bdf40c7fce1753"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "053d18b46d9d1486be568455d8ffd359"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "42c5bc04dcc2a41fbd0207b15ea63b9d"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "2c5804b4ba30b208ff17d885dc350c12"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "17aefca15fd0004bb2db3c82abecf8ae"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "3a52f874a3279ad402f02e9381631855"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "d7e614b98906a0eb49f4b9677c77ac0e"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "b46a7ce9928ea78786ec650b88cec984"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "93bbd5a6e28efa49a608010fd90e4609"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "449f6069af4e7dcc0bded12227231102"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "7eb2d293b1c438c012451a54e9177413"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "b4c55b97ecf645b20243cec669b45a0e"
  },
  {
    "url": "tag/index.html",
    "revision": "b495099c7f5ed01c9d91f94798e1ebc3"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "7789e4b424738df259f222ff4343e4f7"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "ecf35eedb91e0d0560cac94745cfab41"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "7353e7727ca2e11f835bf848dfc0807b"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "684942d6c51e6c17026b4a07ff16f87e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ff9b1b3f1ccb5811e2c545f7935e82c0"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b6a7dbda5ac00fc2000b31ede93b47f7"
  },
  {
    "url": "timeline/index.html",
    "revision": "6c7c3a25d1c750ac9196d02caa30fabc"
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
