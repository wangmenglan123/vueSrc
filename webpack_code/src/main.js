import count from './js/count.js'
import { add } from './js/add.js'
import './css/index.css'
import './less/index.less'
import './css/iconfont.css'
console.log(count(5, 3))
console.log(add(1, 2, 3, 4, 5, 6))
//js热模块更新 vue可以使用vue-loader,不用自定义
if(module.hot) {
  module.hot.accept('./js/count.js')
}
