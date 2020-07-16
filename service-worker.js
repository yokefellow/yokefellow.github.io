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
    "revision": "de0401662e49726f6c75118ea92f165a"
  },
  {
    "url": "about/index.html",
    "revision": "46a3150dee508a2f775165b40c829cb0"
  },
  {
    "url": "assets/css/0.styles.dec98ccd.css",
    "revision": "f57c99adff5434a60b3e0cad180bfe00"
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
    "url": "assets/js/14.3c2e858b.js",
    "revision": "fa61cb8a7f098ae9bbd4b9d11ed0c5c8"
  },
  {
    "url": "assets/js/15.1a6b644a.js",
    "revision": "d8ef2c45c878f0a8b227918ca28246fd"
  },
  {
    "url": "assets/js/16.ece72e11.js",
    "revision": "33ecfe19e1a74fc87ad71bbc5b10b5ee"
  },
  {
    "url": "assets/js/17.c7f8128a.js",
    "revision": "2f7ec253eec051e1eaa08a99f85f06f3"
  },
  {
    "url": "assets/js/18.06177f27.js",
    "revision": "ec544b9bdfedae5d87843e6d8982dfb7"
  },
  {
    "url": "assets/js/19.2683ce85.js",
    "revision": "0dc1fa33e5c58872962a27d79857b231"
  },
  {
    "url": "assets/js/20.a359fded.js",
    "revision": "e5a405be3b74ce147486a90f763b80fc"
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
    "url": "assets/js/4.fc64ad2d.js",
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
    "url": "assets/js/app.1efcd59d.js",
    "revision": "306fba54ca11c79561491b27ddc5323b"
  },
  {
    "url": "assets/js/vendors~flowchart.6a6b119b.js",
    "revision": "8938e056a0e3cff9549f8522794a4434"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "01ba23d4cadbb5680d02b6c7dfd692c8"
  },
  {
    "url": "categories/index.html",
    "revision": "9709fe90854873323017f1b23bea1879"
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
    "revision": "c385df545d9ee513eaacb1a0cca80536"
  },
  {
    "url": "online-tools/index.html",
    "revision": "f2db53114717841bb225c54137153786"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "6c020d1b79253674d3b7951529ffd75f"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "e0b94237ae4f1cee7ee0478ace2c9b76"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "07ec180038278581b2875bec5ecb96fb"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "b1ee253d8c54a5bc0fc69494bbfaf006"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "b3626d6b1081b9ba5852a4900f860849"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "84ec8c3059ed53df5baf09b7e3d2cf8b"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "0157205879dac9f1dda10991d608ad0e"
  },
  {
    "url": "posts/index.html",
    "revision": "90dc529b52d76efb2877eb3f517f3678"
  },
  {
    "url": "tag/index.html",
    "revision": "0df349628634c9b8a4574106a0b06810"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "692a00d138828d60171409e395c592ea"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "9e54f93f663eeec88f28ad47a90b80e5"
  },
  {
    "url": "timeline/index.html",
    "revision": "b0dfdede183bfb2595057ada612ff46e"
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
