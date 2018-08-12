#-------- ES6项目构建

### 项目目录文件说明
    1.app-->放置前端代码(包含三个文件夹css js views) 
        1.1 css -->样式文件
        1.2 js -->class(放置类文件) -->index.js(入口文件)
        1.3 views -->放置模板文件 -->error.ejs(错误模板);index.ejs(入口模板)
    2.server-->放置服务器代码(依赖node的express脚手架)
        --注意：在该目录下的app.js(21行)下增加一段代码(-app.use(require('connect-livereload')())-)实现代码的热更新
        --步骤: 2.1 命令行输入express -e .(在当前目录使用ejs模板引擎)
                2.2 按提示信息操作
    3.tasks-->放置构建工具文件
       3.1 util(放置常见的脚本) --> args.js(命令行参数配置)
       3.2 script.js --js构建脚本
       3.3 pages.js --模板构建脚本
       3.4 css.js --样式构建脚本
       3.5 server.js --服务器构建脚本
       3.6 browser.js --浏览器监听构建脚本
       3.7 clean.js --清空文件的构建脚本
       3.8 build.js --关联所有的构建脚本, 将其串联起来
       3.9 default.js --默认执行脚本(如gulp命令后面没有命令名，就会去执行default.js)
    4.package.json --安装依赖包 (自动生成npm init)
    5. .babelrc -- 设置编译工具的文件
    6. gulpfile.babel.js -- 构建工具配置

