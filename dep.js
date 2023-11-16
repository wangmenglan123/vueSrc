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
let activedUpdate;
function autorun(update) {
    function wapperUpdate() {
        activedUpdate  = wapperUpdate
        update()
        activedUpdate = null
    }
    wapperUpdate()

}
module.exports = {autorun,Dep}

