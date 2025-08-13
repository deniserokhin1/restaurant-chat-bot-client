import { createRouter, createWebHistory } from 'vue-router'
import { Сhat, Cart } from '@/pages'
import { RoutePaths } from '@/shared/constants'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: RoutePaths.HOME,
            name: 'home',
            component: Сhat
        },
        {
            path: RoutePaths.CART,
            name: 'cart',
            component: Cart
        },
    ]
})

export default router
