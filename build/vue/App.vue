<template>
    <div>
        <vheader></vheader>
        <main class="app__page">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import Header from './Components/Header';
    import Store from './Store';

    export default {
        name: 'App',
        store: Store,
        components: {
            vheader: Header
        },
        data() {
            return {
            }
        },
        computed: {
        },
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