import App from '@/view/App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router/index'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(VueRouter)
Vue.use(ElementUI)

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

