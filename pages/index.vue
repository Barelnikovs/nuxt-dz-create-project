<script setup lang="ts">
import type { GetPostsData } from '~/types/comment.interfaces';


const runtimeConfig = useRuntimeConfig()
const APIURL = runtimeConfig.public.APIURL
const actionStore = useActionStore()
const route = useRoute()
const router = useRouter()

type SortingType = 'rating' | 'date'
const sorting = ref<SortingType>((route.query.sort as SortingType) || 'date')
const page = ref<number>(Number(route.query.page as string) || 1)
const pageSize = ref<number>(Number(route.query.page_size as string) || 3)

watchEffect(() => router.replace({ query: { page: page.value, page_size: pageSize.value, sort: sorting.value } }))

const query = computed(() => ({
    page: route.query.page || undefined,
    page_size: route.query.page_size || undefined,
    sort: route.query.sort || undefined
}))
const key = `sortingKey-${route.query.page}-${route.query.page_size}-${route.query.sort}`
const { data: postsData, refresh, pending } = await useFetch<GetPostsData>(`${APIURL}/posts`, { query, key })

watch(actionStore.postActions, () => refresh())

const totalPages = computed((): number => Math.ceil((postsData.value?.total ?? 0) / pageSize.value))
</script>

<template>
    <div class="wrapper">
        <NuxtLink to="#" class="add-post">
            <Icon name="iconamoon:sign-plus-circle-light" size="24px" />
            Добавить новое обновление для голосования
        </NuxtLink>
        <div class="sorting">
            <button :class="{ 'active': sorting === 'date' }" @click="sorting = 'date'">По дате</button>
            <button :class="{ 'active': sorting === 'rating' }" @click="sorting = 'rating'">По рейтингу</button>
        </div>
        <hr>
        <div class="comments">
            <div v-if="pending">Загрузка...</div>
            <Comment v-else v-for="comment in postsData?.posts" :key="comment.id" v-bind="comment"
                :is-pushed="actionStore.isActionsPushed(comment.id)" />
        </div>
        <hr>
        <nav class="pagination">
            <button class="pagination__button" @click="page = 1" v-if="page - 1 > 1">
                {{ 1 }}
            </button>
            <span class="pagination__dots" v-if="page - 1 > 2"> ... </span>
            <button class="pagination__button" @click="page = page - 1" v-if="page > 1">
                {{ page - 1 }}
            </button>
            <button class="pagination__button" :class="{ 'active': page !== totalPages }" v-if="page !== totalPages">
                {{ page }}
            </button>
            <button class="pagination__button" @click="page = page + 1" v-if="totalPages - page > 1">
                {{ page + 1 }}
            </button>
            <span class="pagination__dots" v-if="totalPages - page > 2"> ... </span>
            <button class="pagination__button" :class="{ 'active': totalPages === page }" @click="page = totalPages">
                {{ totalPages }}
            </button>
        </nav>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.add-post {
    display: flex;
    gap: 10px;
    margin-left: 30px;
}

.sorting {
    display: flex;
    gap: 50px;
    padding: 20px 180px 0;
}

.sorting button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--color-dark-white);
}

.sorting button.active {
    color: var(--color-black);
    font-weight: 600;
}

.comments {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.pagination {
    display: flex;
    gap: 15px;
    padding-left: 30px;
    margin-bottom: 30px;
}

.pagination__dots {
    padding: 2px 5px;
    cursor: default;
}

.pagination__button {
    border: none;
    background-color: transparent;
    color: var(--color-dark-white);
    cursor: pointer;
    padding: 2px 5px;
}

.pagination__button.active {
    color: var(--color-black)
}
</style>