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
        path: '/profile',
        component: () => import('../components/Profile/ProfileMain.vue'),
        children: [
            {
                path: '',
                name: 'MyInfo',
                component: () => import('../components/Profile/MyInfo.vue')
            },
            {
                path: 'gallery',
                name: 'Gallery',
                component: () => import('../components/Profile/QuizGallery.vue')
            },
            {
                path: 'option',
                name: 'Option',
                component: () => import('../components/Profile/MyOption.vue')
            }
        ]
    },
    {
        path: '/friend',
        component: () => import('../components/Friend/FriendMain.vue'),
        children: [
            {
                path: '',
                name: 'MyFriend',
                component: () => import('../components/Friend/MyFriend.vue')
            },
            {
                path: 'recommend',
                name: 'RecommendFriend',
                component: () => import('../components/Friend/MyFriend.vue')
            },
            {
                path: 'receive',
                name: 'FriendReceive',
                component: () => import('../components/Friend/FriendReceive.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
