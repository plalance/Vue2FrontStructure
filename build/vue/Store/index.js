import Vuex from 'vuex'

const state = {
    todos: [{
        name: 'Super tache',
        author: 'Paul'
    }]
};

const mutations = {
    ADD_TODO: (state, todo)=>{
        state.todos.push({
            name: todo.name,
            author: todo.author
        })
    }
};

const getters = {
    todos: (state) => state.todos
};


let store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: {}
});

global.store = store;

export default store;