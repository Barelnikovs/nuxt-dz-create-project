<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';
import InputField from '~/components/ui/InputField.vue';
import { useAPIURL } from '~/composables/useAPIURL';
import type { LoginResponse } from '~/types/auth.types';

const authStore = useAuthStore()
const APIURL = useAPIURL()

const email = ref<string | undefined>()
const password = ref<string | undefined>()

const login = async () => {
    try {
        const data = await $fetch<LoginResponse>(APIURL + '/auth/login', {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value
            }
        })
        if (data) {
            authStore.setAuthData(data.token, data.user)
            email.value = undefined
            password.value = undefined
            navigateTo('/')
        }
    } catch (error) {
        console.warn(error)
    }
}

</script>

<template>
    <div class="auth__wrapper">
        <form>
            <h2>Вход на платформу</h2>
            <InputField v-model="email" placeholder="Email" />
            <InputField v-model="password" placeholder="Пароль" type="password" />
            <BaseButton @click.stop.prevent="login">Войти в аккаунт</BaseButton>
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