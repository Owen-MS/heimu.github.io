(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{422:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-10"}},[t._v("#")]),t._v(" 1-10")]),t._v(" "),a("h2",{attrs:{id:"_1、从输入url地址到浏览器完成渲染的整个过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、从输入url地址到浏览器完成渲染的整个过程"}},[t._v("#")]),t._v(" 1、从输入URL地址到浏览器完成渲染的整个过程")]),t._v(" "),a("ol",[a("li",[t._v("验证URL合法性")]),t._v(" "),a("li",[t._v("DNS解析")]),t._v(" "),a("li",[t._v("TCP连接")]),t._v(" "),a("li",[t._v("SSL/TLS连接")]),t._v(" "),a("li",[t._v("服务端响应")]),t._v(" "),a("li",[t._v("浏览器渲染")]),t._v(" "),a("li",[t._v("断开连接")])]),t._v(" "),a("h2",{attrs:{id:"_2、什么是事件代理-事件委托-有什么好事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、什么是事件代理-事件委托-有什么好事"}},[t._v("#")]),t._v(" 2、什么是事件代理（事件委托）有什么好事？")]),t._v(" "),a("p",[t._v("事件代理：不给子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("减少内存消耗和dom操作，在javascript中提高性能，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，\n因为需要不断操作dom，那么引起浏览器重绘和回流的可能也就越多，页面交互的事件也就变地越长，这也就是为什么要减少dom操作的\n原因。每一个事件处理函数，都是一个对象，多一个事件处理函数，内存中就会被多占用一部分空间。如果要用事件委托，就会将\n所有的操作放到js程序里面，只对他的父级进行操作，与dom的操作就只需要交互一次，这样就大大的减少与dom的交互次数，提高性能；")]),t._v(" "),a("li",[t._v("动态绑定事件，因为事件绑定在父级元素，所以新增的元素也能触发同样的事件。")])]),t._v(" "),a("h2",{attrs:{id:"_3、addeventlistener默认是冒泡还是捕获。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、addeventlistener默认是冒泡还是捕获。"}},[t._v("#")]),t._v(" 3、addEventListener默认是冒泡还是捕获。")]),t._v(" "),a("p",[t._v("默认是冒泡。\naddEventListener的第三个参数默认是false代表事件冒泡行为。当为true是执行事件捕获行为。")]),t._v(" "),a("h2",{attrs:{id:"_4、css的渲染层合成是什么-浏览器如何创建新的渲染层。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、css的渲染层合成是什么-浏览器如何创建新的渲染层。"}},[t._v("#")]),t._v(" 4、css的渲染层合成是什么，浏览器如何创建新的渲染层。")]),t._v(" "),a("ul",[a("li",[t._v("对布局树进行分层，并生成分层树。")]),t._v(" "),a("li",[t._v("为每个图层生成绘制列表，并将其提交到合成线程。")])]),t._v(" "),a("p",[t._v("渲染引擎还需要为特点的节点生成专用的图层，并生成一颗对应的图层树（layerTree）。这些图层叠加在一起构成了最终的页面图像。\n浏览器的页面实际被分成了很多图层，这些图层叠加后合成了最终的页面。")]),t._v(" "),a("p",[t._v("并不是布局树中每个节点都包含一个图层，如果一个节点没有对应的层，那么这个节点就属于父节点的图层。")]),t._v(" "),a("h3",{attrs:{id:"满足什么条件-渲染引擎才会为特定的节点创建新的图层呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#满足什么条件-渲染引擎才会为特定的节点创建新的图层呢"}},[t._v("#")]),t._v(" 满足什么条件，渲染引擎才会为特定的节点创建新的图层呢？")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("拥有层叠上下文属性的元素会被提升为单独的一层。")]),t._v(" "),a("p",[t._v("明确定位的元素、定义透明属性的元素、使用css滤镜的元素等")]),t._v(" "),a("p",[t._v("position: fixed; 、z-index：2;、filter：blue(5px); 、opacity：0。5；")])]),t._v(" "),a("li",[a("p",[t._v("需要剪裁（clip）的地方也会被创建为图层。（overflow: auto）。")])])]),t._v(" "),a("h2",{attrs:{id:"_5、webpack-plugin和loader的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、webpack-plugin和loader的区别"}},[t._v("#")]),t._v(" 5、webpack Plugin和loader的区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("loader")]),t._v(" "),a("p",[t._v("用于对模块的源代码的转换，loader描述了webpack将其他类型的文件转换为webpack所识别的模块。")])]),t._v(" "),a("li",[a("p",[t._v("plugin")]),t._v(" "),a("p",[t._v("用于解决loader无法实现的事，它直接作用于webpack，扩展了他的功能。在webpack运行的生命中期中会广播出许多事件，plugin\n可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。插件的范围包括，从打包优化和压缩，一直到重新定义环境\n中的变量。插件接口功能及其强大，可以用来处理各种各样的任务。")])])]),t._v(" "),a("h2",{attrs:{id:"_6、apply、call、bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、apply、call、bind"}},[t._v("#")]),t._v(" 6、apply、call、bind")]),t._v(" "),a("p",[t._v("相同点: 都可以改变this的指向。\n不同点: apply、call会立即执行，bind返回绑定this之后的函数，会在调用时才执行。")]),t._v(" "),a("p",[t._v("bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时this不再指向传入给bind的第一个\n参数，而是执行用new创建的 实例（也就是bind无效）。")]),t._v(" "),a("p",[t._v("apply/call对比: apply传参接受数组形式，call是传参列表。")]),t._v(" "),a("h2",{attrs:{id:"_7、举出闭包场景运用的例子。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、举出闭包场景运用的例子。"}},[t._v("#")]),t._v(" 7、举出闭包场景运用的例子。")]),t._v(" "),a("p",[t._v("防抖/创建私有变量")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_8、css优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、css优先级"}},[t._v("#")]),t._v(" 8、css优先级")]),t._v(" "),a("ul",[a("li",[t._v("!important;")]),t._v(" "),a("li",[t._v("内连")]),t._v(" "),a("li",[t._v("ID")]),t._v(" "),a("li",[t._v("类、伪类、属性选择器")]),t._v(" "),a("li",[t._v("标签、伪元素选择器")]),t._v(" "),a("li",[t._v("通配符、子类选择器、兄弟选择器")])]),t._v(" "),a("h2",{attrs:{id:"_9、事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、事件循环"}},[t._v("#")]),t._v(" 9、事件循环")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"async2的结果"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   resolve()")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("输出结果：247536 async2 的结果 1")]),t._v(" "),a("p",[a("code",[t._v("注意！我在最后一个 Promise 埋了个坑 我没有调用 resolve 方法 这个是在面试美团的时候遇到了 当时自己没看清楚 以为都是一样的套路 最后面试官说不对 找了半天才发现是这个坑 哈哈")])]),t._v(" "),a("h2",{attrs:{id:"_10、http状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、http状态码"}},[t._v("#")]),t._v(" 10、http状态码")]),t._v(" "),a("h3",{attrs:{id:"_1-xx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-xx"}},[t._v("#")]),t._v(" 1.xx")]),t._v(" "),a("ul",[a("li",[t._v("101: 协议切换 状态码表示服务器应客户端升级协议的请求对协议进行切换。")])]),t._v(" "),a("h3",{attrs:{id:"_2-xx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-xx"}},[t._v("#")]),t._v(" 2.xx")]),t._v(" "),a("ul",[a("li",[t._v("200: 成功")]),t._v(" "),a("li",[t._v("204: 无内容，服务器成功处理了请求，但没有返回任何内容。响应头后没有body数据。")])]),t._v(" "),a("h3",{attrs:{id:"_3-xx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-xx"}},[t._v("#")]),t._v(" 3.xx")]),t._v(" "),a("ul",[a("li",[t._v("301: 永久重定向")]),t._v(" "),a("li",[t._v("302: 临时重定向")]),t._v(" "),a("li",[t._v("304: 使用协商缓存")])]),t._v(" "),a("h3",{attrs:{id:"_4-xx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-xx"}},[t._v("#")]),t._v(" 4.xx")]),t._v(" "),a("ul",[a("li",[t._v("400: 错误，但是并不知道哪里出错了。")]),t._v(" "),a("li",[t._v("403: 服务器禁止访问。例如法律禁止、信息敏感。")]),t._v(" "),a("li",[t._v("404: 资源未找到，表示没在服务器上找到对应的资源。")])]),t._v(" "),a("h3",{attrs:{id:"_5-xx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-xx"}},[t._v("#")]),t._v(" 5.xx")]),t._v(" "),a("ul",[a("li",[t._v("500: 服务端出错，哪里出错，不知道。")]),t._v(" "),a("li",[t._v("503： 服务器很忙，暂时无法响应。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);