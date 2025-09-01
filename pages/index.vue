<script setup lang="ts">
import type { GetCommentData } from '~/interfaces/comment.interfaces';

const runtimeConfig = useRuntimeConfig()
const APIURL = runtimeConfig.public.APIURL

const { data } = await useFetch<GetCommentData>(`${APIURL}/posts`)
</script>

<template>
    <div class="wrapper">
        <Comment v-for="comment in data?.posts" :key="comment.id" v-bind="comment" />
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>