import { defineStore } from "pinia";
import type { PostAction, Action } from '~/types/action.types'

export const useActionStore = defineStore('action', () => {
    const runtimeConfig = useRuntimeConfig()
    const APIURL = runtimeConfig.public.APIURL  

    const postActions = ref<PostAction[]>([])

    const isActionsPushed = (commentId: number): PostAction[] => {
        const actions = postActions.value.filter(obj => obj.id === commentId)
        return actions
    }

    const addAction = async ( id: number, action: Action ) => {
        const alreadyHasAction = postActions.value.some(obj => obj.id === id && obj.action === action)

        if (!alreadyHasAction) {
            try {
                await $fetch(`${APIURL}/posts/${id}/${action}`, { method: 'POST' })
                postActions.value.push({id: id, action: action});
            } catch (error) {
                console.log(error)
            }
        }
    }

    return {postActions, isActionsPushed, addAction}
},
{
    persist: true
})