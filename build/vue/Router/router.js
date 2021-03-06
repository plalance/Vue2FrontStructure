import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routing';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: routes
});

function goToPage(next, to){
    document.title = to.meta.title;
    next();
}

router.beforeEach((to, from, next) => {

   if(to.meta.admin === true){
       if(configuration.MODE_ADMIN){
          goToPage(next, to);
       }else {
           console.log("Admin Bloqué, voir la configuration");
           next('/');
       }
   }else {
       goToPage(next, to);
   }
});

global.router = router;

export default router