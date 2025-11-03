<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import adesivos from '@/assets/images/adesivos.jpg'
import cartoes from '@/assets/images/cartoes.jpeg'
import fachadas from '@/assets/images/fachadas.jpeg'
import impressao from '@/assets/images/impressao-inkart-santa-vitoria-do-palmar.jpg'
import corteLaser from '@/assets/images/placas-mdf-corte-laser-inkart.jpg'
import veiculos from '@/assets/images/personalizacao-veiculos-inkart-santa-vitoria-do-palmar.jpg'
import neon from '@/assets/images/placas-neon-inkart-svp.jpg'

const services = [
  {
    id: 1,
    title: 'Adesivos Personalizados',
    description:
      'Materiais premium e processos de ponta para resultados duradouros e de alta definição.',
    imageUrl: adesivos,
    featured: true,
  },
  {
    id: 2,
    title: 'Placas Neon Personalizadas',
    description:
      'Ilumine sua marca com estilo. Produzimos letreiros em neon LED modernos, duráveis e perfeitos para destacar seu espaço ou evento.',
    imageUrl: neon,
    featured: true,
  },
  {
    id: 3,
    title: 'Cartões de Visita',
    description:
      'Produção com qualidade gráfica superior para causar impacto em cada primeiro contato.',
    imageUrl: cartoes,
    featured: false,
  },
  {
    id: 4,
    title: 'Sinalização Externa',
    description:
      'Placas, banners, totens e fachadas que garantem visibilidade e profissionalismo para o seu ponto comercial.',
    imageUrl: fachadas,
    featured: false,
  },
  {
    id: 5,
    title: 'Placas MDF e Corte a Laser',
    description:
      'Criações exclusivas com corte a laser de alta precisão. Ideal para plaquinhas personalizadas, QR Codes Pix e sinalizações elegantes.',
    imageUrl: corteLaser,
    featured: true,
  },
  {
    id: 6,
    title: 'Impressão de Materiais',
    description:
      'Cartões de visita, flyers, folders e catálogos com acabamento impecável e entrega rápida.',
    imageUrl: impressao,
    featured: false,
  },
  {
    id: 7,
    title: 'Personalização de Veículos',
    description:
      'Transforme seu carro ou frota em uma vitrine móvel. Adesivagem e envelopamento profissional com acabamento impecável e durabilidade.',
    imageUrl: veiculos,
    featured: false,
  },
]

const activeIndex = ref(0)
const intervalId = ref<number | null>(null)
const isPaused = ref(false)

const goToSlide = (index: number) => {
  if (index >= 0 && index < services.length) activeIndex.value = index
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % services.length
}

const startAutoplay = () => {
  stopAutoplay()
  intervalId.value = window.setInterval(() => {
    if (!isPaused.value) nextSlide()
  }, 10000)
}

const stopAutoplay = () => {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

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
            <div v-if="service.featured" class="featured-tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  fill-opacity="0"
                  stroke="#fff"
                  stroke-dasharray="64"
                  stroke-dashoffset="64"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s"
                    dur="0.5s"
                    values="0;1"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="64;0"
                  />
                </path>
              </svg>
              <span>Destaque InkArt</span>
            </div>
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
          <span class="title-secondary">Nossa <span class="highlight">Expertise</span>.</span>
        </h2>

        <div class="text">
          <p class="text-description">
            Oferecemos um leque completo de serviços de
            <span>design gráfico e comunicação visual</span>.
          </p>

          <p class="text-description large-margin-bottom">
            Da criação de identidade ao material impresso e sinalização, garantimos
            <span>qualidade, agilidade e resultados</span> que você pode ver.
          </p>

          <p class="text-description">Atendemos toda Santa Vitória do Palmar e região do Chuí.</p>
        </div>

        <a href="#contato" class="cta-button"> Quero um orçamento sem compromisso </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background: var(--color-light);
  padding: 10rem 1rem;
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
  bottom: 3rem;
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

/* === TAG DESTAQUE === */
.featured-tag {
  background: var(--gradient-ink);
  color: var(--color-white);
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px 16px 6px 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 186px;

  gap: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  position: absolute;
  left: 120px;
  margin: 0 -40px 0 40px;
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

.title-secondary .highlight {
  background: var(--gradient-fresh);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text {
  max-width: 90%;
}

.text-description {
  color: var(--color-text);
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 1rem;
  font-weight: 400;
}

.text-description span {
  font-weight: 600;
}

.large-margin-bottom {
  margin-bottom: 2.5rem;
}

/* === BOTÃO CTA === */
.cta-button {
  background: var(--gradient-fresh);
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
  transform: scale(1.05);
}
</style>
