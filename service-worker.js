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
    "revision": "cd03661176990524c7a81c54c8ec7008"
  },
  {
    "url": "about/index.html",
    "revision": "330347fd9e993836166761c93de4c972"
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
    "url": "assets/css/0.styles.b5b55c31.css",
    "revision": "601eb1e0113b1c216b5b1e2389f54946"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.fa310615.js",
    "revision": "420827591a60089f7123a4fa4bd21cc2"
  },
  {
    "url": "assets/js/10.a6e77137.js",
    "revision": "703a171249406d2dad39749caff32873"
  },
  {
    "url": "assets/js/11.eb6c2194.js",
    "revision": "ba60e763fd2c83f1f77ba9b3a819c051"
  },
  {
    "url": "assets/js/12.5cab0b55.js",
    "revision": "c5a2847f31fb75bc2afbbd3f9d2ef4c6"
  },
  {
    "url": "assets/js/13.14462b2a.js",
    "revision": "4a16549f546b4c8f256019f5ba725c81"
  },
  {
    "url": "assets/js/14.9da63014.js",
    "revision": "ea479f1f03aa729eae914f7f0cb1af10"
  },
  {
    "url": "assets/js/15.0a4284ce.js",
    "revision": "6ca0766884d69f49b2e2e1df56b2e548"
  },
  {
    "url": "assets/js/16.1cb8f630.js",
    "revision": "761a842c5ce1dee29152ef9d253c202d"
  },
  {
    "url": "assets/js/17.d023440e.js",
    "revision": "dbbd23063f68e434ecd5ef0d487d7464"
  },
  {
    "url": "assets/js/18.6de20bc1.js",
    "revision": "9ee3e0174427080c7363741faed0db9e"
  },
  {
    "url": "assets/js/19.f52b8d9a.js",
    "revision": "ad7bbc9c930015e1fe71e723303661cd"
  },
  {
    "url": "assets/js/20.0c50e7a0.js",
    "revision": "862ebd988c341a1e0ab0771e088b3803"
  },
  {
    "url": "assets/js/21.56064362.js",
    "revision": "13e9cde739948e22e9b6455b9ccdada3"
  },
  {
    "url": "assets/js/22.8fd8cb08.js",
    "revision": "9a629e337e5756d609aca8d47bc66922"
  },
  {
    "url": "assets/js/23.530933da.js",
    "revision": "a9727ce6cf28c5bb8ea4bb74847541e0"
  },
  {
    "url": "assets/js/24.b85b51a0.js",
    "revision": "ab7bafcfdd7ee4c10c6d0d21a1def6e1"
  },
  {
    "url": "assets/js/25.0a738e23.js",
    "revision": "1f71e95f1dbbc6ac93a1623fef6413f8"
  },
  {
    "url": "assets/js/26.d7ba02e8.js",
    "revision": "83b0a4e416e36807b4cff4a7e3436985"
  },
  {
    "url": "assets/js/27.7f2ceab9.js",
    "revision": "8b3e2a445182b1c378ba6d4a863b3e83"
  },
  {
    "url": "assets/js/28.64115334.js",
    "revision": "d725c7d2cd56e9290702352ee88166a8"
  },
  {
    "url": "assets/js/29.b2703ce7.js",
    "revision": "d6bada30a4af70fb923607b429c10511"
  },
  {
    "url": "assets/js/30.8f9a2c1b.js",
    "revision": "3ceeb6a03ea71a8b5eb71bbb5a71ab03"
  },
  {
    "url": "assets/js/31.32186660.js",
    "revision": "d61a1da777096bad354c19fe6a7cfcf5"
  },
  {
    "url": "assets/js/32.e9ffad87.js",
    "revision": "95e29b58008313edebfcd70ccffc182f"
  },
  {
    "url": "assets/js/33.9ab887c1.js",
    "revision": "a35527db949d7d21353daac723312e9f"
  },
  {
    "url": "assets/js/34.7e14ab54.js",
    "revision": "aa3f06774c1442ee79d8a04f23efacf0"
  },
  {
    "url": "assets/js/35.38bb3330.js",
    "revision": "de430c4b72ae20af29b32a6f9717e244"
  },
  {
    "url": "assets/js/36.4086630d.js",
    "revision": "1a6d40458353aabf609f4de2d7a9efad"
  },
  {
    "url": "assets/js/37.80825e75.js",
    "revision": "d16511d98b497085f100898f43a908d5"
  },
  {
    "url": "assets/js/38.feae9b34.js",
    "revision": "0ac2c5203a6160d6b6577a8a255a0992"
  },
  {
    "url": "assets/js/39.4e1e936e.js",
    "revision": "e64fbff2ecbff5234ae8ad38ea586a3a"
  },
  {
    "url": "assets/js/4.e32d8e3c.js",
    "revision": "71029ecff2ce11db8652b09449f21713"
  },
  {
    "url": "assets/js/40.69903f7b.js",
    "revision": "0ee2c9524a703154ca097d272da5b435"
  },
  {
    "url": "assets/js/41.ea465f48.js",
    "revision": "8d92b44f18a1d9d32bcccf43541b4818"
  },
  {
    "url": "assets/js/42.08aa4515.js",
    "revision": "8e45f989666ed8ad63f57f9a8a035f69"
  },
  {
    "url": "assets/js/43.70b859e9.js",
    "revision": "fbf5c07cbc03a185cd3e9c855fc71ea5"
  },
  {
    "url": "assets/js/44.5747d02f.js",
    "revision": "5cb4aec68508e41daab00c7db9ecc983"
  },
  {
    "url": "assets/js/45.25e0d687.js",
    "revision": "4680232ea9ab425928bcd8a3bf22a8d7"
  },
  {
    "url": "assets/js/46.e27de722.js",
    "revision": "83f87fa573ddf2408203482c3404cbcd"
  },
  {
    "url": "assets/js/47.7a7fd4aa.js",
    "revision": "2b408e4e6d01b58f153304c04733e41d"
  },
  {
    "url": "assets/js/48.bd8f0b67.js",
    "revision": "d5fa539c305eca0e89e1b8eaf823f099"
  },
  {
    "url": "assets/js/49.889e8290.js",
    "revision": "272bc7d1bcd248a5689da82277b0793b"
  },
  {
    "url": "assets/js/5.aafcf19d.js",
    "revision": "7aa5388f0e33ebdfc6e9f52a431e646c"
  },
  {
    "url": "assets/js/6.fa59d6e8.js",
    "revision": "7a8d4bdfabd3f94634ca0745981a300e"
  },
  {
    "url": "assets/js/7.ef9e079f.js",
    "revision": "767557018a891d870a9eca059b285556"
  },
  {
    "url": "assets/js/8.da6f5cff.js",
    "revision": "e4a3d8e403e9a3c4089121731cc188d3"
  },
  {
    "url": "assets/js/9.40939993.js",
    "revision": "93869a5b8f2b5129c45d871500780bdd"
  },
  {
    "url": "assets/js/app.f8ee4a47.js",
    "revision": "4ea5ee1bd5435938bc109a91cca6a23f"
  },
  {
    "url": "assets/js/vendors~flowchart.20f97887.js",
    "revision": "5f81df74920381787666f6e7481be96b"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "5174be4e9372848187f51a7fa129f5de"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "b17e46137dc036c200d6fa7a5c8dbd52"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "468c29133b8b485f22e91cff4c964c7d"
  },
  {
    "url": "categories/index.html",
    "revision": "3daa0d7e866415141de3cdf94851fbd9"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "e5679d4e3dc620ebec649706d48e8949"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "820c7de43154ce05f6a2520505196f2c"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "2e85343994883fb9744e6c028cfc8026"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "3577d24a9e855202c08d98f800882d4e"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "351677a0c4cc2276b04467856f2f5204"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "8c05ea40780667d1eb20a976845db041"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "67827e6fcf10501dac623e1f94165d8b"
  },
  {
    "url": "docs/A/index.html",
    "revision": "c7b0e2d0c6e1684036a82b7aa370bc21"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "3ff783cd73dcb31f21056aa33f81c8da"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "87b4d9dc9f10d6ba814ac8e903e97cc9"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "5295fbe2565516ae18b47170e30f384e"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "94012e96ce4f4a7416a3efb345c73913"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "e3e4285d95b8d2b258dcce891c4bb6b1"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "3f82b141147a554fe2d2a72b6b632a5e"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "b6af8249a1e83cf9a498d93f241e16fc"
  },
  {
    "url": "docs/B/index.html",
    "revision": "e56d055567cc6437b7524fc1b795bbf5"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "49c0b7a6b0733460c84c311778074ded"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "55b45aa23c257af7f4be49c4653d2782"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "08a4d93a1f4bb78afb5a9478a9fcf115"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "a10b2b532ef260ee56c14cd27e44f2eb"
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
    "revision": "f08bd6806dfc2dc3718dc46cb13986af"
  },
  {
    "url": "posts/2020/0818/hi-vuepress-and-theme-reco.html",
    "revision": "1d6bbacb97b71ef6330aee3e907bb4de"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "898e6ec4fdd216b5f4ce002284820a8d"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "c680e5a4c6a04d509748655254b20975"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "d237b09dc29d4a847f9d844e7aff4f57"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "f87e0029d78fe1a5f7b8c92335cfeb46"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "303864c3054083ab8309f82c08ce1c8a"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "db0200c514a602bd736a663ec9753173"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "09da66423244c1de6ff5e1f3c7738432"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "6c0ada6b45e56b94fdc2ac3929fdb6d5"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "fc52dfc5c1376eb52488ffbe9c7e9190"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "51fa5bd37a69d27678417e3403d9dc5f"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "57ba4c67d52a8dd8a455c7f9cc7fc7a5"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "413e049e1dd94e7f99bc8e175ee39957"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "6eb905c09d67b736c40991bf92c3253a"
  },
  {
    "url": "tag/index.html",
    "revision": "7518edab7dc39e0cf60e94a0495a1c33"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "7a8b824d6b11218e14cec9cc09b41be7"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "1df168ea203d21046d9407ec0cd3dad2"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "f95a38c321ee15c69e5b5aef42727b12"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "2052bc02e45dfe2d2e10345c4f9369ef"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "8a0607a71730183eb35b2d40e7fb188d"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "c6d306da9fa40848da5c30e87e5a3786"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "1e97643b30f1ab25f3c4eeebb6945ad1"
  },
  {
    "url": "timeline/index.html",
    "revision": "1d6e0a9237a0d9633658afffed0f0f16"
  },
  {
    "url": "tools/index.html",
    "revision": "89d6a42c7cee1bab8d06bf0f34e7a44a"
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
