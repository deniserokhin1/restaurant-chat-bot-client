<template>
    <CardBg>
        <img
            v-if="imageExists"
            :src="`http://naprivale-orel.ru/${url}`"
            class="product-image"
            loading="lazy"
        />
        <div class="product-card__description">
            <h2 class="product-name">{{ title }}</h2>
            <p class="product-price">{{ price }}</p>
        </div>
    </CardBg>
</template>

<script setup lang="ts">
import { defineProps, onBeforeMount, onBeforeUnmount, ref } from 'vue'
import { CardBg } from '@/shared'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
})

const imageExists = ref(false)
const img = ref<HTMLImageElement | null>(null)

onBeforeMount(() => {
    img.value = new Image()
    img.value.src = `http://naprivale-orel.ru/${props.url}`
    img.value.onload = () => (imageExists.value = true)
    img.value.onerror = () => (imageExists.value = false)
})

onBeforeUnmount(() => {
    img.value = null
})
</script>

<style scoped>
.product-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.product-card__description {
    width: 100%;
}

.product-name {
    font-size: 18px;
    margin: 12px 0;
    font-weight: bold;
    color: #333;
}

.product-price {
    font-size: 16px;
    color: #e67e22;
}
</style>
