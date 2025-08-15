<template>
    <div class="cart-container">
        <h1 class="cart-text">Cart</h1>
        <p class="cart-text">{{ user?.first_name }}</p>
    </div>
</template>

<script setup lang="ts">
import { useTelegramBackButton, useTelegram } from '@/shared/hooks'
useTelegramBackButton()
const { user } = useTelegram()
</script>

<style scoped>
.cart-text {
    color: var(--tg-theme-text-color);
}
</style>