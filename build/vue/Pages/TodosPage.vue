<template>
    <div>
        <h1>Les taches</h1>
        <todo v-for="todo in todos" :name="todo.name" :author="todo.author"></todo>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Todo from '../Components/Todo'

    export default {
        name: 'Todos',
        components: {
            Todo
        },
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                "todos"
            ])
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