import VueI18n from 'vue-i18n';
import Vue from 'vue';
/**
 * 中文编码
 */
const langCN = 'zh-cn';
/**
 * 英文编码
 */
const langEN = 'en-us';

import * as cn from './cn';
import * as en from './en';

export { langCN, langEN, cn, en };

const messages = {
  cn: {
    ...cn,
  },
  en: {
    ...en,
  },
};
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'cn',
  messages,
});

export default i18n;
