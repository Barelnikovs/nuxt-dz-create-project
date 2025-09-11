<script setup lang="ts">
const route = useRoute()
const postId = route.params.id

import type { Comment } from '~/types/comment.interfaces';

const runtimeConfig = useRuntimeConfig()
const APIURL = runtimeConfig.public.APIURL

const { data, pending } = await useFetch<Comment>(`${APIURL}/posts/${postId}`)
</script>

<template>
    <div>
        <div v-if="pending">Загрузка...</div>
        <Comment v-else v-if="data" v-bind="data" />
    </div>
</template>