import { langCN } from '@/lang';
const getters = {
  token: state => {
    return `Bearer ${state.system.token}`;
  },
  lang: state => state.system.lang || langCN,
  baseUrl: state => state.system.baseUrl,
  openId: state => state.system.openid,
  appPlatCode: state => state.system.appPlatCode,
  businessCode: state => state.system.businessCode,
  proviceCode: state => state.system.proviceCode,
  imgUrl: state => state.system.imgUrl,
  isLoad: state => state.system.isLoad,
  // 来自uni的全局参数
  formUniParams: state => state.system.formUniParams,

  // 从uni 传过来的人员身份证信息
  currentCardNmuber: state => state.user.currentCardNmuber,
  saveFromUniParams: state => state.system.saveFromUniParams,
  locationInfo: state => state.system.locationInfo, //定位信息
  longitudeAndLatitude: state => state.system.longitudeAndLatitude, //定位信息
  // 用户列表
  userList: state => {
    if (langCN === state.system.lang) {
      return state.user.userList;
    } else {
      return state.user.userListLang;
    }
  },
  // 当前选择 0：本人 1：他人
  personRelation: state => {
    if (langCN === state.system.lang) {
      return state.user.personRelation;
    } else {
      return state.user.personRelationLang;
    }
  },
  // 当前选中的人的信息
  currentPersonInfo: (state, getters) => {
    if (getters.personRelation === '0') {
      return getters.personInfo || {};
    } else {
      return getters.relationPersonInfo || {};
    }
  },
  // 本人信息
  personInfo: state => {
    if (langCN === state.system.lang) {
      return state.user.personInfo;
    } else {
      return state.user.personInfoLang;
    }
  },
  // 他人信息
  relationPersonInfo: state => {
    if (langCN === state.system.lang) {
      return state.user.relationPersonInfo;
    } else {
      return state.user.relationPersonInfoLang;
    }
  },
};
export default getters;
