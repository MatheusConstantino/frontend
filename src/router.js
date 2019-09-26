import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import NewUser from './views/NewUser.vue';
import NewCompany from './views/NewCompany.vue';
import PasswordReset from './views/PasswordReset.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/users/new', name: 'newUser', component: NewUser },
    { path: '/companies/new', name: 'newCompany', component: NewCompany },
    { path: '/reset-password', name: 'passwordReset', component: PasswordReset },
  ],
});
