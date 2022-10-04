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
    "revision": "266663c6b8de0098ba9f8addb1e7f51f"
  },
  {
    "url": "about/index.html",
    "revision": "a86d00c1916377149cfada666d499d64"
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
    "url": "assets/css/0.styles.328ce25d.css",
    "revision": "e145087c9f0b00d7d42f75844a06ea97"
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
    "url": "assets/js/1.b933a3b0.js",
    "revision": "c1fa2175e638d8b1c3072b2f647c298b"
  },
  {
    "url": "assets/js/10.4ef81648.js",
    "revision": "d4caa5995914b73703b628b3a6d175f7"
  },
  {
    "url": "assets/js/11.f2d883f4.js",
    "revision": "bf11d977609bbe8896e85a580e6d5dca"
  },
  {
    "url": "assets/js/12.1d7d280d.js",
    "revision": "5cddb84613aec6ef9fed7f756afcf6e4"
  },
  {
    "url": "assets/js/13.33ffe28b.js",
    "revision": "5fd35ffcc9c99940323b987a3f195d9d"
  },
  {
    "url": "assets/js/14.7ddc848e.js",
    "revision": "ddc79c1fdab70844412f042335130d75"
  },
  {
    "url": "assets/js/15.a475ebd2.js",
    "revision": "de8f7048cbe0e983d478dffdf43db4af"
  },
  {
    "url": "assets/js/16.7ac0d8b2.js",
    "revision": "c36755b2378638b9b6fa3e6cf0aa6b6a"
  },
  {
    "url": "assets/js/17.cee8c207.js",
    "revision": "1b01e8946f5f626efcf5c4b08e136508"
  },
  {
    "url": "assets/js/18.81c73329.js",
    "revision": "66756a219f6bd17392c67e65e2be3f12"
  },
  {
    "url": "assets/js/19.470e8b5f.js",
    "revision": "26143b160fcf9eea617ad248e6aeb721"
  },
  {
    "url": "assets/js/20.653463d8.js",
    "revision": "05cb495cf8d9191d8751448b50139ac9"
  },
  {
    "url": "assets/js/21.61112526.js",
    "revision": "daf6d7e44132d7fece5a617ed2feccf7"
  },
  {
    "url": "assets/js/22.35eb49a5.js",
    "revision": "e7016abb028e8bb9f01175c249f25077"
  },
  {
    "url": "assets/js/23.98880373.js",
    "revision": "39b06422833be577b160c186ac0af836"
  },
  {
    "url": "assets/js/24.ccdd4c79.js",
    "revision": "28c52cb95a8536445b636bddbd1999f8"
  },
  {
    "url": "assets/js/25.ee5e8488.js",
    "revision": "54931088abcff91d656918528242fe82"
  },
  {
    "url": "assets/js/26.1f24daa6.js",
    "revision": "2e0cb45984aaf2c60ae72c19c9aff79c"
  },
  {
    "url": "assets/js/27.874136cf.js",
    "revision": "1a6f4fa3a53cad2a3893cb7ed6a86eae"
  },
  {
    "url": "assets/js/28.4fdb3fc0.js",
    "revision": "8bac6ba8c68758c2196fe27e019ac75d"
  },
  {
    "url": "assets/js/29.e78006a0.js",
    "revision": "76cc6571b16c624db80cd39cd348b064"
  },
  {
    "url": "assets/js/30.fd0302a7.js",
    "revision": "340da4bd2197083b085fc7a3a1012966"
  },
  {
    "url": "assets/js/31.fc36b6ca.js",
    "revision": "cdbf3ef481455396832c366f970643b5"
  },
  {
    "url": "assets/js/32.2899446b.js",
    "revision": "39328b6db0c0862807963a635634cd42"
  },
  {
    "url": "assets/js/33.bbd4678b.js",
    "revision": "ec09de6517291dcb1abb1c5e37c64952"
  },
  {
    "url": "assets/js/34.059efd4a.js",
    "revision": "2b9c18b1e14c3ce9bd9c5d2057529e00"
  },
  {
    "url": "assets/js/35.d750eb3c.js",
    "revision": "19c8b3e92e4c5e760f55bd35fcc405d6"
  },
  {
    "url": "assets/js/36.feda0b33.js",
    "revision": "07c56bf520e91b20aa77e00206c86ea7"
  },
  {
    "url": "assets/js/37.ba1ee6eb.js",
    "revision": "4e52fb09388048e106f244f593abacbb"
  },
  {
    "url": "assets/js/38.98168987.js",
    "revision": "7cd327bffd017dc46f23c0c9171a082e"
  },
  {
    "url": "assets/js/39.1b2801f5.js",
    "revision": "b42099d2ed38c07ce44c13f42857a25d"
  },
  {
    "url": "assets/js/40.df140302.js",
    "revision": "3d40a589a4816654f53fb88b1b685547"
  },
  {
    "url": "assets/js/41.5b664b6f.js",
    "revision": "522bbf427be615deb1fd30b30d58a156"
  },
  {
    "url": "assets/js/42.bf33f0e8.js",
    "revision": "e15d8da64b23c6d518d5fe69be9eedc8"
  },
  {
    "url": "assets/js/43.ed6b94fd.js",
    "revision": "edf14fc0a45ce211e30abfd8f297abea"
  },
  {
    "url": "assets/js/44.66994eef.js",
    "revision": "2db70dac019a849b4ecc57e19f3d2e00"
  },
  {
    "url": "assets/js/45.47c8f263.js",
    "revision": "49789795f934a04a1ced982c3f7e5a39"
  },
  {
    "url": "assets/js/46.71e415f6.js",
    "revision": "cdef90507ded205220b91551666f3039"
  },
  {
    "url": "assets/js/47.c84b4cc3.js",
    "revision": "dddfbd4b585a61ee98e0e60d1df5ed45"
  },
  {
    "url": "assets/js/48.804dc6e3.js",
    "revision": "948b4d390e5b5c2e52bda8e24294ea95"
  },
  {
    "url": "assets/js/49.880720e4.js",
    "revision": "ba889dab89287759d25c4e712c7dbd7f"
  },
  {
    "url": "assets/js/50.091d638f.js",
    "revision": "61444399e87f8bc59b953df5e160174c"
  },
  {
    "url": "assets/js/51.8f853e69.js",
    "revision": "86c16e59cf1ab4d8d9ac2be930cbe88f"
  },
  {
    "url": "assets/js/52.daf61966.js",
    "revision": "bf7352874284143b785e787db2fe6caa"
  },
  {
    "url": "assets/js/53.39dfac36.js",
    "revision": "ebb5e408157d0a78d51380bd98f24dbd"
  },
  {
    "url": "assets/js/54.0fba1c14.js",
    "revision": "5de3102abc85f2f04f923fd0f84d28a5"
  },
  {
    "url": "assets/js/7.18c95eaf.js",
    "revision": "4cb39015e33f8026642f612edf120b58"
  },
  {
    "url": "assets/js/8.efd1b6ea.js",
    "revision": "669abd9f626b3c60104c5e87e24032b3"
  },
  {
    "url": "assets/js/9.69b9c617.js",
    "revision": "fe9a95d01c7a445d9008ded8dd7f4fc6"
  },
  {
    "url": "assets/js/app.bf111a84.js",
    "revision": "ffc029d08d9cb91ad068ed6a862726dc"
  },
  {
    "url": "assets/js/vendors~chart.64da0e79.js",
    "revision": "b378432d83f7d767f4d1490865aed911"
  },
  {
    "url": "assets/js/vendors~echarts.c610560c.js",
    "revision": "47a0da6f0ecb49a569b5b94483cc46e3"
  },
  {
    "url": "assets/js/vendors~flowchart.b4420058.js",
    "revision": "d502f927be5e193d0b770286ea901c12"
  },
  {
    "url": "assets/js/vendors~mermaid.5570b0cc.js",
    "revision": "c41521a33ebd4911db52a5fac8a5c961"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "79ff18592d78a70093adc5417cfc55e4"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "610991f675553d29beb21f420af27d1c"
  },
  {
    "url": "categories/index.html",
    "revision": "6567f40a7eadf0cc4857bebe66fd8262"
  },
  {
    "url": "categories/Test/index.html",
    "revision": "0e104919929d8756689ffb9b3c7a2ca6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2530f859d700687d4e9f9b3c51f9ae99"
  },
  {
    "url": "css/prism-tomorrow.css",
    "revision": "f46d7519e3b65a6912814727b47a57ff"
  },
  {
    "url": "docs/A/A-1-1.html",
    "revision": "6b3f99bb372ce3135d2e3c9ac2c1cb28"
  },
  {
    "url": "docs/A/A-1-2.html",
    "revision": "74b557e6f86024339f2d2fb5825c350a"
  },
  {
    "url": "docs/A/A-1-3.html",
    "revision": "e5394b823135a60937f9af27b775d888"
  },
  {
    "url": "docs/A/A-2-1.html",
    "revision": "e97e1d4db1776b006575e797b0168f87"
  },
  {
    "url": "docs/A/A-2-2.html",
    "revision": "1580be4f1b79958200c314b70002d9ff"
  },
  {
    "url": "docs/A/A-3-1.html",
    "revision": "2d4c6eced12139b26e90337633e7d555"
  },
  {
    "url": "docs/A/index.html",
    "revision": "c02a86b391eb960a18b97b88dfe5ed97"
  },
  {
    "url": "docs/AX/AX-1.html",
    "revision": "35ac7c58c7d25de62850c4b41f5a46a3"
  },
  {
    "url": "docs/AX/AX-2.html",
    "revision": "cc63b812b2bfe8b3b0a047f3a8e73910"
  },
  {
    "url": "docs/AX/AX-3.html",
    "revision": "3990cfb920cba0c366b8abc6b22b4fe9"
  },
  {
    "url": "docs/AX/index.html",
    "revision": "926eaa91d8feb269e3b5b9845514a9f8"
  },
  {
    "url": "docs/B/B-1.html",
    "revision": "9d3b31d278f7d41b0fb88956352b0c1f"
  },
  {
    "url": "docs/B/B-2.html",
    "revision": "e6752407d00f37c3ff8c1bf685841b79"
  },
  {
    "url": "docs/B/B-3.html",
    "revision": "6412f1390d1368d2b5611590698f4f30"
  },
  {
    "url": "docs/B/index.html",
    "revision": "ba4697bf66a06ab9e6fe16ed95239466"
  },
  {
    "url": "docs/BX/BX-1.html",
    "revision": "0466085395303c5ab376ecdbab16cc54"
  },
  {
    "url": "docs/BX/BX-2.html",
    "revision": "124b8c08d21e1774802633c6ab2b9814"
  },
  {
    "url": "docs/BX/BX-3.html",
    "revision": "b1156f851f2a2a6f2b9598d0160c5a62"
  },
  {
    "url": "docs/BX/index.html",
    "revision": "317eac25a5fedaf6112965036e96413a"
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
    "revision": "3c01611279a2f5432d851c6a75a684a7"
  },
  {
    "url": "posts/2020/0818/hi-vuepress-and-theme-reco.html",
    "revision": "a9e5329c33d3e2de3b81fe3248859a0e"
  },
  {
    "url": "posts/test/2016/flowchart.html",
    "revision": "188617e46419426a63784b31a1c264e8"
  },
  {
    "url": "posts/test/2016/test-code-block.html",
    "revision": "69a330f4737a7bbb1cd2eb88306a6020"
  },
  {
    "url": "posts/test/2016/test-sponsor.html",
    "revision": "8fb58c151b27a7c395a9c5ab474eafd9"
  },
  {
    "url": "posts/test/2016/vuetify.html",
    "revision": "fe8c44a8657d75dd41024170232767f5"
  },
  {
    "url": "posts/test/2017/092101.html",
    "revision": "62f804c57636ef794da93d8f08b74d76"
  },
  {
    "url": "posts/test/2018/121501.html",
    "revision": "61fcfa2488e59f419cf4c6319beb3be3"
  },
  {
    "url": "posts/test/2019/092101.html",
    "revision": "6666cb4e91d796e26b9d2208d7a0262e"
  },
  {
    "url": "posts/test/2019/092102.html",
    "revision": "7985963236353da060871687c27b9441"
  },
  {
    "url": "posts/test/2019/092103.html",
    "revision": "a8504e60660a1ff966731c3f903a6562"
  },
  {
    "url": "posts/test/2019/092104.html",
    "revision": "b7d9bd1d8d29bf01116fe007c681cb94"
  },
  {
    "url": "posts/test/2019/092105.html",
    "revision": "38258f6a428ae4b3b60a3966b5b247f7"
  },
  {
    "url": "posts/test/2019/092106.html",
    "revision": "539e7fe84b8d16baef33f85ebb562f97"
  },
  {
    "url": "posts/test/2019/092107.html",
    "revision": "6101d7f4d12e5a0f2b9cfba33e2c350c"
  },
  {
    "url": "posts/test/2019/092108.html",
    "revision": "6b6c8a8f576e1d0b69d6c349ba89921e"
  },
  {
    "url": "tag/index.html",
    "revision": "79adfaf35c6fd4f81999413d2e43b3f2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8eda131da81f8f0a0e97dfb64bbb5cd0"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "c79799fc8471657159958a45cb56ad77"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "b85d3306dbbe9a3f310002ffe3c6d574"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "c44d92609ff861d439beeed4bc0bb49d"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "0c67c859a6398faa90944301d94d6484"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "62617ec5ea27081aca7b7e828cf50d80"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "212c8916a9395d464734cb485fff870c"
  },
  {
    "url": "timeline/index.html",
    "revision": "83bb6c07dffd18f78dd044a77bc0b5f1"
  },
  {
    "url": "tools/index.html",
    "revision": "8f839402c09cc98c895c35aeddc8896f"
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
