<script setup lang="ts">
import medalIcon from '../assets/icons/medal.svg'
import speedometerIcon from '../assets/icons/speedometer.svg'
import settingsIcon from '../assets/icons/settings-chat.svg'

interface Advantage {
  icon: string
  title: string
  description: string
}

const advantages: Advantage[] = [
  {
    icon: medalIcon,
    title: 'Acabamento Impecável',
    description:
      'Materiais premium e processos de ponta para resultados que superam suas expectativas.',
  },
  {
    icon: speedometerIcon,
    title: 'Agilidade no Seu Projeto',
    description:
      'Entendemos sua urgência. Desenvolvemos e entregamos seus projetos dentro do prazo.',
  },
  {
    icon: settingsIcon,
    title: 'Soluções Sob Medida',
    description:
      'Garantimos um atendimento único para cada ideia, tudo pensado e personalizado para a sua marca.',
  },
]
</script>

<template>
  <section id="#vantagens" class="advantages">
    <div class="container advantages-container">
      <div v-for="(item, index) in advantages" :key="index" class="advantage-card">
        <div class="icon-circle">
          <img :src="item.icon" :alt="item.title" />
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages {
  position: relative;
  margin-top: -6rem;
  z-index: 10;
  display: flex;
  justify-content: center;
}

.advantages-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.advantage-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 273px;
  height: 197px;
  background: linear-gradient(122.77deg, #2c4bff 30.37%, #0489b6 87.79%);
  border: 2px solid #ffffffcd;
  border-radius: 20px;
  text-align: center;
  padding: 2rem 1rem;
  color: var(--color-white);
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}

.advantage-card:hover {
  transform: translateY(-20px);
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.25));
}

.icon-circle {
  width: 60px;
  height: 60px;
  margin-top: -4rem;
  background: #f9f9f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle img {
  width: 38px;
  height: 38px;
}

h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

p {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #f0f0f0;
}

@media (max-width: 960px) {
  .advantages {
    margin-top: -4rem;
  }
}

@media (max-width: 640px) {
  .advantage-card {
    width: 90%;
    max-width: 320px;
  }
}
</style>
