<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
            };
        },
        mounted () {
        },
        watch: {
        },
        computed: {
        },
        methods: {
            goBack () {
                this.$router.go(-1);
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import './scss/app.scss';
    @import "./scss/variables";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100vh;
    }

</style>
