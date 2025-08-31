<template>
    <div class="comment__wrapper">
        <div class="comment__info">
            <div class="comment__user">
                <img src="~/assets/icons/avatar.avif" alt="avatar">
                <p>PurpleSchool</p>
            </div>
            <div class="comment__time-ago">4 дня назад</div>
        </div>
        <div class="comment__content">
            <p class="title">Добавить функцию голосования</p>
            <p class="text">Попробовать добавить в приложение функцию голосования, которая позволит определить, какая
                фича более полезна, а какая нет. После добавления поста появляется...</p>
        </div>
        <div class="comment__bottom">
            <div class="comment__likes">
                <div class="comment__like">
                    <span>10</span>
                    <Icon class="pointer" name="iconamoon:like-thin" size="20px" />
                </div>
                <div class="comment__like">
                    <span>1</span>
                    <Icon class="pointer" name="iconamoon:dislike-thin" size="20px" />
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