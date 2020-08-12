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
    "revision": "e413eed769a2635434953c4c09ac37b2"
  },
  {
    "url": "about/index.html",
    "revision": "2b9d61066f971ce1e5a4b7dba66ba999"
  },
  {
    "url": "assets/css/0.styles.898e1ddd.css",
    "revision": "71127ea10c21e1bb19d325e6239f338b"
  },
  {
    "url": "assets/img/alipay.92397020.svg",
    "revision": "9239702087add999b29eda6c69b7fac3"
  },
  {
    "url": "assets/img/github.23fc8f81.svg",
    "revision": "23fc8f81f92bb2981d8f9e089d7df14a"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/love.335eff6a.svg",
    "revision": "335eff6a0aefd9ce25d8624c9cae2f54"
  },
  {
    "url": "assets/img/no-more-updates.618fae03.svg",
    "revision": "618fae038cce8569b9a39f76cde87acd"
  },
  {
    "url": "assets/img/outdated.2fac9715.svg",
    "revision": "2fac9715a1365473e7aedaa09c8bf4fb"
  },
  {
    "url": "assets/img/paypal.96fa023e.svg",
    "revision": "96fa023e7e12051f7585b6fe4da53daf"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
  },
  {
    "url": "assets/img/recommendable.29ce1490.svg",
    "revision": "29ce1490d9ea83aa2a7e5c1e815b92b9"
  },
  {
    "url": "assets/img/wechat.f9bcef76.svg",
    "revision": "f9bcef76a75dae0e4fe6bf3d3af1cad3"
  },
  {
    "url": "assets/js/1.be4ca902.js",
    "revision": "7a5383001d81600684007f920e0cb425"
  },
  {
    "url": "assets/js/10.ec4141a2.js",
    "revision": "333b80f4906539c27be3ca8ba19e3b95"
  },
  {
    "url": "assets/js/11.ae5f13aa.js",
    "revision": "68474dc9e9ac511262e04c046eb6a9e0"
  },
  {
    "url": "assets/js/12.9e4c8fff.js",
    "revision": "a018a386c03b050d6ab12446a5ec8c6b"
  },
  {
    "url": "assets/js/13.b2bb5c89.js",
    "revision": "62a601e6ab13848de303d54e382bba64"
  },
  {
    "url": "assets/js/14.43ea0dd3.js",
    "revision": "89189702febb8479848659d4d2a9afe1"
  },
  {
    "url": "assets/js/15.8b124a22.js",
    "revision": "313c74567b2bf020bc4f859668adcb01"
  },
  {
    "url": "assets/js/16.efe9ed01.js",
    "revision": "728eed75f7ef1e2888171adfcd0e5376"
  },
  {
    "url": "assets/js/17.2561eeb3.js",
    "revision": "5df5d54b65ef787f927df6d0bec8a0d8"
  },
  {
    "url": "assets/js/18.6fe103d2.js",
    "revision": "6efc354156602c81c741b2de645ddae1"
  },
  {
    "url": "assets/js/19.5cb43572.js",
    "revision": "877726dea24ff5ee27c8d08b4cf2e663"
  },
  {
    "url": "assets/js/20.c76091b3.js",
    "revision": "af645b43034be59e010420b370755ded"
  },
  {
    "url": "assets/js/21.a2ca556e.js",
    "revision": "1600f9ebc1362c97c816c42747a2878b"
  },
  {
    "url": "assets/js/22.3b90ad15.js",
    "revision": "c5b680ff46e9d651629561f51d5e6efe"
  },
  {
    "url": "assets/js/23.d74f5e54.js",
    "revision": "026f402da13d70541c0cdffb057f9813"
  },
  {
    "url": "assets/js/24.8de33cc5.js",
    "revision": "56d108fb6c3d7238a3ccd95e979d754f"
  },
  {
    "url": "assets/js/25.456c0fde.js",
    "revision": "cd12cc1c39ead6702890a0687a47c3d3"
  },
  {
    "url": "assets/js/26.3fd76016.js",
    "revision": "0df449ac60d99877f6dcb91dd18a96fd"
  },
  {
    "url": "assets/js/27.f0c64171.js",
    "revision": "85fc8b6f5a4fc9393acce8500dc850f3"
  },
  {
    "url": "assets/js/28.092b38bc.js",
    "revision": "18b956ec7c22cff8ecfa008c3fedb4d2"
  },
  {
    "url": "assets/js/29.6855878d.js",
    "revision": "10aef079198d929f2f14346e5f8bbb47"
  },
  {
    "url": "assets/js/30.a3e6f3e0.js",
    "revision": "56a71ce579b2a2ef9b737e36300420c2"
  },
  {
    "url": "assets/js/31.986a8ce8.js",
    "revision": "813118eb016b3cf8107dcaacf11c39c6"
  },
  {
    "url": "assets/js/32.c2ea739c.js",
    "revision": "6e33f26776e80b8e2d97c30a77481812"
  },
  {
    "url": "assets/js/33.d35db761.js",
    "revision": "06f26c8da41fe3ac82fbeb63e78c6609"
  },
  {
    "url": "assets/js/34.d2a14821.js",
    "revision": "bbb4f86a83761c43e2adbfd27c1e05b5"
  },
  {
    "url": "assets/js/35.a6576163.js",
    "revision": "2dcfc133564cb82cd0489b7780dd69a5"
  },
  {
    "url": "assets/js/36.c1748ce8.js",
    "revision": "e0624556ff54c6a3fff4205d6740f8be"
  },
  {
    "url": "assets/js/4.56f5e3f6.js",
    "revision": "b9c083b3d2a082de5521101e7870395e"
  },
  {
    "url": "assets/js/5.470cba1b.js",
    "revision": "0a8bde8280dfc23cbb204cdd288318d1"
  },
  {
    "url": "assets/js/6.2e20b5a0.js",
    "revision": "622e4f7359084e60ba3fbf3cffa69e88"
  },
  {
    "url": "assets/js/7.2e501bf2.js",
    "revision": "4a6819409e8c4156a1bb9690b2aba77b"
  },
  {
    "url": "assets/js/8.bb7011dd.js",
    "revision": "5f47d8e48bfd886357dce4c5bf379e5a"
  },
  {
    "url": "assets/js/9.022a8959.js",
    "revision": "13bb11f4c6551cb08409225b33ce3af4"
  },
  {
    "url": "assets/js/app.c31157a1.js",
    "revision": "85067aa563634137fe17b6fc6dbb411f"
  },
  {
    "url": "assets/js/vendors~flowchart.d94e747e.js",
    "revision": "b12da3693fa87a5677a5cb6109f8a592"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "403d81304ca3b41cd2076712f88a819e"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "7c150a0480997876db5d6c0a454bfb21"
  },
  {
    "url": "categories/index.html",
    "revision": "99af5a5bd1580ece7d907d545cc5fdde"
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
    "url": "images/banner-gargantua.jpg",
    "revision": "71e25f0738b326304fa697e4891cd76d"
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
    "revision": "c7196ac845dfcdc19a860f212eaaca63"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "c84f41f081fd29d0beb71ee8e674dfc1"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "4952c2c73f61491c1739ea8de856a966"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "76cc87bca6a454c6e8f48b291d674f77"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "26bf128d1a0583cb0e57031f42ea40aa"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "4cacb3d573ac868e6fd2b9f6d21022e5"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "5d76aa0e676f6ddc50db862ba957296c"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "1fd21be325a8d7be881127e9cd02eb77"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "fa79521b91100a1f2f846cc78947ead4"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "891084edb1345c94d9d624751e7027a3"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "0d32b61a9aaddfbb152c81f4939f999e"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-3.html",
    "revision": "9702679fb1c36a770834a27cbb4abb52"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "7a46bb0128fdcd25a52ea5599a46c528"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "ded321312d162019119a96a5c0173c71"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "707ceadf1603cc82bf9fd81c15d802b8"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "703d89f3c4d079571c9c63e93c461b87"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "ec2d45eb19abcd4f2047b6b47ad322fe"
  },
  {
    "url": "sponsor-qrcode/qrcode-alipay.png",
    "revision": "8cb610b12541216fed503517961a186e"
  },
  {
    "url": "sponsor-qrcode/qrcode-qq.png",
    "revision": "710a6c9261cc4c3496c941ac3bd8b432"
  },
  {
    "url": "sponsor-qrcode/qrcode-wechat.png",
    "revision": "de5925e1e21d217342bd4ccacf0518b0"
  },
  {
    "url": "tag/index.html",
    "revision": "56a0524c62f890f5c71ae38e7a524a0d"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "0ca66747777f256c36b190619b294cd7"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "f8281ae33226b57260c0da69452a7311"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "9ab5d8dc88b3230fc48155820f90d778"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "79b18f065a3df7197f107d852b69106e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f8548484cfb4ff76df8d8a39d0641564"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "999fe633b9b253687ad2602522298bf1"
  },
  {
    "url": "timeline/index.html",
    "revision": "0e90a3e7aa4891d654ac53ba3493bd05"
  },
  {
    "url": "tools-logo/logo-baidu-mini.svg",
    "revision": "85beaf5496f291521eb75ba38eacbd87"
  },
  {
    "url": "tools-logo/logo-baidu.png",
    "revision": "25768c84ccafa2f700d74446e64978f4"
  },
  {
    "url": "tools-logo/logo-bing-mini.svg",
    "revision": "9f4d7c00f669abc8cc38abe1de7886e6"
  },
  {
    "url": "tools-logo/logo-bing.png",
    "revision": "af76f56678287a0723c1187efec47d3e"
  },
  {
    "url": "tools-logo/logo-coding.png",
    "revision": "5ee8025c9dc63a6ff53153705d0e7ce8"
  },
  {
    "url": "tools-logo/logo-gitee.png",
    "revision": "63dd25338cb5d8c26ae767ad8c2c9b4c"
  },
  {
    "url": "tools-logo/logo-gitee.svg",
    "revision": "567691af5ef41d0d4d46a9feb01629b6"
  },
  {
    "url": "tools-logo/logo-github-mini.svg",
    "revision": "5dc1ff128127adfe238d63845ab385a6"
  },
  {
    "url": "tools-logo/logo-github.png",
    "revision": "afb2314d814233eee0fe08cadd9a017d"
  },
  {
    "url": "tools-logo/logo-google-mini.png",
    "revision": "116d7abaea20868404cb366b611c69b7"
  },
  {
    "url": "tools-logo/logo-google.png",
    "revision": "80fa4bcab0351fdccb69c66fb55dcd00"
  },
  {
    "url": "tools-logo/logo-stackoverflow-mini.png",
    "revision": "6b99b3bbe6bc99a25625f112a43953bd"
  },
  {
    "url": "tools-logo/logo-stackoverflow.svg",
    "revision": "0449fdff112e6c32379c5139e64601f7"
  },
  {
    "url": "tools/index.html",
    "revision": "52175b34b6687a4df1b11d0b4f7c33f1"
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
