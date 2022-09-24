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
    "revision": "39ed4f4f71f6fa89e46095f97a639d9d"
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
    "url": "assets/js/1.3eda5ad5.js",
    "revision": "9c3d1b0a713a4cf95fbec92b6034cd55"
  },
  {
    "url": "assets/js/10.c79602e4.js",
    "revision": "70846f3febbac749e625ca39a3e90198"
  },
  {
    "url": "assets/js/11.3a2c06d8.js",
    "revision": "20376ce1c8a3115cdd193a4b78bf8e55"
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
    "url": "assets/js/4.6ea28bcd.js",
    "revision": "1a342cafe03900de0abf991f86e5acf3"
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
    "url": "assets/js/5.5cce0890.js",
    "revision": "1c1e04402030b9101a437bb28fcdf352"
  },
  {
    "url": "assets/js/6.4a8e129c.js",
    "revision": "2303aec00638e82ac85e720efe987d69"
  },
  {
    "url": "assets/js/7.8ec22fa0.js",
    "revision": "0c4e65cb6ff588a8f10d105a91604bf3"
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
    "url": "assets/js/app.8ce2241b.js",
    "revision": "0afd81a6dc577aa095c63cae308c7299"
  },
  {
    "url": "assets/js/vendors~flowchart.086b5024.js",
    "revision": "6e5d81bf586ca56600b122b8eebf3c46"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "51d513dfa74535c79e399e5b01bb3c95"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "17080699a9729b1ef634fba163764d63"
  },
  {
    "url": "categories/index.html",
    "revision": "e625a216c947fca6a9f49f6f13c296ea"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "b7e27022c18701a4f6edbf53ce482c30"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "5002c6dce27eced8ae9fee27e6ac8cdf"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "4e7fc139832d0b7ffe6695fd3a8fb870"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "da6a0e0d9642adebad997a0fd8dc6645"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "b0152ce4e2c821bbb34c1e0125aea744"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "52448991ea31992888134bafcc5be149"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "4129a2e7ee40f699b87fb9e6eef22979"
  },
  {
    "url": "docs/A/index.html",
    "revision": "8721e8fb6a3dcde4004294d8ffa4970f"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "353b85e70d03285e8bacbff2e3c36788"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "0ede180bcf340ad67a89e6ef1546521f"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "5f292ee1a5a0eff06516ffda6474edbd"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "98e6d544ced68638e746a675bd443528"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "bfd3b83e9c6c1ddccd792abc9d15f0af"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "5abe28229d280984768f8147e86a583b"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "f21627907e0a17b8f67ab14e68be32ff"
  },
  {
    "url": "docs/B/index.html",
    "revision": "293e677e1499de141a7cbb123c4d5b64"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "408753717bef52f1e3f8e63fcf1e561f"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "f4409c64ce2d060ba181fb1c15585a18"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "59d0a21cb61f15e5baf9f7beecb2cb51"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "8b1c6b0cf858e532ade21b772c905fb9"
  },
  {
    "url": "docs/index.html",
    "revision": "e8c6d6e785bd035faa91d0b8fd4d0ac5"
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
    "revision": "257d2bf483ae9d36e8937098dbb06028"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "e848d958a3ed2f89322237ba84c0d53a"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "7f34491bc181f13eb29466f6ca20d07b"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "522aaa845671109f974959946264646f"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "180300d7b37e6307725f6917de43ec5d"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "4e9f6a08df1c6da4e2046730dbc061da"
  },
  {
    "url": "posts/test/2019/092101 copy 2.html",
    "revision": "d961f1aeea3da84e6c1bcbb777d0bbb1"
  },
  {
    "url": "posts/test/2019/092101 copy 3.html",
    "revision": "251f4a5d616d6519db0d5a81190cef18"
  },
  {
    "url": "posts/test/2019/092101 copy 4.html",
    "revision": "abdbfe61eb967a991be05949266e76f8"
  },
  {
    "url": "posts/test/2019/092101 copy 5.html",
    "revision": "1260680ea2927bf589ab37ccce1a087e"
  },
  {
    "url": "posts/test/2019/092101 copy 6.html",
    "revision": "d7e0987b73f0e1145e967d2fa797caac"
  },
  {
    "url": "posts/test/2019/092101 copy 7.html",
    "revision": "e3a51f89c9c3d262ba7d4bab074253ba"
  },
  {
    "url": "posts/test/2019/092101 copy.html",
    "revision": "86930054a71d9e535f7c9a3ccd8e7d1c"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "2f1af170d190ff394b2a1c723f2ebbf2"
  },
  {
    "url": "tag/index.html",
    "revision": "18c965ebc090de598507e2ebe15027bd"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "cec88cae0435b3f64aad2231c98b8b3a"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "25e37415cefb030c48cacd4acb897a8e"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "bb87717bd18360f7ded5af3ccf0938eb"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "b47bb47c7bdcf3a395ae3f95ab110479"
  },
  {
    "url": "timeline/index.html",
    "revision": "bdb843326d566ad93dd065151f7b3390"
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
