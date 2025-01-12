<template>
    <component
        :is="tag"
        :class="computedClasses"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue';
import type {
    FlexJustifyType,
    FlexAlignType,
    FlexDirectionType,
    FlexGapType,
} from './types';
import {
    alignClasses,
    justifyClasses,
    directionClasses,
    gapClasses,
} from './classes';

const props = defineProps({
    align: {
        type: String as PropType<FlexAlignType>,
        default: 'center',
    },
    justify: {
        type: String as PropType<FlexJustifyType>,
        default: 'center',
    },
    direction: {
        type: String as PropType<FlexDirectionType>,
        default: 'row',
    },
    gap: {
        type: [ Number, String ] as PropType<FlexGapType>,
        default: 0,
    },
    maxWidth: {
        type: Boolean,
        deafult: false,
    },
    wrap: {
        type: Boolean,
        deafult: false,
    },
    tag: {
        type: String,
        default: 'div',
    },
});

const computedClasses = computed(() => {
    return [
        'flex-container',
        props.maxWidth ? 'flex-container--max-width' : null,
        props.wrap ? 'flex-container--wrap' : null,
        alignClasses[props.align],
        justifyClasses[props.justify],
        directionClasses[props.direction],
        gapClasses[props.gap],
    ]
        .filter(Boolean)
        .join(' ');
});
</script>

<style>
.flex-container {
    display: flex;

    &--max-width {
        width: 100%;
    }

    &--wrap {
        flex-wrap: wrap;
    }
}

/**
* имена классов определены в type FlexAlignType
*/
.align-start {
    align-items: flex-start;
}

.align-center {
    align-items: center;
}

.align-end {
    align-items: flex-end;
}

.align-stretch {
    align-items: align-stretch;
}

/**
* имена классов определены в type FlexJustifyType
*/
.justify-center {
    justify-content: center;
}

.justify-start {
    justify-content: flex-start;
}

.justify-end {
    justify-content: end;
}

.justify-between {
    justify-content: space-between;
}

.justify-evenly {
    justify-content: space-evenly;
}

.justify-around {
    justify-content: space-around;
}

/**
* имена классов определены в type FlexDirectionType
*/
.direction-row {
    flex-direction: row;
}

.direction-column {
    flex-direction: column;
}

.direction-row-reverse {
    flex-direction: row-reverse;
}

.direction-column-reverse {
    flex-direction: column-reverse;
}

/**
* имена классов определены в type FlexGapType
*/
.gap0 {
    gap: 0;
}

.gap4 {
    gap: 4px;
}

.gap8 {
    gap: 8px;
}

.gap12 {
    gap: 12px;
}

.gap16 {
    gap: 16px;
}

.gap24 {
    gap: 24px;
}

.gap32 {
    gap: 32px;
}

.gap40 {
    gap: 40px;
}

.gap48 {
    gap: 48px;
}

.gap56 {
    gap: 56px;
}

.gap64 {
    gap: 64px;
}

.gap72 {
    gap: 72px;
}

.gap4xs {
    gap: var(--ui-margin-4xs, 4px);
}

.gap3xs {
    gap: var(--ui-margin-3xs, 8px);
}

.gap2xs {
    gap: var(--ui-margin-2xs, 12px);
}

.gapxs {
    gap: var(--ui-margin-xs, 16px);
}

.gapsm {
    gap: var(--ui-margin-sm, 24px);
}

.gapmd {
    gap: var(--ui-margin-md, 32px);
}

.gaplg {
    gap: var(--ui-margin-lg, 40px);
}

.gapxl {
    gap: var(--ui-margin-xl, 48px);
}

.gap2xl {
    gap: var(--ui-margin-2xl, 56px);
}

.gap3xl {
    gap: var(--ui-margin-3xl, 64px);
}

.gap4xl {
    gap: var(--ui-margin-4xl, 72px);
}
</style>
