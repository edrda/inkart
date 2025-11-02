<script lang="ts"></script>

<template>
  <footer>
    <span>©  2025. InkArt. Todos os direitos reservados.</span>
    <a
      id="whatsapp-button"
      class="whatsapp-button"
      href="https://wa.me/5553999722323"
      target="_blank"
      aria-label="Contato via WhatsApp"
    >
      <img src="/src/assets/icons/whatsapp.svg" alt="WhatsApp" />
    </a>
  </footer>
</template>

<style scoped>
footer {
  background: var(--color-blue);
  color: var(--color-white);
  font-size: 18px;
  text-align: center;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80px 80px 0 0;
}

.whatsapp-button {
  position: fixed;
  bottom: 5vh;
  right: 3vw;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  border-radius: 50%;
  background-color: var(--color-green);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;

  animation: whatsapp-pulse 2s infinite ease-in-out;
}

.whatsapp-button:hover {
  transform: scale(1.1);

  animation: none;
}

.whatsapp-button img {
  width: 32px;
  height: 32px;
}

@keyframes whatsapp-pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
}

@media (max-width: 960px) {
  footer {
    border-radius: 40px 40px 0 0;
    position: relative;
    z-index: 2;
  }
}
</style>
