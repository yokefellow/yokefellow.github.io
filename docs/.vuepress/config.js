const themeConfig = require('./config/theme/')

module.exports = {
  title: "Yokefellow | 风中尘埃",
  description: 'Tallk is cheap. Show me the code.——Linus Torvalds',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
    
    /* Google AdSense */
    ['script',{ 'data-ad-client': 'ca-pub-1130344085482597', async: 'async', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'}],
    
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