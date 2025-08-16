<template>
    <div class="dashboard">
        <div class="dashboard__grid">
            <button
                v-for="(button, index) in buttons"
                :key="index"
                class="dashboard__button"
                :class="{
                    'dashboard__button--active': activeButton === index
                }"
                @click="handleButtonClick(index)"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
            >
                <div class="dashboard__button-icon">
                    <span v-if="button.iconType === 'emoji'" class="dashboard__icon-emoji">
                        {{ button.icon }}
                    </span>
                    <svg v-else-if="button.iconType === 'svg'" class="dashboard__icon-svg" viewBox="0 0 24 24">
                        <path :d="button.icon" fill="currentColor" />
                    </svg>
                    <span v-else class="dashboard__icon-emoji">
                        {{ button.icon }}
                    </span>
                </div>
                <span class="dashboard__button-text">{{ button.text }}</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface DashboardButton {
    text: string
    icon: string
    iconType?: 'emoji' | 'svg'
    action?: () => void
}

interface Props {
    buttons?: DashboardButton[]
    activeButton?: number
}

interface Emits {
    (e: 'button-click', index: number): void
}

const props = withDefaults(defineProps<Props>(), {
    buttons: () => [
        {
            text: 'Главная',
            icon: '🏠',
            iconType: 'emoji'
        },
        {
            text: 'Поиск',
            icon: '🔍',
            iconType: 'emoji'
        },
        {
            text: 'Чат',
            icon: '💬',
            iconType: 'emoji'
        },
        {
            text: 'Профиль',
            icon: '👤',
            iconType: 'emoji'
        }
    ],
    activeButton: 0
})

const emit = defineEmits<Emits>()

const activeButton = ref(props.activeButton)

function handleButtonClick(index: number) {
    activeButton.value = index
    emit('button-click', index)
    
    if (props.buttons[index].action) {
        props.buttons[index].action!()
    }
}

function handleTouchStart(event: TouchEvent) {
    const target = event.currentTarget as HTMLElement
    target.style.transform = 'scale(0.95)'
}

function handleTouchEnd(event: TouchEvent) {
    const target = event.currentTarget as HTMLElement
    target.style.transform = 'scale(1)'
}
</script>

<style scoped>
.dashboard__grid {
    display: flex;
    justify-content: space-between;
    gap: 8px;
}

.dashboard__button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 12px;
    padding: 12px 8px;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    min-height: 60px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

.dashboard__button:hover {
    background: var(--tg-theme-secondary-bg-color);
}

.dashboard__button--active {
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}

.dashboard__button--active:hover {
    background: var(--tg-theme-button-color);
    opacity: 0.9;
}

.dashboard__button-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    line-height: 1;
}

.dashboard__icon-emoji {
    font-size: 24px;
    line-height: 1;
}

.dashboard__icon-svg {
    width: 24px;
    height: 24px;
    line-height: 1;
}

.dashboard__button-text {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
}

@media (max-width: 360px) {
    .dashboard__button {
        padding: 8px 4px;
        min-height: 50px;
    }
    
    .dashboard__icon-emoji {
        font-size: 20px;
    }
    
    .dashboard__icon-svg {
        width: 20px;
        height: 20px;
    }
    
    .dashboard__button-text {
        font-size: 11px;
    }
}

@media (min-width: 768px) {    
    .dashboard__button {
        min-height: 70px;
        padding: 16px 12px;
    }
    
    .dashboard__icon-emoji {
        font-size: 28px;
    }
    
    .dashboard__icon-svg {
        width: 28px;
        height: 28px;
    }
    
    .dashboard__button-text {
        font-size: 14px;
    }
}
</style>
