<template><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>
<p><strong>Trad</strong> 是在<a href="http:www.react.org">React</a>之上的一层包装，通过引入修饰符，尾调用等特性，模拟<RouterLink to="/">kotlin</RouterLink> <RouterLink to="/">swift</RouterLink>的声明式语法，增强函数式编程，简化页面描述。</p>
<h2 id="什么是trad" tabindex="-1"><a class="header-anchor" href="#什么是trad" aria-hidden="true">#</a> 什么是Trad?</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">CardTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  Card<span class="token punctuation">{</span>
      Card<span class="token punctuation">{</span>
          
      <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span>
      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">)</span>
      Card<span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 这里会被 Vue 编译 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- 引入代码 -->
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="highlight-lines"></div><div class="line-numbers" aria-hidden="true"></div></div><!-- vue模板语法 -->
<p>一加一等于： {{ 1 + 1 }}
这是默认主题内置的 <code v-pre>&lt;Badge /&gt;</code> 组件 <Badge text="演示" vertical="middle"  /></p>
<CodeGroup>
  <CodeGroupItem title="YARN">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个 details 标签</p>
</details>
<p><button @click="count++">{{count}}</button></p>
</template>

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