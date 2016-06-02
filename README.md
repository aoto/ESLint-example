# ESLint使用范例
> 我们采用业界流行的[Airbnb](https://github.com/airbnb/javascript)JS规范。
> 使用[ESLint](http://eslint.org/)作为校验工具。

## 我们目前的JS代码有两种（都可能包含jQuery/Nut）
- ES5
- ES6 + React + Vue

这个例子中的默认配置是校验ES6、React、Vue，且配置了`pre-commit`模块。如果需校验ES5代码，将`.eslintrc`中的`extends`字段值切换为`"airbnb-base/legacy"`即可。

## 执行校验
- 运行`npm run lint`手工执行校验。
- 执行`git commit`，自动会执行lint校验，如果未通过，那么代码将提交失败。

## 集成
*步骤1：*  
拷贝`package.json`中`devDependencies`字段的如下内容到你的项目，并执行`npm install`。  
```
"eslint": "^2.9.0",
"eslint-config-airbnb": "^8.0.0",
"eslint-config-airbnb-base": "^2.0.0",
"eslint-plugin-html": "^1.4.0",
"eslint-plugin-import": "^1.6.1",
"eslint-plugin-jsx-a11y": "^1.0.4",
"eslint-plugin-react": "^5.0.1",
"pre-commit": "^1.1.2",
```

*步骤2：*  
拷贝`package.json`中的`pre-commit`和`scripts`字段到你的项目，并调整`lint`命令内容。  
```
"pre-commit": [
  "lint"
],
```
```
"scripts": {
  "lint": "eslint src"
},
```

*步骤3：*  
拷贝`.eslintrc`和`.eslintignore`到你的项目根目录。（`.eslintignore`非必须，用来配置忽略的文件/文件夹）

## 修改配置
各项目中的全局变量可配置，**但还是要尽可能的少**。配置加到`.eslintrc`中的`globals`字段，项目提交Review阶段将你对`.eslintrc`的修改也提交一个Merge Request到这个仓库的master分支，由@成曰 将请求合入。

## 编辑器插件
### SublimeText3
http://blog.csdn.net/binjly/article/details/49926001

### WebStorm
https://www.jetbrains.com/help/webstorm/2016.1/eslint.html

### Atom
https://github.com/AtomLinter/linter-eslint

### VS Code
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## 监控
http://100.85.133.9:3000/
