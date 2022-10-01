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
    "revision": "e557edc2d6dc6efe362deb1426585034"
  },
  {
    "url": "about/index.html",
    "revision": "52e26b785bcb6ad33526f88bb6e69d9f"
  },
  {
    "url": "adaptation/android-icon-192x192.png",
    "revision": "e5f482cf85280a9736e01e623eff192d"
  },
  {
    "url": "adaptation/apple-icon-114x114.png",
    "revision": "e75ce305a6e47796873fd87df177d527"
  },
  {
    "url": "adaptation/apple-icon-120x120.png",
    "revision": "c72749b54a300f14774cbb4c7783b171"
  },
  {
    "url": "adaptation/apple-icon-144x144.png",
    "revision": "4e3f1267b6fb4b25b9b5156c6f14a5c7"
  },
  {
    "url": "adaptation/apple-icon-152x152.png",
    "revision": "a684cce47b88169a00e3f323fe3cf989"
  },
  {
    "url": "adaptation/apple-icon-180x180.png",
    "revision": "1b20d7189c2898d905abe21db5fd303a"
  },
  {
    "url": "adaptation/apple-icon-57x57.png",
    "revision": "0e6ed8e655733eaf2963791f8a9ae69c"
  },
  {
    "url": "adaptation/apple-icon-60x60.png",
    "revision": "c99165bda14c784ec09550950d4b2b77"
  },
  {
    "url": "adaptation/apple-icon-72x72.png",
    "revision": "3272d55d3e03088ae48ed472b7214cce"
  },
  {
    "url": "adaptation/apple-icon-76x76.png",
    "revision": "6cacea4f92a8ae99037a825290459db9"
  },
  {
    "url": "adaptation/favicon-508x508.png",
    "revision": "643841f1935c70b39ee6364fe2b100ec"
  },
  {
    "url": "adaptation/original-banner.jpg",
    "revision": "d25ef3bdf7c40aa6104d924e9314731c"
  },
  {
    "url": "adaptation/original-favicon.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "assets/css/0.styles.daf0b3cb.css",
    "revision": "a6d7fdb9f11b3064bcc9751e2a3194b2"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.7dd916ed.js",
    "revision": "ff0e333d94b5517ec94b2ed4c243676f"
  },
  {
    "url": "assets/js/10.0fe756fb.js",
    "revision": "ef79ca8ee15d1ea439fab1cf31e57a5d"
  },
  {
    "url": "assets/js/11.3eb1b81e.js",
    "revision": "4f4fbb48504d5e54478809c1dbc265b1"
  },
  {
    "url": "assets/js/12.e117725b.js",
    "revision": "7b0654ba80799d8e331ac4925483018f"
  },
  {
    "url": "assets/js/13.002215d2.js",
    "revision": "176f012ff1618fd5f99f54490e2abee5"
  },
  {
    "url": "assets/js/14.ba7426b6.js",
    "revision": "ba5ecd468d08a0c02b35fb2563490050"
  },
  {
    "url": "assets/js/15.b7550a0c.js",
    "revision": "c2898f98e4a47b5f6ce204a6198ca773"
  },
  {
    "url": "assets/js/16.1e9e4c73.js",
    "revision": "a6d03e7c986f24919f7676e6c2b0693f"
  },
  {
    "url": "assets/js/17.bc5b1f9f.js",
    "revision": "477e711a21598e989d617cb0a4e453cb"
  },
  {
    "url": "assets/js/18.db591824.js",
    "revision": "b076a20176c2d1abe9cce6613edd08d8"
  },
  {
    "url": "assets/js/19.f165e38c.js",
    "revision": "05f0c62e87991643aa8c77dcdd12a747"
  },
  {
    "url": "assets/js/20.42fb1507.js",
    "revision": "e9000adf3d6b6fff309bf851f6253f7a"
  },
  {
    "url": "assets/js/21.63ed11e7.js",
    "revision": "09761a1756f1b425c0f3c5b4e9ae8004"
  },
  {
    "url": "assets/js/22.e0c4a014.js",
    "revision": "14af6f2a4bac093f10b05d0cd4cb9417"
  },
  {
    "url": "assets/js/23.0b4ded23.js",
    "revision": "361bf425df67cc4e94717fa7e6541555"
  },
  {
    "url": "assets/js/24.09be684b.js",
    "revision": "1c96917f96a476e76d7ef2c87eea432c"
  },
  {
    "url": "assets/js/25.b47b8237.js",
    "revision": "bee6d29a58e4c508d4800be2c7c32a92"
  },
  {
    "url": "assets/js/26.921ef968.js",
    "revision": "c4b1ce11b7876cdf64d933895ba03b5f"
  },
  {
    "url": "assets/js/27.0b7cffa6.js",
    "revision": "a07bb715f2053cf1d270f45e79330040"
  },
  {
    "url": "assets/js/28.d3ca8aba.js",
    "revision": "24747be9b778b1fc9a7931e756b205b0"
  },
  {
    "url": "assets/js/29.d6174c47.js",
    "revision": "f95d9410769dbf6e8a4dfe3b04298cae"
  },
  {
    "url": "assets/js/30.da07894d.js",
    "revision": "d77d0368a861a925608c86447441a21e"
  },
  {
    "url": "assets/js/31.bf7535a2.js",
    "revision": "a4217e806a1bae0af56e3a06016e411c"
  },
  {
    "url": "assets/js/32.b8e18c51.js",
    "revision": "f31001c3f2bbb5edbf0a5d9fb756195e"
  },
  {
    "url": "assets/js/33.1bd1e655.js",
    "revision": "b44dea7dfcdf4396aacc0cbc2b0bb267"
  },
  {
    "url": "assets/js/34.126dd059.js",
    "revision": "f2d164c5cc461f84b7e0d153e496a10f"
  },
  {
    "url": "assets/js/35.fb9f32dd.js",
    "revision": "3bdd39407a5fbe1465fe3bbd0cd85371"
  },
  {
    "url": "assets/js/36.57914306.js",
    "revision": "16c4f2b95b94f0a33297fb4331db252e"
  },
  {
    "url": "assets/js/37.8c446aa0.js",
    "revision": "bb69a5d3b086e16bb64b15ba5cc2c276"
  },
  {
    "url": "assets/js/38.1de6413d.js",
    "revision": "78f553e63afd42334025acf817e56a2f"
  },
  {
    "url": "assets/js/39.55162595.js",
    "revision": "9f30a8bf09171821fe8f4e5604023be2"
  },
  {
    "url": "assets/js/40.9572d961.js",
    "revision": "1cde88a872e3f3028e9919fbe6db8e7f"
  },
  {
    "url": "assets/js/41.2b0b2593.js",
    "revision": "d80757cf5ef788c803851b5339496916"
  },
  {
    "url": "assets/js/42.dd969722.js",
    "revision": "21de5eaafc58c57c130d25cd87a710c0"
  },
  {
    "url": "assets/js/43.dae6520e.js",
    "revision": "d8d6e1afb367bacdc91cca15f879c5e0"
  },
  {
    "url": "assets/js/44.c092fe32.js",
    "revision": "c4dce5b9332e0f234ccbf7e1ba92afc7"
  },
  {
    "url": "assets/js/45.2237edfb.js",
    "revision": "011ed0b0a0ec966bb245278e025e8388"
  },
  {
    "url": "assets/js/46.707c38e9.js",
    "revision": "e780d0199a8b7a57b9c2341439a8b149"
  },
  {
    "url": "assets/js/47.4e4207ed.js",
    "revision": "f0b2cae7541c4dbf5a8e4c9a6c040576"
  },
  {
    "url": "assets/js/48.466f6c95.js",
    "revision": "5bf1277b87f47da3ccaafbb0a87151db"
  },
  {
    "url": "assets/js/49.4f3b90e9.js",
    "revision": "fa69f4fbb1e12f0ec2b18e63b87b0d9d"
  },
  {
    "url": "assets/js/50.37f5167c.js",
    "revision": "10162bdd5f37e4ab93849a0811c99e7d"
  },
  {
    "url": "assets/js/51.4385e64e.js",
    "revision": "1ac90090df71a92ee45206bf99a34bd2"
  },
  {
    "url": "assets/js/52.a9dc9f19.js",
    "revision": "74de762a66351f4724c3ab819fc13680"
  },
  {
    "url": "assets/js/7.6482b90d.js",
    "revision": "20b98b6cd65917be3131a4d8f0afdaec"
  },
  {
    "url": "assets/js/8.8de90604.js",
    "revision": "8c9db1551e39e78ee4d7aaba984834d5"
  },
  {
    "url": "assets/js/9.36877f44.js",
    "revision": "f976f71f11dc28b6c70be8daa7037fdf"
  },
  {
    "url": "assets/js/app.e7a79288.js",
    "revision": "d196208a867d0bd3d2dccb70730b2be4"
  },
  {
    "url": "assets/js/vendors~chart.128d55cf.js",
    "revision": "bbf1b27a3f20a08b27a8bc1562dd6caa"
  },
  {
    "url": "assets/js/vendors~echarts.b58efe84.js",
    "revision": "7dc8a5ac0c0950273046193b834fec32"
  },
  {
    "url": "assets/js/vendors~flowchart.b4235482.js",
    "revision": "e96be3c352e8ec705680ecb1925c01e2"
  },
  {
    "url": "assets/js/vendors~mermaid.59a3b744.js",
    "revision": "ab7bda71d7e4cf0833b70e0f50dfb0ad"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "5f2265fe00c44af8657010d1b22a14a2"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "6ca8f7ffe7fb002a68dc349a562fd9a7"
  },
  {
    "url": "categories/index.html",
    "revision": "4d0af56d8c83160390747c3fa0decf8b"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "18ad6046ed9ecbd0eb2b203f805cd2d9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8332947949d3b0d018aedb7547cecfbe"
  },
  {
    "url": "css/prism-tomorrow.css",
    "revision": "f46d7519e3b65a6912814727b47a57ff"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "ab3692e2fd9232170b657d996566f8a3"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "f681987b056346640b45e08658881441"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "afff1148c4dd292d32bc18e03e8e604f"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "6965125e3dc65d02f9a27dfcced60226"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "477b08ff80eb3f6b40463229c5a3282b"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "552a80686384ec10ed2e6584defbcaea"
  },
  {
    "url": "docs/A/index.html",
    "revision": "e197a66987ecac5e466d559e91e88327"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "9031655fe1d7c39f742dedd6244fea18"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "e80e69742fcbf46abea53bd82a327709"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "8e6135c2d463ce2e73ba9bad83c6eba1"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "83e494824f8e31dcf553b987902b4bbe"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "ca32537270457e33e20068d78873d105"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "60fc2777923ebe5de1f3bc1ba84b203d"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "25278b1673c4aab8b3d4189100a7856b"
  },
  {
    "url": "docs/B/index.html",
    "revision": "bdf55b648fffbc6149810c2871feace3"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "46878a71f835d92c1cb1cb791a576140"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "9faf78da888ecc9a64f8bfe8dd2ebfe1"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "b21a925807a4c60f33907eefa4c084fb"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "5ca6688187b06e3ead536707fd9befb1"
  },
  {
    "url": "favicon.svg",
    "revision": "ec263efa46b86cdc039d1c0f2993eef8"
  },
  {
    "url": "fonts/BY-Dodge-Rabbit-2.ttf",
    "revision": "409024f6fa41a5fad8bd4b49b1110078"
  },
  {
    "url": "fonts/en-s.ttf",
    "revision": "96157c3ee2ac00fba7cee04cae0b02a2"
  },
  {
    "url": "fonts/No.025-Sounso-Warm-2.ttf",
    "revision": "5c3dff6e964a789f8b0a49c69210e2f5"
  },
  {
    "url": "fonts/Rastano-2.otf",
    "revision": "d37dcbd22c6621c1f08fe3b0e4f54d49"
  },
  {
    "url": "fonts/Rastano-3.ttf",
    "revision": "632d8dda330e224271b0ccfa750ef791"
  },
  {
    "url": "icons/fontawesome-free-6.2.0-web/css/fontawesome.min.css",
    "revision": "d318f674308800c356f650173502cf6d"
  },
  {
    "url": "icons/fontawesome-free-6.2.0-web/webfonts/fa-solid-900.woff2",
    "revision": "3e50e269ee627bb2279f91d18c085167"
  },
  {
    "url": "images/avatar.png",
    "revision": "4a3add9980ba13981478da29898ebd40"
  },
  {
    "url": "images/banner-autumn.jpg",
    "revision": "00f9df1358c564947810d50ecf8a5ce8"
  },
  {
    "url": "images/banner-galaxy.jpg",
    "revision": "4d0e1d61c9f20fddbe3daade15b442c8"
  },
  {
    "url": "images/banner-green.jpg",
    "revision": "286d09cb8eda5e3fb3666d2d6781d743"
  },
  {
    "url": "images/posts/20200818/vuepress-hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "images/posts/20200818/vuepress-reco-hero.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "images/vuepress-hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "images/vuepress-reco-hero.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "index.html",
    "revision": "0ed12d76adc85a80b5a9b70c068251d3"
  },
  {
    "url": "posts/2020/0818/hi-vuepress-and-theme-reco.html",
    "revision": "78f69df5204bf3f48c6bc0ee23b5872c"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "d265ee158f375201b98e7dd23fef78f5"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "374297b9507855cb2ab97f2db1a8a89a"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "af17f6bb16817d42843cd7464dda6674"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "34d2e0452316f764f41955ee47abf1e2"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "dd71c8d42436a430de2ce2f671b28f02"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "09e76732ca98f5af46bd2d39cb98fb6e"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "b78b424807e2c4837c580189d1cb30a2"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "7606cf0a46b184cf449d04129afa88d5"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "d09dbf6945e75dd2074c46df6bd6d649"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "f7758ec486479b2a9598efa3cb8492c8"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "a2dcf5d036958287f6855032e2200929"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "3785129f06d67c764c2803612ca91511"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "132564844d967cfcb630433f35c2d50e"
  },
  {
    "url": "tag/index.html",
    "revision": "d88a1e6b92455616a77bde1d5e2c474f"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "009115ed8acf6eb79f8e092dbcd6c688"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "3b95c9f2f39c62b6f73364ff7de6b213"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "65d66bfe9ff9fc86f144359b077463d8"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "a5652a7b0a282a1404133ad2c06df774"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "c14208592b2d40de70153fe8c5bf4fc8"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "fea9d20e15c32c4a5ca0fabbf0c80f17"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "5f03047d8f4e7004612baf295481ec72"
  },
  {
    "url": "timeline/index.html",
    "revision": "78b2530daad11529055f3a9bb4f591e7"
  },
  {
    "url": "tools/index.html",
    "revision": "dfb0784237f3cf9c6f2634c6fdb37391"
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
