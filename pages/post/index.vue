<script setup lang="ts">
import type { Comment } from '~/interfaces/comment.interfaces';

const runtimeConfig = useRuntimeConfig()
const APIURL = runtimeConfig.public.APIURL

const { data } = await useFetch<Comment>(`${APIURL}/posts/1`)
</script>

<template>
    <div>
        <Comment v-if="data" v-bind="data" />
    </div>
</template>