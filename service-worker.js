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
    "revision": "813acae7e75ae277ddf1d8d9f344593c"
  },
  {
    "url": "about/index.html",
    "revision": "f46813bad0ff0666c94d4c014c576f2f"
  },
  {
    "url": "assets/css/0.styles.303179fc.css",
    "revision": "79ac1224602fca430fb2f7d1204cce6c"
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
    "url": "assets/js/1.c093e7e1.js",
    "revision": "7a5383001d81600684007f920e0cb425"
  },
  {
    "url": "assets/js/10.5454801f.js",
    "revision": "8cde9683dd4ad34bc039a8046339335a"
  },
  {
    "url": "assets/js/11.2d458c6f.js",
    "revision": "68474dc9e9ac511262e04c046eb6a9e0"
  },
  {
    "url": "assets/js/12.40172a5a.js",
    "revision": "9ba00a6675d559c404d0dcb7d141b7a7"
  },
  {
    "url": "assets/js/13.d2940a83.js",
    "revision": "62a601e6ab13848de303d54e382bba64"
  },
  {
    "url": "assets/js/14.43ea0dd3.js",
    "revision": "89189702febb8479848659d4d2a9afe1"
  },
  {
    "url": "assets/js/15.a16826e6.js",
    "revision": "313c74567b2bf020bc4f859668adcb01"
  },
  {
    "url": "assets/js/16.e4246115.js",
    "revision": "728eed75f7ef1e2888171adfcd0e5376"
  },
  {
    "url": "assets/js/17.4517232e.js",
    "revision": "5df5d54b65ef787f927df6d0bec8a0d8"
  },
  {
    "url": "assets/js/18.85d0b846.js",
    "revision": "6efc354156602c81c741b2de645ddae1"
  },
  {
    "url": "assets/js/19.66b5a3e6.js",
    "revision": "877726dea24ff5ee27c8d08b4cf2e663"
  },
  {
    "url": "assets/js/20.26a12d7c.js",
    "revision": "af645b43034be59e010420b370755ded"
  },
  {
    "url": "assets/js/21.ae6599c8.js",
    "revision": "1600f9ebc1362c97c816c42747a2878b"
  },
  {
    "url": "assets/js/22.f53a1a20.js",
    "revision": "c5b680ff46e9d651629561f51d5e6efe"
  },
  {
    "url": "assets/js/23.e5f312ba.js",
    "revision": "026f402da13d70541c0cdffb057f9813"
  },
  {
    "url": "assets/js/24.0f9c2faf.js",
    "revision": "56d108fb6c3d7238a3ccd95e979d754f"
  },
  {
    "url": "assets/js/25.98357f21.js",
    "revision": "cd12cc1c39ead6702890a0687a47c3d3"
  },
  {
    "url": "assets/js/26.ca13d12b.js",
    "revision": "0df449ac60d99877f6dcb91dd18a96fd"
  },
  {
    "url": "assets/js/27.94ba7fc5.js",
    "revision": "85fc8b6f5a4fc9393acce8500dc850f3"
  },
  {
    "url": "assets/js/28.31aff544.js",
    "revision": "18b956ec7c22cff8ecfa008c3fedb4d2"
  },
  {
    "url": "assets/js/29.1fd57662.js",
    "revision": "10aef079198d929f2f14346e5f8bbb47"
  },
  {
    "url": "assets/js/30.b05f8721.js",
    "revision": "56a71ce579b2a2ef9b737e36300420c2"
  },
  {
    "url": "assets/js/31.ec9078b5.js",
    "revision": "813118eb016b3cf8107dcaacf11c39c6"
  },
  {
    "url": "assets/js/32.62d1c76f.js",
    "revision": "6e33f26776e80b8e2d97c30a77481812"
  },
  {
    "url": "assets/js/33.4332c36b.js",
    "revision": "06f26c8da41fe3ac82fbeb63e78c6609"
  },
  {
    "url": "assets/js/34.058a0f11.js",
    "revision": "bbb4f86a83761c43e2adbfd27c1e05b5"
  },
  {
    "url": "assets/js/35.cea65883.js",
    "revision": "731447b072822afaaaa77f15a3d1c8f3"
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
    "url": "assets/js/5.13bc7703.js",
    "revision": "0a8bde8280dfc23cbb204cdd288318d1"
  },
  {
    "url": "assets/js/6.7eb1fe96.js",
    "revision": "622e4f7359084e60ba3fbf3cffa69e88"
  },
  {
    "url": "assets/js/7.b9ab818e.js",
    "revision": "4a6819409e8c4156a1bb9690b2aba77b"
  },
  {
    "url": "assets/js/8.9ac79879.js",
    "revision": "5f47d8e48bfd886357dce4c5bf379e5a"
  },
  {
    "url": "assets/js/9.6026ca13.js",
    "revision": "37cb24e4f682a775befefe62e5eec9e2"
  },
  {
    "url": "assets/js/app.5b5aa738.js",
    "revision": "2dcf546f53e9f4260bf11f905a685d55"
  },
  {
    "url": "assets/js/vendors~flowchart.d94e747e.js",
    "revision": "b12da3693fa87a5677a5cb6109f8a592"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "fee0d0ce5e43b78eee2fb511cbe7eba2"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "7d6556ccfcf7fa4c688a8b2c2778b30b"
  },
  {
    "url": "categories/index.html",
    "revision": "e8d41c8e73ac4708476365ec9ed3e268"
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
    "revision": "69f2acf0f7ac499111b947e216d10d01"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "e943894cb637d5e5e8fa3413763cdcd7"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "b36a1fad3ac785614a206df1fc30fac5"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "207c0268cfaf6b9b3ceb5651d99c49b1"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "1df0b240f2b59f192efc8336a09056d8"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "b07b8d280ca4b87a56535ccbbe7adc4d"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "6cca4dceb5bbfb3efe90ad337927d776"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "e1011f8737c2afaf0f72dda27dc97cd9"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "2e59cfb8e19406d53e2b1637f96b1a5e"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "4263cdddce36cd0a2d3513060d13dd08"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "5fa5422e8c4631df7c33143c60d42652"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-3.html",
    "revision": "52510f344d27f2f6f98551d45d25d707"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "3abb4d55eb791a180f0d39f01f02590b"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "e61fb920a55922f606b5d4711364ad67"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "17e51d59c92fec88371b2b21bb53347f"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "4aed019aae63f4ec6b521736cf9bd56a"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "e8d1abbd5deabc91e59a6773f57f749b"
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
    "revision": "52da72e84c69afea8679b57489347345"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "cf0a34ef2a900ec12134e7085915e478"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "fd67519636e829051461345c7c9bc48e"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "186e3e116d47c811b8c62d882ef70c1a"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "ec06f49e804b7ecdc819a92a19c2b2d9"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "37e3c45c4f2dbcc3f7750997cca945d3"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "6d1c86e655d89b8b8f2922e3cd07fa66"
  },
  {
    "url": "timeline/index.html",
    "revision": "40f8cb63828837f95002ff9a6d08085c"
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
    "revision": "fa90e44b14904bb6bb0e9ccb7d834dc0"
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
