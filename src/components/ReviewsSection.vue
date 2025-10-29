<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import reviewsData from '@/data/reviews.json'

// cálculo da média das avaliações
const averageRating = (
  reviewsData.reduce((acc, r) => acc + r.rating, 0) / reviewsData.length
).toFixed(1)

const activeIndex = ref(0)
const visibleCount = 2
const intervalTime = 5000
let intervalId: number | undefined

// mover para o próximo slide (loop infinito)
const goToNext = () => {
  activeIndex.value = (activeIndex.value + 1) % reviewsData.length
}

// voltar ao anterior
const goToPrev = () => {
  activeIndex.value = (activeIndex.value - 1 + reviewsData.length) % reviewsData.length
}

// autoplay
const startAutoplay = () => {
  intervalId = window.setInterval(goToNext, intervalTime)
}
const stopAutoplay = () => {
  if (intervalId) clearInterval(intervalId)
}

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)

// deslocamento suave centralizado
const trackStyle = computed(() => {
  const gap = 24
  const cardWidth = 460
  const offset = -(activeIndex.value * (cardWidth + gap))
  return {
    transform: `translateX(${offset}px)`,
  }
})

// logos dos parceiros
const partners = [
  'agrosilveira',
  'barcia',
  'duminelli',
  'emporio',
  'floripa',
  'mauricio',
  'mecanica',
  'odair',
  'pensecar',
  'rotula',
  // 'RVCAR',
  'streetmotos',
  'VAparabrisas',
  'visual-plotter',
]
</script>

<template>
  <div class="reviews-wrapper">
    <section id="reviews" class="reviews-section">
      <div class="reviews-container">
        <div class="text-wrapper">
          <h2 class="reviews-title">O que nossos clientes falam sobre a <span>Ink Art</span></h2>

          <div class="rating-summary">
            <span class="stars">⭐ {{ averageRating }}/5</span>
            <span class="total">({{ reviewsData.length }} avaliações)</span>
          </div>

          <a href="#contato" class="cta-button">Quero orçar o meu projeto</a>
        </div>

        <div class="carousel-wrapper">
          <button class="nav left" @click="goToPrev">‹</button>

          <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
            <div class="carousel-track" :style="trackStyle">
              <div v-for="(review, index) in reviewsData" :key="index" class="review-card">
                <p class="text">“{{ review.text }}”</p>
                <div class="author">
                  <span class="name">{{ review.name }}</span>
                  <span class="rating">★ {{ review.rating }}</span>
                </div>
              </div>
            </div>
          </div>

          <button class="nav right" @click="goToNext">›</button>
        </div>
      </div>
    </section>

    <!-- PARCEIROS -->
    <section id="partners" class="partners-section">
      <h2>Parceiros e marcas que confiaram na Ink Art</h2>
      <div class="partners-slider">
        <div class="logos-track">
          <div v-for="(partner, i) in [...partners, ...partners]" :key="i" class="partner-logo">
            <img :src="`/src/assets/images/partners/${partner}.png`" :alt="partner" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.reviews-wrapper {
  background: linear-gradient(78.05deg, #2c4bff 33.72%, #2eb69c 59.56%);
  border-radius: 20px 80px;
  padding: 6rem 0 2rem;
}
.reviews-section {
  padding: 6rem 1rem;
  overflow: hidden;
}

.reviews-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 3rem;
}

.text-wrapper {
  flex: 0 0 35%;
}

.reviews-title {
  font-size: 30px;
  line-height: 1.2;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 1rem;
}

.reviews-title span {
  color: var(--color-yellow);
}

.rating-summary {
  color: var(--color-white);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.cta-button {
  background: var(--color-yellow);
  color: var(--color-text);
  font-weight: 700;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.25s ease;
}

.cta-button:hover {
  transform: scale(1.05);
}

/* === CARROSSEL === */
.carousel-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  gap: 1rem;
}

.carousel {
  overflow: hidden;
  width: 100%;
  max-width: 900px;
}

.carousel-track {
  display: flex;
  gap: 24px;
  transition: transform 0.7s ease-in-out;
}

.review-card {
  flex: 0 0 460px;
  background: var(--color-white);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  color: var(--color-dark-gray);
}

.review-card .text {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.review-card .author {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: var(--color-blue);
}

/* === SETAS === */
.nav {
  background: var(--color-white);
  color: var(--color-blue);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.nav:hover {
  transform: scale(1.1);
}

/* === PARCEIROS === */
.partners-section {
  padding: 2.5rem 0;
  overflow: hidden;
  text-align: center;
}

.partners-section h2 {
  color: var(--color-white);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.partners-slider {
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 1rem 0;
}

.logos-track {
  display: flex;
  align-items: center;
  gap: 60px;
  animation: scroll 20s linear infinite;
}

.partner-logo img {
  width: 120px;
  height: auto;
  filter: grayscale();
  opacity: 0.9;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.partner-logo img:hover {
  transform: scale(1.1);
  opacity: 1;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
