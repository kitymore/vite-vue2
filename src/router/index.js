import Vue from 'vue'
import VueRouter from 'vue-router'
import hello from '../views/hello.vue' // 引入 Home页面组件

// 注册路由插件
Vue.use(VueRouter)

// 
const routes = [
  {
    path: '/',
    name: 'hello',
    component: hello
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
