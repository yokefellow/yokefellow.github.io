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
    "revision": "c91354e1c7f6a46a1a79aad2f6755086"
  },
  {
    "url": "about/index.html",
    "revision": "00f619665de402bb557e0d719e6740c2"
  },
  {
    "url": "assets/css/0.styles.8f63a786.css",
    "revision": "7dd33bc42f8e93ccedcc53624c3d509e"
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
    "url": "assets/js/10.7b4c03b6.js",
    "revision": "4497dce728c92536b45eb54619b066e6"
  },
  {
    "url": "assets/js/11.2d458c6f.js",
    "revision": "68474dc9e9ac511262e04c046eb6a9e0"
  },
  {
    "url": "assets/js/12.10d86d53.js",
    "revision": "32323bb109ad2c0d4de8cb07d50103cf"
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
    "url": "assets/js/9.95af6407.js",
    "revision": "3b428865c58e0e3d4bfb4191156b4186"
  },
  {
    "url": "assets/js/app.54436242.js",
    "revision": "8275ccf8d9457a606e0a28454597a936"
  },
  {
    "url": "assets/js/vendors~flowchart.d94e747e.js",
    "revision": "b12da3693fa87a5677a5cb6109f8a592"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "762a544ba561d34beba58e00f283cbd3"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "1148869cdb3155433a4460d9f2648821"
  },
  {
    "url": "categories/index.html",
    "revision": "19ceb67eeebfffe3db6f6cf404a911ac"
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
    "revision": "d714a8e5bd018692127ab1ae384326c8"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "1788e67343b77d9c1c9885b8c55c47f4"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "8e7e00fc4b2030a75e7fb00943537a7c"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "74746b2fabd4f2d4c9c8090d0271b125"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "3c2eaad4d61eb6bb6258cf9e9bd1dd97"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "2a63778d17a22148c5ab1a3ea6ae3230"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "fd8d0ba39c92f184ed69f35911aa60bf"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "09a557f3d288b528e4d1fd1527418ee0"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "177379e495f1e4bb2d69aa0e6562b0fd"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "9a1650027634cf274d80dac4b270293d"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "675aaeb2f6d12ae0e4f6b7979aa97f22"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-3.html",
    "revision": "62ebf53d34392309781b64d57ada7083"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "c22e2f730a15c28cdccfe999825b5bee"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "c466cb99afe71942fb203dcbc2711948"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "a6958a6c7dd3f6dff004dd191ee22691"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "b885135335804deee7e4e8423a395758"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "1d92e6897458fe3135b36282df90d8e2"
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
    "revision": "bfcd0090e039aef13e5126e56b238b02"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "088ed99986e225129adfa4ad3b866eba"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "826e884596bbe4931d5ccc7749b76a2b"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "2de534ebe883e84b988f794ab96bbbea"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "6c40ced5354c24945a4571624c9e3f90"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "4c5945d33a9e0d5eed760782322f44b9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "9629748ec0ca6b87c6fe90401a6b1a11"
  },
  {
    "url": "timeline/index.html",
    "revision": "eba54e83cfc520302b48bef69ddc5230"
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
    "revision": "31a904599c31dc949b70970e07c3c65d"
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
