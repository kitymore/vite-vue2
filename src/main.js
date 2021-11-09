import Vue from "vue";
import App from "./App.vue"
import router from './router/index.js'
import store from './store'
// 全局引入按需引入UI库 vant
import '@/plugins/vant'
new Vue({
    el: "#app",
    router,
    store,
    render: (h) => h(App)
}).$mount();