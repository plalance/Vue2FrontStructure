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
            path: '/admininistration',
            name: 'admininistration',
            meta: {
                title: 'Administration',
                admin: true
            },
            component: require('../Pages/Administration/Admin.vue'),
        }
    ]
});

function goToPage(next, to){
    document.title = to.meta.title;
    next();
}

router.beforeEach((to, from, next) => {

   if(to.meta.admin === true){
       console.log("Admin Bloqué, voir la configuration");
       if(configuration.MODE_ADMIN){
          goToPage(next, to);
       }else {
           next('/');
       }
   }else {
       goToPage(next, to);
   }
});

global.router = router;

export default router