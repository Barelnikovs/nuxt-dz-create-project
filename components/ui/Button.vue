<script setup lang="ts">
interface Prop {
    color: 'primary' | 'ghost'
}
const props = withDefaults(defineProps<Prop>(), { color: 'primary' })
</script>

<template>
    <button class="base-button" :class="color">
        <slot />
    </button>
</template>

<style scoped>
.base-button {
    border: 1px solid black;
    border-radius: 4px;
    padding: 12px;
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 16px;
    text-align: center;
}

.primary {
    background-color: var(--color-black);
    color: var(--color-white);
}

.primary:hover {
    background-color: var(--color-light-black);
}

.ghost {
    background-color: var(--color-white);
    color: var(--color-black);
}

.ghost:hover {
    background-color: var(--color-black);
    color: var(--color-white);
}
</style>