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
    "revision": "4a0a333bca6be4f24796d69feabc38aa"
  },
  {
    "url": "about/index.html",
    "revision": "20eab693dd44d97fb6c8ec039813ecbb"
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
    "url": "assets/js/10.7545cdbe.js",
    "revision": "b7ec47577b863110e491d3e7e532c9fb"
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
    "url": "assets/js/16.1f2bfc7e.js",
    "revision": "7a8074ae6bbcabecc60db45b37882bec"
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
    "url": "assets/js/27.c1a97991.js",
    "revision": "3fc9ab881a8edb55281ccd59a832efd3"
  },
  {
    "url": "assets/js/28.62c9a534.js",
    "revision": "9b88f4095a1cbeb29b9a3ac1d4d11bda"
  },
  {
    "url": "assets/js/29.7a0fa47a.js",
    "revision": "2a71b6f11ce72dab54ad5de7f8e6609c"
  },
  {
    "url": "assets/js/30.ade2ee67.js",
    "revision": "e0d1cb62e4389275c6892248471db2d6"
  },
  {
    "url": "assets/js/31.a8e7b7e5.js",
    "revision": "237b60febbe41ab37be0e6a5f7290743"
  },
  {
    "url": "assets/js/32.955ec934.js",
    "revision": "dc59a24e041b82e53f78acdd6139be6d"
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
    "url": "assets/js/app.2a6f61ea.js",
    "revision": "32d4fa29aa4b41f2997874fd78ff7323"
  },
  {
    "url": "assets/js/vendors~flowchart.c0c4bd14.js",
    "revision": "972458d33e5b533890f78aa137142e48"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "6f3b609fdd3eaffc0b7f546e76642654"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "1c4eaa6f10e26c71fb9e33667b81182b"
  },
  {
    "url": "categories/index.html",
    "revision": "d2a9954703b9280e10694b6165ab8d49"
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
    "revision": "e530878262a91a5b167f295f52bc51f3"
  },
  {
    "url": "online-tools/index.html",
    "revision": "781d5bbb4f1d27d174df33b15d8eec47"
  },
  {
    "url": "posts/index.html",
    "revision": "4fcba4b6278dd9cc8d77063e953c94a1"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "1bf9c9c498675a8c014c19a06ab93a0d"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "e902fe735260855245c4a8217be8a060"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "c4fc8cf8866c19e9d8db8ed26180b6fd"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "36e30c3d0b7347c959a0eba461955fec"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "962a1762e61c015edcd1e371933a3945"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "49d25e89a418d1d843e108001aa6d6e1"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "a17afa1d165f2c3a191785edcd619692"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "e4b9ecd19cb583e3451d01f14ebde110"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "8008a204d738e448f964435cd6bc920e"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "0c09b4487e67989d5a259bdf3862a748"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-3.html",
    "revision": "cef0b9acc4bdfedcaa1e8cd34c4343cb"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "10f701622c851f83a305183054fd8222"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "896c76a2d8836ea56a89e504d0f0c619"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "c1efca629b9273ec1cf6b7949434de7f"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "1932abe46f3d71ec47cdf9dd2988f412"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "a9488c61f42899ddad5bf44d2122aafe"
  },
  {
    "url": "tag/index.html",
    "revision": "c3b8cfee3a9deb1b3d5ac88e00b21f6e"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "4b9cb098efa0ee5e2a3213595a5d9cfc"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "d8ea7d1ada3b3b8b2fe56f6bb394959d"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "c812c1e9296f430746207c0545806c0b"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "a0f55c8be8f43ea695a78e0f8befe33f"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "87dc56f8bfc3b7f0d19603a7b7302f72"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "8322bc70d4e8c21cb41c7dc362318563"
  },
  {
    "url": "timeline/index.html",
    "revision": "0d03d352b7ec76a0b13d1adf5598d540"
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
