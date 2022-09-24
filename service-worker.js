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
    "revision": "c0632b155fc9bd39f0e19841ba2ed9e0"
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
    "url": "assets/css/0.styles.e4737fce.css",
    "revision": "81f7244fbd95b38dca17380588a49238"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.97879acb.js",
    "revision": "f5453449724bd3305a1a8f138fa93181"
  },
  {
    "url": "assets/js/10.c79602e4.js",
    "revision": "70846f3febbac749e625ca39a3e90198"
  },
  {
    "url": "assets/js/11.44959172.js",
    "revision": "d29540ee1ba20b061ff088ed7bb0895c"
  },
  {
    "url": "assets/js/12.dbeacfc6.js",
    "revision": "f23c6a1efcdf951d6c67ed07122746cf"
  },
  {
    "url": "assets/js/13.31f8d67c.js",
    "revision": "e58b3151273dbd6400de349442aa594d"
  },
  {
    "url": "assets/js/14.aa7f5713.js",
    "revision": "966b400adc65e639693927bb2cbcba99"
  },
  {
    "url": "assets/js/15.a791095d.js",
    "revision": "f9a7a5d57db976370b09fc2df436b96d"
  },
  {
    "url": "assets/js/16.3527f47f.js",
    "revision": "473b47ae30c14373f2c11fb70a25338f"
  },
  {
    "url": "assets/js/17.6748bb67.js",
    "revision": "5463f945ce81500ee11ca148c074da0d"
  },
  {
    "url": "assets/js/18.afd6c043.js",
    "revision": "f7a14479ef2c03de93ce8b6f2c041775"
  },
  {
    "url": "assets/js/19.63c48b26.js",
    "revision": "5bdb27800002893d3aaafa1158654795"
  },
  {
    "url": "assets/js/20.7285e969.js",
    "revision": "209e8d8e2106d9d74b2d132995d949c1"
  },
  {
    "url": "assets/js/21.4bc0720a.js",
    "revision": "fc45bc1b0c08c49bb18e17ab96ee003a"
  },
  {
    "url": "assets/js/22.3551b1c3.js",
    "revision": "ac9058dee5b03217e59b9c1b2ec21576"
  },
  {
    "url": "assets/js/23.382701b2.js",
    "revision": "9d34592fe0c01121c3b765e67cdd6415"
  },
  {
    "url": "assets/js/24.e960afd0.js",
    "revision": "b1906f01424840cbadddbdcb5464a7c9"
  },
  {
    "url": "assets/js/25.6a3bb3d8.js",
    "revision": "539dde1790dd83172fc2dce090e4d897"
  },
  {
    "url": "assets/js/26.1d50232a.js",
    "revision": "352107d16c033c1dcfae8590d8301438"
  },
  {
    "url": "assets/js/27.58fae04f.js",
    "revision": "26c189e67a7d916d3693bbfb5c9c9f78"
  },
  {
    "url": "assets/js/28.caf26bda.js",
    "revision": "e9b8b15914e3b55b5f01dd4cbe9c4396"
  },
  {
    "url": "assets/js/29.db785193.js",
    "revision": "cf7c2c2f7623e69eddfc84761fb95902"
  },
  {
    "url": "assets/js/30.28caf7dd.js",
    "revision": "c295ad79c277c7abcf1b8622af5b0399"
  },
  {
    "url": "assets/js/31.843ecb6f.js",
    "revision": "8752bf51d290a475b4087aad315b4e4e"
  },
  {
    "url": "assets/js/32.80d00f13.js",
    "revision": "120602753ca2e15750cb449b9f4c92b0"
  },
  {
    "url": "assets/js/33.9195a931.js",
    "revision": "d35d37cf60437e7ea254eb59f078a4c8"
  },
  {
    "url": "assets/js/34.d10509f9.js",
    "revision": "dae57fbfb872693bec7104fce6c01539"
  },
  {
    "url": "assets/js/35.1af1f7df.js",
    "revision": "cf858157d98060181179a09f3024797b"
  },
  {
    "url": "assets/js/36.df1ac8cc.js",
    "revision": "a25228bfc58bda1cba28c1c3e29a056b"
  },
  {
    "url": "assets/js/37.1a0111ee.js",
    "revision": "0ca53f8e95b2a63ed89304b80d699c7f"
  },
  {
    "url": "assets/js/38.029d048b.js",
    "revision": "46cba7bf93d45d0d900c1a8064609b30"
  },
  {
    "url": "assets/js/39.283cc65f.js",
    "revision": "64a9cd1646b32a4401766f5d65abd265"
  },
  {
    "url": "assets/js/4.6cc00829.js",
    "revision": "3b3a3d4247ee90eeb59ea9f5beaa1fa3"
  },
  {
    "url": "assets/js/40.2ff1ea4d.js",
    "revision": "20f54dc28f3f1357f8530d4872389fcc"
  },
  {
    "url": "assets/js/41.632df415.js",
    "revision": "3ef82692fe53ca0a87e77e08582b7660"
  },
  {
    "url": "assets/js/42.06625ebd.js",
    "revision": "f616cf55de30682ee46281d581196171"
  },
  {
    "url": "assets/js/43.4f33fa0f.js",
    "revision": "7b02ef198979342932be7109ad6b77b6"
  },
  {
    "url": "assets/js/44.0fa7cf1f.js",
    "revision": "084a4a75367d0fc1b376ee78edfc3d21"
  },
  {
    "url": "assets/js/45.32a2d5b9.js",
    "revision": "31eeb991873c3271f62daede2f1eb898"
  },
  {
    "url": "assets/js/46.8e1ab88d.js",
    "revision": "f7764669ceac862a264937a41c9dddd0"
  },
  {
    "url": "assets/js/5.db63836a.js",
    "revision": "84dd18a75b469093fa4acada56b9c452"
  },
  {
    "url": "assets/js/6.9924000a.js",
    "revision": "cf0d1043e350bee9e1535fbe40d3b5a5"
  },
  {
    "url": "assets/js/7.e1f35652.js",
    "revision": "1ab229c186a25f7f5044d82f071c67d7"
  },
  {
    "url": "assets/js/8.00b607d7.js",
    "revision": "305c3aab61be5162c315bee66a9465be"
  },
  {
    "url": "assets/js/9.5c39c57e.js",
    "revision": "cb913a9809f971671961d9f79b31da40"
  },
  {
    "url": "assets/js/app.81b00a8a.js",
    "revision": "356aa7ee59e6c1e70b06585a7f5c87e4"
  },
  {
    "url": "assets/js/vendors~flowchart.086b5024.js",
    "revision": "6e5d81bf586ca56600b122b8eebf3c46"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "db31aa67a43c5ff2f8daa9cd5a1f5a55"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "38e11e99b082c1f7c79ec3cd52445f26"
  },
  {
    "url": "categories/index.html",
    "revision": "606647e52d6507b859826674b76d1669"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "e1ff85ff7db8c0aa08e3744cd086570c"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "3f854bd9738a9612355917449bb08931"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "396b07639578376b12d9b81c87191515"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "2285591f751e134ef96860a5ab779b53"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "d220c7e6e7d01b91bd3f35741e1df67a"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "402e2f99d07e26bb831223d9470d0b89"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "1bfe45173ec6e0579dd549f422f454e3"
  },
  {
    "url": "docs/A/index.html",
    "revision": "ac38000e24541746016cdb6dd5a6944a"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "b4a08274049b6516283cc63f8755a01d"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "e5d3a24b153b7f7ef6ce24ad6aa33ce6"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "5dec0594435c21a9b2bcd2918fa6bf1a"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "26b4951a6f19f1e4f7b97081fce06e10"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "9a364761ac035e3a767f205b7dcb6dfe"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "dc97fbc2071245756a381b0e1bb93127"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "f902d41549f416472b3c6fa729067469"
  },
  {
    "url": "docs/B/index.html",
    "revision": "b9320b66816fe237da303e150ff500ec"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "3cd2b6b87bebaed845cfc447a9c02122"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "37475f6a49d3304d3be7bc1b4507ebe1"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "d02485ca7b1039bbb047682150318cb8"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "ab689476bfdd822c7f178bdd8c0d9273"
  },
  {
    "url": "docs/index.html",
    "revision": "42a1057fe880bbb1696a7c2d17f98e6e"
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
    "url": "images/avatar.png",
    "revision": "4a3add9980ba13981478da29898ebd40"
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
    "url": "index.html",
    "revision": "ecd2fd3da040b02f9f11075314ea8dce"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "eb58ff31340160e4d100a1fa2c5db89d"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "4b96662edefc9c4aff06cfacc946b28c"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "ee3e94eb2a3222c8ee97c51fba14aa96"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "9312a60ef7aa34220a0c623431f451f4"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "13d058da0441d47d9dcf85ba07af367c"
  },
  {
    "url": "posts/test/2019/092101 copy 2.html",
    "revision": "6004c70abce2ae3aa82c1c328060e145"
  },
  {
    "url": "posts/test/2019/092101 copy 3.html",
    "revision": "ce67b12114d016a7aaf381e5dde171a7"
  },
  {
    "url": "posts/test/2019/092101 copy 4.html",
    "revision": "36512c685487da06d47d22e29f40b4fc"
  },
  {
    "url": "posts/test/2019/092101 copy 5.html",
    "revision": "3d82ae4e4a889d87607c2706164088b9"
  },
  {
    "url": "posts/test/2019/092101 copy 6.html",
    "revision": "e2c8f96f14acc70e0e59097f3c0418b5"
  },
  {
    "url": "posts/test/2019/092101 copy 7.html",
    "revision": "9ac428521ca140061249d149fff2fd72"
  },
  {
    "url": "posts/test/2019/092101 copy.html",
    "revision": "efc1a8d7c7ab9307304f4fc9cd322f93"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "6b3034b0799d038985aaa05a82f1eb15"
  },
  {
    "url": "tag/index.html",
    "revision": "d46843cb613e59ad035299087251cffa"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "f798b2515a725163e46755c44fbee445"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "085c0c8fce8901e95b00ce3770c82058"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "47c329f44d834f35d80ffe4547a1b7a1"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "12e68ef01de4efd7b0e68f800935e438"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9063c222fae25fcfdc4dc7dfdfaea34"
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
