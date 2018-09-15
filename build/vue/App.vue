<template>
    <div id="app">
        <vheader></vheader>
        <main class="app__page">
            <transition name="slide">
                <router-view></router-view>
            </transition>
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