import { createRouter, createWebHistory } from 'vue-router'
import { Сhat } from '@/pages'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Сhat
        },
    ]
})

export default router
