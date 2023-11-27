const myPlugin = {
    install: function() {
        Vue.mixin({
            created() {
                if(this.$options.rules.foo) {
                    if(!this.foo) {
                        console.log('foo为空')
                    } 
                }
            }
        })
    }
}
