<script setup lang="ts">
import type { Comment } from '~/types/comment.interfaces';

const route = useRoute()
const postId = route.params.id

const APIURL = useAPIURL()
const { data, pending } = await useFetch<Comment>(`${APIURL}/posts/${postId}`)

useSeoMeta({
    title: data.value?.title,
    description: data.value?.content && data.value?.content.slice(0, 100).length < 100 ?
        data.value?.content.slice(0, 100) :
        data.value?.content.slice(0, 100) + '...'
})
</script>

<template>
    <div>
        <div v-if="pending">Загрузка...</div>
        <Comment v-else v-if="data" v-bind="data" />
    </div>
</template>