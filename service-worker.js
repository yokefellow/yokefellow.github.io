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
    "revision": "4b0fea1c532bbf502bd0641315feea71"
  },
  {
    "url": "about/index.html",
    "revision": "b7a128d8d8ca6eadf9a3b8c72b0aae25"
  },
  {
    "url": "assets/css/0.styles.c049f930.css",
    "revision": "7b5d3562467094237a54729e9f0022c6"
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
    "url": "assets/img/paypal.96fa023e.svg",
    "revision": "96fa023e7e12051f7585b6fe4da53daf"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
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
    "url": "assets/js/10.2fd95d91.js",
    "revision": "ef8a0653f4b75addd2e9fbb82536914c"
  },
  {
    "url": "assets/js/11.ae5f13aa.js",
    "revision": "68474dc9e9ac511262e04c046eb6a9e0"
  },
  {
    "url": "assets/js/12.80b23641.js",
    "revision": "ecafad93fa09369f74430f20f2795990"
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
    "url": "assets/js/35.789434aa.js",
    "revision": "4c2d01959d167a39c6139dccb6381f32"
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
    "url": "assets/js/9.23f6ab74.js",
    "revision": "67f8ec048bf6233f403b2f7506f576fd"
  },
  {
    "url": "assets/js/app.5a3407e1.js",
    "revision": "63681cbfaa49f1d22cdb15387c34f31b"
  },
  {
    "url": "assets/js/vendors~flowchart.d94e747e.js",
    "revision": "b12da3693fa87a5677a5cb6109f8a592"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "5bd22a57cb5800818911848915003c8e"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "0ea0880c68e5e2fb2ea7e3b3184963ad"
  },
  {
    "url": "categories/index.html",
    "revision": "92b4d46e73533c26ce231740b215274e"
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
    "revision": "a688d1360c063dbee8a665333cf43805"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "d4d0be918c3c7110c92f9d7340b96aa3"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "46aabffaef87b60f4b42192ecc5e2d19"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "8d3be7be8289be2c54337991905c78a7"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "27e0f1f04299284ba41ad3587c635443"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "8cbccb42ef2ad2cb1514b38d50a4e996"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "359196e5149f5b3625039977a48e8347"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "2159c83369262417d806b62f87687810"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "59b02e4c978db177902c5be623032fef"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "088723e5d4d4e27d126cd2581ef08ff6"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "12249b9244aba8cfb52d89e736ceb2d9"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-3.html",
    "revision": "36bed15d19e28dcfe4398d61aae08dd6"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "fa9da0f6813b526266d203c8be6afcfe"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "3c26eb43a9f500ff101bec8ae7b107c0"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "b5d2547ae22ba37d1471d9f26140bc45"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "2b8b53fa82ef75c449371cf3e22b3f2a"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "c725686ae3b934cc532f4275a1ee6e29"
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
    "revision": "0c6cb1e2ac6c835462f4c77c57a1f8b8"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "3426620f7194ec19bfb05bcc95a87bd2"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "7b5ebc5b159e8f19648ed8ba5b93d98c"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "505ba0c36fdc3a5415b1a2b911146cbc"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "f9508dfe7b33f55ce58e7f95ebd1eaab"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "bbb4fb6e4e170dd514787877128d247e"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "244ef65e159fe2eee59afece57bceece"
  },
  {
    "url": "timeline/index.html",
    "revision": "0bcbc4674325e4e572beb55c89ca9fc8"
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
    "revision": "9753ca2ad25fc109e81842bdc5c8afda"
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
