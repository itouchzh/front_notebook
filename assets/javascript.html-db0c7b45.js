import{_ as e,o as n,c as i,e as l}from"./app-38101b12.js";const d={},s=l(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h2 id="isnan" tabindex="-1"><a class="header-anchor" href="#isnan" aria-hidden="true">#</a> isNan()</h2><p><code>isNan()</code> 和 <code>Number.isNan()</code>的区别： <code>isNan()</code>会先使用<code>Number()</code>将非数字的参数进行转换，其次才会判断是否<code>NaN</code><code>Number.isNan()</code>直接进行判断，如果参数不是数字，直接返回<code>false</code></p><h2 id="函数中this" tabindex="-1"><a class="header-anchor" href="#函数中this" aria-hidden="true">#</a> 函数中this</h2><ul><li>普通函数的<code>this</code>，如果以函数形式调用：例如：<code>a()</code>，那么就指向<code>window</code> 如果以方法的形式调用，例如<code>b.a()</code>那么就是谁调用就指向谁，<code>b</code>调用的就指向<code>b</code></li><li>箭头函数的<code>this</code>，与函数调用形式无关，指向上层的<code>this</code>，上层的<code>this</code>是什么他的<code>this</code>就是什么</li></ul><h2 id="原型与原型链" tabindex="-1"><a class="header-anchor" href="#原型与原型链" aria-hidden="true">#</a> 原型与原型链</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>student.__proto__ === Student.prototype
通过hasOwnProperty()可以查看是不是对象本身的属性或者方法
例如：student.hasOwnProperty(&#39;name&#39;)的含义为student对象有没有name属性或者方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 原型和原型链
//     每个函数都有prototype，称之为原型，也叫原型对象。每个对象都有__proto__属性，这个属性指向他自己的原型对象
// 同时原型对象也是对象，所以也有__proto__属性，这样一层一层形成的链式结构称为原型链。
console.log(Object)
console.log(Object.__proto__) // ƒ () { [native code] }
console.log(Object.__proto__.prototype) // nudefined
console.log(Object.prototype.__proto__) // null
console.log(Object.prototype.constructor === Object); // true
console.log(Object.prototype) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(Function)
console.log(Function.__proto__) // ƒ () { [native code] }
console.log(Function.__proto__.prototype) //undefined
console.log(Function.prototype.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(Function.prototype) // ƒ () { [native code] }

console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Function.prototype === Function.__proto__) // true

function Person(name) {
    this.name = name
}
const person = new Person(&#39;paul&#39;)
console.log(person.__proto__ === Person.prototype) // true 
console.log(person.__proto__.__proto__.__proto__); // null 一直查找到顶端为null
console.log(Person.__proto__ == Function.prototype) // true 
console.log(Person.prototype.__proto__ == Object.prototype) ; // true Person.prototype的原型为Object.prototype
console.log(Person.prototype.constructor == Person) // true 构造函数的 prototype.constructor 指向本身
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="深拷贝与浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝与浅拷贝" aria-hidden="true">#</a> 深拷贝与浅拷贝</h2><p>深拷贝拷贝的是值，而浅拷贝拷贝的是地址，通常情况下，对基本数据类型进行拷贝可以直接拷贝值，而拷贝复杂数据类型的时候，则需要深拷贝，否则改变拷贝的对象后，原始对象也会被改变，因为他们指向同一个地址</p><p>深拷贝的方法：</p><ul><li>函数实现</li><li><code>lodash</code> 中<code>deepClone</code></li><li><code>JSON.parse(JSON.stringfy())</code><code>JSON.parse(JSON.stringfy())</code>存在的问题：</li><li>不能拷贝函数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function deepCopy(ojb) {
  if (typeof obj !== &quot;object&quot; || obj == null) {
    return obj;
  }
  let res;
  if (obj instanceof Array) {
    res = [];
  } else {
    res = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepCopy(ojb[key]);
    }
  }
  return res;
}

实现浅拷贝的方法：
Object.assign()
数组的，slice()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="let、const、var" tabindex="-1"><a class="header-anchor" href="#let、const、var" aria-hidden="true">#</a> let、const、var</h2><ul><li><code>let</code>、<code>const</code>都有块级作用域，</li><li><code>var</code>定义的变量全局都可以访问，会挂载到<code>window</code>上</li><li><code>const</code>定义的是常量，不会被修改</li><li><code>var</code>会导致变量提升</li><li><code>let</code> <code>const</code> 定义的变量不可以重复定义，<code>let</code> 定义的变量可以赋值不同的数据类型</li></ul><h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 数组的解构赋值和对象的解构赋值
// 数组：
let [a, b] = [10, 20]
// 对象
let {name, age} = {
  name:&#39;paul&#39;,
  age:23
}
console.log(name, age) // &#39;paul&#39; 23
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防抖和节流" tabindex="-1"><a class="header-anchor" href="#防抖和节流" aria-hidden="true">#</a> 防抖和节流</h2><p>防抖： 隔一段时间以后再执行 节流： 一段时间内仅仅执行一次</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function debounce(fn, delay) {
    let t = null
    return function () {
        if (t !== null) {
            clearTimeout(t)
        }
        t = setTimeout(() =&gt; {
            fn.call(this)
        }, delay)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节流：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 节流
function throuth(fn, delay) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() =&gt; {
                fn.apply(this, args)
                timer = null
            }, delay)
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="call、apply、bind" tabindex="-1"><a class="header-anchor" href="#call、apply、bind" aria-hidden="true">#</a> call、apply、bind</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>call() 第一个参数为改变的this指向，第二个参数为传参
例如：call(obj, value1, value2)
apply(obj,[value1, value2])传参方式与call()不同
bind()传参和call()一模一样，但是不会立即执行函数，会把该函数作为返回结果返回回去
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h2><p>先同步后异步 先微任务后宏任务 微任务：<code>Promise.then</code> 宏任务：<code>setTimeout</code>, <code>setInterval</code>,<code>Ajax</code>，读取文件</p><p>顺序：同步-》nextTick-》异步=》setImmediate=》事件循环</p><h2 id="浏览器输入地址按下回车发生了什么" tabindex="-1"><a class="header-anchor" href="#浏览器输入地址按下回车发生了什么" aria-hidden="true">#</a> 浏览器输入地址按下回车发生了什么</h2><p>解析url，去DNS域名系统匹配真实IP，获取真实IP地址，建立连接（TCP三次握手），获取数据渲染页面，断开连接（四次挥手） 渲染页面时候，html生成dom树，css生成css结构体，计算布局信息，页面渲染</p><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2><ul><li>减少http请求</li><li>减少文件体积（代码压缩）</li><li>CDN</li><li>SSR服务端渲染</li><li>懒加载</li><li>分包</li></ul><h2 id="new的过程做了什么" tabindex="-1"><a class="header-anchor" href="#new的过程做了什么" aria-hidden="true">#</a> new的过程做了什么</h2><ol><li>创建空对象</li><li>设置原型链， 把空对象和勾走函数通过原型链进行连接</li><li>改变this指向 把构造函数的this绑定到新的空对象上</li><li>判断返回值 根据构造函数返回的类型进行判断，如果是简单类型直接返回，引 注意：构造函数的返回值为新创建的对象</li></ol><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><p>优点：可以保证数据的私有性，处理私有数据 缺点：会造成内存泄漏</p><h2 id="js对数据类的判别方式" tabindex="-1"><a class="header-anchor" href="#js对数据类的判别方式" aria-hidden="true">#</a> Js对数据类的判别方式</h2><p>基本数据类型：<code>Number</code>,<code>String</code>,<code>Boolean</code>,<code>Undefined</code>,<code>Null</code>,<code>Symbol</code>,<code>Bigint</code> 引用类型：<code>Object</code>,<code>Array</code>,<code>Function</code>等</p><ul><li>typeof() 只能判断基本数据类型</li><li>instanceof() 只能判断引用数据类型</li><li>constructor</li><li>Object.prototype.toString.call() 都可以</li></ul><p>typeof 操作符：typeof 操作符可以返回一个字符串，表示操作数的数据类型。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>typeof 42; // &quot;number&quot;
typeof &quot;Hello, world!&quot;; // &quot;string&quot;
typeof true; // &quot;boolean&quot;
typeof undefined; // &quot;undefined&quot;
typeof null; // &quot;object&quot;
typeof []; // &quot;object&quot;
typeof {}; // &quot;object&quot;
typeof function(){}; // &quot;function&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，typeof 对于数组和 null 的返回值是 &quot;object&quot;</p><p>instanceof 操作符：instanceof 操作符可以检测一个对象是否是某个构造函数的实例。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>javascript
[] instanceof Array; // true
{} instanceof Object; // true
new Date() instanceof Date; // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Object.prototype.toString.call() 方法：该方法返回一个字符串，表示调用它的对象的类型。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>javascript
Object.prototype.toString.call(42); // &quot;[object Number]&quot;
Object.prototype.toString.call(&quot;Hello, world!&quot;); // &quot;[object String]&quot;
Object.prototype.toString.call(true); // &quot;[object Boolean]&quot;
Object.prototype.toString.call(undefined); // &quot;[object Undefined]&quot;
Object.prototype.toString.call(null); // &quot;[object Null]&quot;
Object.prototype.toString.call([]); // &quot;[object Array]&quot;
Object.prototype.toString.call({}); // &quot;[object Object]&quot;
Object.prototype.toString.call(function(){}); // &quot;[object Function]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map和object" tabindex="-1"><a class="header-anchor" href="#map和object" aria-hidden="true">#</a> Map和Object</h2><p>ES6中Map和Object的区别，WeakMap()和WeakSet()的区别</p><p>ES6 中的 <code>Map</code> 和 <code>Object</code> 都是用来存储键值对的数据结构，但是它们有一些区别。</p><ol><li>键的类型：<code>Map</code> 的键可以是任意类型，包括基本类型和对象类型，而 <code>Object</code> 的键必须是字符串或者符号类型。</li><li>键值对的数量：<code>Map</code> 中键值对的数量可以通过 <code>size</code> 属性进行访问，而 <code>Object</code> 中的键值对数量只能通过手动计算或者遍历对象来获取。</li><li>键值对的顺序：<code>Map</code> 中的键值对保持插入顺序，即按照添加顺序排序，而 <code>Object</code> 中的键值对没有顺序保证。</li><li>迭代：<code>Map</code> 支持内置的迭代器，可以通过 <code>for...of</code> 循环遍历所有的键值对，而 <code>Object</code> 需要手动进行迭代或者使用 <code>Object</code> 的内置方法，例如 <code>Object.keys</code>、<code>Object.values</code>、<code>Object.entries</code> 等来获取键或者值。</li><li>性能：在大规模数据集的场景下，<code>Map</code> 的查找和插入操作比 <code>Object</code> 更快，尤其是在需要频繁增删数据时。</li></ol><h2 id="for-in-和for-of" tabindex="-1"><a class="header-anchor" href="#for-in-和for-of" aria-hidden="true">#</a> for in 和for of</h2><p><code>for in</code> 和 <code>for of</code> 都可以用来循环，但是，<code>for in </code>是用来任意顺序迭代对象的可枚举属性，通常用来迭代，数组，对象和字符串的<code>key</code>值。<code>for of</code>,用来遍历可迭代对象，只要其继承<code>iterable</code>, 如 <code>Array</code>，<code>Map</code>，<code>Set</code>，<code>String</code>，<code>TypedArray</code>等，通常用来遍历值。</p><p>注意：<code>for of</code>不能用来迭代对象，因为对象不可迭代</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>const str = &#39;abc&#39;
for(let i in str){
    console.log(i);//0 1 2
}
for(let i of str){
    console.log(i);// a b c
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用域和作用域链" tabindex="-1"><a class="header-anchor" href="#作用域和作用域链" aria-hidden="true">#</a> 作用域和作用域链</h2><ol><li>词法作用域 在说作用域之前，需要说一下词法作用域，词法作用域又叫做静态作用域，即在词法阶段就确定了变量和函数所在的作用域，在编译阶段即确定了作用域。Js使用的就是词法作用域。 来看一个例子：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>var a = 20
function fn1(){
    console.log(a); // 20
}
function fn2(){
    var a = 40
    fn1()
}
fn2() 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行函数fn2()会输出20，因为他会沿着自身的作用域链一直查找，而上层作用域就是全局作用域，这是在编译时就决定了的，而不会去找执行上下文中的40。</p><p>2.作用域分类 2.1 全局作用域 当没有声明或者，在非函数作用域中以var声明，都会有全局的作用域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>var a = 123
if (a) {
    var b = 456
}
console.log(a) // 123
console.log(b) //456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.2 函数作用域 函数内部的作用域，在函数外部无法进行访问。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function fn() {
    var c = 7
    console.log(c) // 7
}
fn()
console.log(c) // Uncaught ReferenceError: c is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.3 块级作用域 块级作用域为用使用let，const声明的变量或函数所在的块内，即{....}内。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// let const 具有块级作用域 级在{}中定义，就只在{}中生效，外部无法访问
if (a) {
    let d = 4
    console.log(d) // 4
}
console.log(d) //Uncaught ReferenceError: d is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.执行上下文 那么执行上下文是什么呢，执行上下文也就是Js被解析和执行时所在的环境，执行上下文共分为三种类型： 全局执行上下文 函数执行上下文 eval执行上下文（暂不了解） 而每种执行上下文又包含三部分：</p><p>变量对象（Variable Object） 作用域链（Scope Chain） this 执行上下文的声明周期：创建阶段 -&gt; 执行阶段 -&gt; 回收阶段</p><p>创建阶段：会创建变量对象，首先初始化arguments，然后提升函数声明和变量声明；创建作用域链；确定this的指向 执行阶段：执行代码 回收阶段：执行完毕后，等待垃圾回收机制进行回收 变量对象 变量对象与执行上下文息息相关，变量对象的创建规则如下：</p><p>建立Arguments对象，建立该对象下的属性与属性值。（已经确立） 检查当前执行上下文中的函数声明，在vO中以函数名建立属性，属性值指向函数所在内存地址的引用，如果该属性已经存在，则会进行覆盖 检查执行上下文中的变量声明，为声明变量创建属性，属性名为变量名，属性值为undefined,如果已经存在该属性，则直接跳过。 4.作用域链 了解了变量对象，那么作用域链是什么呢？ 作用域链就是对应的变量对象串联起来组成的链表，作用域链保证了当前执行上下文对符合访问权限的变量和函数的有序访问。</p><p>作用域链的查找遵循着从内向外的规则，最顶端为当前执行上下文所在的作用域，最低端为全局作用域。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
function fn1() {
    console.log(fn2) //ƒ fn2(){console.log(&quot;fn2&quot;)}
    function fn2() {
        console.log(&#39;fn2&#39;)
    }
}
fn1()
// 分析：
VO = {
    // 1. arguments 没有
    // 2. 函数声明
    fn2: function
    // 3.变量声明：没有
}
执行代码 输出结果

这个相当于：

function fn1() {
    // 把fn2() 放在前面
    function fn2() {
        console.log(&#39;fn2&#39;)
    }
    console.log(fn2) //ƒ fn2(){console.log(&quot;fn2&quot;)}
}
fn1()

（2）

function test(a, b) {
    console.log(a)
    console.log(b)
    var b = 234
    console.log(b)
    a = 123
    console.log(a)
    function a() {}
    var a
    b = 234
    var b = function () {} // 函数表达式跳过
    console.log(a)
    console.log(b)
}
test(1)

// VO = {
//     arguments:
//         a: 1
//         b: undefined
//     function:
//         a: function(a已经变成function了)
//     Variable:
//         b会被直接跳过
//         a已经为function了，跳过
// }
// AO = {
//     arguments: 
//         a:function,
//         b:undefined
//     function:
//     Variable:
//         b:234 -&gt; 234 -&gt; function 
//         a:123
// }
// 结果： function a(){}, undefined, 234,123, 123, function (){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当执行上下文进入到执行阶段后，变量对象VO会变为活动对象（Active Object，AO）,此时原先声明的变量会被赋值，变量对象和活动对象都指向同一个对象，只是处于执行上下文的阶段不同。</p><h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>限定符： a* a 出现0次或者多次
            a+ a出现一次或者多次
            a? a 出现0次或者1次
            a{6} a出现6次
            a{2, 6} a出现2-6次
            a{2, }a 出现2到多次
    或运算符：
    (a|b) 匹配a或者b
    (ab)|(cd)匹配ab或者cd

    字符类
    [abc] 匹配a或者b或者c
    [a-c]同上
    [a-zA-Z0-9] 匹配大小写+0-9
    [^0-9] 匹配非数字
    
    元字符：
    \\d 匹配数字
    \\D 匹配非数字
    \\w 匹配字母数字下划线
    \\W 匹配非单词
    \\s 匹配空白（包含tab，换行）
    \\S 匹配非空白
    . 匹配任意字符（换行除外）
    \\b 匹配边界
    ^ 以什么开头
    $ 匹配行尾
    贪婪匹配
    &lt;.+&gt; 任意字符
    &lt;.+?&gt; 惰性匹配任意字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> promise</h2><ul><li><code>promise</code> 是为了解决回调地狱问题，由于其返回值也是<code>promise</code>对象，因此可以一直<code>.then()</code>调用。<code>promise</code>一共有三个状态，分别为<code>pending</code>，<code>fullfilled</code>，<code>rejected </code></li></ul><ol><li>promise.all</li></ol><p><code>promise.all</code>方法可以同时发送多个<code>promise</code>请求，其特点为可以处理可迭代对象，返回值为promise，全部返回成功为成功，一个返回失败就为失败，通过数组来保证请求返回的顺序</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function myPromiseAll(iterable) {
    // 将可迭代对象放进数组中
    const arr = Array.from([...iterable])
    const result = Array(arr.length)
    let count = 0
    for (let i = 0, len = arr.length; i &lt; len; i++) {
        Promise.resolve(arr[i])
            .then((res) =&gt; {
                result[i] = res
                count++
                if (count === len) {
                    resolve(result)
                }
            })
            .catch((reason) =&gt; reject(reason))
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现并发请求控制" tabindex="-1"><a class="header-anchor" href="#实现并发请求控制" aria-hidden="true">#</a> 实现并发请求控制</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>const timeout = delay =&gt; {
    return new Promise(resolve =&gt; {
        setTimeout(() =&gt; {
            resolve()
        }, delay)
    })
}
class SuperTask {
    constructor(concurrencyCount = 2) {
        this.concurrencyCount = concurrencyCount
        this.runningCount = 0
        this.tasks = []
    }

    add(task) {
        return new Promise((resolve, reject) =&gt; {
            this.tasks.push({
                task,
                resolve,
                reject,
            })
            this.run()
        })
    }

    run() {
        if (this.tasks.length &amp;&amp; this.runningCount &lt; this.concurrencyCount) {
            this.runningCount++
            const { task, resolve, reject } = this.tasks.shift()
            task()
                .then(resolve, reject)
                .finally(res =&gt; {
                this.runningCount--
                this.run()
            })
        }
    }
}

const superTask = new SuperTask(3)
function addTask(time, name) {
    superTask
        .add(() =&gt; timeout(time))
        .then(() =&gt; {
        console.log(\`任务\${name}完成\`)
    })
}
addTask(10000, 1)
addTask(1000, 2)
addTask(3000, 3)
addTask(8000, 4)
addTask(9000, 5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>简单数据类型： number、string、boolean、null、undefined、bigint、symbol 复杂数据类型： Object: 里面包含 function array date等 简单数据类型存贮在栈中，复杂数据类型存储在堆中，在访问的时候会在栈中查找地址，再通过地址访问存储在堆中的复杂数据类型。</p><h2 id="判断数据类型的方式" tabindex="-1"><a class="header-anchor" href="#判断数据类型的方式" aria-hidden="true">#</a> 判断数据类型的方式</h2><ul><li>typeof</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>let a = [1, 2, 3, 4, 5];
        let b = 1;
        let c = &quot;weaface&quot;;
        let d = false;
        let f = null;
        let e = new Date();
        let g = undefined;
        let h = function () {};
 
        console.log(typeof(a));//object
        console.log(typeof(b));//number
        console.log(typeof(c));//string
        console.log(typeof(d));//boolean
        console.log(typeof(e));//object
        console.log(typeof(f));//object
        console.log(typeof(g));//undefined
        console.log(typeof(h));//function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typeof 可以判断number、string、boolean、undefined、function，其余会被判断成对象</p><ul><li><p>instanceof 用法 <code>a instanceof A</code> 结果 为true或者false instanceof 的原理是通过原型链进行查找，只能判断基础数据类型，不能判断引用类型</p></li><li><p>constructor</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    console.log((2).constructor === Number) //true
    console.log(true.constructor === Boolean) // true

    function Fn() {
        console.log(&quot;Fn&quot;)
    }
    function Fn1() {
        console.log(&quot;Fn1&quot;)
    }
    const fn = new Fn()
    Fn.prototype.constructor = Fn1
    console.log(fn.constructor === Fn) // false
    console.log(fn.constructor === Fn1) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>constructor可以判断类型也可以用于访问构造函数，但是要确定原型没有被更改</p><ul><li>Object.Prototype.toString.call()</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console.log(Object.prototype.toString.call(2)) // &quot;[object Number]&quot;
console.log(Object.prototype.toString.call(&quot;Hello&quot;)) // &quot;[object String]&quot;
console.log(Object.prototype.toString.call(true)) // &quot;[object Boolean]&quot;
console.log(Object.prototype.toString.call([])) // &quot;[object Array]&quot;
console.log(Object.prototype.toString.call(function () {})) // &quot;[object Function]&quot;
console.log(Object.prototype.toString.call(null)) // &quot;[object Null]&quot;
console.log(Object.prototype.toString.call(undefined)) // &quot;[object Undefined]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果为字符串</p>`,91),a=[s];function c(r,o){return n(),i("div",null,a)}const t=e(d,[["render",c],["__file","javascript.html.vue"]]);export{t as default};
