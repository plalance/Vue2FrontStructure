<template>
    <div style="background: red;">
        <h1>Home NEW VERSION</h1>
        <div v-if="lastTodo !== null">
            <p>Dernière Todo:</p>
            <todo :name="lastTodo.name" :author="lastTodo.author"></todo>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Todo from '../Components/Todo'

    export default {
        name: 'Home',
        components: {
            Todo
        },
        computed: {
            ...mapGetters([
                "lastTodo"
            ])
        },
    };
</script>