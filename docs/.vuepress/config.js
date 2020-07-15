const themeConfig = require('./config/theme/')

module.exports = {
  title: "Yokefellow | 风中尘埃",
  description: 'Tallk is cheap. Show me the code.——Linus Torvalds',
  dest: 'dist',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],

    ['link', { rel: 'icon', type:'image/x-icon', sizes:'16x16', href: '/images/favicon-16x16.ico' }],
    ['link', { rel: 'icon', type:'image/x-icon', sizes:'32x32', href: '/images/favicon-32x32.ico' }],
    ['link', { rel: 'icon', type:'image/x-icon', sizes:'48x48', href: '/images/favicon-48x48.ico' }],
    ['link', { rel: 'icon', type:'image/x-icon', sizes:'64x64', href: '/images/favicon-64x64.ico' }],
    ['link', { rel: 'icon', type:'image/x-icon', sizes:'96x96', href: '/images/favicon-96x96.ico' }],
    ['link', { rel: 'icon', type:'image/x-icon', sizes:'128x128', href: '/images/favicon-128x128.ico' }],
    
     /* Apple */
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes:'57x57', href: '/images/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes:'60x60', href: '/images/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes:'72x72', href: '/images/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes:'76x76', href: '/images/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes:'114x114', href: '/images/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes:'120x120', href: '/images/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes:'144x144', href: '/images/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes:'152x152', href: '/images/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes:'180x180', href: '/images/apple-icon-180x180.png' }],
  
    /* Android */
    ['link', { rel: 'icon', type:'image/png', sizes:'192x192', href: '/images/android-icon-192x192.png' }],

    ['link', { rel: 'mask-icon', href: '/images/favicon.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/images/favicon-508x508.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],

    /* KaTex CSS */
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
    
    /* Google AdSense */
    ['script',{ 'data-ad-client': 'ca-pub-1130344085482597', async: 'async', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'}],
    
    /* Google Search Console */
    ['meta', { name: 'google-site-verification', content: 'iSjPDbJMyZy56rE4_RXomTvvzBmPjaJIwKf5gtB8YlQ' }],
    
    /* 百度搜索资源平台HTML标签验证 */
    ['meta', { name: 'baidu-site-verification', content: '7avnmfX31j' }],

  ],
  theme: 'reco',
  themeConfig,
 
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      /* 使用更多的 markdown-it 插件! */
      md.use(require('markdown-it-katex'))
    }
  },
  plugins: [
    '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
    },
    '@vuepress/medium-zoom', 
    'flowchart',
    ['sitemap', {
      hostname: 'https://yokefellow.github.io'
    }],
  ] ,
}  