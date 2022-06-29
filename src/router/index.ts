import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Lobby',
        component: () => import('../components/Lobby/LobbyMain.vue')
    },
    {
        path: '/sign',
        name: 'Sign',
        component: () => import('../components/Sign/SignMain.vue')
    },
    {
        path: '/draw',
        name: 'DrawWorkspace',
        component: () => import('../components/Workspace/DrawWorkspace.vue')
    },
    {
        path: '/friend',
        name: 'Friend',
        component: () => import('../components/Friend/FriendMain.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
