export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroText": "Trad",
    "heroImage": "/images/logo.png",
    "actions": [
      {
        "text": "快速上手",
        "link": "/guide",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "简洁至上",
        "details": "以精简的函数式以及强大的修饰符嵌套描述页面。"
      },
      {
        "title": "React驱动",
        "details": "核心基于React，极低的迁移成本。"
      },
      {
        "title": "兼容",
        "details": "通过内置的方法，React 组件库可以兼容Trad。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "体验",
      "slug": "体验",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
