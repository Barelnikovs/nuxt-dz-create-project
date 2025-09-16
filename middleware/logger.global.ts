export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore()

    if (!auth.token && (to.path === '/post/create' || to.path === '/post/editing')) {
        return navigateTo('/auth')
    }
})