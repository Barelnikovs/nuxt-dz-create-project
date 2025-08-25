<template>
  <div>
    <NuxtLayout />
    <div class="nuxt-page-wrapper">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.nuxt-page-wrapper {
  padding: 10px 0 0 85px;
}

.global-transition-enter-active,
.global-transition-leave-active {
  opacity: 1;
  transition: all 0.15s;
}

.global-transition-enter-from,
.global-transition-leave-to {
  opacity: 0;
}
</style>
