import Mock from 'mockjs'
Mock.mock('/api/getData',()=>{
  console.log('已被拦截')
})