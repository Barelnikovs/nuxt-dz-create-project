import { defineStore } from "pinia";
import type { User } from "~/types/auth.types";

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | undefined>()

    const userData = ref<User | undefined>()

    const setAuthData = (tokenValue: string, user: User) => {
        token.value = tokenValue;
        userData.value = user
    }

    const clearAuthData = () => {
        token.value = undefined
        userData.value = undefined
    }

    return { token, setAuthData, clearAuthData }
},
{
    persist: true
})