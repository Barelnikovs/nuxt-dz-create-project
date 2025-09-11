<script setup lang="ts">
import type { Comment } from '~/types/comment.interfaces';
import type { Action, PostAction } from '~/types/action.types';

interface CommentWithIsPush extends Comment {
    isPushed?: PostAction[];
}

const route = useRoute()

const comment = defineProps<CommentWithIsPush>()

const getTimeAgo = () => {
    return Math.floor((new Date().getTime() - new Date(comment.published_at).getTime()) / (1000 * 60 * 60 * 24))
}

const actionStore = useActionStore()
const likePushed = computed(() => comment.isPushed?.find(obj => obj.action === 'like'))
const deslikePushed = computed(() => comment.isPushed?.find(obj => obj.action === 'dislike'))
const clickAction = async (action: Action) => {
    await actionStore.addAction(comment.id, action)
}
</script>

<template>
    <div class="comment__wrapper">
        <div class="comment__info">
            <div class="comment__user">
                <img src="~/assets/icons/avatar.avif" alt="avatar">
                <p>PurpleSchool</p>
            </div>
            <div class="comment__time-ago">{{ getTimeAgo() }} дней назад</div>
        </div>
        <NuxtLink class="comment__content" tag="div"
            :to="route.path === '/' ? { path: `/post/${comment.id}`, query: {} } : undefined">
            <p class="title">{{ comment.title }}</p>
            <p class="text">{{ comment.content }}</p>
        </NuxtLink>
        <div class="comment__bottom">
            <div class="comment__likes">
                <div class="comment__like">
                    <span>{{ comment.likes }}</span>
                    <Icon :class="{ 'pointer': true, 'green': likePushed }" @click="clickAction('like')"
                        name="iconamoon:like-thin" size="20px" />
                </div>
                <div class="comment__like">
                    <span>{{ comment.dislikes }}</span>
                    <Icon :class="{ 'pointer': true, 'red': deslikePushed }" @click="clickAction('dislike')"
                        name="iconamoon:dislike-thin" size="20px" />
                </div>
            </div>
            <div class="comment-edite">
                <div class="comment__button">
                    <Icon name="iconamoon:close-square-thin" size="20px" />
                </div>
                <div class="comment__button">
                    <Icon name="iconamoon:edit-thin" size="20px" />
                    <span>Изменить</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.comment__wrapper {
    max-width: 600px;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid var(--color-black);
    border-radius: 4px;
}

.comment__info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

.comment__user {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.comment__user img {
    width: 30px;
    border-radius: 50%;
}

.comment__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.comment__content p.title {
    font-size: 24px;
    font-weight: 600;
}

.comment__time-ago {
    color: var(--color-dark-white);
    font-size: 14px;
}

.comment__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 30px;
}

.comment__likes {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.comment__like {
    display: flex;
    align-items: center;
    gap: 5px;
}

.comment__like span.pointer {
    cursor: pointer;
    color: black;
}

.comment__like span.green {
    color: green;
}

.comment__like span.red {
    color: red;
}

.comment-edite {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
}

.comment__button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>