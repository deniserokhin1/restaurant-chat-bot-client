<template>
    <CardBg>
        <div class="product-image--stub" v-if="isLoading" />
        <img
            v-if="!isLoading && !isError"
            :src="`http://naprivale-orel.ru/${url}`"
            class="product-image"
        />
        <img
            v-if="isError"
            src="../assets/net-foto.png"
            class="product-image"
        />
        <div class="product-card__description">
            <h2 class="product-name">{{ title }}</h2>
            <p class="product-price">{{ price }}</p>
        </div>
    </CardBg>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
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

const isError = ref(false)
const isLoading = ref(false)
const img = ref<HTMLImageElement | null>(null)

onMounted(() => {
    isLoading.value = true
    img.value = new Image()
    img.value.src = `http://naprivale-orel.ru/${props.url}`
    img.value.onload = () => {
        isLoading.value = false
    }
    img.value.onerror = () => {
        isLoading.value = false
        isError.value = true
    }
})

onBeforeUnmount(() => {
    img.value = null
})
</script>

<style scoped>
.product-image {
    width: 100%;
    height: auto;
    min-height: clamp(100px, 47vw, 22vh);
    border-radius: 8px;
}

.product-image--stub {
    width: 100%;
    min-height: clamp(100px, 47vw, 22vh);
    border-radius: 8px;

    position: relative;
    overflow: hidden;
    border: 1px solid #ddd;
    transition: background-color 0.3s;

    &::before {
        position: absolute;
        top: 0;
        display: block;
        width: 80%;
        height: 100%;
        content: "";
        background: linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);
    }

    &::before {
        left: -150px;
        animation: loadShort 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
}

@keyframes loadShort {
    from {
        left: -300px;
    }

    to {
        left: 100%;
    }
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
