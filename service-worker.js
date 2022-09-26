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
    "revision": "feb87b850d11d1ebf9fb4f3d2140ef2d"
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
    "url": "assets/js/10.834f6324.js",
    "revision": "422a08b0145869657a3f4524f03bc360"
  },
  {
    "url": "assets/js/11.d054c80c.js",
    "revision": "2da542cfe960e8a4ff0ff933716b02fa"
  },
  {
    "url": "assets/js/12.fbb44843.js",
    "revision": "e0a9f6b3f985b762feaaaa5a8cb8d4e8"
  },
  {
    "url": "assets/js/13.29726197.js",
    "revision": "99577d4e9d1e205a2005082d3a86f7b8"
  },
  {
    "url": "assets/js/14.3185b9c2.js",
    "revision": "4043aebcd769f75badf9471536bed61e"
  },
  {
    "url": "assets/js/15.474a53fe.js",
    "revision": "a789052ce80ba22c5e841e1dbab9a6fc"
  },
  {
    "url": "assets/js/16.764dc2bf.js",
    "revision": "d552355793ff373f34e3b6753ace5a99"
  },
  {
    "url": "assets/js/17.70803c42.js",
    "revision": "cebb84753e78d0324dee147159b2c56f"
  },
  {
    "url": "assets/js/18.e42ec3ac.js",
    "revision": "639105d6b27304efaa32ac825644d73f"
  },
  {
    "url": "assets/js/19.e0cdd572.js",
    "revision": "a566351c6e371e440cf758d74a431c23"
  },
  {
    "url": "assets/js/20.800914d8.js",
    "revision": "33666eb8ad02f28e81f3ab075c985698"
  },
  {
    "url": "assets/js/21.d2ada492.js",
    "revision": "2189207a1d17cfc5b0dd9494b24e4bbf"
  },
  {
    "url": "assets/js/22.7d59c0e1.js",
    "revision": "1bc60ec313b308cf45b70d6f5ec5b050"
  },
  {
    "url": "assets/js/23.631c1a37.js",
    "revision": "c88132dcd38871611d90f661b12780a5"
  },
  {
    "url": "assets/js/24.487e7fe2.js",
    "revision": "04ef4f3c71c7e7587148fb29a414be19"
  },
  {
    "url": "assets/js/25.30c739ec.js",
    "revision": "a338263201f9d724f1ed4bab5e71b71b"
  },
  {
    "url": "assets/js/26.6ffbb361.js",
    "revision": "045a7fa28435aa5709e918c3333c9b87"
  },
  {
    "url": "assets/js/27.155be4c3.js",
    "revision": "3ab2598474bbc1c29ccb7043996ad3d0"
  },
  {
    "url": "assets/js/28.caca54d8.js",
    "revision": "ced4c0f10a9e107f72a253939c8200f6"
  },
  {
    "url": "assets/js/29.c0dc9d50.js",
    "revision": "f5e231ccfcd67ae401a4bbbae7078ac9"
  },
  {
    "url": "assets/js/30.f7ce957e.js",
    "revision": "36524ce4b8c2db8da367880b9117c702"
  },
  {
    "url": "assets/js/31.54cd045d.js",
    "revision": "cfd0bc82c042bf24f1f8ea9e73bcab29"
  },
  {
    "url": "assets/js/32.6dc21755.js",
    "revision": "e25b1ea11ee286f2c99c45bd46c451ce"
  },
  {
    "url": "assets/js/33.916a3646.js",
    "revision": "216342ec91f5874d94d1db6e0497f313"
  },
  {
    "url": "assets/js/34.74c6cbd8.js",
    "revision": "759a05b7b1511e2e4d5afdf2d174e1fb"
  },
  {
    "url": "assets/js/35.80edbef9.js",
    "revision": "c68e7f3f8a545577daa9d1af2a268de9"
  },
  {
    "url": "assets/js/36.3b335904.js",
    "revision": "952dd2e434dbbdeae704abb3877364bc"
  },
  {
    "url": "assets/js/37.fb91e549.js",
    "revision": "fe877e02a37b8916788aa08d697664db"
  },
  {
    "url": "assets/js/38.4b6b7211.js",
    "revision": "298bbb8862b08f6bf164738817c1e967"
  },
  {
    "url": "assets/js/39.561474ce.js",
    "revision": "ed6a0d8d65b5e0428ea1733a07bf2cbe"
  },
  {
    "url": "assets/js/4.ade47e4e.js",
    "revision": "1eb15d83e0b430339f134cf584c7540e"
  },
  {
    "url": "assets/js/40.2b691ee0.js",
    "revision": "6c785de4d824d61f4fed7c8d36211f43"
  },
  {
    "url": "assets/js/41.769ba342.js",
    "revision": "6238825426b50314ad3c9c0ca8e01e2a"
  },
  {
    "url": "assets/js/42.79f61c1b.js",
    "revision": "639ebbd90b817ad87b483747e1c097dc"
  },
  {
    "url": "assets/js/43.ef2db10a.js",
    "revision": "9924c50c5bf55ea9aed9ee9170b2854d"
  },
  {
    "url": "assets/js/44.72801a9f.js",
    "revision": "bef2b15bbbb5f01d4bff5744b250fe12"
  },
  {
    "url": "assets/js/45.3cf92c6f.js",
    "revision": "b976c761b93fe737151c44207638d7ca"
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
    "url": "assets/js/app.9d780f10.js",
    "revision": "9fdf55022fb6a574809ca561f313297c"
  },
  {
    "url": "assets/js/vendors~flowchart.3ceed1ec.js",
    "revision": "69ef06b9bd7e7fcdba1ceb1b85dae57b"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "270eb33797e5ddfd7b539428b88c2b6f"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "97dc7d6b35460e8d7c790cd82f1e9330"
  },
  {
    "url": "categories/index.html",
    "revision": "863e95c229df17f29a8a5024085d0e50"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "d213221505f98009369488cfa5303a71"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "e3e92e046f5d1eaf7f8a33c57cc44ae1"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "1948d8f9d68f73b36211e4745b70d1ad"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "ac463413e759d8d8e1406f957354d0bb"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "2e457ff8631eecc3a2626d84ef22e3ef"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "5abf239a01a9aff808c54f5962a2d9d3"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "e59ca324204d75f62ee1941b1f8f2c0f"
  },
  {
    "url": "docs/A/index.html",
    "revision": "cbb469cfdd16cbf752373709a1cf5d60"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "cfb9c3edad976a38ec40ef9ef8ff57e7"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "74ad6bc7257ed1104227bf9859d6497d"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "d89bae8abe8fa596d376d78bac6f54a8"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "3a7429c281693d72e2dcbe5c9572e923"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "b510d69e34139022949b19044a701ad1"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "91bb527e8fc7252e6134628e38e0cd7b"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "957cec7f4dc0514e8f6932a1bff09ffe"
  },
  {
    "url": "docs/B/index.html",
    "revision": "816e9bd3b7a95e208581750afd9e6bd6"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "291aa847ba6c96b19492eedf9bccacc6"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "a2322e09d3822fb9f572341850dc58ca"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "1c216f10ea064ba9173d940112b0da68"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "0575444483a3c37c3fdb64748dbbaa19"
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
    "revision": "887ecb587599053dcff90d3a44f1acc4"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "b575ecc448d6db1614c4150d90da3365"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "b19bdd194103744ede411677de3c4e66"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "85bb56183ae2f915b1594bb39475e3d3"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "5afae7a32cd8cbfae331e3d78b518e05"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "2a476dacfbff20d8fbe4abd492e6eb3a"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "0004ebd121945666f4969fe556419846"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "d0ff03b11bc0851368cbe509a805dc17"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "1b5fe255367ddfbc38ce19f1f95268e2"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "87c2df613c42951278fedbe43142eb2c"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "c1d194f8a9388d2120bae0188b8499cd"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "82b0122339d6d01a98ff3fd920fb4d6e"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "f871ea2c7a6d490644ff1a5f1789923f"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "70332eefb56f17635a606731b2c3c622"
  },
  {
    "url": "tag/index.html",
    "revision": "ec27edac2a742c34ab05e556abcf72db"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "7702e6b51fb258491a5a41474e62269f"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "4a93e27760665f693b0ae1b62b6d2912"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "1f81a32b233a90245d5bbb92525619ab"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "d68b1b09ee69444b0daf22bf1159d31f"
  },
  {
    "url": "timeline/index.html",
    "revision": "4328f8abb11db4c24fcf13f565953459"
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
