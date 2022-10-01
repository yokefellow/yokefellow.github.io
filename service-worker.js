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
    "revision": "684121977fcf7821c0ac20b45254befa"
  },
  {
    "url": "about/index.html",
    "revision": "0de0f5fcdbfc962608a6d57bd3d57939"
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
    "url": "assets/css/0.styles.4b6e4f47.css",
    "revision": "4f58cae1f393599fdae3a22f51ba2f71"
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
    "url": "assets/js/1.54691bb6.js",
    "revision": "2ca82a8b0e3181d7bcccd355f157daee"
  },
  {
    "url": "assets/js/10.67e6ae2a.js",
    "revision": "d411f72fca42e19bd2cd872ed2688c7f"
  },
  {
    "url": "assets/js/11.09058261.js",
    "revision": "d797a72274716fbd13a45bccc9de2186"
  },
  {
    "url": "assets/js/12.ea91412e.js",
    "revision": "bc4a04b4d5b9dedc424e01451e40524c"
  },
  {
    "url": "assets/js/13.4ce98eec.js",
    "revision": "ae9b54d00cab088fce07303a39b8e940"
  },
  {
    "url": "assets/js/14.8164b81c.js",
    "revision": "10765ee34607bce88019e55173c58a13"
  },
  {
    "url": "assets/js/15.2ea2f1b5.js",
    "revision": "1bca8ced87e1274f0e965fc26c13adfe"
  },
  {
    "url": "assets/js/16.454b94c8.js",
    "revision": "680d181a8c465a9c5e0aeb48c6d0f5ed"
  },
  {
    "url": "assets/js/17.0f3edee4.js",
    "revision": "a65b0964400d9ad48818f97bb5ca2f49"
  },
  {
    "url": "assets/js/18.6e64aaf6.js",
    "revision": "8a1b836e3065984b093d10d89d48fa5a"
  },
  {
    "url": "assets/js/19.6c2adfe3.js",
    "revision": "df47bdcdb5cd1f819505f13dcbda9f50"
  },
  {
    "url": "assets/js/20.18385ebc.js",
    "revision": "830e49665331999919f07166d792ae93"
  },
  {
    "url": "assets/js/21.76b463cc.js",
    "revision": "20c46b38c09ba0a55113a39e2d567056"
  },
  {
    "url": "assets/js/22.28298055.js",
    "revision": "c88a7ccb6d494d208fc1236c59e8a8a5"
  },
  {
    "url": "assets/js/23.820b9d5e.js",
    "revision": "869a8d6667ba6282ba297ed536f70959"
  },
  {
    "url": "assets/js/24.fd75c276.js",
    "revision": "fe408d09b0bbcd5edbe7c11661bd8b0e"
  },
  {
    "url": "assets/js/25.3a17d127.js",
    "revision": "9d6d9c191b944539221234d0db3c7e71"
  },
  {
    "url": "assets/js/26.fe8a6338.js",
    "revision": "3e4d4ba10d7741e3efc2bf37a8be1eba"
  },
  {
    "url": "assets/js/27.4a10e5be.js",
    "revision": "1b5833eb1e7b07ca97168f0c92179b55"
  },
  {
    "url": "assets/js/28.666d5a80.js",
    "revision": "cbadcd160f6cae49abfad73f69cd5ffd"
  },
  {
    "url": "assets/js/29.6c9e0971.js",
    "revision": "ca616270aca8902e01bd3e289a2049a9"
  },
  {
    "url": "assets/js/30.4ffc83a9.js",
    "revision": "fba0c991b899033da0200b6625d6b0af"
  },
  {
    "url": "assets/js/31.8e880dc4.js",
    "revision": "40a4639ff34c3d9b76010eda9e4243ee"
  },
  {
    "url": "assets/js/32.ff1c81fb.js",
    "revision": "03096002358b20c02d71b79971a7c8e0"
  },
  {
    "url": "assets/js/33.b7c602a8.js",
    "revision": "a13786356291131e8468e6f99ad2b55e"
  },
  {
    "url": "assets/js/34.a27ef7f4.js",
    "revision": "ef81ebf1daf86c22b7e0434c60381326"
  },
  {
    "url": "assets/js/35.13729a00.js",
    "revision": "908a8091ba724c3674bd852b1ab91a38"
  },
  {
    "url": "assets/js/36.fce058c9.js",
    "revision": "b8918f0c743ad793e82e358502d337a3"
  },
  {
    "url": "assets/js/37.d5ee0d22.js",
    "revision": "601b334dceacba4b7cb219136483d118"
  },
  {
    "url": "assets/js/38.69a7b47d.js",
    "revision": "520024226cb791e478fe58c8ac2ef43f"
  },
  {
    "url": "assets/js/39.23eeacd5.js",
    "revision": "35007bf238a43a0f9077a9c45dc652da"
  },
  {
    "url": "assets/js/40.69f0ebc4.js",
    "revision": "0e35063c61b532f9d136999206b01514"
  },
  {
    "url": "assets/js/41.7af50bb2.js",
    "revision": "29c5b7b2258007292dd1ce7dcb397b87"
  },
  {
    "url": "assets/js/42.f37b214a.js",
    "revision": "24e821ef5c93c82aacc5361dc826f059"
  },
  {
    "url": "assets/js/43.530aa952.js",
    "revision": "5b0ad121f62ad58a23ec73c803ccd402"
  },
  {
    "url": "assets/js/44.0f5e21b3.js",
    "revision": "e588a785cc64467b1e40542cfcb647e5"
  },
  {
    "url": "assets/js/45.3bdbbf12.js",
    "revision": "f591169cf2942c18f82af0ac1ba0efa1"
  },
  {
    "url": "assets/js/46.c9b5661e.js",
    "revision": "b06f4a439e5c8f6af6d43822c0b0576a"
  },
  {
    "url": "assets/js/47.c5e55091.js",
    "revision": "137172e529669a634998e337302916b4"
  },
  {
    "url": "assets/js/48.a821a7d1.js",
    "revision": "1d9e8dc5dce0ad15cd8c8152d3f3bdc9"
  },
  {
    "url": "assets/js/49.77bb97bd.js",
    "revision": "116fd28019c881eaa190e71d3f05a2a5"
  },
  {
    "url": "assets/js/50.7ae3f5b8.js",
    "revision": "c7d703c9b41b86eb3b1fe85e6d27be96"
  },
  {
    "url": "assets/js/51.4cdfd6f1.js",
    "revision": "e343d5c130a77e6e0278e4f05f5d30ba"
  },
  {
    "url": "assets/js/6.5de19e5a.js",
    "revision": "32c1e8e6fd321f12107f7b42373f8999"
  },
  {
    "url": "assets/js/7.f9753d91.js",
    "revision": "9a4a6f2cbff5e5205617becc27663946"
  },
  {
    "url": "assets/js/8.56d6484f.js",
    "revision": "fbd4fbd41c733229b494dd6b2bfb47aa"
  },
  {
    "url": "assets/js/9.8a88ddad.js",
    "revision": "1b755ff8529334e6a380834a0c93ebf8"
  },
  {
    "url": "assets/js/app.13fe1e14.js",
    "revision": "5abcefc4fdac76ac314cd8733049834a"
  },
  {
    "url": "assets/js/vendors~chart.4036115e.js",
    "revision": "72de9192dddf3543e10076ab45d6a37d"
  },
  {
    "url": "assets/js/vendors~flowchart.bb498181.js",
    "revision": "ce6538809140c7cc9de9882fa7fe6d4b"
  },
  {
    "url": "assets/js/vendors~mermaid.19c454fb.js",
    "revision": "b3e56044052ad7fd19580fb08d47a2c0"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "f371693012599b367452bf3c7822fba7"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "1b421256757cb93a4b9725454ca00e14"
  },
  {
    "url": "categories/index.html",
    "revision": "9d60dcaa3fbe22f054ce65b52d1891fe"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "9c9fe1ff2436714be4165f2f6da8a5fe"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4ae2d39ba9bbc0ec8717e05b4b2e6da8"
  },
  {
    "url": "css/prism-tomorrow.css",
    "revision": "f46d7519e3b65a6912814727b47a57ff"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "e751447dec6f0cb2a3a8b7b9ec848102"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "2b21dee8f813b643256e93817c349ebf"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "9d3fb2d2ab067b2be17832dd64c27908"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "feb00176ae550dbc6db76bd1adaf14d0"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "b6de99057829d0d3afdbf17a6beb9484"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "e553cc136d04f63158bd830abd39071e"
  },
  {
    "url": "docs/A/index.html",
    "revision": "b84a0b754448e4cd54c3ba9c6e65f697"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "0cc2466c2abcd2cb1c3978d89dc0e5ef"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "b963e5ec0cb1165366c6293b0d9289bf"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "9b8aa59dd60a872e0f4867565f484999"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "90dd4376512e80f8b642405464cf3e0d"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "80a05efcbacd36477f1680be6bcb9b9c"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "c5d1c637a1de55b0333336c4a41ce0da"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "fb2c95a163c30a4df38c3eeb75247176"
  },
  {
    "url": "docs/B/index.html",
    "revision": "099ad541252fe4bc4c00845438254971"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "e0f6dbf9fc5b874f0dedd43c00ffa1ca"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "3ba145b9271390287e36d98b66f97de7"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "9ebb462d5aabff7c94d3934d9e2910b2"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "ab69c59087fa08a3db5a03f8cebfb116"
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
    "revision": "9950a8ea3b337ec94deb996af8f5fea0"
  },
  {
    "url": "posts/2020/0818/hi-vuepress-and-theme-reco.html",
    "revision": "254bbfa8090e3375fb3c9a5d1ac9f222"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "cf6ac530e4c97029e5afd6e82e1feb14"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "1c879ddc4f3e3ccd1af935e0046f930d"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "d0851a6186f8288823297ca5709781b6"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "b2d3342e96bc24c85237bded907cfce1"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "28fb8d2dba39aa5255ec3ab5f32dfa03"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "c02e0e73d81deab53c1976c7674363c4"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "f2dc299ce7f0da65dc346a2130d85575"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "52c490515e32c0e368b98dc77d1ee0e8"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "5a82c764e54d3be345e733c141dde077"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "2031aebdf50efb7d89a2fa3fd0e4c029"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "02566062aad28a88fc2d5f14d9f11f66"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "5a6209cc74839883277e4cee608a890a"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "c891ce296a1540b43dc7587796a33529"
  },
  {
    "url": "tag/index.html",
    "revision": "3eaa2eee45758ee3c358a11e80641822"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a3b43144c3f5fe2902afedb9192f378b"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "f6e7254c7ecc2bc575eb79845af1893e"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "b3aa3a47a2d2c44cd1ecc6bb8cc2ede8"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "7916db3930f90601d5f83953e7429021"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "e9e2d65f6a8ea910dee8f5098a9f9082"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "350e346f4b186b4331fd11aca5766d23"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "806523200e29074aa44f8a5701ef1b71"
  },
  {
    "url": "timeline/index.html",
    "revision": "fcc3af519428ba9957bede201b9def2f"
  },
  {
    "url": "tools/index.html",
    "revision": "46a2230e7a69f65ca6a0c832d837e7b6"
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
