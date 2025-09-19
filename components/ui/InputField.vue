<script setup lang="ts">
defineProps<{
    placeholder: string,
    type?: string
}>()

const data = defineModel<string | undefined>()
</script>

<template>
    <div class="input__wrapper">
        <input v-model="data" :placeholder="placeholder" :type="type ?? 'text'">
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