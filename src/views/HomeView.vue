<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import AdvantagesSection from '@/components/AdvantagesSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import HeroSection from '@/components/HeroSection.vue'
import ReviewsAndPartnersWrapper from '@/components/ReviewsAndPartnersWrapper.vue'
// import ReviewsSection from '@/components/ReviewsSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <AdvantagesSection />
    <ServicesSection />
    <AboutSection />
    <GallerySection />
    <ReviewsAndPartnersWrapper />
    <ContactSection />
  </main>
</template>
