import * as types from '../types';

const state = {
    loading: 0
};

const getters = {
    loading: state => state.loading > 0
};

const mutations = {
    [types.OPEN_LOADING] (state) {
        state.loading = state.loading + 1;
    },
    [types.CLOSE_LOADING] (state) {
        state.loading = state.loading > 0 ? state.loading - 1 : 0;
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
