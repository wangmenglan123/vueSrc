function reactive(obj) {
  Object.keys(obj).forEach((key)=>{
    let temp= obj[key]
    temp="3"
    console.log('----',obj[key])
    Object.defineProperty(obj,key,{
      get() {
        console.log('getter',temp)
        return temp
      },
      set(val) {
        console.log('setter',val)
       // temp=val

      }
    })
  })
}

