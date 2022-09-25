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
    "revision": "63d4aff9eef3b0c24cb173b04eb22fa1"
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
    "url": "assets/js/10.6b0fcf09.js",
    "revision": "eb963c6854a1893e1d8333301d0673a9"
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
    "url": "assets/js/35.d12cf89b.js",
    "revision": "d672bdc919f6f9aba045c6ba6dbfce9f"
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
    "url": "assets/js/38.297bcd61.js",
    "revision": "0ff3bf5b6b3bf9251c6c6f2bbe054da4"
  },
  {
    "url": "assets/js/39.b0f06c24.js",
    "revision": "2f3002a2a9cb3143ce514367426f471f"
  },
  {
    "url": "assets/js/4.6ea28bcd.js",
    "revision": "1a342cafe03900de0abf991f86e5acf3"
  },
  {
    "url": "assets/js/40.db04a42c.js",
    "revision": "91e5756ca53ca1dc8ad31dc66493a0f0"
  },
  {
    "url": "assets/js/41.aea76e55.js",
    "revision": "67de0361f80216c1c7f3d38f103977d7"
  },
  {
    "url": "assets/js/42.b41b30cb.js",
    "revision": "3c644564f307f5d12523fa1093a430c2"
  },
  {
    "url": "assets/js/43.753d6dfe.js",
    "revision": "cdc9dcabe9c07bc8af887c6417d623b1"
  },
  {
    "url": "assets/js/44.9c4dd749.js",
    "revision": "5c7637bc1e00fef7d9581601ae3d0994"
  },
  {
    "url": "assets/js/45.0a1c7981.js",
    "revision": "1691077b82b183e47f10457e8c372634"
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
    "url": "assets/js/app.c90103b8.js",
    "revision": "462f8922d923ebaa84d8dcb8f5f849de"
  },
  {
    "url": "assets/js/vendors~flowchart.086b5024.js",
    "revision": "6e5d81bf586ca56600b122b8eebf3c46"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "fa1a83d6a86ddb36e06ef509e5a09aa2"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "058f7cf8f35d12174c9216cc0dfe8f1c"
  },
  {
    "url": "categories/index.html",
    "revision": "7c44389512860ac9dab7c542d67cc3d0"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "48a335054a01b5ffbcb88ae3ac3aba4c"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "c4925090fc7d35f1d69956571882f7d6"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "f45f7b799a6e1fdf2e751bab19bb89e2"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "ed27c027439f6c9284351bcda5e28754"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "d8ae27a368066163546946ab21fb47cd"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "208650ac34f459f0bd7f3549ef0ca28d"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "5b85cfeee7f6b21453719987ca0e69f6"
  },
  {
    "url": "docs/A/index.html",
    "revision": "a380fc63583cf3674bfc719425608ff5"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "1b71ec884be6d04b970b6bf916dc8537"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "b0b608d0277e50b0810413ae92ee098a"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "7aed8a28e27e1597e3676739fd2a384e"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "f87c7fe11bd956b9e0c18217f995e923"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "84bcd7c0ce2be5f59c0bdf0db2b1d1ba"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "4ef48004f60874aec13a8f7638232aee"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "505d14e298c47ad6de1fde862cb9e0e3"
  },
  {
    "url": "docs/B/index.html",
    "revision": "a8bc9e9d26f8420ff78cd9791edcf7b7"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "b7a3ed11e972b58517fab1f2896b98c9"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "26d7a74e342f1b52c87fb853f249df92"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "43278f7e2092669a73aaa4c3e4b4e53a"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "b3353bf8f265d1094aa7a43948455210"
  },
  {
    "url": "docs/index.html",
    "revision": "d84659294751ddb13abb605a8d0e3b43"
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
    "revision": "13328c84119014a6f3ebe725416d192c"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "08eb9be0cd2b07ca575ed7d511fb6d05"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "65dbc40af2eb72c5d44208ec994c6e8e"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "b7fa1583c5cd33dcdaf69c13237e31a4"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "ac707a53367ec65c0ecce56e76d97145"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "585da2bf318c210e42dba9df0c0b667f"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "d3cc3c52560fec25b8cd133d1013a096"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "e0a77fc6058b906221d32589958ce935"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "8d23d6fb0343d5240d7842c0cd88ef14"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "4784ded72f26722d84b5096c54d29f09"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "b18a1ee98c8a19bbec5893ad48491663"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "686775f0e8983c38807feb8748b30862"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "54fd024bd8b4acb0467b07b35814abf0"
  },
  {
    "url": "tag/index.html",
    "revision": "308d589d797895dff9ff3b23626d062b"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "d4163bb0a5462372afa735de565a78f8"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "011914c4d39bd9bab723af573e1c1548"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "ebba4cfe717fd0e7c8320bb0c071e50c"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "f7306243e4259a8990da22bc062a37e3"
  },
  {
    "url": "timeline/index.html",
    "revision": "74c2037107155b36d624176d34f55ab3"
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
