const themeConfig = require('./config/theme/')

module.exports = {
  title: "Yokefellow | 风中尘埃",
  description: 'Tallk is cheap. Show me the code.——Linus Torvalds',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
 
  markdown: {
    lineNumbers: true
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
  ] ,
}  