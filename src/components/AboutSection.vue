<script setup lang="ts">
import teamImage from '@/assets/images/inkart-team.png'
</script>

<template>
  <section id="sobre" class="about-section">
    <div class="about-container">
      <!-- Imagem -->
      <div class="about-image">
        <img :src="teamImage" alt="Equipe InkArt" />
      </div>

      <!-- Texto -->
      <div class="about-content">
        <h2>Por trás do design, <span>pessoas e propósito</span></h2>
        <p>
          A ideia inicial da loja era trabalhar apenas com estampas de camisetas. Com o tempo,
          surgiu a vontade de ampliar um pouco mais, e assim começaram também os adesivos
          recortados. Foi
          <strong>desse jeito simples que tudo começou</strong>: camisetas estampadas e adesivos.
        </p>

        <p>
          Com o passar dos anos, expandimos para o ramo da <strong>impressão digital</strong>,
          trabalhando com <strong>lonas</strong>, o que naturalmente nos levou a atuar com
          <strong>fachadas comerciais</strong> e <strong>personalização de veículos</strong>. Para
          agregar ainda mais ao negócio, começamos também a oferecer
          <strong>serviços de papelaria</strong>, como cartões de visita e panfletos.
        </p>

        <p>
          No início, a proposta da loja era apenas um complemento de renda, mas o projeto deu tão
          certo que acabou se tornando minha principal e única fonte de sustento.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  justify-content: center;
  padding: 6rem 1rem;
  background: var(--color-light);
}

.about-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1260px;
  width: 100%;
  background: linear-gradient(120deg, #00c6a7 10%, #1e40af 90%);
  border-radius: 16px;
  padding: 2.5rem;
  align-items: center;
  color: var(--color-white);
}

@media (min-width: 992px) {
  .about-container {
    grid-template-columns: 1fr 1.2fr;
    padding: 3.5rem 4rem;
    gap: 3rem;
  }
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.about-content h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: var(--color-white);
}

.about-content h2 span {
  text-decoration: underline;
}

.about-content p {
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 20px;
  color: var(--color-white);
  opacity: 0.95;
}

.about-content strong {
  color: var(--color-yellow);
  font-weight: 600;
}

@media (max-width: 960px) {
  .about-section {
    padding: 1rem;
  }

  .about-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .about-content h2 {
    line-height: 34px;
  }

  .about-content p {
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>
