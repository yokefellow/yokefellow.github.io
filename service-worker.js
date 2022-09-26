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
    "revision": "fcb09d1c959fd915387fc6de348acf5a"
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
    "url": "assets/css/0.styles.9dcfc958.css",
    "revision": "45d9ada9d09ccd4a81b2773c140454ea"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c52640a8.js",
    "revision": "bee6bb462f557937b15a4afa5294dc7d"
  },
  {
    "url": "assets/js/10.594dc8b1.js",
    "revision": "430f8ac6ca08d13f577eab45b3548e36"
  },
  {
    "url": "assets/js/11.d054c80c.js",
    "revision": "2da542cfe960e8a4ff0ff933716b02fa"
  },
  {
    "url": "assets/js/12.2a33ef87.js",
    "revision": "e0a9f6b3f985b762feaaaa5a8cb8d4e8"
  },
  {
    "url": "assets/js/13.3bbffaee.js",
    "revision": "99577d4e9d1e205a2005082d3a86f7b8"
  },
  {
    "url": "assets/js/14.598b49ef.js",
    "revision": "4043aebcd769f75badf9471536bed61e"
  },
  {
    "url": "assets/js/15.3d2e62ee.js",
    "revision": "a789052ce80ba22c5e841e1dbab9a6fc"
  },
  {
    "url": "assets/js/16.96570c4f.js",
    "revision": "d552355793ff373f34e3b6753ace5a99"
  },
  {
    "url": "assets/js/17.60582dc1.js",
    "revision": "cebb84753e78d0324dee147159b2c56f"
  },
  {
    "url": "assets/js/18.9fe26e24.js",
    "revision": "639105d6b27304efaa32ac825644d73f"
  },
  {
    "url": "assets/js/19.8ad4be9d.js",
    "revision": "a566351c6e371e440cf758d74a431c23"
  },
  {
    "url": "assets/js/20.8a96a236.js",
    "revision": "33666eb8ad02f28e81f3ab075c985698"
  },
  {
    "url": "assets/js/21.3e58a619.js",
    "revision": "2189207a1d17cfc5b0dd9494b24e4bbf"
  },
  {
    "url": "assets/js/22.5402996c.js",
    "revision": "1bc60ec313b308cf45b70d6f5ec5b050"
  },
  {
    "url": "assets/js/23.47a88972.js",
    "revision": "c88132dcd38871611d90f661b12780a5"
  },
  {
    "url": "assets/js/24.0e8b7d24.js",
    "revision": "04ef4f3c71c7e7587148fb29a414be19"
  },
  {
    "url": "assets/js/25.ab7742e7.js",
    "revision": "a338263201f9d724f1ed4bab5e71b71b"
  },
  {
    "url": "assets/js/26.5eb223d6.js",
    "revision": "045a7fa28435aa5709e918c3333c9b87"
  },
  {
    "url": "assets/js/27.737b69fb.js",
    "revision": "3ab2598474bbc1c29ccb7043996ad3d0"
  },
  {
    "url": "assets/js/28.e6d256e5.js",
    "revision": "ced4c0f10a9e107f72a253939c8200f6"
  },
  {
    "url": "assets/js/29.f1536988.js",
    "revision": "f5e231ccfcd67ae401a4bbbae7078ac9"
  },
  {
    "url": "assets/js/30.5d901211.js",
    "revision": "36524ce4b8c2db8da367880b9117c702"
  },
  {
    "url": "assets/js/31.018cc49f.js",
    "revision": "cfd0bc82c042bf24f1f8ea9e73bcab29"
  },
  {
    "url": "assets/js/32.f66e87a9.js",
    "revision": "0fc38283358b3d7639983df682240071"
  },
  {
    "url": "assets/js/33.459ac7af.js",
    "revision": "70211031bef867c6579e828f7a0b55f7"
  },
  {
    "url": "assets/js/34.2f179825.js",
    "revision": "f84b9066ad9496a8e254ba946514f4a2"
  },
  {
    "url": "assets/js/35.4cb78b73.js",
    "revision": "1a0635b2ba97a29839c884f2e8ad6062"
  },
  {
    "url": "assets/js/36.a8a9b3c8.js",
    "revision": "ba55e45a580ef2e0f192282c62862652"
  },
  {
    "url": "assets/js/37.c68bb84f.js",
    "revision": "a064364c86f4a1d07f125b98f9f7c202"
  },
  {
    "url": "assets/js/38.08b6cdd5.js",
    "revision": "dec6dc4f6487890464854c1ebe789506"
  },
  {
    "url": "assets/js/39.8750a08f.js",
    "revision": "34557d4a04a0b23dcb08eae699c5d2b0"
  },
  {
    "url": "assets/js/4.ade47e4e.js",
    "revision": "1eb15d83e0b430339f134cf584c7540e"
  },
  {
    "url": "assets/js/40.da61fd59.js",
    "revision": "3dc07cb7623130eb627687a28520f04f"
  },
  {
    "url": "assets/js/41.6894c300.js",
    "revision": "df923e583c1a45db24f84ab9036105fb"
  },
  {
    "url": "assets/js/42.1ad58614.js",
    "revision": "ae0fc2a0d02a50e6e1de832426b7e352"
  },
  {
    "url": "assets/js/43.01ff34cf.js",
    "revision": "fa030fd75b79c6858de89cdec6f25b8d"
  },
  {
    "url": "assets/js/44.2b7c5123.js",
    "revision": "44047bb931a64ff011e4963c5ab8006c"
  },
  {
    "url": "assets/js/45.be8a2e61.js",
    "revision": "fd94160392fa64bcbd9e5f5d2d2ee273"
  },
  {
    "url": "assets/js/46.9f982f79.js",
    "revision": "888b28e4450cc06547daafaf62a50c16"
  },
  {
    "url": "assets/js/5.970438a6.js",
    "revision": "b6b35a7deae7343b1a823e4dabed84e9"
  },
  {
    "url": "assets/js/6.53bb731d.js",
    "revision": "6d35452c3b04df9dc53bf66078500187"
  },
  {
    "url": "assets/js/7.34a32f41.js",
    "revision": "130f3b251fcadfa661c8b089f77eed72"
  },
  {
    "url": "assets/js/8.f9060ac4.js",
    "revision": "31abed1fcd73aa23017fff57b16a45ff"
  },
  {
    "url": "assets/js/9.f6f9e987.js",
    "revision": "3d60a1e54f5a0cc2b740dd7577389eb7"
  },
  {
    "url": "assets/js/app.bcf206ab.js",
    "revision": "c0588896d6201dd739154c7c53ea20a5"
  },
  {
    "url": "assets/js/vendors~flowchart.3ceed1ec.js",
    "revision": "69ef06b9bd7e7fcdba1ceb1b85dae57b"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "4c9b66a199d945e641ec1661edb68412"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "e80e076110ee19b8625036a0bd1583cf"
  },
  {
    "url": "categories/index.html",
    "revision": "5be4a6d3f2288f0b9838403819738bf8"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "0ad6754f1f8644ae62e257ac1dc8e72d"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "57c95b8c659e6a94ba502aa58019eeea"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "bcef19ba02a8bc118afcdd853e330064"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "0aa412ddbd075831277963e379f4624f"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "cd479dfa75d1b3892e503ae3d2d54707"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "0f38aa3725b7094aeab88ddcc3c61c93"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "75618c18ccb266545bf27c9771e2263e"
  },
  {
    "url": "docs/A/index.html",
    "revision": "0ffa6dadb1cd5b9c193a25b1187ba0ad"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "34834f5d90cfb365084deeaf34935d9d"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "f6160c4a2d57e32b2f5a2b16a42b388b"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "ec86124edb625098b7b577eabdfc98e9"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "984ab5a40dcb26df2131ba7e7ca2d092"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "c9b229a8310e9625050e7a81b0ee6116"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "d7aeb2f7b48aa33db3f1df70a84fde8d"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "2c0a5674faa598eb9909cace59b31440"
  },
  {
    "url": "docs/B/index.html",
    "revision": "c9d55dd30f56c6aec220482318458c3c"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "d43198b33d1cdd4c53316bc4aa39abbd"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "5f3169da54f923d697e6ba4ebd8f3dc3"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "689cfe2f5fdc91ddafd2f9fd4c5bdc8e"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "de060d71569d2fbe2a4745749254d52a"
  },
  {
    "url": "docs/index.html",
    "revision": "c23151136cde5a156902b46ff2d93cbc"
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
    "revision": "a23766abb3760614a2e264e4dc73f153"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "759cfead96396b9d9816812e93dcf0a7"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "83f92e3cb35c448c8ff369d86fa8f51e"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "d646cc22a70beddb334cf80b8728372d"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "64496b8fdc585b71ab8a71304fcfbe95"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "7584d4e3c3d3cdbe52639a685281a111"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "e9bfabbbed88f27bfa1485f02a4b3b7a"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "019c8d3af97a28b72d22882fc0973e79"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "6ac0bb929742b0a7dcf4726463df58f9"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "8ea48d9ad4349f014e5557343c003a86"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "ee46deb884b581a04d94468645f5e59b"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "4e30fe752826fde6af14724213a4e94e"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "0f55147e782f83d4ad73cae56648728c"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "795718c1492949871296d94b940dea07"
  },
  {
    "url": "tag/index.html",
    "revision": "66f3b8f7226d2d9ab1d689a0ca83ea4c"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "05c3aa79e384d6d52eb1527c4c9fb6f1"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "8de29ee9849e99464a6cd49d94a632f1"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "cd6d7a015001cca8df646c2e6eefd871"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "affce1984013fc6540352115301ca469"
  },
  {
    "url": "timeline/index.html",
    "revision": "67036ce2750288c1e24ba70983788bda"
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
