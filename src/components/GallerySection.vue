<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

// Ícones
import arrowLeft from '@/assets/icons/arrow-left.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'

// Imagens
import projeto1 from '@/assets/images/projeto1.jpg'
import projeto2 from '@/assets/images/projeto2.jpg'
import projeto3 from '@/assets/images/projeto3.jpg'
import projeto4 from '@/assets/images/projeto4.jpg'
import projeto5 from '@/assets/images/projeto5.jpg'

const galleryImages = [projeto1, projeto2, projeto3, projeto4, projeto5]

// Criamos slides duplicados (loop visual)
const duplicatedImages = [...galleryImages, ...galleryImages]

const activeIndex = ref(0)
const intervalTime = 4000
let intervalId: number | undefined
const carouselTrack = ref<HTMLElement | null>(null)

const goToNext = () => {
  activeIndex.value++
  updatePosition()
}

const goToPrev = () => {
  activeIndex.value--
  updatePosition()
}

const startAutoplay = () => {
  intervalId = window.setInterval(goToNext, intervalTime)
}
const stopAutoplay = () => {
  if (intervalId) clearInterval(intervalId)
}

onMounted(() => {
  startAutoplay()
  nextTick(() => updatePosition())
})
onBeforeUnmount(() => stopAutoplay())

// Atualiza o deslocamento para manter o item ativo no centro
const updatePosition = () => {
  if (!carouselTrack.value) return

  const slides = carouselTrack.value.children
  const slideWidth = (slides[0] as HTMLElement)?.offsetWidth || 320
  const gap = 24
  const containerWidth = carouselTrack.value.parentElement?.clientWidth || 0
  const totalSlides = duplicatedImages.length

  // Loop infinito visual (volta para o meio)
  if (activeIndex.value >= totalSlides / 2 + galleryImages.length) {
    activeIndex.value = galleryImages.length
    carouselTrack.value.style.transition = 'none'
  } else if (activeIndex.value <= 0) {
    activeIndex.value = galleryImages.length
    carouselTrack.value.style.transition = 'none'
  } else {
    carouselTrack.value.style.transition = 'transform 0.7s ease-in-out'
  }

  const offset = -(activeIndex.value * (slideWidth + gap) - (containerWidth - slideWidth) / 2)
  carouselTrack.value.style.transform = `translateX(${offset}px)`
}
</script>

<template>
  <section id="galeria" class="gallery-section">
    <div class="container">
      <h2 class="gallery-title">Resultados reais. <span>Clientes satisfeitos.</span></h2>
      <p class="gallery-subtitle">
        A melhor forma de conhecer nosso trabalho é ver o que já criamos. Explore nossa galeria e
        descubra o potencial visual para o seu negócio.
      </p>

      <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
        <button class="nav-button left" @click="goToPrev">
          <img :src="arrowLeft" alt="Anterior" />
        </button>

        <div class="carousel-window">
          <div class="carousel-track" ref="carouselTrack">
            <div
              v-for="(image, index) in duplicatedImages"
              :key="index"
              class="carousel-item"
              :class="{ active: index === activeIndex }"
            >
              <img :src="image" alt="Projeto InkArt" />
            </div>
          </div>
        </div>

        <button class="nav-button right" @click="goToNext">
          <img :src="arrowRight" alt="Próximo" />
        </button>
      </div>

      <div class="cta-wrapper">
        <a href="#contato" class="cta-button">Quero um projeto como este!</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  background: var(--color-light);
  padding: 6rem 1rem;
  text-align: center;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-dark-blue);
  margin-bottom: 1rem;
}

.gallery-title span {
  color: var(--color-blue);
}

.gallery-subtitle {
  color: var(--color-dark-gray);
  font-size: 1rem;
  margin-bottom: 2rem;
}

/* === CARROSSEL === */
.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.carousel-window {
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
}

.carousel-track {
  display: flex;
  gap: 24px;
  transition: transform 0.7s ease-in-out;
  will-change: transform;
}

.carousel-item {
  flex: 0 0 320px;
  opacity: 0.6;
  transform: scale(0.9);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.carousel-item.active {
  opacity: 1;
  transform: scale(1);
}

.carousel-item img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* === NAVEGAÇÃO === */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.25s ease;
}

.nav-button.left {
  left: 1rem;
}
.nav-button.right {
  right: 1rem;
}

.nav-button img {
  width: 28px;
  height: 28px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.nav-button:hover {
  transform: translateY(-50%) scale(1.15);
}

/* === CTA === */
.cta-wrapper {
  display: flex;
  justify-content: center;
}

.cta-button {
  background: var(--gradient-dark);
  color: var(--color-white);
  font-weight: 700;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  text-decoration: none;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.cta-button:hover {
  transform: scale(1.05);
}

/* === RESPONSIVIDADE === */
@media (max-width: 1024px) {
  .carousel-item {
    flex: 0 0 260px;
  }
  .carousel-item img {
    height: 260px;
  }
}

@media (max-width: 768px) {
  .carousel-item {
    flex: 0 0 220px;
  }
  .carousel-item img {
    height: 220px;
  }
}

@media (max-width: 480px) {
  .carousel-item {
    flex: 0 0 180px;
  }
  .carousel-item img {
    height: 180px;
  }
}
</style>
