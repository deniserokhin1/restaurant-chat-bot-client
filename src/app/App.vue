<template>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useTelegramBackButton } from '@/shared/hooks'

useTelegramBackButton()
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
    background-color: var(--tg-theme-bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
}
</style>
