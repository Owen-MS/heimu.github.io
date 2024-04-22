## 1、在 js 中有浮点数运算不正确的时候，比如 0.1 + 0.2 不等于 0.3 这是什么原因，要怎么解决
在 JavaScript 中，浮点数运算不正确的现象是由于浮点数精度问题导致的。这是由于计算机内部以二进制表示浮点数，
而某些十进制小数在二进制中无法精确表示。因此，当进行浮点数运算时，可能会出现微小的舍入误差，导致看似相等的数值在计算机内部并不相等。
1、使用整数进行计算 var result = (0.1 * 10 + 0.2 * 10) / 10; // 0.3
2、使用toFixed方法 var result = (0.1 + 0.2).toFixed(1); // "0.3"

## 2、webpack中 loader 与 plugin 有什么区别
在 webpack 中，loader 和 plugin 是两个不同的概念，用于实现不同的功能。

Loader：

作用：Webpack 中的 loader 用于对模块的源代码进行转换。它允许你在导入模块时预处理文件。这使得你可以将非 JavaScript 文件（如 TypeScript、Sass、Less 等）转换为 JavaScript，或对 JavaScript 进行额外处理（如 Babel 将 ES6+ 代码转换为 ES5）。
配置：在 webpack 的配置中，可以通过 module.rules 字段来配置 loader。每个 loader 需要指定一个 test 属性，用于匹配需要被转换的文件类型，并且指定要使用的 loader。
示例：比如可以使用 css-loader 来处理 CSS 文件，file-loader 来处理文件加载，babel-loader 来处理 JavaScript 文件等。
Plugin：

作用：Plugin 用于执行一些在打包过程中的额外任务，例如打包优化、资源管理、注入环境变量等。Plugin 可以拓展 webpack 的功能，以解决 loader 无法实现的其他自动化任务。它们的功能更加广泛，可以访问整个构建过程，在构建过程中的任何时候执行自定义任务。
配置：在 webpack 的配置中，通过 plugins 字段来配置插件。每个插件通常是一个类的实例，在配置中实例化并添加到 plugins 数组中。
示例：比如 HtmlWebpackPlugin 可以自动生成 HTML 文件，并将打包后的资源自动引入其中，CommonsChunkPlugin 可以提取公共代码，MiniCssExtractPlugin 可以将 CSS 提取为独立的文件等。

总的来说，loader 用于转换模块的源代码，而 plugin 则用于执行更广泛的构建任务和对输出结果进行处理。使用 loader 和 plugin 可以帮助你更灵活、高效地配置和管理 webpack 项目。

## 3、在 React 类组件中，为什么修改状态要使用 setState 而不是用 this.state.xxx = xxx
在 React 类组件中，修改状态应该使用 setState() 方法而不是直接修改 this.state.xxx。这是因为直接修改 this.state 不会触发 React 的重新渲染机制，而 setState() 方法则会。

异步更新：setState() 方法是异步的，它将状态更新放入队列中，以确保性能优化和批量更新。如果你直接修改 this.state，React 无法掌握状态的变化，可能导致不可预料的行为。

批量更新：React 会对 setState() 进行批量更新，这意味着在一次事件循环中，React 会合并多个 setState() 调用，然后一次性更新组件。如果直接修改 this.state，React 将无法执行批量更新，可能会导致性能问题。

状态合并：setState() 会将新的状态与当前状态进行合并，只更新你指定的状态属性，而不影响其他状态。如果你直接修改 this.state，可能会覆盖掉其他状态属性，导致不一致性。

生命周期触发：setState() 的调用会触发组件的生命周期方法，包括 shouldComponentUpdate 和 componentDidUpdate，这样可以确保组件在状态更新后能够正确地响应。

因此，为了确保 React 组件状态的正确更新和组件的正确渲染，应该始终使用 setState() 方法来修改状态。

## 4、setState到底是同步还是异步
setState并不是真正意义上的异步操作，它只是模拟了异步的行为。
React中会去维护一个标识（isBatchingUpdates），判断是直接更新还是先暂存state进队列。
setTimeout以及原生事件都会直接去更新state，因此可以立即得到最新state。
而合成事件和React生命周期函数中，是受React控制的，其会将isBatchingUpdates设置为 true，从而走的是类似异步的那一套。

setState 只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout 中都是同步的。

setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，
当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。

setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState ，
setState 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。



## 5、useState 的原理是什么，背后怎么执行的，它怎么保证一个组件中写多个 useState 不会串行
useState是React中用于在函数组件中添加状态的hook。
原理：
- 闭包。 每次函数执行都会创建一个闭包环境。这个闭包包含函数组件所有的局部变量，包括useState定义的状态以及其更新的函数。
- Hooks调度机制。调度机制保证Hooks按照正确的顺序执行，以及确保组件状态能够正确的触发重新渲染。（链表）  