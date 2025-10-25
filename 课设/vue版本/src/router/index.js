import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';
import login from '../views/login.vue';
import about from '../views/about.vue';
import markdownOfNginx from '../markdown/markdownOfNginx.vue';
import markdownOfAlgorithm from '../markdown/markdownOfAlgorithm.vue';
import markdownOfVue from '../markdown/markdownOfVue.vue';
import service from '../views/service.vue';
const routes = [
    { path: '/', name: 'home', component: home },
    { path: '/login', name: 'login', component: login },
    { path: '/about', name: 'about', component: about },
    { path: '/markdown/markdownOfNginx', name: 'markdownOfNginx', component: markdownOfNginx },
    { path: '/markdown/markdownOfAlgorithm', name: 'markdownOfAlgorithm', component: markdownOfAlgorithm },
    { path: '/markdown/markdownOfVue', name: 'markdownOfVue', component: markdownOfVue },
    { path: '/service', name: 'service', component: service }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('isLogin') === 'true'; // 修改这里
    if (!isLogin && to.path !== '/login') {
        next('/login');
    }
    else {
        next();
    }
});
export default router;