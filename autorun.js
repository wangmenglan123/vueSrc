const react = require('./react')
const {autorun} = require('./dep')
let obj = {'name':'wml','age':'18'}
let obj1 = {}
react(obj)
autorun(()=>{
 obj1.name = obj.name//相当于dep.depend
})
console.log(obj1)
obj.name = 'jxq'
console.log(obj1)