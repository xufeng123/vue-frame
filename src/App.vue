<template>
    <div id="container">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
            :css="false"
        >
            <keep-alive>
                <router-view ref="page" v-if="$route.meta.keepAlive" v-scroll-position></router-view>
            </keep-alive>
        </transition>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
            :css="false"
        >
            <router-view ref="page" v-if="!$route.meta.keepAlive" v-scroll-position></router-view>
        </transition>
    </div>
</template>

<script>
    import Vue from 'vue';
    import ScrollPosition from './vendor/v-scroll-position.js';

    Vue.use(ScrollPosition); // 滚动条位置信息

    export default {
        name: 'app',
        data () {
            return {
            };
        },
        mounted () {
            this.loadingObj = document.getElementById('loading-wrapper');
        },
        watch: {
            '$store.state.status.loading' (val) {
                if (this.loadingObj && val) {
                    this.loadingObj.style.display = 'block';
                } else if (this.loadingObj && !val) {
                    this.loadingObj.style.display = 'none';
                }
            }
        },
        computed: {
        },
        methods: {
            beforeEnter () {
            },
            enter (el) {
                if (this.$router.direct() && el) { // 前进，因为添加了transition，这里directive的inserted钩子未能正常执行，所以在动画结束后进行手动触发。。。
                    // 防止新页面也是keep-alive的，清除所有位置信息
                    ScrollPosition.clear(el);
                } else if (!this.$router.direct() && el) { // 回退
                    this.$nextTick().then(() => {
                        ScrollPosition.inserted(el);
                    });
                }
            },
            afterEnter () { // 还原滚动条信息
            },
            leave () { // 离开前获取滚动条信息
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import './scss/app.scss';
    @import "./scss/variables";

    #app {
        font-family: 'Arial';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100vh;
    }

</style>
