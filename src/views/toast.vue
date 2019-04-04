<template>
    <div class="toast">
        <ul>
            <li @click="toast">1.toast弹框----中间</li>
            <li @click="loading">2.加载中loading</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'toast',
        methods: {
            toast () {
                this.$toast.center('弹框在中间');
            },
            loading () {
                this.$loading.open('加载中');
                setTimeout(() => {
                    console.warn('关闭');
                    this.$loading.close('加载中');
                }, 3000);
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";

    .toast {
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
