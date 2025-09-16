export const useAPIURL = () => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.APIURL
}