import { langCN } from '@/lang';
import i18n from '@/lang';
const defaultLang = langCN;
const state = {
  baseUrl: '',
  token: '',
  openid: '',
  appPlatCode: '',
  lang: defaultLang,
  businessCode: '',
  proviceCode: '110000',
  // pro
  imgUrl: 'https://api-wechat-vaccine-resource.soundai.info/public/multi/',
  formUniParams: {},
  locationInfo: {},
  //经纬度信息
  longitudeAndLatitude: {},
  isLoad: false,
};
//同步操作
const mutations = {
  saveIsLoadState: (state, isload) => {
    if (isload) {
      state.isLoad = isload;
    } else {
      state.isLoad = false;
    }
  },
  saveFromUniParams: (state, uniParams) => {
    if (uniParams) {
      state.formUniParams = Object.assign({ ...state.formUniParams }, { ...uniParams });
    } else {
      state.formUniParams = {};
    }
  },
  saveProviceCode: (state, proviceCode) => {
    if (proviceCode) {
      state.proviceCode = proviceCode;
    } else {
      state.proviceCode = '';
    }
  },
  saveBusinessCode: (state, businessCode) => {
    if (businessCode) {
      state.businessCode = businessCode;
    } else {
      state.businessCode = '';
    }
  },
  setOpenid: (state, openid) => {
    if (openid) {
      state.openid = openid;
    } else {
      state.openid = '';
    }
  },
  setToken(state, token) {
    if (token) {
      state.token = token;
    } else {
      state.token = '';
    }
  },
  setLang: (state, data) => {
    state.lang = data || langCN;
    // 切换中文
    if (langCN === state.lang) {
      i18n.locale = 'cn';
      // 切换英文
    } else {
      i18n.locale = 'en';
    }
  },
  setLocationInfo: (state, data) => {
    if (data) {
      state.locationInfo = { ...data };
    } else {
      state.locationInfo = {};
    }
  },
  setlongitudeAndLatitude: (state, data) => {
    if (data) {
      state.longitudeAndLatitude = { ...data };
    } else {
      state.longitudeAndLatitude = {};
    }
  },
};
//可以包含异步操作
const actions = {
  /**
   * 存储uni传来的参数
   * @param {*} param0
   * @param {*} uniparams
   */
  setFromUniPrams({ commit }, uniparams) {
    commit('saveFromUniParams', uniparams);
  },
  /**
   * 设置OpenId
   * @param {*} param0
   * @param {*} lang
   */
  setOpenid({ commit }, openid) {
    commit('setOpenid', openid);
  },
  /**
   * 设置token
   * @param {*} param0
   * @param {*} lang
   */
  setToken({ commit }, token) {
    commit('setToken', token);
  },
  /**
   * 设置语言
   * @param {*} param0
   * @param {*} lang
   */
  setLang({ commit }, lang) {
    commit('setLang', lang);
  },
  /**
   * 设置是否加载
   * @param {*} param0
   * @param {*} isload
   */
  setIsLoadState({ commit }, isload) {
    commit('saveIsLoadState', isload);
  },

  /**
   * 为了支持全国是同的code,数据库
   * @param {*} param0
   * @param {*} businessCode
   */
  setBusinessCode({ commit }, businessCode) {
    commit('saveBusinessCode', businessCode);
  },
  /**
   * 存储uni传来的省份信息
   * @param {*} param0
   * @param {*} proviceCode
   */
  setProviceCode({ commit }, proviceCode) {
    commit('saveProviceCode', proviceCode);
  },
  /**
   * 存储定位传来的省份信息
   * @param {*} param0
   * @param {*} data
   */
  setLocationInfo({ commit }, data) {
    commit('setLocationInfo', data);
  },
  /**
   * 存储定位传来的经纬度信息
   * @param {*} param0
   * @param {*} data
   */
  setlongitudeAndLatitude({ commit }, data) {
    commit('setlongitudeAndLatitude', data);
  },
};

export default {
  namespaced: false,
  state,
  mutations,
  actions,
};
