export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "介绍",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "什么是Trad?",
      "slug": "什么是trad",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "guide/README.md"
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
