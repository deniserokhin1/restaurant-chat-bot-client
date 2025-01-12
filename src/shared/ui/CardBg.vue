<template>
    <Stack
        class="card-wrapper"
        direction="column"
        :align="align"
        :class="{
            'card-wrapper--text-start':
                textAlign === TextAlign.START,
        }"
    >
        <slot />
    </Stack>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { Stack, type FlexAlignType } from './Stack'

enum TextAlign {
    START = 'start',
    CENTER = 'center',
}

defineProps({
    textAlign: {
        type: String as PropType<TextAlign>,
        default: TextAlign.CENTER,
    },
    align: {
        type: String as PropType<FlexAlignType>,
        default: 'start',
    },
})
</script>

<style scoped>
.card-wrapper {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px #0000001a;
    padding: 16px;
    text-align: center;
    transition: transform 0.3s;
}

.card-wrapper--text-start {
    text-align: start;
}

.card-wrapper:hover {
    transform: scale(1.01);
}
</style>
