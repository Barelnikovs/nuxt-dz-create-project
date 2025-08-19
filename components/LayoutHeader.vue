<template>
    <div class="header__container">
        <NuxtLink to="/" active-class="active">
            <Icon name="icons:home" />
        </NuxtLink>
        <NuxtLink to="/auth" active-class="active">
            <Icon name="icons:entrence" />
        </NuxtLink>
    </div>
</template>

<style scoped>
.header__container {
    width: 70px;
    height: 100svh;
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);
    padding: 15px 8px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.header__container a {
    color: var(--color-dark-white)
}

.header__container a:hover {
    color: var(--color-black)
}

.header__container a span {
    width: 32px;
    height: 32px;
}
</style>