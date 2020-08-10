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
    "revision": "21976a14183e0df2b185d5f5b33dcbf0"
  },
  {
    "url": "about/index.html",
    "revision": "501a118fbba9c45bf0d72e839993881e"
  },
  {
    "url": "assets/css/0.styles.1bcabd43.css",
    "revision": "804b3c5433b36f3a6f37873daad3488a"
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
    "url": "assets/js/12.bd669335.js",
    "revision": "0fa448917eca3eeb2ab334faf2d65444"
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
    "url": "assets/js/app.f6ec230b.js",
    "revision": "b8a194f58bc44686eabab62d1924d62f"
  },
  {
    "url": "assets/js/vendors~flowchart.d94e747e.js",
    "revision": "b12da3693fa87a5677a5cb6109f8a592"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "4ce3cfd0a1c804e2e089b1ba8f927dfe"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "d263beb4d346e6572d1e7182dd5d05b4"
  },
  {
    "url": "categories/index.html",
    "revision": "4413a97b59eb6e67a7f627c510fb4ebe"
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
    "revision": "dd3ba9e8ffd0c379bb5bafde5ef5afd9"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "33019a9de355f4f5b0c7d7a1fe3fe84c"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "096f4f5a2acb735d55b5211da07ec680"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "d7ff2b36303fac24b91bc91462c931c4"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "988ad13d158ef34005f55d537ec242bd"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "aa2e05ab82c65a10c4c9d8a309e5cfe5"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "5a3e2b29a94cc8cc69e0e848ac4cabd2"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "6b0eec5bb923ab83cd655a3464e7e6dd"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "e8e2d9e8ab43b5f84726b3598e13c038"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "59367ec43f2c4505b4e8a413eb8f0fac"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "267629f2fa1fa18b5648e8b5e5a41c64"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-3.html",
    "revision": "c682e9c8265b41695c2241ca03b9fe90"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "08683491f8f975fad211c47be5faf717"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "e24286ae65c0b067307df5b1f2ae7044"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "cb313db8c38978ea200263ba6e7486cc"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "f3fa3db86ae232446c8645c23cd3d74b"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "8276bdebce9095126639cd5583162ade"
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
    "revision": "d1cad90184aff49b44fd51094d890e53"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "eede9dd6aac7d903305207bce11af28f"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "26f0433030574f0955e9be74fd7ace2e"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "3b797b8353f6cbc9946cedd62318cdce"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "81231af145aad6cde28142cd5c048d3e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f2e030d1c948895a43a7c53be1bfb757"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "11bda93f9e443416ce388d143202ee33"
  },
  {
    "url": "timeline/index.html",
    "revision": "5f476de7358ac4789e20efaba69da42e"
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
    "revision": "5febf2cd1637c20c88edb1dd55072f3d"
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
