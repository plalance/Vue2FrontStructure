import Vue from 'vue';

import router from './Router/router'

import axios from "axios";
import VueAxios from 'vue-axios';
import VueLodash from 'vue-lodash';

Vue.use(VueAxios, axios, VueLodash);

window.Vue = Vue;

new Vue({
    el: '#app',
    router: router,
    render: h => h(require('./App.vue'))
});