export default defineNuxtRouteMiddleware((to) => {
    const auth = useCookie<{token: string}>('nuxtDZ_auth_store')

    if (!auth.value?.token && (to.path === '/post/create' || to.path === '/post/editing')) {
        return navigateTo('/auth')
    }
})