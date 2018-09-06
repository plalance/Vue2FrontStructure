<template>
    <div>
        <vheader></vheader>
        <main class="app__page">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import Header from './components/Header';
    export default {
        name: 'App',
        components: {
            vheader: Header
        },
        data: function () {
            return {
            }
        },
        computed: {},
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        methods : {

        }
    };
</script>