import type { WebApp, WebAppUser } from "telegram-web-app"
import { onMounted, ref, shallowRef } from "vue"

interface TelegramState {
    webApp: WebApp | null
    isTelegram: boolean
    user: WebAppUser | null
}

class TelegramManager {
    private static instance: TelegramManager | null = null
    private state: TelegramState
    private isInitializing = false
    private initializationPromise: Promise<void> | null = null

    private constructor() {
        this.state = {
            webApp: null,
            isTelegram: false,
            user: null
        }
    }

    public static getInstance(): TelegramManager {
        if (!TelegramManager.instance) {
            TelegramManager.instance = new TelegramManager()
        }
        return TelegramManager.instance
    }

    public getState(): TelegramState {
        return this.state
    }

    public async initialize(): Promise<void> {
        // Если уже инициализируемся, ждем завершения
        if (this.isInitializing && this.initializationPromise) {
            await this.initializationPromise
            return
        }

        // Если уже инициализированы, ничего не делаем
        if (this.state.isTelegram && this.state.webApp) {
            return
        }

        // Начинаем инициализацию
        this.isInitializing = true
        this.initializationPromise = new Promise(async (resolve) => {
            try {
                await this.performInitialization()
            } catch (error) {
                console.error('Failed to initialize Telegram WebApp:', error)
                this.setState({
                    webApp: null,
                    isTelegram: false,
                    user: null
                })
            } finally {
                this.isInitializing = false
                this.initializationPromise = null
                resolve()
            }
        })

        await this.initializationPromise
    }

    private async performInitialization(): Promise<void> {
        // Проверяем доступность Telegram WebApp API
        if (!Object.keys(window.Telegram?.WebApp?.initDataUnsafe).length) {
            console.warn('Telegram WebApp API not available')
            this.setState({
                webApp: null,
                isTelegram: false,
                user: {
                    id: 0,
                    first_name: 'Test',
                    last_name: 'Test',
                    username: 'Test',
                    language_code: 'Test',
                }
            })
            return
        }

        const tg = window.Telegram.WebApp
        const userData = tg.initDataUnsafe?.user

        // Проверяем валидность пользователя
        if (!userData?.id) {
            console.warn('Invalid Telegram user data')
            this.setState({
                webApp: null,
                isTelegram: false,
                user: null
            })
            return
        }

        // Инициализируем Telegram WebApp
        tg.ready()
        tg.requestFullscreen()
        tg.disableVerticalSwipes()
        
        this.setState({
            webApp: tg,
            isTelegram: true,
            user: userData
        })

        console.log('Telegram WebApp initialized successfully', { userId: userData.id })
    }

    private setState(newState: TelegramState): void {
        this.state = { ...newState }
    }

    public reset(): void {
        this.setState({
            webApp: null,
            isTelegram: false,
            user: null
        })
        this.isInitializing = false
        this.initializationPromise = null
    }
}

export const useTelegram = () => {
    const telegramManager = TelegramManager.getInstance()
    
    const webApp = shallowRef<WebApp | null>(null)
    const isTelegram = ref(false)
    const user = ref<WebAppUser | null>(null)

    const initializeTelegram = async (): Promise<void> => {
        await telegramManager.initialize()
        const state = telegramManager.getState()
        webApp.value = state.webApp
        isTelegram.value = state.isTelegram
        user.value = state.user
    }

    onMounted(() => {
        initializeTelegram()
    })

    return {
        webApp,
        isTelegram,
        user,
        initialize: initializeTelegram,
        reset: () => {
            telegramManager.reset()
            webApp.value = null
            isTelegram.value = false
            user.value = null
        }
    }
}