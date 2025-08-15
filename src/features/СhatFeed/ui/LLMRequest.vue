<template>
    <div class="controls">
        <input
            class="controls__input"
            v-model="inputValue"
            type="text"
            ref="input"
            :disabled="isLoading"
            placeholder="Введите блюдо или вопрос"
        />
        <button
            class="controls__btn"
            @click="requestHandler"
            :disabled="isLoading"
        >
            {{ buttonText }}
        </button>
        <button
            class="controls__btn"
            @click="router.push('/cart')"
        >
            Корзина
        </button>
    </div>
</template>

<script setup lang="ts">
import { useChatFeedStore } from '@/entities'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
    buttonText: {
        type: String,
        default: 'Спросить',
    },
})

const emit = defineEmits<{
    (e: 'add-user-query'): void
}>()

const input = ref<HTMLInputElement | null>(null);
const inputValue = ref('')
const isLoading = ref(false)

const chatFeedStore = useChatFeedStore()
//@ts-ignore
const tg = window.Telegram?.WebApp

const requestHandler = async () => {
    console.log('tg:', tg);
    if (!inputValue.value || isLoading.value) return
    const query = inputValue.value
    inputValue.value = ''

    chatFeedStore.addUserQuery(query)
    isLoading.value = true
    const startTime = Date.now()
    emit('add-user-query')
    await chatFeedStore
        .getLlmAnswer(query)
        .catch((e) => {
            console.log('Ошибка при получении ответа от LLM:', e)
            chatFeedStore.errorHandler(e)
        })
        .finally(() => {
            isLoading.value = false
        })
    const endTime = Date.now()
    const responseTime = endTime - startTime
    console.log('Время ответа от сервера:', responseTime, 'мс')
}
</script>

<style>
.controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
}

.controls__input {
    width: 100%;
    min-width: 0;
    padding: 15px;
    font-size: 16px;
    border: 2px solid var(--tg-theme-bottom-bar-bg-color);
    border-radius: 25px;
    outline: none;
    transition:
        border-color 0.3s,
        box-shadow 0.3s;

    &:focus {
        border-color: var(--tg-theme-accent-text-color);
    }
    &:disabled {
        opacity: 0.7;
    }
}

.controls__btn {
    padding: 15px;
    font-size: 16px;
    color: var(--tg-theme-button-text-color);
    background-color: var(--tg-theme-button-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition:
        background-color 0.3s,
        transform 0.3s;

    &:active {
        transform: translateY(1px);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
    }
}
</style>
