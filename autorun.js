const react = require('./react')
const {autorun} = require('./dep')
let obj = {'name':'wml','age':'18'}
let obj1 = {}
let obj2 ={}
react(obj)
const fn = ()=> {
    obj1.name = obj.name//相当于dep.depend
    obj2.name = obj.name
}

autorun(fn)
console.log('obj1',obj1)
console.log('obj2',obj2)
obj.name = 'jxq'
console.log('obj2',obj2)
console.log('obj1',obj1)