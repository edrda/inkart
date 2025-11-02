<script setup lang="ts">
import ReviewsSection from './ReviewsSection.vue'
import PartnersSection from './PartnersSection.vue'
</script>

<template>
  <div class="reviews-wrapper">
    <ReviewsSection />
    <PartnersSection />
  </div>
</template>

<style scoped>
.reviews-wrapper {
  background: linear-gradient(78deg, #2c4bff 33.72%, #2eb69c 59.56%);
  border-radius: 20px 80px;
  padding: 1rem 0 2rem;
}
</style>
