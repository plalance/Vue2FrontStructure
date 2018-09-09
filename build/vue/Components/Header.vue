<template>
    <header>
        <ul>
            <li v-for="route in routes">
                <router-link :to="route.path">{{ route.name }}</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data: function () {
            return {
                routes: router.options.routes
            }
        }
    };
</script>