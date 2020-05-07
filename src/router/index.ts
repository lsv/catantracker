import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import game from '../store/modules/SetupStore';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "play" */ '../views/Play.vue'),
        beforeEnter(to, from, next) {
            if (!game.state.gameStarted) {
                next('setup');
            } else {
                next();
            }
        },
    },
    {
        path: '/setup',
        component: () => import(/* webpackChunkName: "setup" */ '../views/Setup.vue'),
        beforeEnter(to, from, next) {
            if (game.state.gameStarted) {
                next('/');
            } else {
                next();
            }
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
