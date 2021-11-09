import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import system from './modules/system';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    system,
    user,
  },
  getters,
});

export default store;
