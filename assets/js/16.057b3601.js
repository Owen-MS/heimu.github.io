(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{372:function(t,s,a){t.exports=a.p+"assets/img/fiber_fiberRoot.8042bb81.png"},446:function(t,s,a){"use strict";a.r(s);var r=a(45),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"fiber架构的工作原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fiber架构的工作原理"}},[t._v("#")]),t._v(" Fiber架构的工作原理")]),t._v(" "),r("p",[t._v("我们首先了解了Fiber是什么，Fiber节点可以保存相应的DOM节点，相应的Fiber节点构成的Fiber树就\n对应DOM树。")]),t._v(" "),r("h2",{attrs:{id:"什么是双缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是双缓存"}},[t._v("#")]),t._v(" 什么是双缓存")]),t._v(" "),r("p",[t._v("在内存中g构建并直接替换的技术-叫做"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E5%8F%8C%E7%BC%93%E5%86%B2",target:"_blank",rel:"noopener noreferrer"}},[t._v("双缓存"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v('React使用"双缓存"来完成并Fiber的构建和替换-对应DOM树的创建和更新。')]),t._v(" "),r("h2",{attrs:{id:"双缓存fiber树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#双缓存fiber树"}},[t._v("#")]),t._v(" 双缓存Fiber树")]),t._v(" "),r("ul",[r("li",[t._v("fiberRoot: 首次构建应用，创建一个fiberRoot，作为整个应用的根基")]),t._v(" "),r("li",[t._v("rootFiber：如下通过ReactDOM.render渲染出来的，比如App可以作为一个rootFiber。一个React应用可以\n有多个ReactDOM.render创建的rootFiber，但是只能有一个fiberRoot（应用根节点）。")])]),t._v(" "),r("div",{staticClass:"language-jsx harmony extra-class"},[r("pre",{pre:!0,attrs:{class:"language-jsx"}},[r("code",[t._v("ReactDOM"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("第一次挂载的过程中，会将 fiberRoot 和 rootFiber 建立起关联。")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFiberRoot")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("containerInfo"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tag")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 创建一个root */")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" root "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FiberRootNode")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("containerInfo"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tag"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootFiber "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHostRootFiber")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    root"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rootFiber\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("当前屏幕上显示对应内容的 - current Fiber\n正在内存中构建的 - workInProgress Fiber")]),t._v(" "),r("p",[t._v("他们通过alternate属性来连接")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("currentFiber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workInProgressFiber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nworkInProgressFiber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentFiber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[r("img",{attrs:{src:a(372),alt:"rootFiber"}})]),t._v(" "),r("p",[t._v("React应用的根节点通过使current指针在不同的fiber树rootFiber间切换来完成current Fiber树指向的切换。")]),t._v(" "),r("p",[t._v("即当workInProgress Fiber树构建完成交给Renderer渲染在页面上后，\n应用根节点的current指针指向workInProgress Fiber树，\n此时workInProgress Fiber树就变为current Fiber树。")]),t._v(" "),r("p",[t._v("每次状态更新都会产生新的workInProgress Fiber树，\n通过current与workInProgress的替换，完成DOM更新。")]),t._v(" "),r("h2",{attrs:{id:"mount时"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mount时"}},[t._v("#")]),t._v(" mount时")]),t._v(" "),r("h2",{attrs:{id:"update时"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update时"}},[t._v("#")]),t._v(" update时")])])}),[],!1,null,null,null);s.default=e.exports}}]);