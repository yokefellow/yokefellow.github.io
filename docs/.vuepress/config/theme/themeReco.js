module.exports = {
    type: 'blog',
    author: 'Yokefellow',
    authorAvatar: '/images/avatar.png',
    logo: '/images/avatar.png',

    /* 修改默认语言配置 */
    locales: {
      '/': {
        recoLocales: {
          pagation: {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转至'
          }
        },
      }
    },

    /* 搜索设置 */
    search: true,
    searchMaxSuggestions: 10,

    /* 博客配置 */
    blogConfig: {
        category: {
          location: 2,
          text: '目录' 
        },
        tag: {
          location: 3, 
          text: '标签'
        }
    },

    /* 备案 */
    record: 'ICP 备案文案',
    recordLink: 'ICP 备案指向链接',
    cyberSecurityRecord: '公安部备案文案',
    cyberSecurityLink: '公安部备案指向链接',

    /* 项目开始时间，只填写年份 */
    startYear: '2017',

    /* 评论插件(Vssue)设置 */
    vssueConfig: {
      platform:  'github',
      owner: 'yokefellow',
      repo: 'yokefellow.github.io',
      clientId:  process.env.ClientID,
      clientSecret: process.env.ClientSecret,
    },

    /* 假定是 GitHub. 同时也可以是一个完整的 GitLab URL */
    repo: 'yokefellow/yokefellow.github.io',
    /* 假如文档不是放在仓库的根目录下 */
    docsDir: 'docs',
    /* 假如文档放在一个特定的分支下 */
    docsBranch: 'gh-pages-source',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    
    /* 最后更新时间 */
    lastUpdated: '上次更新',

    /* auto 跟随系统，dark 暗色模式，light 亮色模式 */
    mode: 'auto',
    codeTheme: 'tomorrow'
}