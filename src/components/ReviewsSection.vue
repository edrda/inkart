<script setup lang="ts">
import reviewsData from '@/data/reviews.json'

const getIconUrl = (iconName: string) => {
  return new URL(`/src/assets/icons/${iconName}.svg`, import.meta.url).href
}

const averageRating = (
  reviewsData.reduce((acc, r) => acc + r.rating, 0) / reviewsData.length
).toFixed(1)

const getStarIcons = (rating: number) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? getIconUrl('star') : getIconUrl('outline-star'))
  }
  return stars
}
</script>

<template>
  <section id="avaliacoes" class="reviews-section">
    <div class="reviews-container">
      <h2 class="reviews-title">O que nossos clientes falam sobre a <span>Ink Art</span></h2>

      <div class="rating-summary">
        <span class="stars">
          <img :src="getIconUrl('star')" alt="star" class="star-icon" />
          {{ averageRating }}/5
        </span>
        <span class="total">({{ reviewsData.length }} avaliações)</span>
      </div>

      <div class="reviews-grid">
        <div v-for="(review, index) in reviewsData.slice(0, 6)" :key="index" class="review-card">
          <div class="review-stars">
            <img
              v-for="(star, i) in getStarIcons(review.rating)"
              :key="i"
              :src="star"
              alt="star"
              class="star-icon"
            />
          </div>

          <p class="review-text">“{{ review.text }}”</p>

          <div class="review-author">
            <span class="author-name">{{ review.name }}</span>
            <span class="author-source">{{ review.source }}</span>
          </div>
        </div>
      </div>

      <a href="#contato" class="cta-button" id="parceiros">Quero orçar o meu projeto</a>
    </div>
  </section>
</template>

<style scoped>
.reviews-section {
  padding: 6rem 1rem;
  display: flex;
  justify-content: center;
}

.reviews-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.reviews-title {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.2;
}
.reviews-title span {
  color: var(--color-yellow);
}

.rating-summary {
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

/* === GRID === */
.reviews-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
}

@media (min-width: 640px) {
  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .reviews-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* === CARD === */
.review-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  padding: 2rem 1.8rem;
  color: #fff;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
  text-align: left;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

.review-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.25);
}

/* === ESTRELAS === */
.review-stars {
  display: flex;
  gap: 4px;
  margin-bottom: 0.5rem;
}
.star-icon {
  width: 16px;
  height: 16px;
}

/* === TEXTO === */
.review-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #f3f3f3;
  min-height: 70px;
}

/* === AUTOR === */
.review-author {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.author-name {
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
}
.author-source {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

/* === CTA === */
.cta-button {
  background: var(--color-yellow);
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

@media (max-width: 600px) {
  .reviews-section {
    padding: 2rem 1rem;
  }
}
</style>
