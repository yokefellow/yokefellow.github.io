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
    "revision": "6272f585c7d7e77744fae072ee772fb2"
  },
  {
    "url": "about/index.html",
    "revision": "c32a34f5050beee59d09f367648e30ee"
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
    "url": "assets/css/0.styles.3c9260be.css",
    "revision": "932902d3c53b8afba3e5277918f08df2"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.b49662d8.js",
    "revision": "21ed204d52abdea82cda151827e9255b"
  },
  {
    "url": "assets/js/10.2fbfab9e.js",
    "revision": "23b6fa38fa6d5a532ae9f30585b25fc0"
  },
  {
    "url": "assets/js/11.355c074c.js",
    "revision": "2086a86dfe0d18b61b0cfecab69cb210"
  },
  {
    "url": "assets/js/12.1099cfeb.js",
    "revision": "79e186eb5201a01b4557938b9c515f2c"
  },
  {
    "url": "assets/js/13.7b6fb6fe.js",
    "revision": "a66e434e823edb53c7569ed8e9492566"
  },
  {
    "url": "assets/js/14.c4fc6c2d.js",
    "revision": "1e7279469bac4c16e3286e3af194326b"
  },
  {
    "url": "assets/js/15.fbc18c5d.js",
    "revision": "2c76dc29095912019e66c7521e4b2c33"
  },
  {
    "url": "assets/js/16.88920465.js",
    "revision": "211fe45b7ee4e528aaa93f9869cc27b1"
  },
  {
    "url": "assets/js/17.6618211c.js",
    "revision": "8dedc3bb6358d63be8d651885f1a71d8"
  },
  {
    "url": "assets/js/18.026d8c65.js",
    "revision": "3a7f47603923f7e17c6a9b99512df1c8"
  },
  {
    "url": "assets/js/19.2163936f.js",
    "revision": "e14a4ef0c139b3891a09189c05668484"
  },
  {
    "url": "assets/js/20.e06e8303.js",
    "revision": "768a0853aff13640bba4cb32181f0a49"
  },
  {
    "url": "assets/js/21.8029cd0a.js",
    "revision": "1d3f6aff275eb9c64ca07546efbf0966"
  },
  {
    "url": "assets/js/22.84de00e5.js",
    "revision": "fbdc8067371e2282f3422a46e1ddff32"
  },
  {
    "url": "assets/js/23.3147839c.js",
    "revision": "8a6ba388ce47171e0f2c83c629739721"
  },
  {
    "url": "assets/js/24.75e2b8d9.js",
    "revision": "642dbb529e50c4ccc9d31592dd261481"
  },
  {
    "url": "assets/js/25.5153b554.js",
    "revision": "5c7f14ea1dfd976cf02b02556a46d024"
  },
  {
    "url": "assets/js/26.64d42f52.js",
    "revision": "bdbb592d37936fcee3680231ab9dc5ef"
  },
  {
    "url": "assets/js/27.06528ee6.js",
    "revision": "58f36500e02125330f00c822a33564fc"
  },
  {
    "url": "assets/js/28.cf46747d.js",
    "revision": "bc1ce90450e69086c746ac4622ccc1dc"
  },
  {
    "url": "assets/js/29.f78a27ec.js",
    "revision": "f17690ce10d7c56652250280da48b692"
  },
  {
    "url": "assets/js/30.4248827c.js",
    "revision": "4420af8b5e08b2dc7e217d8a185800d9"
  },
  {
    "url": "assets/js/31.21a23abc.js",
    "revision": "e8e540e205ed71a84ab1dad98b533076"
  },
  {
    "url": "assets/js/32.98aca306.js",
    "revision": "1def481c5f8611fa0fa8c773d05a22bf"
  },
  {
    "url": "assets/js/33.cd44d316.js",
    "revision": "a9860a9f4b1728a64ac4c90087485718"
  },
  {
    "url": "assets/js/34.9df19f81.js",
    "revision": "7d957abaa587483cf508e3777c686e7b"
  },
  {
    "url": "assets/js/35.cf432020.js",
    "revision": "aee6a4e1a3e8ffc20fd370c8779ad947"
  },
  {
    "url": "assets/js/36.113c3c8a.js",
    "revision": "c3bb97496f1e0a14d74ef9f9ecd30702"
  },
  {
    "url": "assets/js/37.16f14f24.js",
    "revision": "e8e2bbdcb1c394740858a33855f0e8cd"
  },
  {
    "url": "assets/js/38.007397f5.js",
    "revision": "4b505eba21bf79097d7ca9717e31f143"
  },
  {
    "url": "assets/js/39.fe100cdf.js",
    "revision": "9004d19ef25eb97e0d8b5caa045918fc"
  },
  {
    "url": "assets/js/4.53b0b953.js",
    "revision": "a46164f853e0e844368ef184e4d62acf"
  },
  {
    "url": "assets/js/40.0a5affdf.js",
    "revision": "c0e49d0d03a759fe290ed7323041e930"
  },
  {
    "url": "assets/js/41.81bb6061.js",
    "revision": "198b80d914f012c99e6c091f63c99a23"
  },
  {
    "url": "assets/js/42.bcfc24d9.js",
    "revision": "557b1578485790be6693e74e7bd2b5d5"
  },
  {
    "url": "assets/js/43.7e5fbaf6.js",
    "revision": "dbfb21b8191934e76feb99b044feddcd"
  },
  {
    "url": "assets/js/44.58c19c5e.js",
    "revision": "3d1909222431408986ede8e2be9e8ef5"
  },
  {
    "url": "assets/js/45.f4afe780.js",
    "revision": "18b7ce5bd78d9c2b09e7ab301f2883b2"
  },
  {
    "url": "assets/js/46.0a6ba1ca.js",
    "revision": "c52416d9061dd38d27b2521fcd98a454"
  },
  {
    "url": "assets/js/47.817a887e.js",
    "revision": "5ce4b816e980314ed8eff5552bd64a24"
  },
  {
    "url": "assets/js/48.128cdbca.js",
    "revision": "ade6fabdf546ed249111748375a7fdc3"
  },
  {
    "url": "assets/js/49.c569b84d.js",
    "revision": "6bc07e0d1d3e8d42bd5f7afd2591ac12"
  },
  {
    "url": "assets/js/5.c027ec13.js",
    "revision": "a2cff511f25204e2a7bbb972e1d353bb"
  },
  {
    "url": "assets/js/50.affc44d4.js",
    "revision": "418475153469a0a8948b028f9d1730ca"
  },
  {
    "url": "assets/js/6.a567600d.js",
    "revision": "ce630780a31a4fcdaea35be9a8177f84"
  },
  {
    "url": "assets/js/7.952a0f23.js",
    "revision": "0eee42dff48911caa29e67915af56289"
  },
  {
    "url": "assets/js/8.87ec7884.js",
    "revision": "d7c7178566cd3d8b10977cc2d989f0b9"
  },
  {
    "url": "assets/js/9.b51891ef.js",
    "revision": "79b14c940438a4cf2af5955007486f9a"
  },
  {
    "url": "assets/js/app.e3c63dff.js",
    "revision": "983c0d05a6b5160e3287e802d8007b0d"
  },
  {
    "url": "assets/js/vendors~flowchart.908f6d10.js",
    "revision": "c59dcfccaaa61bc93cdaa6c74a84b344"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "73c465038edeccffe7cb6e521b803be4"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "17ba854a236048c46c4378030ef99493"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "56833904f214e83247845e5e9a6e058e"
  },
  {
    "url": "categories/index.html",
    "revision": "cf67e73cccf09def9a2adaeea064d469"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "4afc26e4d61da11af3ddf5306c624527"
  },
  {
    "url": "css/prism-tomorrow.css",
    "revision": "f46d7519e3b65a6912814727b47a57ff"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "dae70992e1f394ef095ac6f1eb20e379"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "43c4d7dfbf269b369a130feb44a2f306"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "189d58d0d198d858e4adbbb9802a0d26"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "ec63d34b736566e2506a77db00af5569"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "e6659dbe24c33a3f71fd8331cdf01e52"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "d32d198f074b7c1848db7df2de62bd7f"
  },
  {
    "url": "docs/A/index.html",
    "revision": "2314a2118ead76ca3a90ccf816cbfe8a"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "635000c9df32d94773d192eef7d2b9c6"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "f4c7da6bcda7a7f1d2678f582f566488"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "5c97ed7bd18621443a535ff61d66c0fa"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "e1705eb12a4abd26f2e5088a8307fe5b"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "aea1d310e9b589dcc3f60bdab3d5af45"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "9bc7847a4e1f8330a4aed4add4ad8081"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "ad5d2026ae95b0680615c9569728259b"
  },
  {
    "url": "docs/B/index.html",
    "revision": "921c66e6aa6a74d59590104ab3a62308"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "12ab3c0d6d86aa00b9ca7a4341901219"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "003c8592eabe89ae14646706da81ae1f"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "2d765d79fe3166fe5b0f4aa8f58058df"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "15c577110af05e5c5cd04e38c110a639"
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
    "revision": "3a16a2f4e2850e7e05c5d153848c8bf2"
  },
  {
    "url": "posts/2020/0818/hi-vuepress-and-theme-reco.html",
    "revision": "21494ff91ea90fe70abc8ea6a4cbd59a"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "b5f3001e284b93443f722d06aae7399d"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "66891edd2a52eb4a63dca9cb68ae8672"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "c672244e1d8fd7237b30027327d55e9b"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "d39bdb384da64edf923850ff02f56f85"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "44cca3c996d37f584c929944dc7d88b9"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "d599308dbc144993f7bb5e2729951059"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "c33daef76b2cf3046124066291f41c4d"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "17646cd0ae866fc05fde1f461bfa7012"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "c9da4ddd8da0bf91300ef3531c61f241"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "9d08996c41e97391275a9309fd65b5d1"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "df33fb566f9f393b94aba2bbf651b619"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "a6583c8c58d263c0b218c29b50ba0ce0"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "9c238482e2e45679b79d6129e896a423"
  },
  {
    "url": "tag/index.html",
    "revision": "e69834e39f52df9f6154ec6fd292c537"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6dd06b21ed1b0193c5f3a40e46cd9c84"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "9a725be2b63c601751242799cdb8bbec"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "39744063437c529762cb6fcad611770b"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "ed1ba2860e6f98e9d79a7704000802bd"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "75e99b6dea62cd074dc6de80d27a9600"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "4962c3222def2ef55ff96eaba813a1a7"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "50373d569c652560a3f077b53c6a51e2"
  },
  {
    "url": "timeline/index.html",
    "revision": "9ad8e0d2e8a5bf8a5b8a2bc8274eb267"
  },
  {
    "url": "tools/index.html",
    "revision": "dc8a86d1d48eb11715c28aa865a642d7"
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
