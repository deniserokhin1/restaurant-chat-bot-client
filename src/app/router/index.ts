import { createRouter, createWebHistory } from 'vue-router'
import { Сhat, Cart } from '@/pages'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Сhat
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
    ]
})

export default router
