<template>
    <div class="todo">
        <p>Titre : {{ name }}</p>
        <p>Auteur : {{ author }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Todo',
        data() {
            return{
            }
        },
        props: {
            name: null,
            author: null
        }
    };
</script>