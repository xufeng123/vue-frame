import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh from './langs/zh.js';
import en from './langs/en.js';
import config from '../config.js';

Vue.use(VueI18n);

const messages = {
    en: en,
    zh: zh
};

const i18n = new VueI18n({
    locale: config.lang || 'zh',
    messages
});

export default i18n;
