<template>
    <div
        class="main"
        @click="closeKeyboard"
    >
        <RouterView /> 
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useTelegram, useTelegramBackButton } from '@/shared/hooks'

const { webApp } = useTelegram()
useTelegramBackButton()

function closeKeyboard() {
    //@ts-ignore
    webApp.value?.closeKeyboard()
}

</script>

<style>
:root {
    --tg-color-scheme: light;
    --tg-theme-accent-text-color: #2481cc;
    --tg-theme-bg-color: #ffffff;
    --tg-theme-bottom-bar-bg-color: #e4e4e4;
    --tg-theme-button-color: #000000;
    --tg-theme-button-text-color: #ffffff;
    --tg-theme-destructive-text-color: #ff3b30;
    --tg-theme-header-bg-color: #efeff3;
    --tg-theme-hint-color: #999999;
    --tg-theme-link-color: #2481cc;
    --tg-theme-secondary-bg-color: #efeff3;
    --tg-theme-section-bg-color: #ffffff;
    --tg-theme-section-header-text-color: #6d6d71;
    --tg-theme-subtitle-text-color: #999999;
    --tg-theme-text-color: #000000;
    --tg-viewport-height: 100vh;
    --tg-viewport-stable-height: 100vh;
}
body {
    font-family: Arial, sans-serif;
    background: var(--tg-theme-bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    overscroll-behavior: none;
    overflow: hidden;
}

.main {
    width: 100vw;
    height: var(--tg-viewport-height);
    padding-top: calc(var(--tg-safe-area-inset-top) + 48px);
    padding-bottom: calc(var(--tg-safe-area-inset-bottom) + 8px);
    padding-left: calc(var(--tg-safe-area-inset-left) + 8px);
    padding-right: calc(var(--tg-safe-area-inset-right) + 8px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
