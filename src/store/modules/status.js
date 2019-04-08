import * as types from '../types';
// import config from '../../config';
// import { publicPost } from '../../js/api/index.js';
// import getApiUrl from '../../js/api/apiUrlList';

const state = {
    loading: 0,
    loginStatus: 0,
    userInfo: {
        headImg: '',
        name: '',
        openid: ''
    }
};

const getters = {
    loading: state => state.loading > 0,
    userInfo: state => state.userInfo,
    loginStatus: state => state.loginStatus > 0
};

const mutations = {
    [types.OPEN_LOADING] (state) {
        state.loading = state.loading + 1;
    },
    [types.CLOSE_LOADING] (state) {
        state.loading = state.loading > 0 ? state.loading - 1 : 0;
    },
    userInfo (state, user = null) {
        state.userInfo = user || {headImg: '', name: '', openid: ''};
    },
    loginStatus () {
        state.loginStatus = state.loginStatus + 1;
    }
};

const actions = {
    [types.CLOSE_LOADING] ({commit}) {
        setTimeout(() => {
            commit(types.CLOSE_LOADING);
        }, 400);
    },
    signIn ({commit}) {
        // let params = {};
        // params.code = config.code;
        // publicPost(getApiUrl('userInfo'), params).then((res) => {
        //     commit('userInfo', {
        //         headImg: res.headimgurl,
        //         name: res.nickname,
        //         openid: res.openid
        //     });
        //     return Promise.resolve();
        // }).catch((e) => {
        //     return Promise.reject(e);
        // });
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
