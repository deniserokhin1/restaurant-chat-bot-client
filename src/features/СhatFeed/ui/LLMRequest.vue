<template>
    <div class="controls">
        <input
            class="controls__input"
            v-model="inputValue"
            type="text"
            :disabled="isLoading"
        />
        <button
            class="controls__btn"
            @click="requestHandler"
            :disabled="isLoading"
        >
            {{ buttonText }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { useChatFeedStore } from '@/entities'
import { ref } from 'vue'

defineProps({
    buttonText: {
        type: String,
        default: 'Спросить',
    },
})

const inputValue = ref('')
const isLoading = ref(false)

const chatFeedStore = useChatFeedStore()

const requestHandler = async () => {
    if (!inputValue.value || isLoading.value) return
    const query = inputValue.value
    inputValue.value = ''

    chatFeedStore.addUserQuery(query)
    isLoading.value = true
    const startTime = Date.now()
    await chatFeedStore.getLlmAnswer(query)
    isLoading.value = false
    const endTime = Date.now()
    const responseTime = endTime - startTime
    console.log('Время ответа от сервера:', responseTime, 'мс')
}
</script>

<style>
.controls {
    width: 100%;
    display: flex;
    padding: 16px;
    flex-direction: column;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
}

.controls__input {
    padding: 15px;
    font-size: 16px;
    border: 2px solid #007bff;
    border-radius: 5px;
    outline: none;
    transition:
        border-color 0.3s,
        box-shadow 0.3s;

    &:focus {
        border-color: #0056b3;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
    &:disabled {
        border-color: #007bffa7;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
}

.controls__btn {
    margin-top: 10px;
    padding: 15px 25px;
    font-size: 16px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition:
        background-color 0.3s,
        transform 0.3s;

    &:hover {
        background-color: #0056b3;

        transform: translateY(-2px);
    }

    &:hover {
        background-color: #0056b3;

        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(1px);
    }

    &:disabled {
        background-color: #007bffa7;
        cursor: not-allowed;
        transform: none;
    }
}
</style>
