<template>
  <div class="index">
    <h2>{{$t('test')}}</h2>
    <ul>
      <router-link :to="{ path: '/scroll', query: { subjectId: 2 } }" tag="li">上拉加载，下拉刷新</router-link>
      <router-link :to="{ path: '/toast', query: { subjectId: 1 } }" tag="li">toast弹框</router-link>
    </ul>
  </div>
</template>

<script>

import { publicPost, publicGet } from '../js/api/index.js';
import getApiUrl from '../js/api/apiUrlList';

export default {
    name: 'index',
    data () {
        return {
            users: []
        };
    },
    created () {
      this.getList();
    },
    methods: {
        init () {
        },
        getList () {
            let params = {};
            params.publisherId = '';
            params.userId = '';
            params.tmails = '';
            return publicPost(getApiUrl('getContentList'), params).then((res) => {
                console.warn('#######', res);
            }).catch(() => {
                console.warn('error');
            });
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";

    .index {
      width: 100%;
      height: 100%;
      padding: pxtorem(20px);
      li {
        line-height: pxtorem(40px);
        font-size: pxtorem(16px);
        border-bottom: 1px solid #dddee3;
      }
    }

</style>
