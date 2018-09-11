<template>
    <header>
        <ul>
            <li v-for="route in routes">
                <router-link :to="route.path">{{ route.meta.title }}</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return{
                routes: router.options.routes
            }
        }
    };
</script>