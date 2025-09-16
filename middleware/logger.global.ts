export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore()

    if (!auth.token && (to.path.startsWith('/post/create') || to.path.startsWith('/post/editing'))) {
        return navigateTo('/auth')
    }
})