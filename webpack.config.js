const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: __dirname + "/app/main.js", //入口文件
  output: {
    path: __dirname + '/public', //打包后文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  //此处配置好,直接执行webpack 命令,会自动引用webpack.config.js 文件中的配置项
  //webpack 非全局安装的时候,执行(node_modules/.bin/webpack)
  devtool: "eval-source-map", //生成sourceMap 使调试更容易
  devServer: {
    contentBase: "./public", //devServer  默认为根文件提供本地服务,contentBase 可以指定服务目录
    port: "8080", //默认8080端口
    inline: true, //实时刷新
    historyApiFallback: true //不跳转
  },
  //loaders 需要单独安装并在webpac.config.js 的module 关键字下面配置******
  //loader 把不同的文件格式做处理
  //loader 配置
  //test 匹配所处理的文件扩展名的正则表达式(必须)
  //loader loader的名称(必须)
  //include/exclude 手动添加必须的处理的文件(文件夹)/或屏蔽不需要处理的文件(文件夹)(可选)
  //query 为loader 配置额外的配置项(可选)

  // module: {
  //   rules:[
  //     {
  //       test: /(\.js|\.jsx)$/,
  //       use:{
  //         loader:"babel-loader",
  //         options:{
  //           presets:["es2015", "react"]
  //         }
  //       },
  //       exclude:/node_modules/
  //     }
  //   ]
  // }
  //**************babel 配置项可单独提出来 ,webpack 会自动调用.babelrc 里的配置*/
  module: {
    loaders: [{
      test: /\.js|\.jsx$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }, {
      test: /.json$/,
      loader: "json-loader"
    }, {
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: true
        }
      }, {
        loader: "postcss-loader"
      }]
    }]
  },
  plugins: [
    new webpack.BannerPlugin("版权所有,翻版必究"),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html" //new  插件实例,并传入参数
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ]
}
//package.json
//script会按照顺序查找命令,无论全局安装还是局部安装,都不需要指明路径