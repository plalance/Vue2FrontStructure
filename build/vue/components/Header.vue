<template>
    <div>
        <ul>
            <li v-for="route in routes">
                <router-link :to="route.path">{{ route.name }}</router-link>
            </li>
        </ul>
    </div>
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