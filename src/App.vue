<template>
    <div id="app"
        v-swipe="swipe"
        swipe-direction="right"
        swipe-distance="300">
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
    import { getQueryStringByName } from './js/utils/utils';
    import Swipe from './vendor/swipe/v-swipe'; // 滑动手势
    import ScrollPosition from './vendor/v-scroll-position.js';
    require('./js/static/velocity.min.js');

    Vue.use(Swipe); // 滑动手势
    Vue.use(ScrollPosition); // 滚动条位置信息

    export default {
        name: 'app',
        data () {
            return {
                trans: 'fade'
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
            },
            '$route.name' (to, from) {
                // 根据时间戳，判断是前进还是返回
                if (!this.$route.query.timestamp) {
                    this.trans = 'fade';
                } else if (!this.$router.direct()) { // back
                    this.trans = 'slide-right';
                } else { // in
                    this.trans = 'slide-left';
                }
            }
        },
        computed: {
        },
        methods: {
            swipe () {
                if (getQueryStringByName('timestamp')) {
                    this.$router.go(-1);
                } else {
                    this.$toast.center('不可以后退了');
                }
            },
            /**
             * 手动transition动画
             * 默认的动画会影响keep-alive的scrollBehavior计算，原因在于计算时动画渲染还未完成，获取不到scroll，所以window.scrollTo无法完成
             * 取消了scrollBehavior方式，使用v-scroll-position指令方式，在动画结束时，手动触发指令挂载（inserted）钩子
             */
            beforeEnter (el) {
                el.style.opacity = 0.1;
            },
            enter (el, done) {
                let flt = 0; // 首页，渐进
                if (this.trans === 'slide-left') { // 进入
                    flt = 40;
                } else if (this.trans === 'slide-right') { // 回退
                    flt = -40;
                }
                // 在这里处理滚动位置，如果放在before会出现绑定与挂载顺序问题，放在after会出现闪动。。。
                if (this.$router.direct() && el) { // 前进，因为添加了transition，这里directive的inserted钩子未能正常执行，所以在动画结束后进行手动触发。。。
                    // 防止新页面也是keep-alive的，清除所有位置信息
                    ScrollPosition.clear(el);
                } else if (!this.$router.direct() && el) { // 回退
                    this.$nextTick().then(() => {
                        ScrollPosition.inserted(el);
                    });
                }
                // 开始动画
                Velocity(el, { opacity: 1, translateX: [0, flt], translateZ: 0 }, 300, done); //eslint-disable-line
            },
            afterEnter (el) { // 还原滚动条信息
                el.style.transform = ''; // 清除动画残留，避免合并层过多。。。
            },
            leave (el, done) { // 离开前获取滚动条信息
                el.style.opacity = 0.1;
                done();
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
    /* 滑入滑出动画。 */
    .slide-left-enter-active, .slide-right-enter-active {
        transition: all 0.3s ease;
    }

    .slide-left-leave-active, .slide-right-leave-active {
        transition: all 0.1s ease;
    }

    .slide-left-enter, .slide-left-leave-active {
        transform: translateX(20px);
        opacity: 0.1;
    }

    .slide-right-enter, .slide-right-leave-active {
        transform: translateX(-20px);
        opacity: 0.1;
    }

</style>
