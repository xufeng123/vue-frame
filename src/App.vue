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
