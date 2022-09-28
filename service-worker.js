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
    "revision": "619c7c6729b41df6f2361ee3b441849e"
  },
  {
    "url": "about/index.html",
    "revision": "2cd09c192d5876c068b3f2840fc98ea4"
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
    "url": "assets/css/0.styles.7678c782.css",
    "revision": "5bb7f010a986553a378b0bdc41fc4eb6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.95e1e275.js",
    "revision": "371e790d4502f0f19c5a2b46971fd257"
  },
  {
    "url": "assets/js/10.a4981a37.js",
    "revision": "768b28bb4c6f374804819da8057ebab4"
  },
  {
    "url": "assets/js/11.d20a25d8.js",
    "revision": "ce53e74a0cc781e94c95299431f149c8"
  },
  {
    "url": "assets/js/12.56d38cc3.js",
    "revision": "15805b2d7aec42c1d01555c6ef8c26ff"
  },
  {
    "url": "assets/js/13.8f1cdac2.js",
    "revision": "8d3a2a268222a7878e819bc220dbe9b7"
  },
  {
    "url": "assets/js/14.79c70a96.js",
    "revision": "46f713e633be90b900f14301cbd30824"
  },
  {
    "url": "assets/js/15.51ce60a7.js",
    "revision": "88d62870d2f4de3840227d0b92b74f45"
  },
  {
    "url": "assets/js/16.c01c3424.js",
    "revision": "f9e9b50c2e1ba4e919758bccf3809c53"
  },
  {
    "url": "assets/js/17.e54a1e93.js",
    "revision": "d0abf0c232bf2c287eb37e66e2900a52"
  },
  {
    "url": "assets/js/18.22271c2f.js",
    "revision": "687c6b8dd23ccc448f1ad11abc438b4f"
  },
  {
    "url": "assets/js/19.0e990a22.js",
    "revision": "07fe49c207fed831c095c5faa2dbff85"
  },
  {
    "url": "assets/js/20.2e4c668e.js",
    "revision": "af9289f1734857fe33e4046992846e5c"
  },
  {
    "url": "assets/js/21.a3b5fedc.js",
    "revision": "f4aaa31313ec49f92f5377ff25f96dd4"
  },
  {
    "url": "assets/js/22.9282c2b3.js",
    "revision": "a0b115ec51eb41fe8f32536867bc3df0"
  },
  {
    "url": "assets/js/23.086b7c62.js",
    "revision": "c6ade87261052409f3224a85bd0999e4"
  },
  {
    "url": "assets/js/24.12780df7.js",
    "revision": "9d22d6422bd9264871e3dca94fcd0580"
  },
  {
    "url": "assets/js/25.d9fe4a12.js",
    "revision": "bcdfee7cf4b4dd307d7c1dc72e140eb6"
  },
  {
    "url": "assets/js/26.aa8c9b73.js",
    "revision": "930dbad10e601a2c8651264a231656f0"
  },
  {
    "url": "assets/js/27.450f2419.js",
    "revision": "c48d2e78a3077b6d3b479bcf39629e28"
  },
  {
    "url": "assets/js/28.adee4708.js",
    "revision": "71ab758659a8173b45dc0b1c7ba441b5"
  },
  {
    "url": "assets/js/29.35c6942c.js",
    "revision": "189720e9786f8bcbf64496f57822e78d"
  },
  {
    "url": "assets/js/30.93965b44.js",
    "revision": "3c5b55bb70f5c0e2026d466599aa0b09"
  },
  {
    "url": "assets/js/31.f4280ba0.js",
    "revision": "04bd6471915ecae9b853651a34e1df34"
  },
  {
    "url": "assets/js/32.e66a6e8d.js",
    "revision": "25ea32af82cc8aa8afe354f5bf6f8869"
  },
  {
    "url": "assets/js/33.3861b859.js",
    "revision": "dda860bd0ad31ae9e7d21f1fd3235c56"
  },
  {
    "url": "assets/js/34.86e170e3.js",
    "revision": "2428e2af182bc24f2986813a41db70c2"
  },
  {
    "url": "assets/js/35.a6168325.js",
    "revision": "bdfe2c9711848feb3250530b241bf4de"
  },
  {
    "url": "assets/js/36.28f7c764.js",
    "revision": "41d5d38f5754aa95f3b7a8765f9e8c63"
  },
  {
    "url": "assets/js/37.683d660c.js",
    "revision": "1fe909243c5ebbea7a68bd13570da16a"
  },
  {
    "url": "assets/js/38.2b84efc1.js",
    "revision": "1c631cbf9ebc67b3f4571b2de73a8917"
  },
  {
    "url": "assets/js/39.c5b6535b.js",
    "revision": "9f4158b76c207a2d7a3728f259c6acf8"
  },
  {
    "url": "assets/js/4.fd633dec.js",
    "revision": "82c4c11b57d11a5349a8b7a35a48af75"
  },
  {
    "url": "assets/js/40.c4c6682c.js",
    "revision": "9c125d932cffb9460729fe0a797b4494"
  },
  {
    "url": "assets/js/41.894ccf61.js",
    "revision": "b98ec73fc114b2b4462553716d86ac75"
  },
  {
    "url": "assets/js/42.d43b7b15.js",
    "revision": "d8d77ac5ba22c3548d93f7d4867cf06e"
  },
  {
    "url": "assets/js/43.ab523a03.js",
    "revision": "c8ee579fc950738ec2024b3b4afa8fba"
  },
  {
    "url": "assets/js/44.8189c98c.js",
    "revision": "bb411ec4c7c43c181a5012e9b93b8a27"
  },
  {
    "url": "assets/js/45.828b3444.js",
    "revision": "a925bafdbf66bd8fc36886fa3d940ad2"
  },
  {
    "url": "assets/js/46.174e8147.js",
    "revision": "b60bbadfbfce67187003b31384bb0a75"
  },
  {
    "url": "assets/js/47.7ac02433.js",
    "revision": "32f5d38e088c220775eeeb0de1992b4d"
  },
  {
    "url": "assets/js/48.1aa977cc.js",
    "revision": "84367544ec805cbb5ee1ff5af371bdb4"
  },
  {
    "url": "assets/js/49.31caad1d.js",
    "revision": "571876a6079dfb26c2f2c8284e6a885b"
  },
  {
    "url": "assets/js/5.605923ad.js",
    "revision": "29f2b7c93d6fd04b7eb679f41ba149d6"
  },
  {
    "url": "assets/js/6.8c84b675.js",
    "revision": "43cb0054684eec2087c2150d85f5b2e2"
  },
  {
    "url": "assets/js/7.efe3f761.js",
    "revision": "959322ca6a6e6b791fb4fc742cce57bd"
  },
  {
    "url": "assets/js/8.041a0b58.js",
    "revision": "6af4e5dc51010f367e116ac19507158d"
  },
  {
    "url": "assets/js/9.1fe9cd60.js",
    "revision": "bd3cdaf0351805171c051fa3d3e579a6"
  },
  {
    "url": "assets/js/app.2a6221a8.js",
    "revision": "91981a036037d93903c2125d2d6ee9b1"
  },
  {
    "url": "assets/js/vendors~flowchart.89606934.js",
    "revision": "da88d3cfcb4e35312c89918765bb0b8b"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "d2d0c6f29b9649c769f713dd2cc310e7"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "9678bb6b300708c114ffbaee74d2fe0d"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "d7a81dbf7000b34c97268c9b4efdfec4"
  },
  {
    "url": "categories/index.html",
    "revision": "6ed17a55cf66dff0d990fd36f03a76ae"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "69e5c42582135725efd21af3e85de316"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "6c985504f32652aab2f214617e5924bb"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "51b7b9a64574ced0df0d613c28de6b98"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "79e6fd6a1357a87bad6a73afbe1d0417"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "b1aaf2e888617665299a7221764fdcdc"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "d4bcc99a7c8308f13832776d5227257b"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "e7dfc166d0a30fc5671d6fb637f6ce7b"
  },
  {
    "url": "docs/A/index.html",
    "revision": "3753ebf8e9981dd84bc03fa09f7f92fc"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "be0453b2c395f1202e452c8af6fc9fd9"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "8959d6c3f2f5bd11510f4686b49946d5"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "a7b712eb134e98dfde67c366bdba2c38"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "71b7e6b679b5479a7834f5001f23f371"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "c36f9b8b8c55d86a16e58129aad1d9fa"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "df90eed390d5f60310dd89d8e1e563f4"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "1e18bbf2071f869ace959e42a5bdcf0a"
  },
  {
    "url": "docs/B/index.html",
    "revision": "310285c9220656d4691044e5a6d59048"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "9001f5b57d847c0367550377326fd2e3"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "4ad491a9adc0115dfb45afe512650c01"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "07bf42d2ee11a0099a85997a0688f01b"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "93c37001f2cfb2987df5475bd37900d2"
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
    "url": "index.html",
    "revision": "ac5fb47042f0ebbaeabbdb09adcf8d55"
  },
  {
    "url": "posts/2020/0818/hi-vuepress-and-theme-reco.html",
    "revision": "e313aae3dc87435ee613eab4869de70b"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "66d1e3ea23ce74510bd02e923e4b3d1e"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "81d9780221d914586f393bdf50009e52"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "5717eb97e7f307951390131a88333f57"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "20bf1ce9fae9e9f46994330d6bc5369e"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "a87816b54b7c66ac109e79ae902c12c3"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "e86ed7aabffd68303f17fbe3612056c4"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "cdfbbea859feb43568f58818592689d5"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "d85dace8bedd01c5d4a6ff2a75851b32"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "681b0afb5fb7a14aa8ec55e5ddd6f286"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "2087db64f4e01a26ddc5e203499cfb80"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "a8bb6b1182fb248acc5a548a73135cca"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "804fc0eeee1ffc87a379357772861519"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "6de1ee2ba137c77a5744ab20cd402b18"
  },
  {
    "url": "tag/index.html",
    "revision": "5680b01ab9f35c6b42027f7fa9c767ad"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "431987f1f889c5a12c083f7cb3ee9760"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "ffb9e8e88cb133b3d24277299b744254"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "fb9c9d8e75d90c6e5a606e9997693e36"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "740800a045baceb5cd3c6aa8270f4621"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "9d51f19f46a8d60f1e96bc270559252a"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "542cda4f488b735912e40f8df8739455"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "f77495ec57fda191d904637002311aff"
  },
  {
    "url": "timeline/index.html",
    "revision": "cb5b058ff974f86ee0c374066010bdb3"
  },
  {
    "url": "tools/index.html",
    "revision": "47f821bb06e9240f59f418d02b3ed833"
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
