<script setup>
import { RouterLink } from 'vue-router'
import NotFoundImage from '@/assets/images/not-found.svg'
</script>

<template>
  <main class="page-main not-found-page">
    <img :src="NotFoundImage" alt="Page not found" />
    <h1>Page not found</h1>
    <RouterLink class="button primary" to="/">Back to home</RouterLink>
  </main>
</template>

<style scoped>
.not-found-page {
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 32px 20px;
}
.not-found-page img {
  width: min(420px, 100%);
}
.not-found-page h1 {
  font-weight: 600;
  font-size: 24px;
}
</style>
