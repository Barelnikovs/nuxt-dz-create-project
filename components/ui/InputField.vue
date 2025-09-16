<script setup lang="ts">
defineProps<{ placeholder: string }>()
</script>

<template>
    <div class="input__wrapper">
        <input :placeholder="placeholder">
    </div>
</template>

<style scoped>
.input__wrapper {
    border: 1px solid var(--color-black);
    border-radius: 23px;
    padding: 12px;
}

.input__wrapper input {
    border: none;
    font-family: var(--font-main);
    font-size: 16px;
    width: 100%;
}

.input__wrapper input:focus {
    outline: none;
    border: none;
}
</style>