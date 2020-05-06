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
                next('setup/step1');
            } else {
                next();
            }
        },
    },
    {
        path: '/setup',
        component: () => import(/* webpackChunkName: "setup" */ '../views/setup.vue'),
        beforeEnter(to, from, next) {
            if (game.state.gameStarted) {
                next('/');
            } else {
                next();
            }
        },
        children: [
            {
                path: 'step1',
                component: () => import(/* webpackChunkName: "setup-step1" */ '../views/setup/Step1 - Add players.vue'),
            },
            {
                path: 'step2',
                component: () => import(/* webpackChunkName: "setup-step2" */ '../views/setup/Step2 - Setup Board.vue'),
                beforeEnter(to, from, next) {
                    if (game.state.players.length < 1) {
                        next('/setup/step1');
                    } else {
                        next();
                    }
                },
            },
            {
                path: 'step3',
                component: () => import(/* webpackChunkName: "setup-step3" */ '../views/setup/Step3 - Set ownedfields.vue'),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
