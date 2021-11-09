import { langCN } from '@/lang';

const state = {
  //当前选择 0：本人 1：他人
  personRelation: '0',
  //当前选择 0：本人 1：他人国际版
  personRelationLang: '0',
  // 本人信息
  personInfo: {},
  // 本人信息国际版
  personInfoLang: {},
  // 他人信息
  relationPersonInfo: {},
  // 他人信息国际版
  relationPersonInfoLang: {},
  userList: [], // 用户列表
  userListLang: [], // 用户列表国际版
  currentCardNmuber: '',
};

const mutations = {
  userListStatus: (state, data) => {
    state.userList = data;
  },
  userListLangStatus: (state, data) => {
    state.userListLang = data;
  },
  relationPersonInfoStatus: (state, data) => {
    state.relationPersonInfo = data;
  },
  relationPersonInfoLangStatus: (state, data) => {
    state.relationPersonInfoLang = data;
  },
  personInfoLangStatus: (state, data) => {
    state.personInfoLang = data;
  },
  personInfoStatus: (state, data) => {
    state.personInfo = data;
  },
  personRelationLangStatus: (state, data) => {
    if (data && data.length > 0) {
      state.personRelationLang = data;
    }
  },
  personRelationStatus: (state, data) => {
    state.personRelation = data;
  },
  currentCardNumber: (state, currentCardNmuber) => {
    if (currentCardNmuber) {
      state.currentCardNmuber = currentCardNmuber;
    } else {
      state.currentCardNmuber = '';
    }
  },
};

const actions = {
  /**
   * 设置uni-app H5相互跳转
   * 本人信息设置
   */
  setCardNumber({ commit }, cardNumber) {
    commit('currentCardNumber', cardNumber);
  },
  /**
   * 设置当前选中人员
   * @param {*} param0
   * @param {*} personRelation
   */
  setCurrentPersonInfo({ commit, rootGetters }, personInfo) {
    personInfo.personRelation = personInfo.personRelation ? personInfo.personRelation : '0';
    // 本人
    if (personInfo.personRelation === '0') {
      if (rootGetters.lang === langCN) {
        commit('personInfoStatus', personInfo);
      } else {
        commit('personInfoLangStatus', personInfo);
      }
    } else {
      // 他人
      if (rootGetters.lang === langCN) {
        commit('relationPersonInfoStatus', personInfo);
      } else {
        commit('relationPersonInfoLangStatus', personInfo);
      }
    }
    // 存储关系
    if (rootGetters.lang === langCN) {
      commit('personRelationStatus', personInfo.personRelation);
    } else {
      commit('personRelationLangStatus', personInfo.personRelation);
    }
  },
  /**
   * 设置用户列表
   * @param {*} param0
   * @param {*} relationPersonInfo
   */
  setUserList({ commit, rootGetters }, userList) {
    if (rootGetters.lang === langCN) {
      commit('userListStatus', userList);
    } else {
      commit('userListLangStatus', userList);
    }
  },
};

export default {
  namespaced: false,
  state,
  mutations,
  actions,
};
