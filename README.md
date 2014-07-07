NodeJS test related
-----------------

> 使用并实践NodeJS比较热门的测试框架

### use mocha and should

#### 关于`package.json`中的scripts

```
"scripts": {
	"test": "npm run jshint & mocha",
	"jshint": "jshint app.js"
}
```

当执行`npm test` 时会执行`package.json`中`scripts`的`test`中的命令.

> 项目中的`test`目录是`mocha`的默认测试路径

#### 关于`mocha`

`Mocha`是一个任务运行器，因此实际上它并不会太关心测试本身，它关心的只是测试的结构，测试的结构决定着怎样让测试知道代码运行失败了以及怎样显示结果。你创建代码的方式，就是使用多个`describe`块来展示你的库中的不同组件，然后在其中添加`it`块来制定一个特别的测试。

#### 关于`should`

`should`是一个断言库，同样还有[`chai`](https://github.com/chaijs/chai)