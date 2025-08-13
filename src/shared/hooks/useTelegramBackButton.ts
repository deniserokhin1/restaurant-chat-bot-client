import { watch, onUnmounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useTelegram } from "./useTelegram"
import { RoutePaths } from "../constants"

export const useTelegramBackButton = () => {
    const { webApp } = useTelegram()
    const route = useRoute()
    const router = useRouter()

    const handleBackButton = () => {
        if (route.fullPath !== '/') router.back()
    }

    watch(() => route.fullPath, (path) => {
        try {
            if (!webApp.value) return null
    
            if (([RoutePaths.CART] as string[]).includes(path)) {
                webApp.value.BackButton.show()
                webApp.value.BackButton.onClick(handleBackButton)
            } else {
                webApp.value.BackButton.hide()
            }   
        } catch (error) {
            console.error('Error initializing Telegram WebApp:', error)
        }
    })

    onUnmounted(() => {
        if (!webApp.value) return null
        webApp.value.BackButton.offClick(handleBackButton)
    })
}