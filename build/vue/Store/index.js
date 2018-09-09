import Vuex from 'vuex'

const state = {
    todos: [{
        name: 'Super tache',
        author: 'Paul'
    },
        {
            name: 'Tache 2',
            author: 'Super autheur'
        }
    ]
};

const mutations = {
    ADD_TODO: (state, todo) => {
        state.todos.push({
            name: todo.name,
            author: todo.author
        })
    }
};

const getters = {
    todos: (state) => state.todos,
    lastTodo: (state) => {
        return state.todos.length > 0 ? state.todos[state.todos.length-1] : null
    },
};


let store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: {}
});

global.store = store;

export default store;