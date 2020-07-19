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
    "revision": "25179caa5306e1fc8fd306be593c0a60"
  },
  {
    "url": "about/index.html",
    "revision": "a782af50ff2c7ef0f323dc7c1acb1f0c"
  },
  {
    "url": "assets/css/0.styles.3bac0953.css",
    "revision": "c08deb593b10a0d7e9a79edbe344c183"
  },
  {
    "url": "assets/img/home-bg.8e509a21.jpg",
    "revision": "8e509a21c7af5d61f2ff4895ef09c727"
  },
  {
    "url": "assets/js/1.6efcdb11.js",
    "revision": "fad49495acad71964f750812d81d1021"
  },
  {
    "url": "assets/js/10.0c6415c9.js",
    "revision": "6841421814be7589fb8d3d9f0f110134"
  },
  {
    "url": "assets/js/11.255af57d.js",
    "revision": "146e125b9febe9f0009ac8079d854455"
  },
  {
    "url": "assets/js/12.c39fc063.js",
    "revision": "af346b49fc4a2cd257361e3507d6ed49"
  },
  {
    "url": "assets/js/13.ca76e12d.js",
    "revision": "0ebeee98a218a9c6059928256ae43105"
  },
  {
    "url": "assets/js/14.8410d799.js",
    "revision": "4d92e2ca63d656f6ea2162d71c0ed9be"
  },
  {
    "url": "assets/js/15.526922e6.js",
    "revision": "f3a75406d5531266173fede15efb821b"
  },
  {
    "url": "assets/js/16.41832590.js",
    "revision": "19eb2b5d2ec0d3b4645d5cbcd4f2a2c3"
  },
  {
    "url": "assets/js/17.4d0cd18f.js",
    "revision": "c2e9348500e8f37cd28e5cb260fbc04b"
  },
  {
    "url": "assets/js/18.226dd2d1.js",
    "revision": "7ce984d1468868ef94ed89d87dcd27ce"
  },
  {
    "url": "assets/js/19.eeae580d.js",
    "revision": "31270ab40b68dbb65a12f961c3aa78ee"
  },
  {
    "url": "assets/js/20.6b0f40c6.js",
    "revision": "96cded69c7fda1b31473881cbebd3026"
  },
  {
    "url": "assets/js/21.584dc697.js",
    "revision": "94a7e4032b2c899dd04aac9c07beb353"
  },
  {
    "url": "assets/js/22.844edf3d.js",
    "revision": "fdef7c44e153ab2fe26edc7cdc1abe58"
  },
  {
    "url": "assets/js/23.2f183a7d.js",
    "revision": "b6a12f60b01cf42775bee195c19ccd47"
  },
  {
    "url": "assets/js/4.1df743a8.js",
    "revision": "cabcd6f9e375282bfef5fc8ae98eab12"
  },
  {
    "url": "assets/js/5.f10ab7cf.js",
    "revision": "20f77044201b1f9c2013789a7f66a67a"
  },
  {
    "url": "assets/js/6.5190feca.js",
    "revision": "b4517cd52616bc78c5455b860792ffdd"
  },
  {
    "url": "assets/js/7.1bbec6f8.js",
    "revision": "adac7f390930ad11e009375245fd6b13"
  },
  {
    "url": "assets/js/8.c90adf0b.js",
    "revision": "5e803afd9f8a6146cd3cb4285dacb47c"
  },
  {
    "url": "assets/js/9.3a6aa539.js",
    "revision": "95e6df277eb79c38bda1235f5691cf68"
  },
  {
    "url": "assets/js/app.dc341681.js",
    "revision": "fe756bdef6c5952d67cd88b8a39d19b0"
  },
  {
    "url": "assets/js/vendors~flowchart.05fb136d.js",
    "revision": "0abda69029160de57aceedc0a5ef9856"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "4cb7051ace03589e9a4874cc333c83a3"
  },
  {
    "url": "categories/index.html",
    "revision": "adadb79803d5b7609350697c865dfcc8"
  },
  {
    "url": "css/aplayer-custom.css",
    "revision": "4ab854222f35b4dfa176b3f25380553e"
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
    "revision": "2e45b54415e9e338c2a0fc8bae6fec1e"
  },
  {
    "url": "online-tools/index.html",
    "revision": "aa6ea57a4e4ed22066589707a2623726"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-1.html",
    "revision": "41ddc486b39163dd130c3705031c2564"
  },
  {
    "url": "posts/2020/07/06/Java/advanced-2.html",
    "revision": "65f3d57a0db914f062a1bf53fd3b159d"
  },
  {
    "url": "posts/2020/07/06/Java/basic-1.html",
    "revision": "9a143b398d55208f86ca853d13db8afc"
  },
  {
    "url": "posts/2020/07/06/Java/basic-2.html",
    "revision": "13e44e0f8d7fde969d2aa360783211be"
  },
  {
    "url": "posts/2020/07/06/Java/index.html",
    "revision": "304348b4a189562c0b0945fc7bcb6189"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-1.html",
    "revision": "8b0306321bfcff6ddadc68970fdbc319"
  },
  {
    "url": "posts/2020/07/06/JVM/JVM-2.html",
    "revision": "e84340dda69f53a6481eb58f7ef06af4"
  },
  {
    "url": "posts/index.html",
    "revision": "19ccc86c89ab554bcf40a474fb376cef"
  },
  {
    "url": "tag/index.html",
    "revision": "123a0d28b36eb953a35ed97d732b2a7c"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "9573aa722899d0fe97c51c52c5b8ec28"
  },
  {
    "url": "tag/JVM/index.html",
    "revision": "289b7f957878f7009d83e7909b78fdef"
  },
  {
    "url": "timeline/index.html",
    "revision": "548c6a1995de15952494c7fc7b54879f"
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
