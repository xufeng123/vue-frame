<template>
    <div class="page-error">
        <h2>404 page not found</h2>
    </div>
</template>

<script>

    export default {
        components: { },

        data () {
            return {

            };
        },

        mounted () {
        },

        methods: {

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";

    .page-error {

        h2 {
            margin: pxtorem(150px) 0 0 0 !important;
            line-height: pxtorem(40px);
            text-align: center;
            color: #858585;
            padding-bottom: pxtorem(150px);
        }

        .desc {
            height: pxtorem(28px);
            font-size: pxtorem(14px);
            line-height: pxtorem(28px);
            padding-left: pxtorem(15px);
            color: #777E8C;
            background: #f2f2f4;
        }
    }
</style>
