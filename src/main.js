import Vue from 'vue';
import App from './App.vue';
import Login from './login.vue';
import Tourney from './Tourney.vue';
import VueRouter from 'vue-router';
import Register from './register';
// import { homedir } from 'os';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const NotFound = {template : '<p> this in the the page you are looking for </p>'}

const routes = [
    { path: '/', component: Tourney},
    {path: '/login', component: Login },
    {path: '/tourney', component: NotFound },
    {path: '/register', component: Register}
];

const router = new VueRouter({
    routes
});


new Vue({

    router,

    render: h => h(App)
}).$mount('#app');
