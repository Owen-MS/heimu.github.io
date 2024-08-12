(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{459:function(t,a,e){"use strict";e.r(a);var s=e(45),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"调度与时间片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调度与时间片"}},[t._v("#")]),t._v(" 调度与时间片")]),t._v(" "),e("p",[t._v("Scheduler 调度\nReconciler 调和")]),t._v(" "),e("h2",{attrs:{id:"一、前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),e("p",[t._v("GUI渲染线程和JS引擎线程是项目排斥的，比如开发者用js写了一个遍历大量数据的循环，在执行js时候，会阻塞\n浏览器的渲染绘制，给用户直观的感受就是卡顿。")]),t._v(" "),e("h2",{attrs:{id:"二、何为异步调度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、何为异步调度"}},[t._v("#")]),t._v(" 二、何为异步调度")]),t._v(" "),e("h3",{attrs:{id:"为什么采用异步调度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么采用异步调度"}},[t._v("#")]),t._v(" 为什么采用异步调度")]),t._v(" "),e("p",[t._v("v15版本的React在应用上也存在着，一次更新，递归遍历大量的虚拟dom，造成占用了js线程，使得浏览器没有时间\n去做一些动画效果，伴随着项目越来越大，项目越来越卡。")]),t._v(" "),e("p",[t._v("如何解决这个问题呢，首先对比一下vue框架，vue框架有template模版收集依赖的过程，轻松构建响应式，使得在\n一次更新中，vue能够迅速相应，找到需要更新的范围，然后以组件粒度更新节点，渲染视图。但是在React中，\n一次更新React无法知道更新的波及范围，所以react选择从根节点开始diff，查找不同，更新这些不同。")]),t._v(" "),e("p",[t._v("React似乎无法打破从root开始找不同的命运，但是还是要解决浏览器卡顿问题，那怎么办，解铃还须系铃人，\n既然更新过程阻塞了浏览器的绘制，那么把React的更新，交给浏览器自己控制不就可以了嘛，如果浏览器有绘制\n任务那么执行绘制任务，在空闲时间执行更新任务，就能解决卡顿问题了。与vue更快响应，更精确的更新范围，\nReact选择更好的用户体验。")]),t._v(" "),e("h3",{attrs:{id:"时间分片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间分片"}},[t._v("#")]),t._v(" 时间分片")]),t._v(" "),e("p",[t._v("React如何让浏览器控制React更新呢，首先浏览器每次执行一次事件循环（一帧）都会做如下事情，\n处理事件，执行js，调用requestAnimation，布局Layout，绘制paint，在一帧执行后，如果没有其他事件，那么\n浏览器会进入休息时间，那么有的一些不是那么特别紧急React更新，就可以执行了。")]),t._v(" "),e("p",[t._v("那么怎么知道浏览器有空闲时间呢？\nrequestIdCallback（callback, {timeout}）是谷歌浏览器提供的一个API，在浏览器有空余的时间，浏览器\n就会调用requestIdCallback的回调。")]),t._v(" "),e("ul",[e("li",[t._v("callback回调，浏览器空余时间执行回调函数。")]),t._v(" "),e("li",[t._v("timeout超过时间。如果浏览器长时间没有空闲，那么回调就不会执行，为了解决这个问题，就有了timeout参数。")])]),t._v(" "),e("h3",{attrs:{id:"模拟requestidlecallback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模拟requestidlecallback"}},[t._v("#")]),t._v(" 模拟requestIdleCallback")]),t._v(" "),e("h2",{attrs:{id:"三、异步调度原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、异步调度原理"}},[t._v("#")]),t._v(" 三、异步调度原理")]),t._v(" "),e("h3",{attrs:{id:"schedulecallback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schedulecallback"}},[t._v("#")]),t._v(" ScheduleCallback")]),t._v(" "),e("h3",{attrs:{id:"requesthosttimeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requesthosttimeout"}},[t._v("#")]),t._v(" requestHostTimeout")]),t._v(" "),e("h3",{attrs:{id:"handletimeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handletimeout"}},[t._v("#")]),t._v(" handleTimeout")]),t._v(" "),e("h3",{attrs:{id:"advancetimers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advancetimers"}},[t._v("#")]),t._v(" advanceTimers")]),t._v(" "),e("h3",{attrs:{id:"flushwork和workloop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flushwork和workloop"}},[t._v("#")]),t._v(" flushWork和workloop")]),t._v(" "),e("h3",{attrs:{id:"shouldyield-中止-workloop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shouldyield-中止-workloop"}},[t._v("#")]),t._v(" shouldYield 中止 workloop")]),t._v(" "),e("h3",{attrs:{id:"四、总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、总结"}},[t._v("#")]),t._v(" 四、总结")]),t._v(" "),e("ul",[e("li",[t._v("异步调用的原理是什么")]),t._v(" "),e("li",[t._v("React为什么不用setTimeout")]),t._v(" "),e("li",[t._v("时间分片是什么")]),t._v(" "),e("li",[t._v("React如何模拟requestIdleCallback")]),t._v(" "),e("li",[t._v("简述一下调度流程")])])])}),[],!1,null,null,null);a.default=r.exports}}]);