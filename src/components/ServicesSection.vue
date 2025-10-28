<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Import das imagens
import adesivos from '@/assets/images/adesivos.jpg'
import cartoes from '@/assets/images/cartoes.jpeg'
import fachadas from '@/assets/images/fachadas.jpeg'
import impressao from '@/assets/images/impressao.jpg'

// Dados dos serviços
const services = [
  {
    id: 1,
    title: 'Adesivos Personalizados',
    description:
      'Materiais premium e processos de ponta para resultados duradouros e de alta definição.',
    imageUrl: adesivos,
  },
  {
    id: 2,
    title: 'Cartões de Visita',
    description:
      'Produção com qualidade gráfica superior para causar impacto em cada primeiro contato.',
    imageUrl: cartoes,
  },
  {
    id: 3,
    title: 'Sinalização Externa',
    description:
      'Placas, banners, totens e fachadas que garantem visibilidade e profissionalismo para o seu ponto comercial.',
    imageUrl: fachadas,
  },
  {
    id: 4,
    title: 'Impressão de Materiais',
    description:
      'Cartões de visita, flyers, folders e catálogos com acabamento impecável e entrega rápida.',
    imageUrl: impressao,
  },
]

// Estado
const activeIndex = ref(0)
const intervalId = ref<number | null>(null)
const isPaused = ref(false)

// Funções
const goToSlide = (index: number) => {
  if (index >= 0 && index < services.length) activeIndex.value = index
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % services.length
}

// Inicia autoplay
const startAutoplay = () => {
  stopAutoplay() // Evita duplicação
  intervalId.value = window.setInterval(() => {
    if (!isPaused.value) nextSlide()
  }, 4000) // muda de slide a cada 4s
}

// Para autoplay
const stopAutoplay = () => {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

// Hooks
onMounted(() => startAutoplay())
onBeforeUnmount(() => stopAutoplay())
</script>

<template>
  <section id="servicos" class="services-section">
    <div class="container-grid">
      <!-- COLUNA ESQUERDA -->
      <div class="carousel-container" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          :class="['carousel-slide', { 'active-slide': activeIndex === index }]"
          :style="{ backgroundImage: `url(${service.imageUrl})` }"
        >
          <div v-if="activeIndex === index" class="service-card">
            <h3 class="card-title">{{ service.title }}</h3>
            <p class="card-description">{{ service.description }}</p>
          </div>
        </div>

        <!-- Paginação -->
        <div class="pagination">
          <button
            v-for="(service, index) in services"
            :key="index"
            @click="goToSlide(index)"
            :class="['pagination-bullet', { 'active-bullet': activeIndex === index }]"
          ></button>
        </div>
      </div>

      <!-- COLUNA DIREITA -->
      <div class="content-right">
        <h2 class="main-title">
          <span class="title-primary">Seus Projetos,</span><br />
          <span class="title-secondary">Nossa Expertise.</span>
        </h2>

        <div>
          <p class="text-description">
            Oferecemos um leque completo de serviços de
            <span>design gráfico e comunicação visual</span>.
          </p>

          <p class="text-description large-margin-bottom">
            Da criação de identidade ao material impresso e sinalização, garantimos
            <span>qualidade, agilidade e resultados</span> que você pode ver.
          </p>
        </div>

        <a href="#contato" class="cta-button"> Quero um Orçamento Sem Compromisso </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background: var(--color-light);
  padding: 6rem 1rem;
}

.container-grid {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .container-grid {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
}

/* === CARROSSEL === */
.carousel-container {
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

@media (min-width: 768px) {
  .carousel-container {
    height: 520px;
  }
}

.carousel-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
}

.active-slide {
  opacity: 1;
}

/* === CARD DE SERVIÇO === */
.service-card {
  position: absolute;
  bottom: 2.5rem;
  left: 1.5rem;
  background: var(--gradient-fresh);
  color: var(--color-text);
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  width: fit-content;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 0.9rem;
  line-height: 1.4;
  max-width: 240px;
}

/* === PAGINAÇÃO === */
.pagination {
  display: flex;
  gap: 0.6rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
}

.pagination-bullet {
  width: 28px;
  height: 6px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.pagination-bullet:hover {
  background-color: var(--color-yellow);
}

.active-bullet {
  background-color: var(--color-green);
  width: 48px;
}

/* === CONTEÚDO (DIREITA) === */
.content-right {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
}

.main-title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.25rem;
}

.title-primary,
.title-secondary {
  color: var(--dark-blue);
}

.text-description {
  color: var(--color-text);
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 1rem;
  font-weight: 400;

  span {
    font-weight: 600;
  }
}

.large-margin-bottom {
  margin-bottom: 2.5rem;
}

/* === BOTÃO CTA === */
.cta-button {
  background: var(--color-green);
  color: var(--color-text);
  padding: 0.9rem 1.75rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  display: inline-block;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
