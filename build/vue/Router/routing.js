const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Accueil',
            admin: false
        },
        component: require('../Pages/Home.vue'),
    },
    {
        path: '/foo',
        name: 'foo',
        meta: {
            title: 'Foo',
            admin: false
        },
        component: require('../Pages/Foo.vue'),
    },
    {
        path: '/todos',
        name: 'todos',
        meta: {
            title: 'Taches',
            admin: false
        },
        component: require('../Pages/TodosPage.vue'),
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {
            title: 'Administration',
            admin: true
        },
        component: require('../Pages/Administration/Admin.vue'),
    }
];

export default routes;