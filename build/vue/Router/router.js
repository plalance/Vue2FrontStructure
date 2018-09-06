import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                title: 'Accueil',
            },
            component: require('../Pages/Home.vue'),
        },
        {
            path: '/foo',
            name: 'foo',
            meta: {
                title: 'Foo',
            },
            component: require('../Pages/Foo.vue'),
        }
    ]
});

router.beforeEach((to, from, next) => {
    // Titre de l'onglet
   document.title = to.meta.title;
   next();
    // if ( from.name == 'About' ) {
    //     next(false);
    // } else {
    //     next();
    // }
});

global.router = router;

export default router