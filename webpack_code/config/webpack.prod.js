//运行在nodejs
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path')
function getStyleModule(pre) {
  return [
    MiniCssExtractPlugin.loader, //link引入单独的css文件
    'css-loader', //将css资源编译成commonjs模块到js中
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [
              'postcss-preset-env',
              {
                // 其他选项
              },
            ],
          ],
        },
      },
    },
    pre
  ].filter(Boolean)
}
module.exports = {
  //入口
  entry: './src/main.js', //相对路径
  //出口
  output: {
    path: path.resolve(__dirname, '../dist'), //绝对路径
    filename: 'js/main.js',
    clean: true //打包之前先清空path目录中内容
  },
  //加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleModule()
      },
      {
        test: /\.less$/,
        use: getStyleModule('less-loader')
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
    }),
    //css单独打包，不用等待js加载
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new CssMinimizerPlugin() //css文件压缩
  ],
  //模式
  mode: 'production',
  devtool:"source-map" //一般不使用，避免反编译（行和列映射）
}