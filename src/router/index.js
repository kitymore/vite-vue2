import Vue from 'vue';
import VueRouter from 'vue-router';
// 注册路由插件
Vue.use(VueRouter);
//
const routes = [
  {
    path: '/',
    redirect: '/hello',
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('../views/hello.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: '',
  routes,
});
//
router.beforeEach(function (to, from, next) {
  next();
});

router.afterEach(function (to, from) {
  console.log(to); //到达的路由
  console.log(from); //离开的路由
});
export default router;
