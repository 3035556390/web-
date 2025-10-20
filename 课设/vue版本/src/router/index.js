import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';
import login from '../views/login.vue';
const routes = [
    { path: '/', name: 'home', component: home },
    { path: '/login', name: 'login', component: login }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('isLogin') === 'true'; // 修改这里
    if (!isLogin && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});
export default router;