<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import reviewsData from '@/data/reviews.json'

// média das avaliações
const averageRating = (
  reviewsData.reduce((acc, r) => acc + r.rating, 0) / reviewsData.length
).toFixed(1)

// estado e configuração
const activeIndex = ref(1)
const intervalTime = 3000
let intervalId: number | undefined

const trackRef = ref<HTMLElement | null>(null)
let isTransitioning = false

// mover próximo com loop suave
const goToNext = async () => {
  if (isTransitioning) return
  isTransitioning = true
  activeIndex.value++

  const total = reviewsData.length
  const track = trackRef.value
  if (!track) return

  const cardHeight = 140
  const gap = 20
  const step = cardHeight + gap

  track.style.transition = 'transform 1.2s ease-in-out'
  track.style.transform = `translateY(-${activeIndex.value * step}px)`

  if (activeIndex.value === total + 1) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    track.style.transition = 'none'
    activeIndex.value = 1
    track.style.transform = `translateY(-${step}px)`
  }

  await nextTick()
  isTransitioning = false
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

// parceiros
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

        <!-- === CARROSSEL === -->
        <div class="carousel-wrapper" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
          <div class="carousel-vertical">
            <div ref="trackRef" class="carousel-track-vertical">
              <div
                v-for="(review, index) in [
                  reviewsData[reviewsData.length - 1],
                  ...reviewsData,
                  reviewsData[0],
                ]"
                :key="index"
                class="review-card"
                :class="{
                  prev: index === activeIndex - 1,
                  active: index === activeIndex,
                  next: index === activeIndex + 1,
                }"
              >
                <p class="review-text">“{{ review.text }}”</p>
                <div class="review-author">
                  <span class="author-name">{{ review.name }}</span>
                  <span class="author-rating">★ {{ review.rating }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- === PARCEIROS === -->
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
  background: linear-gradient(78deg, #2c4bff 33.72%, #2eb69c 59.56%);
  border-radius: 20px 80px;
  padding: 6rem 0 2rem;
}

.reviews-section {
  padding: 6rem 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.reviews-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}
@media (min-width: 1024px) {
  .reviews-container {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

.text-wrapper {
  text-align: center;
  flex: 0 0 35%;
}
.reviews-title {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}
.reviews-title span {
  color: var(--color-yellow);
}

.rating-summary {
  color: #fff;
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

/* === CARROSSEL VERTICAL === */
.carousel-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  overflow: hidden;
  max-width: 400px;
}
.carousel-vertical {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.carousel-track-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.review-card {
  width: 340px;
  height: 140px;
  background: #fff;
  border-radius: 14px;
  padding: 1.4rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  color: #333;
  opacity: 0.2;
  transform: scale(0.85) translateX(30px);
  transition: all 0.9s cubic-bezier(0.7, 0, 0.3, 1);
}

.review-card.prev,
.review-card.next {
  opacity: 0.6;
  transform: scale(0.95) translateX(15px);
}

.review-card.active {
  opacity: 1;
  transform: scale(1.05) translateX(0);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  z-index: 10;
}

.review-text {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}
.review-author {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: var(--color-blue);
}

/* === PARCEIROS === */
.partners-section {
  padding: 2.5rem 0;
  overflow: hidden;
  text-align: center;
}
.partners-section h2 {
  color: #fff;
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
  animation: scroll 22s linear infinite;
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
  filter: none;
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
