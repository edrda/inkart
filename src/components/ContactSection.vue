<script setup lang="ts">
import instagramIcon from '@/assets/icons/instagram.svg'
import tiktokIcon from '@/assets/icons/tiktok.svg'
import facebookIcon from '@/assets/icons/facebook.svg'

const socialLinks = [
  { icon: instagramIcon, alt: 'Instagram', url: 'https://www.instagram.com/inkartdesign' },
  { icon: tiktokIcon, alt: 'TikTok', url: 'https://www.tiktok.com/@innkartdesign' },
  { icon: facebookIcon, alt: 'Facebook', url: 'https://www.facebook.com/innkart' },
]
</script>

<template>
  <section id="contato" class="contact-section">
    <div class="contact-wrapper">
      <!-- Coluna Esquerda -->
      <div class="contact-info">
        <h2 class="contact-title">
          Vamos começar seu projeto?<br />
          <span>Dê o próximo passo.</span>
        </h2>

        <p class="contact-text">
          Conte-nos sobre a sua ideia ou desafio. Nossa equipe está <strong>pronta</strong> para
          apresentar a melhor solução em <span class="highlight">comunicação visual</span> para
          você.
        </p>

        <div class="social-links">
          <a
            v-for="(social, i) in socialLinks"
            :key="i"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="social.icon" :alt="social.alt" />
          </a>
        </div>
      </div>

      <!-- Coluna Direita -->

      <div class="form-area">
        <form class="contact-form" @submit.prevent>
          <div class="form-group">
            <label for="name">Seu nome</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu-email@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="phone">Telefone (WhatsApp)</label>
            <input type="tel" id="phone" name="phone" placeholder="(xx) xxxxx-xxxx" />
          </div>

          <div class="form-group">
            <label for="subject">Assunto</label>
            <select id="subject" name="subject" required>
              <option value="">Selecione o assunto</option>
              <option value="orcamento">Solicitar Orçamento</option>
              <option value="duvida">Dúvida sobre um serviço</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>

          <button type="submit" class="submit-button">ENVIAR</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  background: var(--color-white);
  padding: 6rem 1rem 0;
  overflow: hidden;

  background-image: url(/src/assets/images/form-bg.png);
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: contain;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
}

/* @media (min-width: 1024px) {
  .contact-wrapper {
    grid-template-columns: 1fr 1fr;
  }
} */

/* === COLUNA ESQUERDA === */
.contact-info {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-dark-blue);
  margin-bottom: 1rem;
}

.contact-title span {
  color: var(--color-blue);
  text-transform: uppercase;
}

.contact-text {
  color: var(--color-dark-gray);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 420px;
  margin-bottom: 2rem;
}

/* === REDES SOCIAIS === */
.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: var(--color-blue);
  transition:
    transform 0.25s ease,
    background 0.25s ease;
}

.social-links a:hover {
  background: var(--color-green);
  transform: translateY(-3px);
}

.social-links img {
  width: 22px;
  height: 22px;
}

/* === FORMULÁRIO === */
.form-area {
  min-width: 560px !important;
  display: flex;
  justify-content: center;
  padding-bottom: 6rem;
}
.contact-form {
  background: var(--gradient-fresh);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 2;
  min-width: 550px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}

label {
  color: var(--color-white);
  font-weight: 600;
  font-size: 0.95rem;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: var(--color-dark-gray);
}

textarea {
  resize: none;
}

.submit-button {
  background: transparent;
  color: var(--color-white);
  font-weight: 700;
  font-size: 1rem;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  border: 2px solid var(--color-white);
  transition: all 0.3s ease;
  cursor: pointer;
}

.submit-button:hover {
  background: var(--color-white);
  color: var(--color-blue);
}
</style>
