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
    "revision": "e74145ff88fd3d5c61609251eb69e82a"
  },
  {
    "url": "about/index.html",
    "revision": "f1b589cf5059f007066592d40faa1c4b"
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
    "url": "assets/css/0.styles.c110b411.css",
    "revision": "a01ffb8a8510623833734290434eb4c9"
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
    "url": "assets/js/app.b9ed61e4.js",
    "revision": "0aafa3fb55e431f93a4535e419249394"
  },
  {
    "url": "assets/js/vendors~flowchart.89606934.js",
    "revision": "da88d3cfcb4e35312c89918765bb0b8b"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "d8c768f6ab1f11cc53f30e6e35d165e8"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "c8e14b18006d43ac348d9a2649d8066d"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "0c0590a499b3dca150498c994002d682"
  },
  {
    "url": "categories/index.html",
    "revision": "b47dc1360059dda79eb3d98ea1d118c5"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "3f4953bb3798d2da6bc07840192c3c34"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "a401bb87673ebeecf7b1ce10a75eae89"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "8681a35413a6a9772db9010b0a1ff85c"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "9524d90b9a4616f4c938e21fe8be1543"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "945c94892dda2d3cc9a045c28d5ecc9f"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "3d7f38988c8c8baee867ae1186979334"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "1f0ed190b918b52a44368e73022f7217"
  },
  {
    "url": "docs/A/index.html",
    "revision": "acc2dec6b95a44e96b38412952d10295"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "2bae72df9b28e3d50e0b323827d961d8"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "0298f7c1ab6085ad4936e58eca6072fd"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "732a27a7d2b1ee6bd289bbd26e534fee"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "9c249c2f5972d15f19c527496a8c22cf"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "f4f90c2ad86fa5b7dd58256d53a75704"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "5692c2659e0683b63c752db198a85698"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "221d51ea60669fd4adbaf5aa916eee33"
  },
  {
    "url": "docs/B/index.html",
    "revision": "a9b8a89acba5c5b596de9ac07191fb40"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "609d296b26feacb8e52a17b83835f4ff"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "d753500b3fb3461607d3352f52663d4a"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "225a40ecd7615434d47f2e8229cc60b0"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "10d9d69bded474728cb48325ba6c58b5"
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
    "url": "index.html",
    "revision": "7d42b93361cab4d81bbcaf00211c1497"
  },
  {
    "url": "posts/2020/0818/hi-vuepress-and-theme-reco.html",
    "revision": "8e58442fad7a41df49f61e7f62a0685a"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "c20cc9fa9897432192be7ed54f46b9c1"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "42bcc094f2902fcd71181d6b90041fb8"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "947510d8994210ba1d0d0891bcc9a70a"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "9fe9072eff6c572214f9c8d498ff47ee"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "5da82c4b7878947e8cd894559251299b"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "e76a53d2811716ae2ad1b702a6853eb6"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "74eecc61dcf3bd5a313d159d33b34857"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "aa8ef6346f6be8a5cc1a281e8b05af94"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "1afaf7ab9655b3fd3102d97661748c4d"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "b516a2f0edab94cba6b88d786a1a2b74"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "23f0c6ed4ac2b1eb1571fe965d71d08e"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "9456da9e46787236f844b88aabcf42ff"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "ba8a66340b2da929da3f25a7af931801"
  },
  {
    "url": "tag/index.html",
    "revision": "29c4d7521b7e2addfafa988f09749d9e"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ae4929a2811d7923bc0337faba54bd06"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "b71ac3fb9c9857f57296c8cdf337d1da"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "43406464176694ba7f0f3f16ce95527c"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "8ff2e12ab898cae9839dbb2580a6f28d"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "19920677f3b641e38368e9cf99459023"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "9fa9b0184359ee8f6ed3a420694a9eb4"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "cea489e141f9a43ff6b63aa3a6471cdd"
  },
  {
    "url": "timeline/index.html",
    "revision": "f627889b17012769fcdd8f61c694c4f1"
  },
  {
    "url": "tools/index.html",
    "revision": "0ec23183512c4dcada31b21a429d9e09"
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
