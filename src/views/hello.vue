<template>
   
  <div class="hello">
    <div class="item">
         
      <div>count: {{ count }}</div>
         <button @click="addCount">+1</button>
    </div>
    <div class="item center"></div>
    <div class="item"></div>
         
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/home.js';
export default {
  data() {
    return {
      count: '',
    };
  },
  computed: {},
  mounted() {
    this.initData();
  },
  methods: {
    addCount() {},
    // 请求数据案例
    initData() {
      // console.log(88, import.meta.env.VITE_APP_ENV);
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: 'sunnie' };
      getUserInfo(params)
        .then(() => {})
        .catch(() => {});
    },
    // Action 通过 store.dispatch 方法触发
    doDispatch() {
      this.$store.dispatch('setUserName', '真乖，赶紧关注公众号，组织都在等你~');
    },
    goGithub(index) {
      window.location.href = 'https://github.com/sunniejs/vue-h5-template';
    },
  },
};
</script>
<style lang="scss">
.hello {
  width: 100%;
  display: flex;
  .item {
    width: 190px;
    background: red;
  }
  .center {
    width: 60px;
    background: yellow;
  }
}
</style>
