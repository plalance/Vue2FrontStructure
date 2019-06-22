import Vue from 'vue';
// Promises for VueX + VueX
import 'es6-promise/auto'
import VueX from 'vuex';
// Router
import router from './Router/router'
// Axios = easy http requests
import axios from "axios";
import VueAxios from 'vue-axios';
// Lodash = Easy operations on js objects
import VueLodash from 'vue-lodash';

Vue.use(VueX, VueAxios, axios, VueLodash);

// tititie
for(var i = 0; i < 10; i++){
}

window.Vue = Vue;

new Vue({
    el: '#app',
    router: router,
    render: h => h(require('./App.vue'))
});
