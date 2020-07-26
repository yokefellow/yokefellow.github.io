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
    "revision": "9accdf69e5b9833b0addf26f7d79e795"
  },
  {
    "url": "about/index.html",
    "revision": "80063ff27ba2b2bcf1895479f6a411a2"
  },
  {
    "url": "assets/css/0.styles.a7831383.css",
    "revision": "84b33e319822cef67b8fa1eee2f35e8b"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.a8d7168f.js",
    "revision": "fa17841c6a11ceddf35957c5116a4691"
  },
  {
    "url": "assets/js/10.40c9ec6d.js",
    "revision": "a9fadff6083a75ec581e62736f7740c9"
  },
  {
    "url": "assets/js/11.e46c2d3e.js",
    "revision": "b96669bfc780e2793902ce046cc63ae1"
  },
  {
    "url": "assets/js/12.68e19481.js",
    "revision": "260f66068aab23ac091aff06946a2ade"
  },
  {
    "url": "assets/js/13.5a785ab8.js",
    "revision": "9f26e6be3b9ea2596ad698b163a33424"
  },
  {
    "url": "assets/js/14.bfc91e2f.js",
    "revision": "bc56f4151f9706111ea9e2e68a7142ee"
  },
  {
    "url": "assets/js/15.61e5097a.js",
    "revision": "2907a4c0f255de17358af5b4d27b5eaa"
  },
  {
    "url": "assets/js/16.c5518793.js",
    "revision": "8a95c0da823e99737572d8660f82c4ae"
  },
  {
    "url": "assets/js/17.ee56120b.js",
    "revision": "8df80e74da26f25024b20c2aafed4b04"
  },
  {
    "url": "assets/js/18.6bc98832.js",
    "revision": "a961da625570d035884e08e4fe9f7704"
  },
  {
    "url": "assets/js/19.cd33059c.js",
    "revision": "97165015eef6768854e837e3485c9cbb"
  },
  {
    "url": "assets/js/20.c856f770.js",
    "revision": "bd5d86e80306193da3c98c460414e7c9"
  },
  {
    "url": "assets/js/21.1ba35c2b.js",
    "revision": "26201b146177d27bfd4e5eb90c22a92a"
  },
  {
    "url": "assets/js/22.22111d5b.js",
    "revision": "95e3f1a90dc6d5103d3be37e7b7ff8d1"
  },
  {
    "url": "assets/js/23.531191cd.js",
    "revision": "4e339c80a047cc78c082f8d1cd19c2a7"
  },
  {
    "url": "assets/js/24.aed32cde.js",
    "revision": "b563ff4e965a52b04b7910b8d65f028b"
  },
  {
    "url": "assets/js/25.3ec47cdb.js",
    "revision": "de6dd574ad88da83ce9f8a7b3384b4aa"
  },
  {
    "url": "assets/js/26.335488eb.js",
    "revision": "179fed34ec9e27c477127c6aff864fb3"
  },
  {
    "url": "assets/js/27.3d31458b.js",
    "revision": "d24a63ca6a251f3a05e2123a4a9f87b3"
  },
  {
    "url": "assets/js/28.f3143ccf.js",
    "revision": "14a50b7ef633fcfd34e203ced55f910b"
  },
  {
    "url": "assets/js/29.6bacbf7a.js",
    "revision": "43f6dee68cf4101ae59f8fb800e763eb"
  },
  {
    "url": "assets/js/30.726beb01.js",
    "revision": "e1e6141bb48fb8b5b7927d32d8e9110c"
  },
  {
    "url": "assets/js/31.69cb340c.js",
    "revision": "53f325d100f435f3179a975d49060b00"
  },
  {
    "url": "assets/js/32.847f570d.js",
    "revision": "17492c1946541d14043257325f506e1e"
  },
  {
    "url": "assets/js/33.1d5e33a0.js",
    "revision": "0f006aea0a2ac32890359bd7f45e1293"
  },
  {
    "url": "assets/js/4.d6c0505c.js",
    "revision": "e61a9b6119096ffa66e8787920fa6709"
  },
  {
    "url": "assets/js/5.fa2c70cb.js",
    "revision": "b4487996a8f04684020455f3d11a82f8"
  },
  {
    "url": "assets/js/6.75cace84.js",
    "revision": "9dc3aadd270873ef76c145c812e71aae"
  },
  {
    "url": "assets/js/7.5cdd133c.js",
    "revision": "4bf4892949a4a0756e580d6bef6d27eb"
  },
  {
    "url": "assets/js/8.c0ee1a93.js",
    "revision": "52266cc458a5bb0c0f314eddd9379f1e"
  },
  {
    "url": "assets/js/9.df920f65.js",
    "revision": "92ac2aeac62069ff59aac24a1f1b5ee1"
  },
  {
    "url": "assets/js/app.8efa3c28.js",
    "revision": "819034ec7a8f9f802c7a52cf2077563a"
  },
  {
    "url": "assets/js/vendors~flowchart.0f2a2ba3.js",
    "revision": "048b5f3bd5e81937632dc2d44f3f507a"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "ceaee20b7ce918cba251f43038ebd7d7"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "c8a19e50da56f00f569666198bf9b28e"
  },
  {
    "url": "categories/index.html",
    "revision": "3ab498b1374769ed46d1d777fcda2b80"
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
    "revision": "c78e8e30682ed832ad0998f3f8851f25"
  },
  {
    "url": "online-tools-logo/baidu.png",
    "revision": "25768c84ccafa2f700d74446e64978f4"
  },
  {
    "url": "online-tools-logo/bing.png",
    "revision": "af76f56678287a0723c1187efec47d3e"
  },
  {
    "url": "online-tools-logo/google.png",
    "revision": "80fa4bcab0351fdccb69c66fb55dcd00"
  },
  {
    "url": "online-tools/index.html",
    "revision": "e6319b155e519a7f830e7cc7c1b0d537"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "74139e5e027a3d3d2f75f9cadc694666"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "9b2b847e439600205f93c90addffda23"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "dfdcd9b66ee221bbb570fca8bd82aa46"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "9a7b0e9f16f49b1a43eac10be5d5868e"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "a3ec53e2969fe65e23f5dfc549f638cb"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "c51f6861b2789ddd326efac64af950ec"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "d84a628af9f6a59590455b5bc1a0a6c6"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "74152b221a9cb05f675ad966ceed4312"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "675ab528cd239779be323a21f13ed8b8"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "20d20bf53bcb6e5275215230c4c90988"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-3.html",
    "revision": "dac7e735bbaa0955bf2667337840e4b6"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "aef4d921f20193d72159168f21137239"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "d8cfebc7a6d4323b5dd1e8d59c015bf0"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "5baae1330a4c2a5dfab34cd35252e14e"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "44f3e1556ff45c830b1199d26b9fe568"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "e32fa7a4fa6fc0dc8bc38d7ea8ed3c0a"
  },
  {
    "url": "tag/index.html",
    "revision": "1146909042cd0ec1c2aebcac6c2bc810"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "e781c665e2a5c661a180e226d6520125"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "c8a3daac1fad49e8aaa40254ebcffca6"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "32e36a79697ded8e27572d5752ecbe62"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "35a5a7c7b132c62fa0cc26e261bfc179"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "fd7678dc42ad514fd8916cd4af0e3ef7"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "1c86fa921d20a22ff8d4ef33db2e7e22"
  },
  {
    "url": "timeline/index.html",
    "revision": "a2f801141b1b11356e49dd7c561c1f51"
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
