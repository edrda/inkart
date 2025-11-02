<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <nav class="container">
      <div class="logo">
        <a href="#hero">
          <img src="/src/assets/images/logo_header.png" alt="InkArt logo" />
        </a>
      </div>

      <!-- Ícone de menu mobile -->
      <button class="menu-toggle" @click="toggleMenu">
        <img
          v-if="!isMenuOpen"
          src="/src/assets/icons/menu-icon.svg"
          alt="menu icon"
          class="menu-icon"
        />
        <img v-else src="/src/assets/icons/close-icon.svg" alt="close icon" class="menu-icon" />
      </button>

      <!-- MENU DESKTOP / MOBILE -->
      <div class="menu-wrapper" :class="{ open: isMenuOpen }">
        <ul class="menu">
          <li>
            <a href="#vantagens" @click="closeMenu">Vantagens</a>
          </li>
          <li>
            <a href="#servicos" @click="closeMenu">Nossos Serviços</a>
          </li>
          <li>
            <a href="#sobre" @click="closeMenu">Sobre a Ink</a>
          </li>
          <li>
            <a href="#galeria" @click="closeMenu">Galeria</a>
          </li>
          <li>
            <a href="#avaliacoes" @click="closeMenu">Avaliações</a>
          </li>
          <li>
            <a href="#parceiros" @click="closeMenu">Parceiros</a>
          </li>
        </ul>

        <a href="#contato" class="cta" @click="isMenuOpen = false">Orçamento</a>
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
  transition: all 0.25s ease;
}

header.scrolled {
  background: var(--color-blue);
  border-radius: 0 0 80px 80px;
}

/* === NAV === */
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.logo img {
  height: 45px;
}

/* === MENU DESKTOP === */
.menu-wrapper {
  display: flex;
  flex-direction: row;
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
  transition: color 0.2s ease;
}

.menu a:hover {
  color: #fff;
}

.menu a::after {
  position: absolute;
  top: calc(100% + 0.2rem);
  left: 0;
  height: 1px;
  width: 100%;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  background-color: #fff;
  transition: transform 0.3s ease;
  content: '';
}
.menu a:hover::after {
  transform-origin: 0 50%;
  transform: scaleX(1);
}

.cta {
  background: var(--gradient-fresh);
  color: var(--color-white);
  font-size: 18px;
  font-weight: 700;
  padding: 0.6rem 1.4rem;
  border-radius: 50px;
  transition: transform 0.3s ease;
  text-decoration: none;
}
.cta:hover {
  transform: scale(1.05);
}

/* === MENU MOBILE === */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-icon {
  width: 28px;
  height: 28px;
  transition: transform 0.25s ease;
}
.menu-icon:hover {
  transform: scale(1.1);
}

@media (max-width: 900px) {
  header.scrolled {
    border-radius: 0 0 40px 40px;
  }
  .menu-wrapper {
    position: fixed;
    top: 86px;
    right: 0;
    width: 96%;
    background: var(--color-blue);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 1rem;
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.35s ease;
    border-radius: 40px;
    border: 2px solid #fff;
    margin: 0 10px;
  }

  .menu-wrapper.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .menu {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .cta {
    margin-top: 1rem;
    font-size: 1rem;
    padding: 0.9rem 2rem;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
