<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />

  <main>
    <router-view />
  </main>
  <!-- <RouterView /> -->

  <AppFooter />
</template>

<style scoped></style>
