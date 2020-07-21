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
    "revision": "26f48b9b47177c08b25358ab3f6ff0ea"
  },
  {
    "url": "about/index.html",
    "revision": "372e8479b764344c88ceb2fd426b50a2"
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
    "url": "assets/js/app.0aca6037.js",
    "revision": "9db317a376683a97d7026776ab5ee80e"
  },
  {
    "url": "assets/js/vendors~flowchart.c0c4bd14.js",
    "revision": "972458d33e5b533890f78aa137142e48"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "8fa4685d3ac1c56a51c16fdbb61c218c"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "1c01da52b8cca001247c10843eedcf8b"
  },
  {
    "url": "categories/index.html",
    "revision": "04068f38dca7be108fa9ce914d176776"
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
    "revision": "3c0d4862209cdea998adb214d7efdf50"
  },
  {
    "url": "online-tools/index.html",
    "revision": "c5bca45188c669c555c9c86548650daf"
  },
  {
    "url": "posts/index.html",
    "revision": "4e72c823763abf3925b369aeeac85049"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "f4bd87125f3b7744179af8fa124a608a"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "835e4631501e1dff17bae7192d6c61d7"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "6db81c6f49ac44f87a2312751f16bea4"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "a1de87b6710190df3cdf525ee6750bd7"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "19f6efe01018bc1a4ba03fa415e97558"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "e38c0db2d1167558207d9e48db2339eb"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "9d02a4774a31696ff4a930c05c957b24"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "1808a391807d10c4a799047f7bef6f95"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "6bd78a9c377549f54131a594c38c4eed"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "c6b91b6c2565da97da9e51352c1847fa"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "6f17fc1e9bf9ba745a96d051c961b3d5"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "94b17ead88c632beef4dbf6a32faed70"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "624925dfe706acdc2ed6baf42761dc77"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "81ffe149a8ba9963920931b35fcca79d"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "95b376805b5f3fcf075100eb2815c175"
  },
  {
    "url": "tag/index.html",
    "revision": "b9021db851912e189dc46846a9b34c3f"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "0eaba9ba4746612e7c3d979c08199784"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "f56b49e84a9099340853f16e8379d35a"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "3087957c088db36fecaf16bf5823c879"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "a4604759d18f5eaf57214e20d0098bd5"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e8511e03b36f876d3c4b11934f1690bc"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "e50adc053402594c83799479d6dc9eaf"
  },
  {
    "url": "timeline/index.html",
    "revision": "988cd70d6a604bf0da2ab0d674647bdc"
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
