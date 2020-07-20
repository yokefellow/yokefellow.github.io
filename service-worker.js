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
    "revision": "1b4a779c106f9ac365aaf373f3220663"
  },
  {
    "url": "about/index.html",
    "revision": "794f2654fe1855819d08c16de5e4e007"
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
    "url": "assets/js/10.1a4fd19e.js",
    "revision": "8c0485ed9458dc60b484e4c1793283e8"
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
    "url": "assets/js/23.042ba379.js",
    "revision": "dc1546c090febed8a6b774c2285c326a"
  },
  {
    "url": "assets/js/24.4603ebdb.js",
    "revision": "b35f552edd90fd43464a415df6b27332"
  },
  {
    "url": "assets/js/25.02f5ac3e.js",
    "revision": "6f3386e4dcbdae83370eb764583fabe9"
  },
  {
    "url": "assets/js/26.7c024c0b.js",
    "revision": "d7436819164e2b9d555c7ecc9912ff27"
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
    "url": "assets/js/app.d361916e.js",
    "revision": "21f58637df173658b0173f3ee0499635"
  },
  {
    "url": "assets/js/vendors~flowchart.05fb136d.js",
    "revision": "0abda69029160de57aceedc0a5ef9856"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "6dde7e97922470022078f75adf92c057"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "2c0b4b1fd376be32fb10116eefe27f4c"
  },
  {
    "url": "categories/index.html",
    "revision": "1c08e8363104995c4969cfa9ab3ce5b9"
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
    "revision": "6572c3d04ac8d246c452177124d7be44"
  },
  {
    "url": "online-tools/index.html",
    "revision": "b98b14cb135b258975000208b8add388"
  },
  {
    "url": "posts/index.html",
    "revision": "b76462292331c125e418290ce976a874"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "dcc9e1d54193b160a1370a5ac748266b"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "3c8ab083d22204481b0d55374420d2a1"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "e61276aff9d05279a4514924d57f4483"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "f56cfd5f72a6e48b9c397a7d8df046e3"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "bec639afc916ad81271b4125491730f6"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "8f12dda7acc9f99ad86db365e9f8a223"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "bc815c38528e74436f10cd1b3bc84de3"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "93721b5a911ce9a5b4c4172635c675dd"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "8a047fa88a01bf4573bd14d4fcafea2b"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "1819223807530f8a05a085d3c59c585a"
  },
  {
    "url": "tag/index.html",
    "revision": "ef419ccd58eb0a1cff8384e929a8539a"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "2783779d79aa7ed8aec7487b7b03d229"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "6e6ac399d31a6145d6e7652485468c36"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "896285410022931438b644a0d6832271"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "a9f7210a7452c8dac41f2d8a94d6bd66"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a63ca3a755dc6b0cdec4a37d2f969f13"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "9a479f7d9f33469b758555037a995fb1"
  },
  {
    "url": "timeline/index.html",
    "revision": "ec975187420384993ae0130b6c61b12a"
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
