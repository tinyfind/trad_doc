// https://v2.vuepress.vuejs.org/zh/reference/default-theme/
const {
  defaultTheme
} = require('@vuepress/theme-default')
module.exports = {
  lang: 'zh-CN',
  title: 'Trad 文档',
  description: '使用函数式声明界面',
  base: '/',
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'tinyfind/trad',
    repo: 'https://github.com/tinyfind/react_functional_syntax',
    // 顶部导航
    navbar: [{
      text: '指南',
      link: '/guide',
    }, ],
    // 侧边栏
    sidebar: [
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          '/guide'
        ],
      },
    ],
  })
}