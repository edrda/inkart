<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <nav class="container">
      <div class="logo">
        <RouterLink to="/">
          <img src="/src/assets/images/logo_header.png" alt="InkArt logo" />
        </RouterLink>
      </div>
      <div class="menu-wrapper">
        <ul class="menu">
          <li><RouterLink to="#vantagens">Vantagens</RouterLink></li>
          <li><RouterLink to="#servicos">Serviços</RouterLink></li>
          <li><RouterLink to="#sobre">Sobre</RouterLink></li>
          <li><RouterLink to="#galeria">Galeria</RouterLink></li>
        </ul>
        <a href="#contato" class="cta">Orçamento</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(6px);
  color: var(--color-white);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  padding: 0 40px;
  transition-duration: 150ms;
}

header.scrolled {
  background: var(--color-blue);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition-duration: 150ms;
  border-radius: 0 0 80px 80px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.logo img {
  height: 45px;
}

.menu-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.menu {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.menu a {
  color: var(--color-white);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  position: relative;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.menu a:hover {
  color: rgb(255 255 255 / 1);
}

.menu a::after {
  position: absolute;
  top: calc(100% + 0.2rem);
  left: 0px;
  height: 1px;
  width: 100%;
  transform-origin: 100% 50%;
  transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(0) scaleY(1);
  background-color: rgb(255 255 255 / 1);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  content: '';
  transition-duration: 300ms;
}

.menu a:hover::after {
  transform-origin: 0% 50%;
  content: '';
  transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

.cta {
  background: var(--color-green);
  color: var(--color-text);
  font-size: 18px;
  font-weight: 700;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  transition: transform 0.3s ease;
}

.cta:hover {
  transform: scale(1.05);
}
</style>
