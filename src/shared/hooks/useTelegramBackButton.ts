import { watch, onUnmounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useTelegram } from "./useTelegram"

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

            console.log('webApp', webApp.value)
            console.log('path', path)
    
            if (path !== '/') {
                console.log('show')
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