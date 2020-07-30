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
    "revision": "7efecdf740614e08d9cf1d618b0f8377"
  },
  {
    "url": "about/index.html",
    "revision": "b31b70a262ba9363eb920eb71d2ad322"
  },
  {
    "url": "assets/css/0.styles.8165391d.css",
    "revision": "f51d2a2c6f4987eef4a6f46ab65d054c"
  },
  {
    "url": "assets/img/alipay.92397020.svg",
    "revision": "9239702087add999b29eda6c69b7fac3"
  },
  {
    "url": "assets/img/bitcoin.0d6e2ad4.svg",
    "revision": "0d6e2ad44ed9a1ebb8a740ecf27916c0"
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
    "url": "assets/img/like.335eff6a.svg",
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
    "url": "assets/img/qqpay.2c5bb51f.svg",
    "revision": "2c5bb51f418944f5b7eac4e1f91c883a"
  },
  {
    "url": "assets/img/qrcode-alipay.8cb610b1.png",
    "revision": "8cb610b12541216fed503517961a186e"
  },
  {
    "url": "assets/img/qrcode-qq.710a6c92.png",
    "revision": "710a6c9261cc4c3496c941ac3bd8b432"
  },
  {
    "url": "assets/img/qrcode-wechat.de5925e1.png",
    "revision": "de5925e1e21d217342bd4ccacf0518b0"
  },
  {
    "url": "assets/img/wechat.f9bcef76.svg",
    "revision": "f9bcef76a75dae0e4fe6bf3d3af1cad3"
  },
  {
    "url": "assets/js/1.ee2c7f7d.js",
    "revision": "f3c3b1fbf7bb506131678cf16a2dfe16"
  },
  {
    "url": "assets/js/10.20567053.js",
    "revision": "f86f8328fecbe59a16a9fda98798acd8"
  },
  {
    "url": "assets/js/11.9fadc241.js",
    "revision": "7f4f7eb8a1e9313d40a68603befd4e2f"
  },
  {
    "url": "assets/js/12.3c6831ab.js",
    "revision": "bda11b5ad5808af0a9f440cc3d0eaf63"
  },
  {
    "url": "assets/js/13.1fb8ca8c.js",
    "revision": "d58faf9bff020d192d1b9bef3652bafc"
  },
  {
    "url": "assets/js/14.79c8f345.js",
    "revision": "6f1a7c7966b8b3e2ac44181885e76de0"
  },
  {
    "url": "assets/js/15.390b630e.js",
    "revision": "cbb9372bde710f5949a7edbc0046980c"
  },
  {
    "url": "assets/js/16.7f6e6018.js",
    "revision": "665995e6f9cbfa64119268b5e63e542c"
  },
  {
    "url": "assets/js/17.6bbec7f0.js",
    "revision": "9942fc82607bbd297797b2f7abad3113"
  },
  {
    "url": "assets/js/18.a9e981f8.js",
    "revision": "144215daf3713bbae70d255c1b2de932"
  },
  {
    "url": "assets/js/19.e3c0df34.js",
    "revision": "17a77ac20e120811a0113ec36b0aa9e3"
  },
  {
    "url": "assets/js/20.eac51e7a.js",
    "revision": "ccac74072cd35f88f8179c24501ad83b"
  },
  {
    "url": "assets/js/21.81145c83.js",
    "revision": "75d3a70d161fb11b50325b20a7d3e19d"
  },
  {
    "url": "assets/js/22.55067240.js",
    "revision": "05eb3e984263c26b905bd2b04a970958"
  },
  {
    "url": "assets/js/23.2e5da1b3.js",
    "revision": "347c3fb4484639f168ce62541a1cf7e5"
  },
  {
    "url": "assets/js/24.8cc4c86a.js",
    "revision": "30688efee582c8c0c11e1d84bd3c0944"
  },
  {
    "url": "assets/js/25.1d10c95b.js",
    "revision": "93de8e85d53e9c1b50434e4d32789110"
  },
  {
    "url": "assets/js/26.9b26b498.js",
    "revision": "f63b0bf6ed6d3b8ea18b1853ad91bdfb"
  },
  {
    "url": "assets/js/27.8451a2d5.js",
    "revision": "297d878d6a87bbe773de2b7c558dfa16"
  },
  {
    "url": "assets/js/28.afb3ac95.js",
    "revision": "b9ce8912c818be524f4b764d05914f88"
  },
  {
    "url": "assets/js/29.cb3911f9.js",
    "revision": "1917109fc6f5f70e9024e00311c5bf44"
  },
  {
    "url": "assets/js/30.2bde3df4.js",
    "revision": "42ea7911c1c074ed2a90273dd2fffcd3"
  },
  {
    "url": "assets/js/31.7a0ce0bd.js",
    "revision": "2216ecc7c2bed292c1ada17306d7bfbe"
  },
  {
    "url": "assets/js/32.2d5f2e0d.js",
    "revision": "8371b781081f0b141b6da309a634b467"
  },
  {
    "url": "assets/js/33.98f18d80.js",
    "revision": "6e1e177620e4447850f4dc4f4371ebd1"
  },
  {
    "url": "assets/js/34.3e7571d4.js",
    "revision": "02724b5c0ac9c3d5b2dcfd2645cd69de"
  },
  {
    "url": "assets/js/4.c215e095.js",
    "revision": "8b835f714a1e0c1fb520e3bf8596cba7"
  },
  {
    "url": "assets/js/5.9ccb06ed.js",
    "revision": "cc015713342c23469b331b84e5a5b266"
  },
  {
    "url": "assets/js/6.77179619.js",
    "revision": "5e5cac68df1dccf56334de33cbb7dda0"
  },
  {
    "url": "assets/js/7.e0206d27.js",
    "revision": "b70afa0e012701bf7adb7e8066d21bcc"
  },
  {
    "url": "assets/js/8.724b0a60.js",
    "revision": "d32178b69c1084968ac67a100fa2351a"
  },
  {
    "url": "assets/js/9.1c0536f4.js",
    "revision": "724a7ac34f3e97d8324664a4aa72e653"
  },
  {
    "url": "assets/js/app.d389dddb.js",
    "revision": "7827958f118475dc97c8b7726f42a407"
  },
  {
    "url": "assets/js/vendors~flowchart.5f22e318.js",
    "revision": "d175456efb83b8bc745a1f6b41c20586"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "93856b705432ce25692cef47a273493a"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "096e125f65b8aa3219a79a189cd801d5"
  },
  {
    "url": "categories/index.html",
    "revision": "c8886bec59bac197438ca76298e8c964"
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
    "revision": "5d8086abc6915fa362cd185d1d25881b"
  },
  {
    "url": "posts/java-learning/advanced-1.html",
    "revision": "e8ff391b7830832e76aff63a92b4ec57"
  },
  {
    "url": "posts/java-learning/advanced-2.html",
    "revision": "0bfd1add16efb8813eb07b5570ee50cf"
  },
  {
    "url": "posts/java-learning/basic-1.html",
    "revision": "62ae1df043aee86969a13891e6685647"
  },
  {
    "url": "posts/java-learning/basic-2.html",
    "revision": "7ff93a7472e994486af2df141d02e928"
  },
  {
    "url": "posts/java-learning/index.html",
    "revision": "686205a1d1f5e629848a200854b0b0be"
  },
  {
    "url": "posts/jvm-learning/index.html",
    "revision": "7f9b39c82381f2e61e8de7ed630fad6f"
  },
  {
    "url": "posts/jvm-learning/JVM-1.html",
    "revision": "64de5bfb661df77a5ddb25d2da1c2e7a"
  },
  {
    "url": "posts/jvm-learning/JVM-2.html",
    "revision": "45c1890acb439be9ac63df3bde6850ad"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-1.html",
    "revision": "2df5cbab4f566c6be07296258f82bd0e"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-2.html",
    "revision": "c4891cdc30ed7d8f825c2634f5198b9b"
  },
  {
    "url": "posts/vuepress-blog-build-journey/deploy-3.html",
    "revision": "1c391a9c316b0dec1c32620d39bb6be8"
  },
  {
    "url": "posts/vuepress-blog-build-journey/index.html",
    "revision": "7e6494aff9f990fa597543ad05326db9"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress-theme-reco.html",
    "revision": "41372f8fb1aa168b363c184ac5bfecc4"
  },
  {
    "url": "posts/vuepress-blog-build-journey/intro-vuepress.html",
    "revision": "9ab43a8f63f651a48a3c1d81830bfc44"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-1.html",
    "revision": "1b537869436cce69d1904e9e207ec734"
  },
  {
    "url": "posts/vuepress-blog-build-journey/local-build-2.html",
    "revision": "79e6291d292f68453581fa28d9e36bc8"
  },
  {
    "url": "tag/index.html",
    "revision": "18343981cad024eb568dfe346e52117b"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "08a3c08d938122d7ffee18bc61f917ca"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "4e42f0e4ba3bcccc2a52c3efe5ba3306"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "170c671ce1ab67bd69ba374284359f1f"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "d4e59361cbe9b3f0c3e1250686fdc436"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "3c5453d3e4a13d85a651efbab9ff8ea0"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "41623a77d83eeab8d6bd5b377faf0158"
  },
  {
    "url": "timeline/index.html",
    "revision": "b386bdf1738357873eb175892cb0ae4b"
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
    "url": "tools-logo/recommend-tag.png",
    "revision": "ca8d1b42d8d6497ca71ccd08244a1049"
  },
  {
    "url": "tools/index.html",
    "revision": "d17995f096d6fd267ac4e2384a973090"
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
