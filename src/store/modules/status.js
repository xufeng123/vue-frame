import * as types from '../types';

const state = {
    loading: 0,
    position: Object.create({}) // 滚动元素的位置信息
};

const getters = {
    loading: state => state.loading > 0,
    position: state => state.position
};

const mutations = {
    [types.OPEN_LOADING] (state) {
        state.loading = state.loading + 1;
    },
    [types.CLOSE_LOADING] (state) {
        state.loading = state.loading > 0 ? state.loading - 1 : 0;
    },
    [types.SET_POSITION] (state, {key = '-1', val = {id: '', x: 0, y: 0}} = {}) {
        state.position[key] = val;
    },
    [types.GET_POSITION] (state, key = '') {
        if (!key || !state.position.hasOwnProperty(key)) return null;
        return state.position[key];
    },
    [types.DEL_POSITION] (state, key = '') {
        if (!key || !state.position.hasOwnProperty(key)) return null;
        delete state.position[key];
    }
};

const actions = {
    [types.CLOSE_LOADING] ({commit}) {
        setTimeout(() => {
            commit(types.CLOSE_LOADING);
        }, 400);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
