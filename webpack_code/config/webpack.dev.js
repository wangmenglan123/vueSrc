//运行在nodejs
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
  //入口
  entry: './src/main.js', //相对路径
  //出口
  output: {
    path: path.resolve(__dirname, '../dist'), //绝对路径
    filename: 'js/main.js',
    clean: true //打包之前先清空path目录中内容
  },
  //开启本地服务器：1.热更新 2.解决跨域问题 3.不会输出资源，在内存中编译打包
  devServer: {
    host: "localhost", //域名
    port: "3000", //端口号
    open: true //是否自动开启浏览器
  },
  //加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', //将js中的css通过创建style标签添加到html中生效
          'css-loader' //将css资源编译成commonjs模块到js中
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', //将js中的css通过创建style标签添加到html中生效
          'css-loader', //将css资源编译成commonjs模块到js中
          'less-loader'

        ]
      },
      {
        test: /\.(jpe?g|png|webp|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,  //小于10kb的图片会转成base64，优点：不用请求资源 缺点： 会变大
          }
        },
        generator: {
          filename: 'images/[hash:10][ext][query]' //图片打包到images目录下
        }
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource', //不转变为dataurl
        generator: {
          filename: 'font/[hash:10][ext][query]' //font打包到font目录下
        }
      }
    ]
  },
  //插件
  plugins: [
    new ESLintPlugin({
      context: path.resolve(__dirname, '../src')
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html' //保持原来的html结构 ，将打包后的文件自动引入
    })
  ],
  //模式
  mode: 'development'
}