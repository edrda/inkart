<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

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

const duplicatedPartners = [...partners, ...partners, ...partners]

const trackRef = ref<HTMLElement | null>(null)
let animationId: number | null = null
const speed = 0.9
let position = 0

const animate = () => {
  if (!trackRef.value) return

  position -= speed

  const oneSetWidth = trackRef.value.scrollWidth / 3

  if (Math.abs(position) >= oneSetWidth) {
    position = 0
  }

  trackRef.value.style.transform = `translateX(${position}px)`

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  nextTick(() => {
    animate()
  })
})

onBeforeUnmount(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<template>
  <section class="partners-section">
    <h2>Parceiros e marcas que confiaram na Ink Art</h2>
    <div class="partners-slider">
      <div class="logos-track" ref="trackRef">
        <div v-for="(partner, i) in duplicatedPartners" :key="i" class="partner-logo">
          <img :src="`/src/assets/images/partners/${partner}.png`" :alt="partner" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-section {
  padding: 3rem 0;
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
  will-change: transform;
  width: max-content;
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
</style>
