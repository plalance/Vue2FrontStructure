<template>
    <div class="todo">
        <p>TOT V2</p>
        <p>Titre : {{ todoClone.name }}</p>
        <p>Auteur : {{ todoClone.author }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Todo',
        props: {
            name: null,
            author: null,
            editable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                in_edition: false,
                todoClone: {
                    name: '',
                    author: ''
                }
            }
        },
        watch: {
            name: function(value) {
                this.updateTodoClone(value);
            },
            author: function(value) {
                this.updateTodoClone(null, value);
            }
        },
        mounted() {
            this.updateTodoClone(this.name, this.author);
        },
        beforeMount() {
        },
        methods: {
            updateTodoClone(name, author){
                if(author){
                    this.todoClone.author = author;
                }
                if(name){
                    this.todoClone.name = name;
                }
            }
        }
    };
</script>