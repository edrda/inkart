<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <h1>InkArt</h1>
      <ul>
        <li><RouterLink to="/parceiros">Parceiros</RouterLink></li>
        <li><RouterLink to="/servicos">Serviços</RouterLink></li>
        <li><RouterLink to="/sobre">Sobre</RouterLink></li>
        <li><RouterLink to="/galeria">Galeria</RouterLink></li>
        <li><RouterLink to="/contato">Contato</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
}
</style>
