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
    "revision": "a1d6eda048aec0395532da73566f66e3"
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
    "url": "assets/css/0.styles.d156bb1c.css",
    "revision": "145d57e5f430db88262e693f2c65e4f0"
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
    "url": "assets/js/app.e13e8273.js",
    "revision": "1d81a52769504299c7bfe6e0065fbcb7"
  },
  {
    "url": "assets/js/vendors~flowchart.086b5024.js",
    "revision": "6e5d81bf586ca56600b122b8eebf3c46"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "caece543d194bd7083fde34f5f9336b8"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "bf6d784839a861bb04164f8e96bbddda"
  },
  {
    "url": "categories/index.html",
    "revision": "4aa64483ef907716b5eef65b87cc4ac2"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "7b1409784d25dc4ba0be8dd2399077f9"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "969d2a83e8c95ee0ac868d311606f74b"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "0d03e287d306561ff4bb48fa056b317d"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "08316c6f5fe777d6dcf0a022afcb0571"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "ead527a0b6cb0431f54c436783f10bb8"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "f9e39f5ad2fdd0e52b3b8656386a8d58"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "038ab7561a52aa90f42bb863d81ace1f"
  },
  {
    "url": "docs/A/index.html",
    "revision": "a598348b3ed9b659aea42d93ae13d4a2"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "22da94eb5b76923b3f37f40c49011936"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "377f1aae4de3a0740b9d6bbe71cc2f7b"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "39d2922e9d93f7cd3c4ae034c5fc1409"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "c3c84cfc36ca73024e45f9e7359ede2e"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "117b34e059d3980335490a7781c1a809"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "8fbc688197889008a3d3843cd27b51dd"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "f774fe75cb934e3821aeaec10bd6d341"
  },
  {
    "url": "docs/B/index.html",
    "revision": "a5da617ba678cdf5e2fd16ed5a608ba8"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "c5544036512c027709a17b6ae7bbfee0"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "dde61e63c85ee13bff7b4e2476c6bbd8"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "76c706fb25544bea4b219022e8faca69"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "36b9ded395ca7042efb8954f7282369e"
  },
  {
    "url": "docs/index.html",
    "revision": "239bb3fe4f70508f5840a101f0637bfd"
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
    "revision": "37fd8239c17209662ed64e48594b806d"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "bd00e2ec77da2ffecd6defeabf455e9c"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "d49d10078725f257fd8a8ccbcbebfe84"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "77475244e028751c83d565474a275545"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "70574acef7f455829cabb86cb3cbf66f"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "6e4cabc71e7b7406cd2c4f5f5d38c006"
  },
  {
    "url": "posts/test/2019/092101 copy 2.html",
    "revision": "8786491da0e57c441cd2f71ea0c5964f"
  },
  {
    "url": "posts/test/2019/092101 copy 3.html",
    "revision": "30f326fb1aef80bd9f6f62ecbf7ea075"
  },
  {
    "url": "posts/test/2019/092101 copy 4.html",
    "revision": "4bf0d751191ca9c8f329f1b9ad222459"
  },
  {
    "url": "posts/test/2019/092101 copy 5.html",
    "revision": "6e2000c2551f7670ec74134ca35ea958"
  },
  {
    "url": "posts/test/2019/092101 copy 6.html",
    "revision": "39605b51320138bcf3dd9bf24ecdde4c"
  },
  {
    "url": "posts/test/2019/092101 copy 7.html",
    "revision": "aa3c9ae08b2a60edea985f00106b51a7"
  },
  {
    "url": "posts/test/2019/092101 copy.html",
    "revision": "0ae49bc8862a5931c8a124bb4ee06cc9"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "48f517ce0f070622813110f07ed225f9"
  },
  {
    "url": "tag/index.html",
    "revision": "744c652ef8203195f1687b7d4ab172e3"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "536a379f9e9f7b0883899f1824ad3581"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "018d09a79d38f5488e452d2990e33fcd"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "38cc7f57f0d5cb49dcae08354e8dd0b3"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "eb742468d98633b3e777f1d4b24c33ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "9c0cb2e1057ed45b8596d641b2e7fd5b"
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
