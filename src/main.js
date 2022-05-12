import App from '@/view/App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router/index'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    render (h) {
        return h('App')
    }
})

