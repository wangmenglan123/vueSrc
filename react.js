const {Dep} = require('./dep.js')
console.log(Dep)
function react(obj) {
  Object.keys(obj).forEach((key)=>{
    let temp= obj[key]
    let dep = new Dep()
    Object.defineProperty(obj,key,{
      get() {
        console.log('getter',temp)
        dep.depend()
        return temp
      },
      set(val) {
        console.log('setter',val)
        temp=val
        dep.notify()

      }
    })
  })
}
module.exports = react

