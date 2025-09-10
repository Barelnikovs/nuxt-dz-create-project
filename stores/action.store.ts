import { defineStore } from "pinia";
import type { Action, PostAction } from '~/types/action.types'

export const useActionStore = defineStore('action', () => {
    const runtimeConfig = useRuntimeConfig()
    const APIURL = runtimeConfig.public.APIURL  

    const postActions = ref<PostAction[]>([])

    const isActionPushed = (commentId: number): Action | null => {
        const action = postActions.value.find(obj => obj.id === commentId)
        return action ? action.action : null
    }

    const addAction = async ( id: number, action: Action ) => {
        if ( !postActions.value.some(obj => obj.id === id) ) {
            try {
                await $fetch(`${APIURL}/posts/${id}/${action}`, { method: 'POST' })
                postActions.value.push({id: id, action: action});
            } catch (error) {
                console.log(error)
            }
        }
    }

    return {postActions, isActionPushed, addAction}
},
{
    persist: true
})