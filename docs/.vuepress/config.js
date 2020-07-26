const themeConfig = require("./config/theme/");

module.exports = {
  title: "Yokefellow",
  description: "Talk is cheap. Show me the code.——Linus Torvalds",
  dest: "dist",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#42b983" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],

    /* APlayer Custom */
    ["link", { rel: "stylesheet", href: "/css/aplayer-custom.css" }],

    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "16x16",
        href: "/images/favicon-16x16.ico",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "48x48",
        href: "/images/favicon-48x48.ico",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "64x64",
        href: "/images/favicon-64x64.ico",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "96x96",
        href: "/images/favicon-96x96.ico",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "128x128",
        href: "/images/favicon-128x128.ico",
      },
    ],

    /* PWA */
    /* iOS(Safari) */
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/images/apple-icon-57x57.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/images/apple-icon-60x60.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/images/apple-icon-72x72.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/images/apple-icon-76x76.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/images/apple-icon-114x114.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/images/apple-icon-120x120.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/images/apple-icon-144x144.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/images/apple-icon-152x152.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/images/apple-icon-180x180.png",
      },
    ],
    /* Android */
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/images/android-icon-192x192.png",
      },
    ],
    /* IE, Microsoft Edge */
    [
      "link",
      { rel: "mask-icon", href: "/images/favicon.svg", color: "#42b983" },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/images/favicon-508x508.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],

    /* KaTeX CSS CDN*/
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
      },
    ],

    /* Google AdSense */
    [
      "script",
      {
        "data-ad-client": "ca-pub-1130344085482597",
        async: "async",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],

    /* Google Search Console */
    [
      "meta",
      {
        name: "google-site-verification",
        content: process.env.GoogleSiteVerification,
      },
    ],

    /* 百度搜索资源平台HTML标签验证 */
    ["meta", { name: "baidu-site-verification", content: "7avnmfX31j" }],
  ],
  theme: "reco",
  themeConfig,

  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      /* 使用更多的 markdown-it 插件! */
      /* https://github.com/iktakahiro/markdown-it-katex */
      md.use(require("@iktakahiro/markdown-it-katex"));
    },
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],

    /* https://github.com/francoischalifour/medium-zoom */
    [
      "@vuepress/medium-zoom",
      {
        selector: ".theme-reco-content img",
        options: {
          margin: 16,
        },
      },
    ],

    /* https://github.com/moefyit/vuepress-plugin-meting */
    [
      "meting",
      {
        meting: {
          server: "netease",
          type: "playlist",
          mid: "3147691749",
        },
        /* https://aplayer.js.org/#/zh-Hans/ */
        aplayer: {
          fixed: true,
          order: "random",
          autoplay: false,
        },
        mobile: {
          cover: false,
        },
      },
    ],

    /* https://github.com/moefyit/vuepress-plugin-dynamic-title */
    [
      "dynamic-title",
      {
        showText: "(/≧▽≦/)咦！又好了！",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000,
      },
    ],

    /* https://github.com/ulivz/vuepress-plugin-flowchart */
    "flowchart",
    "@vuepress/nprogress",
    [
      "sitemap",
      {
        hostname: process.env.SitemapHostname
      },
    ],
    /* https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html */
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          /* https://momentjs.com */
          const moment = require("moment");
          moment.locale(lang);
          /* https://www.w3.org/TR/NOTE-datetime */
          return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
        },
      },
    ],
    /* https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-google-analytics.html */
    [
      '@vuepress/google-analytics',
      {
        'ga': process.env.GoogleAnalyticsID
      }
    ]
  ]
}
