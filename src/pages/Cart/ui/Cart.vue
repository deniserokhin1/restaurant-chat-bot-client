<template>
    <h1 class="cart-title">Cart</h1>
</template>

<script setup lang="ts">
import { useTelegramBackButton } from '@/shared/hooks'
useTelegramBackButton()
</script>

<style scoped>
.cart-title {
    color: var(--tg-theme-text-color);
}
</style>