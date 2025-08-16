<template>
    <Dashboard
        :buttons="customButtons"
        :active-button="activeButtonIndex"
        class="dashboard-demo"
        @button-click="handleButtonClick"
    />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Dashboard } from '@/shared/ui'

interface DashboardButton {
    text: string
    icon: string
    iconType?: 'emoji' | 'svg'
    action?: () => void
}

const activeButtonIndex = ref(0)

const customButtons = ref<DashboardButton[]>([
    {
        text: 'Главная',
        icon: '🏠',
        iconType: 'emoji',
        action: () => console.log('Переход на главную')
    },
    {
        text: 'Поиск',
        icon: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
        iconType: 'svg',
        action: () => console.log('Открыть поиск')
    },
    {
        text: 'Чат',
        icon: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z',
        iconType: 'svg',
        action: () => console.log('Открыть чат')
    },
    {
        text: 'Профиль',
        icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
        iconType: 'svg',
        action: () => console.log('Открыть профиль')
    }
])

const activeButtonText = computed(() => {
    return customButtons.value[activeButtonIndex.value]?.text || 'Не выбрано'
})

function handleButtonClick(index: number) {
    console.log(`Клик по кнопке: ${customButtons.value[index].text}`)
}
</script>

<style scoped>
.dashboard-demo {
    display: flex;
    flex-direction: column;
    background: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
}

.dashboard-demo__content {
    flex: 1;
    padding: 20px 16px;
    padding-bottom: 100px;
}

.dashboard-demo__title {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 8px 0;
    text-align: center;
}

.dashboard-demo__subtitle {
    font-size: 16px;
    color: var(--tg-theme-subtitle-text-color);
    margin: 0 0 32px 0;
    text-align: center;
}

.dashboard-demo__section {
    background: var(--tg-theme-section-bg-color);
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
}

.dashboard-demo__section h2 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 16px 0;
    color: var(--tg-theme-text-color);
}

.dashboard-demo__controls {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.dashboard-demo__label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
}

.dashboard-demo__select {
    padding: 12px;
    border: 1px solid var(--tg-theme-secondary-bg-color);
    border-radius: 8px;
    background: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
    font-size: 14px;
}

.dashboard-demo__select:focus {
    outline: none;
    border-color: var(--tg-theme-accent-text-color);
}
</style>
