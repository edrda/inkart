<script setup lang="ts">
import { ref } from 'vue'
import instagramIcon from '@/assets/icons/instagram.svg'
import whatsappIcon from '@/assets/icons/whatsapp.svg'
import facebookIcon from '@/assets/icons/facebook.svg'

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

// redes sociais
const socialLinks = [
  { icon: instagramIcon, alt: 'Instagram', url: 'https://www.instagram.com/inkartdesign' },
  { icon: whatsappIcon, alt: 'Whatsapp', url: 'https://wa.me/5553999722323' },
  { icon: facebookIcon, alt: 'Facebook', url: 'https://www.facebook.com/innkart' },
]

// --- estado do formulário ---
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// --- validação simples de email ---
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

// --- máscara do telefone ---
const applyPhoneMask = (value: string) => {
  value = value.replace(/\D/g, '')
  if (value.length > 11) value = value.slice(0, 11)

  if (value.length > 6) {
    return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
  } else if (value.length > 2) {
    return `(${value.slice(0, 2)}) ${value.slice(2)}`
  } else if (value.length > 0) {
    return `(${value}`
  }
  return value
}

const handleSubmit = async () => {
  successMessage.value = ''
  errorMessage.value = ''

  if (!form.value.name || !form.value.email || !form.value.subject) {
    errorMessage.value = 'Por favor, preencha todos os campos obrigatórios.'
    return
  }

  if (!isValidEmail(form.value.email)) {
    errorMessage.value = 'Digite um e-mail válido.'
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })

    if (response.ok) {
      successMessage.value = 'Mensagem enviada com sucesso! 🚀'
      form.value = { name: '', email: '', phone: '', subject: '', message: '' }
    } else {
      throw new Error('Erro ao enviar o formulário.')
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    errorMessage.value = 'Ocorreu um erro ao enviar. Tente novamente mais tarde.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contato" class="contact-section">
    <div class="contact-wrapper">
      <!-- === TEXTO === -->
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

      <!-- === FORM === -->
      <div class="form-area">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Seu nome *</label>
            <input v-model="form.name" type="text" id="name" required />
          </div>

          <div class="form-group">
            <label for="email">E-mail *</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              placeholder="seu-email@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="phone">Telefone (WhatsApp)</label>
            <input
              v-model="form.phone"
              type="tel"
              id="phone"
              placeholder="(xx) xxxxx-xxxx"
              @input="form.phone = applyPhoneMask(form.phone)"
            />
          </div>

          <div class="form-group">
            <label for="subject">Assunto *</label>
            <select v-model="form.subject" id="subject" required>
              <option value="">Selecione o assunto</option>
              <option value="orcamento">Solicitar Orçamento</option>
              <option value="duvida">Dúvida sobre um serviço</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea v-model="form.message" id="message" rows="5"></textarea>
          </div>

          <p v-if="errorMessage" class="form-feedback error">{{ errorMessage }}</p>
          <p v-if="successMessage" class="form-feedback success">{{ successMessage }}</p>

          <button type="submit" class="submit-button" :disabled="isSubmitting">
            {{ isSubmitting ? 'Enviando...' : 'ENVIAR' }}
          </button>
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
  background-image: url(/src/assets/images/form-bg.webp);
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: 320px auto;
}

.contact-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

@media (min-width: 900px) {
  .contact-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5rem;
  }
  .contact-section {
    background-size: 420px auto;
  }
}

/* === TEXTO === */
.contact-info {
  flex: 1;
  max-width: 460px;
  text-align: left;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-dark-blue);
  margin-bottom: 1rem;
  line-height: 1.2;
}
.contact-title span {
  color: var(--color-blue);
  text-transform: uppercase;
}

.contact-text {
  color: var(--color-dark-gray);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* === REDES === */
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
  border-radius: 10px;
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

/* === FORM === */
.form-area {
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 6rem;
}
.contact-form {
  background: var(--gradient-fresh);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 520px;
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

/* === FEEDBACK === */
.form-feedback {
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}
.form-feedback.error {
  color: #ff4d4f;
}
.form-feedback.success {
  color: #00ffae;
}

/* === BOTÃO === */
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
.submit-button:hover:not(:disabled) {
  background: var(--color-white);
  color: #00bfff;
}
.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
