<template>
    <Stack :justify="justify">
        <CardBg :text-align="TextAlign.START">
            {{ text }}
        </CardBg>
    </Stack>
</template>

<script setup lang="ts">
import {
    CardBg,
    Stack,
    TextAlign,
    type FlexJustifyType,
} from '@/shared'
import { computed, type PropType } from 'vue'

type SideType = 'user' | 'system'

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    side: {
        type: String as PropType<SideType>,
        required: true,
    },
})

const justify = computed(
    (): FlexJustifyType =>
        props.side === 'user' ? 'end' : 'start'
)
</script>
