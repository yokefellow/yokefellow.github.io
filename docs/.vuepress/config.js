const path = require('path')
module.exports = {
  title: 'Yokefellow',
  description: 'Talk is cheap. Show me the code. —— Linus Torvalds',
  dest: 'dist',
  port: 8888,
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],

    // 设置主题颜色（Chrome, Firefox OS and Opera）
    [
      'meta',
      {
        name: 'theme-color',
        content: '#6666ff',
      },
    ],

    // 设置Windows固定在开始屏幕的图标及背景颜色
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/adaptation/favicon-508x508.png',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#6666ff',
      },
    ],

    // https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
    // 设置Web应用程序是否以全屏模式运行
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    // 设置Web应用程序状态栏的样式（default, black, and black-translucent）
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    ],

    //浏览器分享 https://juejin.cn/post/6977635841262747662
    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Yokefellow',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Talk is cheap. Show me the code. —— Linus Torvalds',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://yokefellow.cn/images/avatar.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://yokefellow.cn/',
      },
    ],

    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/adaptation/apple-icon-57x57.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/adaptation/apple-icon-60x60.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/adaptation/apple-icon-72x72.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/adaptation/apple-icon-76x76.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/adaptation/apple-icon-114x114.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/adaptation/apple-icon-120x120.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/adaptation/apple-icon-144x144.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/adaptation/apple-icon-152x152.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/adaptation/apple-icon-180x180.png',
      },
    ],

    // Web应用程序清单
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
    /* KaTeX CSS CDN*/
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css',
      },
    ],

    // https://codepen.io/stevenlei/pen/KKNBRRJ
    [
      'script',
      {},
      `
        window.onload = () => {
         typingDescription();
         ['popstate'].forEach((item,index) => {
            window.addEventListener(item, typingDescription);
          })
        }
        function typingDescription() {
          const description = document.querySelector(".home-blog .hero div .description");
          if(description && description.textContent) {
            description.innerHTML = description.textContent
            .trim()
            .replace(/\\S/g, "<span>$&</span>")
            .replace(/\\s/g, "<span>&nbsp;</span>");

            let delay = 0.4;
            document.querySelectorAll(".home-blog .hero div .description span").forEach((span, index) => {
              delay += 0.1;
              if (span.textContent.match(/^\\s*$/)) delay += 0.3;
              span.style.setProperty("--delay", delay + "s");
            });

            description.addEventListener("animationend", (e) => {
              if (e.target === document.querySelector(".home-blog .hero div .description span:last-child")) {
                description.classList.add("ended");
              }
            });
          }
        }
       `,
    ],
    /* Google AdSense: https://www.google.cn/adsense/start/ */
    [
      'script',
      {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4483317960568642',
        crossorigin: 'anonymous',
      },
    ],

    /* Google Search Console: https://search.google.com/search-console/about */
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'NuVLZqGYvyyRYJs184x7MxYBNVI6iDCnjHHkvCI4kQs',
      },
    ],

    /* 百度搜索资源平台HTML标签验证: https://ziyuan.baidu.com/ */
    ['meta', { name: 'baidu-site-verification', content: 'code-yaZ2ZDphaI' }],

    // https://stackoverflow.com/questions/62563531/how-can-i-add-google-analytics-to-my-vuepress-website-in-accordance-with-gdpr
    [
      'script',
      {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GoogleAnalyticsID}`,
      },
    ],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.GoogleAnalyticsID}');
      `,
    ],

    // https://clarity.microsoft.com/
    [
      'script',
      {},
      `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${process.env.MicrosoftClarityID}");`,
    ],
  ],

  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'fa-solid fa-house',
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'fa-solid fa-clock',
      },
      {
        text: '文档',
        icon: 'fa-solid fa-file-lines',
        items: [
          {
            text: 'Docs',
            items: [
              { text: 'A', link: '/docs/A/' },
              { text: 'B', link: '/docs/B/' },
            ],
          },
          {
            text: 'Docx',
            items: [
              { text: 'AX', link: '/docs/AX/' },
              { text: 'BX', link: '/docs/BX/' },
            ],
          },
        ],
      },
      {
        text: '工具',
        link: '/tools/',
        icon: 'fa-solid fa-screwdriver-wrench',
      },
      {
        text: '关于',
        link: '/about/',
        icon: 'fa-solid fa-address-card',
      },
      {
        text: '交流',
        icon: 'fa-solid fa-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/yokefellow',
            icon: 'reco-github',
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/409433399369623',
            icon: 'reco-juejin',
          },
          {
            text: '知乎',
            link: 'https://www.zhihu.com/people/yokefellows',
            icon: 'reco-zhihu',
          },
          {
            text: '豆瓣',
            link: 'https://www.douban.com/people/191034217',
            icon: 'reco-douban',
          },
          {
            text: '哔哩哔哩',
            link: 'https://space.bilibili.com/305911601/dynamic',
            icon: 'reco-bilibili',
          },
        ],
      },
    ],
    sidebar: {
      '/docs/A/': [
        {
          title: 'A-1',
          collapsable: true,
          children: ['', 'A-1-1', 'A-1-2', 'A-1-3'],
        },
        {
          title: 'A-2',
          collapsable: true,
          children: ['A-2-1', 'A-2-2'],
        },
        {
          title: 'A-3',
          collapsable: false,
          children: ['A-3-1'],
        },
      ],
      '/docs/B/': [
        {
          title: 'B',
          collapsable: true,
          children: ['', 'B-1', 'B-2', 'B-3'],
        },
      ],
      '/docs/AX/': [
        {
          title: 'AX',
          collapsable: true,
          children: ['', 'AX-1', 'AX-2', 'AX-3'],
        },
      ],
      '/docs/BX/': [
        {
          title: 'BX',
          collapsable: true,
          children: ['', 'BX-1', 'BX-2', 'BX-3'],
        },
      ],
    },
    subSidebar: 'auto',
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '目录',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    // 1.6.10废弃 codeTheme: 'tomorrow',
    //codeTheme: 'tomorrow',
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com',
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar:
          'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    locales: {
      '/': {
        recoLocales: {
          pagation: {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转到',
          },
        },
      },
    },
    author: 'Yokefellow🎓',
    authorAvatar: '/images/avatar.png',
    logo: '/images/avatar.png',

    search: true,
    searchMaxSuggestions: 10,

    // https://developer.aliyun.com/article/898797
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>',
    //   appId: '<APP_ID>',
    // },

    lastUpdated: '上次更新',

    /* 备案 */
    record: '浙ICP备2021001613号',
    recordLink: 'https://beian.miit.gov.cn',
    cyberSecurityRecord: '浙公网安备 33018502002149号',
    cyberSecurityLink:
      'https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33018502002149',

    startYear: '2017',
    // 评论插件(Vssue)设置
    vssueConfig: {
      platform: process.env.Platform,
      owner: process.env.Owner,
      repo: process.env.Repo,
      clientId: process.env.ClientID,
      clientSecret: process.env.ClientSecret,
    },

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'yokefellow/yokefellow.github.io',
    // 假如文档不是放在仓库的根目录下
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下
    docsBranch: 'gh-pages-source',
    editLinks: true,
    editLinkText: '兼听则明，偏信则暗。 —— 汉·王符《潜夫论·明暗》',
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      // 使用更多的 markdown-it 插件!
      // https://www.npmjs.com/package/markdown-it-katex
      md.use(require('markdown-it-katex'))
      // https://github.com/gmunguia/markdown-it-plantuml
      md.use(require('markdown-it-plantuml'))
    },
  },

  // https://www.jianshu.com/p/27d82d98a041
  // 修改vuepress内部的Webpack配置 https://juejin.cn/post/6850418120302493704
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, './public/images'),
      },
    },
  },
  // https://cli.vuejs.org/zh/guide/webpack.html
  // https://juejin.cn/post/6947851867422621733
  chainWebpack: (config) => {
    config.when(process.env.NODE_ENV.trim() === 'production', (config) => {
      config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif)$/)
        .use('url-loader')
        .options({
          limit: 10000,
          name: 'images/[name].[ext]',
        })
        .end()
    })
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
    [
      // https://github.com/moefyit/vuepress-plugin-dynamic-title
      'dynamic-title',
      {
        showText: '(/≧▽≦/)咦！又好了！',
        hideText: '(●—●)喔哟，崩溃啦！',
        recoverTime: 2000,
      },
    ],
    [
      // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // https://momentjs.com
          const moment = require('moment')
          moment.locale(lang)
          // https://www.w3.org/TR/NOTE-datetime
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        },
      },
    ],

    // https://www.npmjs.com/package/vuepress-plugin-reading-progress
    ['reading-progress', {}],
    // https://github.com/moefyit/vuepress-plugin-meting
    [
      'meting',
      {
        meting: {
          server: 'netease',
          type: 'playlist',
          mid: '3147691749',
        },
        // https://aplayer.js.org/#/zh-Hans/
        aplayer: {
          fixed: true,
          order: 'random',
          autoplay: false,
        },
        mobile: {
          cover: false,
          lc: false,
        },
        defaultCover: '/images/avatar.png',
      },
    ],

    // https://github.com/francoischalifour/medium-zoom
    [
      '@vuepress/medium-zoom',
      {
        selector: '.theme-reco-content img:not(.zoom-unable)',
        options: {
          margin: 16,
        },
      },
    ],
    // https://github.com/ulivz/vuepress-plugin-flowchart
    'flowchart',

    // https://vuepress-plugin-mermaidjs.efrane.com/
    // https://mermaid-js.github.io/mermaid/#/Setup?id=configuration
    // https://mermaidjs.github.io/mermaid-live-editor/
    // [
    //   'mermaidjs',
    //   {
    //     gantt: { barHeight: 40 },
    //     theme: 'forest',
    //   },
    // ],

    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    [
      'sitemap',
      {
        hostname: 'https://yokefellow.cn',
      },
    ],

    // https://analytics.google.com/
    // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-google-analytics.html
    // 自 2023 年 7 月 1 日起，Universal Analytics 媒体资源将停止收集数据。建议您改为创建 Google Analytics（分析）4 媒体资源。
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     ga: process.env.GoogleAnalyticsID,
    //   },
    // ],

    // https://www.npmjs.com/package/vuepress-plugin-baidu-tongji
    [
      'vuepress-plugin-baidu-tongji',
      {
        hm: process.env.BaiduAnalyticsID,
      },
    ],
    [
      // https://www.npmjs.com/package/vuepress-plugin-robots
      'robots',
      {
        host: 'https://yokefellow.cn',

        disallowAll: false,

        allowAll: true,

        sitemap: '/sitemap.xml',

        policies: [
          {
            userAgent: '*',
            disallow: [],
            allow: [],
          },
        ],
      },
    ],

    // https://www.npmjs.com/package/@mr-hope/vuepress-plugin-copy-code
    [
      '@mr-hope/vuepress-plugin-copy-code',
      {
        selector: '.theme-reco-content div[class*="language-"] pre',
        showInMobile: true,
      },
    ],

    // https://vuepress-theme-hope.github.io/v1/md-enhance/zh/guide/
    [
      'md-enhance',
      {
        lineNumbers: false,
        imageFix: false,
        mermaid: true,
        chart: true,
        echarts: true,
      },
    ],
    // https://www.npmjs.com/package/vuepress-plugin-copyright
    [
      'copyright',
      {
        minLength: 50,
        authorName: 'Yokefellow',
      },
    ],

    // https://sns.goyfe.com/guide/#usage
    [
      `social-share`,
      {
        networks: [`wechat`, 'qq', `weibo`, `douban`, `ememail`],
        isPlain: true,
        fallbackImage: '/images/avatar.png',
      },
    ],
  ],
}
