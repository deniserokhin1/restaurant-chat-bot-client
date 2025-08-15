<template>
    <svg 
        width="72" 
        height="72" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle class="spinner_I8Q1" cx="4" cy="12" r="1.5" />
        <circle class="spinner_I8Q1 spinner_vrS7" cx="12" cy="12" r="3" />
        <circle class="spinner_I8Q1" cx="20" cy="12" r="1.5" />
    </svg>
</template>

<style>
.spinner_I8Q1 {
    animation: spinner_qhi1 0.75s linear infinite;
    fill: var(--tg-theme-button-color);
}

.spinner_vrS7 {
    animation-delay: -0.375s;
    fill: var(--tg-theme-button-color);
}

@keyframes spinner_qhi1 {
    0%, 100% {
        r: 1.5px;
    }
    50% {
        r: 3px;
    }
}
</style>
