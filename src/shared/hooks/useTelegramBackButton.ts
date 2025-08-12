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
        if (!webApp.value) return null

        if (path !== '/') {
            webApp.value.BackButton.show()
            webApp.value.BackButton.onClick(handleBackButton)
        } else {
            webApp.value.BackButton.hide()
        }
    })

    onUnmounted(() => {
        if (!webApp.value) return null
        webApp.value.BackButton.offClick(handleBackButton)
    })
}