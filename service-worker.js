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
    "revision": "23b98887cdde19d38cbf33d4b65197cb"
  },
  {
    "url": "about/index.html",
    "revision": "bab3917319405ff89968c005288ab6db"
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
    "url": "assets/js/app.418ed606.js",
    "revision": "c42330edc0023cdebc0b0e5f6a7721b4"
  },
  {
    "url": "assets/js/vendors~flowchart.c0c4bd14.js",
    "revision": "972458d33e5b533890f78aa137142e48"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "9b8730611b09dec10ce9e9e03474ee90"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "d1082f369031f3429e9542c6d8c87e3b"
  },
  {
    "url": "categories/index.html",
    "revision": "7c4699bc35088ba3a96ad27fedb92bde"
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
    "revision": "6dca82e5e207f4a43830fddb354b37f5"
  },
  {
    "url": "online-tools/index.html",
    "revision": "b86af62cc43ff7678c6177ac9c925c98"
  },
  {
    "url": "posts/index.html",
    "revision": "0ed2db76db9e66ef30832b3c99992212"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "1b7d9f43907814389a1ef3967929030e"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "3f6bd6d4898bf9bb99b04c595e55af25"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "5b5ac11f7bd2889e440233cf999b4c83"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "db222d2ac80d751daf4197977b01618c"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "ae078b01c751e4d6d7874b966239fa7f"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "63d2ea02d32897c1a5499953af51b2b8"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "2bab7df4f503f379f2265d4acf10f439"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "b4e08b371faa844f62c47bc2bacb4bcb"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "e3d248b701a03ed16a925b841c2b9ce3"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "d1247b283562e291dfafb1f147f4bac4"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "ea891650292e9316f47c76c203152515"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "4e17f39b5194adc4ffec58cbd04b5822"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "75728587fb4098cebc53da9d2768d170"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "1d16b1017c6b258aae772447f46fb266"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "449cd143c735b3017a0d9f61d653fec5"
  },
  {
    "url": "tag/index.html",
    "revision": "c6cd36671c695d2119e2a7ed9dd814f8"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "450e3c0b8f08a1083201a5f5ecb09603"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "8d2f045baa505a0d785f1effa8330d3a"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "0120f2c82195bca429b43d54a8b8029a"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "e3a3ca757ace44b6adfe0617848e0bb3"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "c75863269b141a4caaf57c09ce4d515d"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "2662d6079f24fb6266a586e021529f98"
  },
  {
    "url": "timeline/index.html",
    "revision": "d123bfd2623f3949a7b13bbfedf60c9e"
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
