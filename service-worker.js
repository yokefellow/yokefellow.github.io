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
    "revision": "9ec988754bd966e63c2834e2b4d5160e"
  },
  {
    "url": "about/index.html",
    "revision": "73a51b6f0eca16ae3ea48785f1e21d82"
  },
  {
    "url": "assets/css/0.styles.ba66c304.css",
    "revision": "1cfb049015698762dea75dca515d2bbb"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.7e872bee.js",
    "revision": "943a1e743e98ef113d92cfdc1d5e61d0"
  },
  {
    "url": "assets/js/10.7817bba8.js",
    "revision": "de20bbd4778b909096f35f26fee83958"
  },
  {
    "url": "assets/js/11.b309ef6f.js",
    "revision": "b23ce5902099b4277a79a8f83953698e"
  },
  {
    "url": "assets/js/12.75d83096.js",
    "revision": "f10382c80dd74676bc6e97a033543502"
  },
  {
    "url": "assets/js/13.c0a11f12.js",
    "revision": "1e916056761404b4fd403367361435fd"
  },
  {
    "url": "assets/js/14.f5f1cb34.js",
    "revision": "5ea318e22aeea692a1ad66b6180bba85"
  },
  {
    "url": "assets/js/15.45bcf952.js",
    "revision": "dc47167b18ad975d2972105ce27cdeff"
  },
  {
    "url": "assets/js/16.f1c81279.js",
    "revision": "89bad248b27c40317efc489223180f6b"
  },
  {
    "url": "assets/js/17.176ce47d.js",
    "revision": "06c1bf4d68e76d49c49d1bf738e723a1"
  },
  {
    "url": "assets/js/18.06177f27.js",
    "revision": "ec544b9bdfedae5d87843e6d8982dfb7"
  },
  {
    "url": "assets/js/19.ac7aa062.js",
    "revision": "7f98e5592fbd285a9475189d2ac5ec46"
  },
  {
    "url": "assets/js/20.3864a62d.js",
    "revision": "9631cbe2476ea7ecaa14d03d515a10fe"
  },
  {
    "url": "assets/js/21.7f159420.js",
    "revision": "1d4dc881c98ea23abcbfdf819afe83c4"
  },
  {
    "url": "assets/js/22.5a99feb4.js",
    "revision": "67b3fdf5a0bfe24e8e17c526cec4c550"
  },
  {
    "url": "assets/js/23.a2a8ecd8.js",
    "revision": "085d7287c087607ae477ed2bd3c8d0ff"
  },
  {
    "url": "assets/js/4.1bc121c6.js",
    "revision": "e3b22925d5a2e2bf88dc48f1ed7d0917"
  },
  {
    "url": "assets/js/5.c0c89e68.js",
    "revision": "010b94fae718b2159dd1848467b153bf"
  },
  {
    "url": "assets/js/6.fbb6bda6.js",
    "revision": "c445fd76985b4a4232e16e7f2f659669"
  },
  {
    "url": "assets/js/7.94276b55.js",
    "revision": "549cba62a4456a8938302662bb8fd714"
  },
  {
    "url": "assets/js/8.2b061358.js",
    "revision": "6485c47730f69f3075e3e0676a52d056"
  },
  {
    "url": "assets/js/9.99189d16.js",
    "revision": "4d798c4dee07f82b05249a83a04e91d0"
  },
  {
    "url": "assets/js/app.3270a4d8.js",
    "revision": "8eef6b00361f44a850b64861d37eb04b"
  },
  {
    "url": "assets/js/vendors~flowchart.6a6b119b.js",
    "revision": "8938e056a0e3cff9549f8522794a4434"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "8cdf4c1ed4324ca3c1a2c92c257fcb56"
  },
  {
    "url": "categories/index.html",
    "revision": "ca10a94a8b6436a7eeb71e397e1bf86e"
  },
  {
    "url": "images/android-icon-192x192.png",
    "revision": "e5f482cf85280a9736e01e623eff192d"
  },
  {
    "url": "images/apple-icon-114x114.png",
    "revision": "e75ce305a6e47796873fd87df177d527"
  },
  {
    "url": "images/apple-icon-120x120.png",
    "revision": "c72749b54a300f14774cbb4c7783b171"
  },
  {
    "url": "images/apple-icon-144x144.png",
    "revision": "4e3f1267b6fb4b25b9b5156c6f14a5c7"
  },
  {
    "url": "images/apple-icon-152x152.png",
    "revision": "a684cce47b88169a00e3f323fe3cf989"
  },
  {
    "url": "images/apple-icon-180x180.png",
    "revision": "1b20d7189c2898d905abe21db5fd303a"
  },
  {
    "url": "images/apple-icon-57x57.png",
    "revision": "0e6ed8e655733eaf2963791f8a9ae69c"
  },
  {
    "url": "images/apple-icon-60x60.png",
    "revision": "c99165bda14c784ec09550950d4b2b77"
  },
  {
    "url": "images/apple-icon-72x72.png",
    "revision": "3272d55d3e03088ae48ed472b7214cce"
  },
  {
    "url": "images/apple-icon-76x76.png",
    "revision": "6cacea4f92a8ae99037a825290459db9"
  },
  {
    "url": "images/avatar.png",
    "revision": "4a3add9980ba13981478da29898ebd40"
  },
  {
    "url": "images/banner-1366x450.jpg",
    "revision": "286d09cb8eda5e3fb3666d2d6781d743"
  },
  {
    "url": "images/favicon-508x508.png",
    "revision": "643841f1935c70b39ee6364fe2b100ec"
  },
  {
    "url": "images/favicon.svg",
    "revision": "ec263efa46b86cdc039d1c0f2993eef8"
  },
  {
    "url": "images/original-banner.jpg",
    "revision": "d25ef3bdf7c40aa6104d924e9314731c"
  },
  {
    "url": "images/original-favicon.jpg",
    "revision": "4866f50fb73059f52292ca8a08d7ba12"
  },
  {
    "url": "index.html",
    "revision": "6774096658b9432b2217c895907b0aa7"
  },
  {
    "url": "online-tools/index.html",
    "revision": "a6d492ed4e79c4df5689bcdb3df1f6ee"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "e97c12a13dd565a9602b75213f2a84ec"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "05f0bd0b00d1d5fa19f9edcad2f858a8"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "7b788adfc23b90b376f66a8b7501b7ce"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "3c86bbf8fb77e570428fe8669f1a2fb8"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "b9ad729d3016900fdc17c32eefcd6378"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "412380fde112422147525dddbc670076"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "bd216bf9394bac3d50b96d1b73223e02"
  },
  {
    "url": "posts/index.html",
    "revision": "c4e37946f41ab293e5e8c4388990be79"
  },
  {
    "url": "tag/index.html",
    "revision": "3bd5a735826ab4d4057194b2ddb659c1"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "fa44d3075a6941e0265821440631faeb"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "fbc8f9ad3b3da18a73d2812e7e32c705"
  },
  {
    "url": "timeline/index.html",
    "revision": "c63be8b48ad817d5cc98cff3d9ef4035"
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
