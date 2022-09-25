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
    "revision": "2ec912296400f59f901f73eb93e32ee8"
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
    "url": "assets/js/35.92610f01.js",
    "revision": "a750f9318564aca80d5a11ea830edd7a"
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
    "url": "assets/js/40.0743d517.js",
    "revision": "d7cb6895352a45d7e21beca709d0a42d"
  },
  {
    "url": "assets/js/41.072c1463.js",
    "revision": "491418d385378fa34a3b6401c3b04866"
  },
  {
    "url": "assets/js/42.0ac2ff5a.js",
    "revision": "08c27e9702e72c26a12335ce9e134b44"
  },
  {
    "url": "assets/js/43.63ad602f.js",
    "revision": "0ad7a373013fd4f4ff7cd5cd60c39029"
  },
  {
    "url": "assets/js/44.afaf0856.js",
    "revision": "dcdace6e940953bf6a4c072ecf334ff2"
  },
  {
    "url": "assets/js/45.22c99450.js",
    "revision": "a03ff4ee94e2c23bacdf560d9e7609c3"
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
    "url": "assets/js/app.00f07bd7.js",
    "revision": "9dda3c62dd85871da1480b2f2170987c"
  },
  {
    "url": "assets/js/vendors~flowchart.086b5024.js",
    "revision": "6e5d81bf586ca56600b122b8eebf3c46"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "e27b42ca458c9ade14115aa726bfe997"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "8e59e21f1ae6a34cd94b2cd77a435ef0"
  },
  {
    "url": "categories/index.html",
    "revision": "05fc0f36408bda9177db4865000309b1"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "e11edfbd696421771e2a56d0e4372576"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "c8885642756f1b6a8e0d3a86c40e1201"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "8bea1c58e67c1f96fa52774390349761"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "01bc4603c8ac6a83245309118288e979"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "e3d5bbbd4b4828471f7814437ca28390"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "1ed6a35bc61e60908d38c14f21f98698"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "61b376c5ab0e0907292efcc3f1f70d12"
  },
  {
    "url": "docs/A/index.html",
    "revision": "7ba34feda36d8deb854a32767842fd4c"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "ad71086791fe10a9f202adfa26a7d578"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "4e34721f99534552e29be1e28187b667"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "ea4af75b8af10950f1c4c8d7ae4755a6"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "0d824c793f0b63fbf2682a08eeab8be1"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "f470b7fe2994427681064f78f69ac650"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "1c87bde3555596bc8646746942f9f401"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "55e0bef9e0dac131987a2e0704613ed5"
  },
  {
    "url": "docs/B/index.html",
    "revision": "562f158e1f4f2c63a0d65dff94a1f68e"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "510568f9164fad1010f8dff83c9d3d95"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "1e55f90022e7c8d6b31576f97563804b"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "d39b3e8908039898831a30f936a856dc"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "d28a5f99a9d45a344a1670c0c25ca2f3"
  },
  {
    "url": "docs/index.html",
    "revision": "b1dfd648038770e53c8407290fd9d8d7"
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
    "revision": "26193ee0458db02b891415b1a4733b80"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "a48725d512ea5b4e78513a67b08a07a1"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "6603a708bce2d4f2042b5c26d8c9cd24"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "d18b611b0efdb0497a4ba79e91db2ce2"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "f6f015348ae258b4d2c0b403d6b232bc"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "0feeeea7bc667b4de1c5194d3cba167c"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "bfb1d9924d716164f9e67e6a56df0303"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "ff184359528b83cef9aa34bbb2862edc"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "52a22ecb5dda5c5a5c2cb3bd4ddb294a"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "e7ccea5dfa07cf24770556e181b7b474"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "7b893702342e00312f84d7bf879f3ba8"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "0bbe0d25aa191eeb8d422aa74d6b3dc1"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "9dde58921a17212a69671a151c3cb3a9"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "14723030d5336cf5bb9ea45e1e454d83"
  },
  {
    "url": "tag/index.html",
    "revision": "c566d91ab7640e34fb4591feef6afe98"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "9131c32f2ae7c718b53a2f14174a71ca"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "f31018e4feb7aa3859ac095611996a98"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "75dadccde026e376a98a9c72c131a6f1"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "bf779e7c75c717da15c4b0f71297a682"
  },
  {
    "url": "timeline/index.html",
    "revision": "179af24692a4e0fb618808b8b23682bc"
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
