<template>
    <div>
        <vheader></vheader>
        <h2>App</h2>
        <div class="app__page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header';
    export default {
        name: 'App',
        data: function () {
            return {
            }
        },
        components: {
            vheader: Header
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        computed: {},
    };
</script>