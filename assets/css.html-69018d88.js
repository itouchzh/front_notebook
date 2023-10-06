import{_ as n,r as s,o as a,c as t,b as e,d as i,a as c,e as d}from"./app-38101b12.js";const r={},o=d(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><h2 id="元素隐藏" tabindex="-1"><a class="header-anchor" href="#元素隐藏" aria-hidden="true">#</a> 元素隐藏</h2><h2 id="浏览器的渲染机制" tabindex="-1"><a class="header-anchor" href="#浏览器的渲染机制" aria-hidden="true">#</a> 浏览器的渲染机制</h2><p>浏览器渲染机制主要包括以下几个步骤：</p><ol><li>解析 HTML：浏览器通过解析 HTML 文件构建出 DOM 树，将每个 HTML 元素转换成节点，并建立它们之间的关系。同时，浏览器还会通过解析 CSS 文件生成 CSSOM 树，将 CSS 样式转换成对应的节点并与 DOM 树进行关联。</li><li>构建渲染树：浏览器根据 DOM 树和 CSSOM 树构建渲染树（也称为合成树），渲染树中的每个节点都包含了与其对应的样式信息。</li><li>布局：浏览器根据渲染树中每个节点的大小、位置等信息，计算出它们在屏幕上的实际位置，并将它们按照正确的顺序排列。</li><li>绘制：浏览器遍历渲染树，并将每个节点绘制到屏幕上。在这个过程中，浏览器会根据节点的样式信息生成对应的绘制指令，将这些指令交给 GPU（图形处理器） 进行加速渲染，最终将渲染结果呈现在屏幕上。</li><li>重排和重绘：当浏览器需要更新页面内容时，它会重新执行上述步骤，因为布局和绘制的过程是比较耗时的，所以浏览器会尽可能的避免重排和重绘，通过一些优化技巧，如合并重绘区域、使用 GPU 加速等来提高页面的渲染性能。</li></ol><h2 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>在浮动元素的父元素中：
.parent:after {
  content: &quot;&quot;;
  display: block;
  height: 0;
  clear: both;
}
2. 在浮动元素的后面再添加一个空元素：使用clear:both属性来清除浮动
&lt;div style=&quot;clear:both;&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h2><p><code>BFC</code>块级格式化上下文，实际就是页面一个独立的容器，里面的子元素不影响外面的元素</p><p>作用：</p><ul><li>解决高度塌陷</li><li>清除浮动</li></ul><p>如何触发BFC：</p><ul><li>浮动元素：<code>float</code>值为 <code>left</code>、<code>right</code></li><li><code>overflow</code>的值不为 <code>visible</code>,可以为 <code>auto</code>、<code>scroll</code>、<code>hidden</code></li><li><code>display</code>的值为 <code>inline-block</code>、<code>inltable-cell</code>、<code>table-caption</code>、<code>table</code>、<code>inline-table</code>、<code>flex</code>、<code>inline-flex</code>、<code>grid</code>、<code>inline-grid</code></li><li><code>position</code>的值为 <code>absolute</code>或 <code>fixed</code></li></ul><h2 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局" aria-hidden="true">#</a> Flex布局</h2><p>flex布局在父元素上常用属性：</p><ol><li><code>flex-direction</code>: 主轴方向</li><li><code>flex-wrap</code>： 是否换行</li><li><code>flex-flow</code>： flex-direction 和 flex-wrap 的简写形式</li><li><code>justify-content</code>： 主轴排列方式</li><li><code>align-items</code>： 交叉轴的排列方式</li><li><code>align-content</code>： 多根轴线对其方式, 交叉轴 子元素上常用属性：</li><li><code>order</code> 排列顺序，顺序越小越靠前，默认值为0</li><li><code>flex-basis</code>: 项目占据的主轴空间</li><li><code>flex-grow</code>： 放大比例</li><li><code>flex-shrink</code>：缩小比例</li><li><code>flex：flex-grow,flex-shrink,flex-basis</code>的简称</li><li><code>align-self</code>：单个项目与其他项目具有不一样的对齐方式</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>flex-direction:
.container {
    flex-direction: row | row-reverse | column | column-reverse;
}
从左到右 | 从右到左 | 从下到上 | 从下到上
.container{
    flex-warp: warp | nowarp | warp-reverse;
}
换行 | 不换行 | 换行同时将行序倒序（第一行作为第二行， 第二行作为第一行）
.container{
    flex-flow: &lt;flex-direction&gt; &lt;flex-wrap&gt;;
}
.container{
    justify-content: flex-start | center | flex-end | space-between | space-around | 
}
flex-start: 左对齐 | center: 居中对齐 | flex-end: 右对齐 | 
space-between: 均匀对齐, 首个元素放在起点，末尾元素置于终点|--|--|
space-around: 均匀对齐， 每个元素周围分配相同的空间 -|--|--|-
space-evenly: 均匀对齐， 每个元素之间的间隔相等 -|-|-
.container{
    align-items:flex-start | flex-end | center | baseline | stretch
}
flex-start: 交叉轴顶点对齐 | flex-end: 交叉轴终点对齐 | center | 交叉轴中点对齐 | baseline: 文字基线对齐 | stretch: 高度

.container{
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
含义如上
---------------------------------------------------
子元素属性
.item {
    order: &lt;integer&gt;;
}
排序顺序，越小越靠前
.item {
    flex-basis: &lt;length&gt; | auto;
}
默认auto: 即元素本来大小
.item {
    flex-grow: &lt;number&gt;;
}
放大比例，数值越大占比越大
.item {
    flex-shrink: &lt;number&gt;;
}
缩小比例，空间不足时候，数值越大被缩小的比例越大，0为不缩小
.item{
    flex: none | [ &lt;&#39;flex-grow&#39;&gt; &lt;&#39;flex-shrink&#39;&gt;? || &lt;&#39;flex-basis&#39;&gt; ]
}
.item {
     align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
含义与上面相同，只对单个子元素有效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="margin负值" tabindex="-1"><a class="header-anchor" href="#margin负值" aria-hidden="true">#</a> margin负值</h2><p><code>top</code> 和 <code>left</code>是自身移动，<code>right</code>和 <code>bottom</code>是相邻元素移动</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>margin-top 负值, 元素自身向上移动
margin-right 负值, 右边元素向左移动
margin-bottom 负值 ,下边元素向上移动
margin-left 负值, 元素自身会向左移动

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css选择器优先级" tabindex="-1"><a class="header-anchor" href="#css选择器优先级" aria-hidden="true">#</a> css选择器优先级</h2><ul><li>!important</li><li>行内样式 style</li><li>id选择器 权重1000</li><li>类、伪类、属性 选择器 权重0010</li><li>标签选择器 权重0001</li><li>通配符选择器，子类选择器 权重0000</li><li>继承样式 无权重</li></ul><h2 id="css盒子模型" tabindex="-1"><a class="header-anchor" href="#css盒子模型" aria-hidden="true">#</a> css盒子模型</h2><p>css盒子模型包含标准盒子模型和IE盒子模型，</p><ul><li>标准盒子由 <code>content</code> <code>padding</code> <code>border</code> <code>margin</code>组成 盒子的宽高包括 <code>content</code> <code>padding</code> <code>border</code>,不包括 <code>margin</code></li><li>IE盒子模型 <code>content(padding\\border)</code> <code>margin</code><code>content 包含了 padding 和 border</code> 盒子的宽高就是设置的宽高</li><li>二者可以通过 <code>box-sizing</code> 来切换</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>通过box-sizing: border-box\\content-box进行切换
{
    box-sizing: border-box; // IE盒子模型
    box-sizing: content-box; // 标准盒子模型
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css继承" tabindex="-1"><a class="header-anchor" href="#css继承" aria-hidden="true">#</a> css继承</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>可以被继承的属性:字体系列\\文本系列\\visibility\\表格布局属性等
不能被继承的属性:盒子相关\\背景相关\\display\\定位属性\\轮廓属性 outline-style
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css隐藏元素" tabindex="-1"><a class="header-anchor" href="#css隐藏元素" aria-hidden="true">#</a> css隐藏元素</h2><ul><li>opacity:0 设置元素透明度为0，该元素在页面上仍然占有位置，绑定事件可以触发。</li><li>display:none 从页面移除该元素，不会在页面占有位置，绑定事件无法触发。</li><li>visible:hiddle 仍然在页面中占有位置，但是元素不可见，绑定的事件也无法触发。 其他方法： 通过绝对定位，将元素移出屏幕 元素自身带有的hidden属性，可以实现元素的隐藏，其原理是display:none</li></ul><p><code>display:none</code>和 <code>visibility:hidden</code>都可以隐藏元素，但它们之间有以下区别：</p><ol><li><code>display:none</code>会将元素从文档流中完全移除，即不会占据空间，而 <code>visibility:hidden</code>则只是将元素隐藏起来，但元素仍然占据空间。</li><li>当元素的 display 属性为 none 时，该元素不会被渲染，不会占据空间，也不会响应任何事件，相当于该元素不存在；而当元素的 visibility 属性为 hidden 时，该元素虽然被隐藏了，但它仍然存在于文档中，占据空间，也会响应事件。</li><li>修改 <code>display</code>属性会触发文档的重新布局 <code>（reflow）</code>，因为它会影响文档流中的元素位置；而修改 <code>visibility</code>属性只会触发文档的 <code>重绘（repaint）</code>，因为它只影响元素的可见性，不影响元素的位置。</li></ol><p>因此，如果想要隐藏元素但仍然占据空间，可以使用 <code>visibility:hidden</code>，如果想要完全移除元素并释放空间，可以使用 <code>display:none</code>。</p><p>关于 <code>display: none</code>、<code>visibility: hidden</code>、<code>opacity: 0</code>的区别，如下表所示：</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">display: none</th><th style="text-align:left;">visibility: hidden</th><th>opacity: 0</th></tr></thead><tbody><tr><td style="text-align:left;">页面中</td><td style="text-align:left;">不存在</td><td style="text-align:left;">存在</td><td>存在</td></tr><tr><td style="text-align:left;">重排</td><td style="text-align:left;">会</td><td style="text-align:left;">不会</td><td>不会</td></tr><tr><td style="text-align:left;">重绘</td><td style="text-align:left;">会</td><td style="text-align:left;">会</td><td>不一定</td></tr><tr><td style="text-align:left;">自身绑定事件</td><td style="text-align:left;">不触发</td><td style="text-align:left;">不触发</td><td>可触发</td></tr><tr><td style="text-align:left;">transition</td><td style="text-align:left;">不支持</td><td style="text-align:left;">支持</td><td>支持</td></tr><tr><td style="text-align:left;">子元素可复原</td><td style="text-align:left;">不能</td><td style="text-align:left;">能</td><td>不能</td></tr><tr><td style="text-align:left;">被遮挡的元素可触发事件</td><td style="text-align:left;">能</td><td style="text-align:left;">能</td><td>不能</td></tr></tbody></table><h2 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h2><ul><li>父元素display:flex属性，子元素：margin:auto*/</li><li>父元素display:flex，justify-content:center;align-items:center */</li><li>通过absolute 配合margin负值*/</li><li>通过absolute 配合transform translate */</li><li>absolute 配合 top、right、bottom、left = 0, and margin:auto</li><li>gird layout</li></ul>`,37),v={href:"https://github.com/itouchzh/Front-end-interview-questions/blob/master/frontend/html/css/%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.html",target:"_blank",rel:"noopener noreferrer"},u=d(`<h2 id="画各种形状" tabindex="-1"><a class="header-anchor" href="#画各种形状" aria-hidden="true">#</a> 画各种形状</h2><p>通过控制 <code>border</code>属性来进行绘制</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.triangle {
            border: 50px solid pink;
            /* border-color: #96ceb4 #ffeead #d9534f #ffad60; */
            border-color: transparent transparent transparent #ffad60;
            }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> Grid</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> .warpper {
        display: grid;
        /* 主轴 */
        grid-template-columns: repeat(4, 1fr);
        /* 交叉轴 */
        grid-template-rows: 100px 100px;
        /* 交叉轴空隙 */
        row-gap: 20px;
        /* 主轴空隙 */
        column-gap: 50px;
        /* gap: row-gap 和 column-gap 的简写 */
        gap: 20px 50px;

        /* 排布顺序，默认从上到下，从左到右 */
        /* column: 先从上到下，再从左到右 */
        grid-auto-flow: column;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-module" tabindex="-1"><a class="header-anchor" href="#css-module" aria-hidden="true">#</a> CSS Module</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>react 中写样式使用css module ,fang&#39;zhi
使用方法：
import styles from &quot;./styles.css&quot;;
使用：
&lt;div class=&quot;styles.tilte&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css选择器优先级-1" tabindex="-1"><a class="header-anchor" href="#css选择器优先级-1" aria-hidden="true">#</a> css选择器优先级</h2><p>选择器优先级：</p><ul><li>!important 权值：无穷大</li><li>style行内样式 权值：1000</li><li>id选择器 权值： 0100</li><li>类、伪类选择器、属性选择器 权值： 0010</li><li>标签选择器 0001</li><li>子类选择器 通配符选择器 权值 0000</li></ul><h2 id="可继承和不可继承的属性" tabindex="-1"><a class="header-anchor" href="#可继承和不可继承的属性" aria-hidden="true">#</a> 可继承和不可继承的属性</h2><p>不可继承：</p><ul><li>display</li><li>盒子属性</li><li>背景属性</li><li>定位属性</li></ul><p>可以继承</p><ul><li>文字属性</li><li>文本系列属性： line-height,color</li><li>visibility</li><li>鼠标属性 cursor</li></ul><h2 id="行内元素和块级元素" tabindex="-1"><a class="header-anchor" href="#行内元素和块级元素" aria-hidden="true">#</a> 行内元素和块级元素</h2><p>行内元素： 不能自动换行，设置宽高无效，可以设置水平方向的 <code>padding</code>和 <code>margin</code>，不能设置垂直方向的 <code>padding</code>和 <code>margin</code> 块级元素： 独占一行，可以设置宽高，<code>margin</code>，<code>padding</code></p><h2 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h2><p>定位方式：</p><ul><li>static 默认方式</li><li>relative 相对定位 相对于自身的定位方式，不会脱离文档流</li><li>absolute 绝对定位 相对于非static进行定位，会脱离文档流</li><li>fix 固定定位 相对于屏幕视口位置进行定位，会脱离文档流</li><li>sticky 粘性定位 相对于最近的滚动祖先进行定位，相当于relative+fix 会脱离文档流</li></ul><h2 id="z-index-在什么情况下会失效" tabindex="-1"><a class="header-anchor" href="#z-index-在什么情况下会失效" aria-hidden="true">#</a> z-index 在什么情况下会失效</h2><p>可以设置z-index: relative, absolute, fixed</p><ul><li>父元素的position 为relative时， 子元素的z-index失效</li><li>子元素没有设置position 为非static时候， z-index失效</li><li>元素设置了z-index的同时还设置了float，z-index失效</li></ul>`,23);function b(m,h){const l=s("ExternalLinkIcon");return a(),t("div",null,[o,e("p",null,[i("代码： "),e("a",v,[i("水平垂直居中"),c(l)])]),u])}const g=n(r,[["render",b],["__file","css.html.vue"]]);export{g as default};
