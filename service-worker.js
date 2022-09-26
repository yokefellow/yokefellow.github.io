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
    "revision": "775827e38b2d5c6256623f92a8ee4e16"
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
    "url": "assets/js/1.03a11df4.js",
    "revision": "bd28dde8631bde80363f8ad260190ba4"
  },
  {
    "url": "assets/js/10.594dc8b1.js",
    "revision": "430f8ac6ca08d13f577eab45b3548e36"
  },
  {
    "url": "assets/js/11.d9ae9930.js",
    "revision": "a381f0653b298284a1eb8b65863d99c5"
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
    "url": "assets/js/4.a83fbd1c.js",
    "revision": "d9b4ea56ce9cdcffac9038abbc95bae7"
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
    "url": "assets/js/5.013d60d3.js",
    "revision": "b8f5d4852a5a932163ff20beb35ccdb4"
  },
  {
    "url": "assets/js/6.32d2e092.js",
    "revision": "aceaaf700909e0b0b9deb58c7b4644e5"
  },
  {
    "url": "assets/js/7.50e50923.js",
    "revision": "ddfb20586ff4bbf3d7e8ba7b609ba827"
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
    "url": "assets/js/app.727cf36f.js",
    "revision": "6b969852af9d049945f209f4571a7825"
  },
  {
    "url": "assets/js/vendors~flowchart.3ceed1ec.js",
    "revision": "69ef06b9bd7e7fcdba1ceb1b85dae57b"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "f59b2a90b8a2e4098ab645425b3cc3af"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "18aa03670cc7c2c8776751a9a0ea7f7b"
  },
  {
    "url": "categories/index.html",
    "revision": "b107a483403a0168ebde60cd78a44f8a"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "75a826560b9a544143b3dca2972b3881"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "18428e64139140873ac3fd532ef018ee"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "b34d168d835192a99489259a8f640984"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "6b127c9d88d828f6c63157b2ee96d9b6"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "58178038cbc4bff22b12824a32506e80"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "6186797a26df2505429590f0a4d72a9a"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "4291f22017627e791693ae21cafc1fa7"
  },
  {
    "url": "docs/A/index.html",
    "revision": "858d88efc72c27f3f3bb8bf9d685be5a"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "04b36930dfb0c77f7fdd4239793d7adf"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "ec75aba16404c9b05cad5b4051a0aee6"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "0f841eb9e717fdad2f5f9e485bbee9f1"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "ddf84b55547b64f69ce6149b0d68d4b1"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "2db73adec26f97c074ae540f686685c6"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "3c0026305d10b50bae08b485127202f5"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "f8aeb4e6d70b707df103d9976c34645c"
  },
  {
    "url": "docs/B/index.html",
    "revision": "24e69a33ff0f7c9b1b617fcb07fa4e8f"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "b53c6d412c9061d905d60cf203ac17c0"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "4fa0f12247f1d9a55810d2f8c59d9870"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "b565a5b97cac944e36035c34e54e646d"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "ef164029255e8b708c981fe3420f986b"
  },
  {
    "url": "docs/index.html",
    "revision": "23b871b1d92a298b162f24fa0c9a7b1d"
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
    "revision": "6b7114c41b55326730b6e64ddf07aa70"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "b9ba201f5ef97cde1bd43ec858b69ec3"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "78a143445b02fb60592eb4c780887d63"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "44cc783af7820597aef7d117e5706874"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "1b6740923155ace40b83af673824131e"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "2ea15b16bcbb04aad126bbb3e88bea05"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "69f1e879ef26eaf5214ef39bcf0d96d9"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "7a801023284d17cbfdb08f8385d685f4"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "31428e8626862e5020612c61f76f3c67"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "7154bd4a7d919f1a4af58e8cf36ed2e0"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "e1ae0a6198c601ff6c91a1ca67c697dc"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "7bf7ce60277bd7217d1e44dd79d4f729"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "3cb74fa070929ba093d19810b51ca736"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "aa6739aab34607dbee85d085dd37633a"
  },
  {
    "url": "tag/index.html",
    "revision": "7267ce95f3c739300b8df5b30eea8003"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "bdef1fd2babcf81f279f1fa61871193f"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "5c42111212de159521005140228aa037"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "2a5234d5d0020007e0d7c68c53f01897"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "9e5397bcea48dc29f0f6d13a13f73d99"
  },
  {
    "url": "timeline/index.html",
    "revision": "f1bdba0241abcaf8733555ae271b3ef3"
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
