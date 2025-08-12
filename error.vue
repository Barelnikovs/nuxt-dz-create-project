<script setup lang="ts">
import type { NuxtError } from '#app';

const { error } = defineProps<{
    error: NuxtError,
}>()
</script>

<template>
    <div class="container">
        <h1 class="error-code">{{ error.statusCode }} ошибка</h1>
        <p class="error-message" v-if="error.statusCode == 404">Страница не найдена, попробуйте перейти на домашнюю
            страницу</p>
        <p class="error-message" v-else>{{ error.statusMessage }}</p>
        <UiButton color="ghost" @click="navigateTo('/')">Главная страница</UiButton>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
}

.error-code {
    font-family: var(--font-main);
    font-weight: 500;
    font-size: 33px;
    line-height: 130%;
    text-align: center;
    color: var(--color-black);
}

.error-message {
    font-family: var(--font-main);
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: var(--color-dark-white);
    margin-bottom: 40px;
}
</style>