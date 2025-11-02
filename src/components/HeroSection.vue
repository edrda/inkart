<script setup lang="ts">
import heroImg from '../assets/images/hero-img.png'
</script>

<template>
  <section id="hero" class="hero">
    <div class="container hero-container">
      <div class="hero-text">
        <h1>
          Ideias que saem do <span>papel</span><br />
          e ganham as <span>ruas</span>
        </h1>
        <p>
          Design que conecta, imprime e transforma. Somos seus parceiros em toda estratégia visual.
        </p>

        <div id="vantagens" class="hero-actions">
          <a href="#contato" class="btn primary">Solicite um orçamento</a>
          <a href="#servicos" class="btn secondary">
            Conheça nossos serviços
            <img src="/src/assets/icons/arrow-down.svg" alt="Icone de seta para baixo" width="14" />
          </a>
        </div>
      </div>

      <div class="hero-image">
        <img :src="heroImg" alt="Profissional trabalhando em design gráfico" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--gradient-dark);
  color: var(--color-white);
  padding: 10rem 40px 10rem;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 10px 10px;
  margin-top: -80px;
  /* padding: 0 40px; */
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
}

.hero-text {
  flex: 1 1 500px;
}

.hero-text h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 52px;
}

.hero-text span {
  background: var(--gradient-fresh);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-text p {
  margin: 1.5rem 0 2.5rem;
  font-size: 22px;
  color: #e9e9e9;
  max-width: 480px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  font-weight: 600;
  font-size: 18px;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  border: none;
  transition: all 0.3s ease;
}

.btn.primary {
  background: var(--gradient-fresh);
  color: var(--color-text);
}

.btn.primary:hover {
  transform: scale(1.05);
}

.btn.secondary {
  background: transparent;
  border: 2px solid var(--color-white);
  color: var(--color-white);

  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
}

.btn.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hero-image {
  flex: 1 1 400px;
  display: flex;
  justify-content: center;
}

.hero-image img {
  width: 100%;
  max-width: 420px;
  border-radius: 1rem;
}

@media (max-width: 960px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    padding: 0;
  }

  .hero-text h1 {
    font-size: 38px;
    line-height: 42px;
  }

  .hero-text p {
    margin: 1rem auto 2rem;
  }

  .hero-image img {
    max-width: 340px;
  }
  .hero-actions {
    justify-content: center;
  }

  .btn.secondary {
    min-width: 300px;
  }
}
</style>
