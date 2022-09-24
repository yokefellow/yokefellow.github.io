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
    "revision": "4bd9a7362cfc6ebb217f754fd4a3de8a"
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
    "url": "assets/js/app.3e05a717.js",
    "revision": "8be9e1fed7d701828407bb69f9dd6af5"
  },
  {
    "url": "assets/js/vendors~flowchart.086b5024.js",
    "revision": "6e5d81bf586ca56600b122b8eebf3c46"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "b24b3ca5f765b4f273d88bed4b8106dc"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "12c0cc257a52d5d081886a70b42a04e0"
  },
  {
    "url": "categories/index.html",
    "revision": "f1af51fb8a528d7ffb63b75f7617e44a"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "35144be9a52467a5e112b0ed710e6cbf"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "ee58fcfa97c4839917db7b266eab4534"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "ca5936c64ff616dc7e0320988041d097"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "15b5b98010f90fef41129402a4b62d2a"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "1ec253ca1d5dda619b0eaa8aa4080c10"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "75b51a46af463074d5dcb48957dcbc3c"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "363202d487f2332a8d54c514843c2d31"
  },
  {
    "url": "docs/A/index.html",
    "revision": "e9ea0ba3f1376a78cddb29028d492908"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "f900fd544b963e30fa00e898e3a5d5d3"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "54e0a5e744240d0791c3158e2398281b"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "61cd614aa7d4191bd7ecf8932d9a04d9"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "a2d3574a30dafe9b8a664f91d45340da"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "9a674a692f2692df0c9ef5a4280f55af"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "c9a912ed2707b68b33c8ba2cc88a071f"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "6372d5ae50147f5f9d7481535c398d65"
  },
  {
    "url": "docs/B/index.html",
    "revision": "d8a31609b1523d4aab1a1351e7508b17"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "a08be75549f7a15e85e40e9a0bd8d5ad"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "c0ceb1451f3ebf5fca53d6650fd75495"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "86661a468cde1856d3684e9e86925fb6"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "784a923e0ef24cdd3f206c0575cd4332"
  },
  {
    "url": "docs/index.html",
    "revision": "9d88f57d1da39610a7692be72bab36b9"
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
    "revision": "43913a2f997c08667e9f2ee36e93bb20"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "f3bbd3c239efffbf1df40f568ef243bd"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "ea4d56979a37821eb59890f676a3a4ec"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "f371b6afb850ca293b31195f313147d5"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "e3b453559daccc8d49ad0775848fd572"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "b0f1d934f680f93f2c35404debb2bf8d"
  },
  {
    "url": "posts/test/2019/092101 copy 2.html",
    "revision": "ea11c58823926df9e2fc65ab55bd174e"
  },
  {
    "url": "posts/test/2019/092101 copy 3.html",
    "revision": "47d6ba6e91fb8eacc311e90db843a74e"
  },
  {
    "url": "posts/test/2019/092101 copy 4.html",
    "revision": "b27fd84efd359aa5d5ad8ec335244a61"
  },
  {
    "url": "posts/test/2019/092101 copy 5.html",
    "revision": "e1fa6c45f6170ef652b029042b3f7c30"
  },
  {
    "url": "posts/test/2019/092101 copy 6.html",
    "revision": "f44109eaa1826168b2006ad9bf8ceb32"
  },
  {
    "url": "posts/test/2019/092101 copy 7.html",
    "revision": "eea59782ab504e5551c6d0eed110fabf"
  },
  {
    "url": "posts/test/2019/092101 copy.html",
    "revision": "c5b710a7bf58d676d8e1e3cdc20823b9"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "c768cba0d92c4b1f667df14aca6b1033"
  },
  {
    "url": "tag/index.html",
    "revision": "13d2f6f7a55332e1ed263aba5f24e045"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "80fa5decac461c4c7f3d607dd292730f"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "ae91afa9dd341e5fcbfa56281f234e30"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "29433fbdc5efa21f3ad0171017a5385e"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "873fe42b1edb7a5abe48d6f0c0e731ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "6a11498af05cdedfa11857e8359e994a"
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
