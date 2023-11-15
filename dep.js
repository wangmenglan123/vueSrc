const react = require('./react.js')
class Dep {
    constructor() {
        this.subscribers =[]
    }
    depend() {
        if(activedUpdate) {
            this.subscribers.push(activedUpdate)
        }
    }
    notify() {
        this.subscribers.forEach((update)=>{
            update()
        })
    }
}
let dep= new Dep()
let activedUpdate;
function autorun(update) {
    function wapperUpdate() {
        activedUpdate = wapperUpdate
        update()
        activedUpdate = null
    }
    wapperUpdate()
}
let obj = {'name':'wml'}
react(obj)
autorun(()=>{
 console.log(obj.name) //相当于dep.depend
})
obj.name = 'jxq'
