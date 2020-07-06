module.exports = {
    type: 'blog',
    author: 'Yokefellow',
    authorAvatar: '/avatar.png',
    logo: '/avatar.png',

    /* 搜索设置 */
    search: true,
    searchMaxSuggestions: 10,

    /* 博客配置 */
    blogConfig: {
        category: {
          location: 2,
          text: 'Category' 
        },
        tag: {
          location: 3, 
          text: 'Tag'
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
      platform: 'github',
      owner: 'yokefellow',
      repo: 'yokefellow.github.io',
      clientId: 'f279bfadb36a00e24888',
      clientSecret: '132b874efa1d475f43941c4bd0d6299d2e10218e',
    },

    /* 假定是 GitHub. 同时也可以是一个完整的 GitLab URL */
    repo: 'yokefellow/yokefellow.github.io',
    /* 假如文档不是放在仓库的根目录下 */
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    
    /* 最后更新时间 */
    lastUpdated: 'Last Updated',

    mode: 'light',
    codeTheme: 'tomorrow',

}