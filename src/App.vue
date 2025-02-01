<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import PartnerSection from '@/components/PartnerSection.vue'
import FeatureSection from '@/components/FeatureSection.vue'
</script>

<template>
  <NavBar />
  <main class="max-w-6xl mx-auto flex flex-col space-y-24 mt-15">
    <HeroSection />
    <PartnerSection />
    <FeatureSection />
  </main>

  <footer></footer>
</template>

<style scoped></style>
