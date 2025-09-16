<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';
import InputField from '~/components/ui/InputField.vue';

</script>

<template>
    <div class="auth__wrapper">
        <form>
            <h2>Вход на платформу</h2>
            <InputField placeholder="Email" />
            <InputField placeholder="Пароль" />
            <BaseButton>Войти в аккаунт</BaseButton>
        </form>
    </div>
</template>

<style scoped>
.auth__wrapper {
    height: calc(100svh - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth__wrapper form {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
}

.auth__wrapper h2 {
    align-self: center;
}
</style>