---
editLink: false
---
# 介绍
**Trad** 是在[React](http:www.react.org)之上的一层包装，通过引入修饰符，尾调用等特性，模拟[kotlin](/) [swift](/)的声明式语法，增强函数式编程，简化页面描述。
## 什么是Trad?

```js{1}:no-line-numbers

function CardTest(){
  Card{
      Card{
          
      }.fontSize(23)
      Button('submit')
      Card{
      }
  }
}
```
```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```
<!-- 引入代码 -->
@[code{1-1} js{1}](../code.js)

<!-- vue模板语法 -->
一加一等于： {{ 1 + 1 }}
这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" vertical="middle"  />

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::


<button @click="count++">{{count}}</button>

<script setup>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)
const msg = 'Markdown 中的 Vue'
const count = ref(0)
</script>

<style>
.red-div {
  color: red;
}
</style>