<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import PartnerSection from '@/components/PartnerSection.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import StatisticSection from '@/components/StatisticSection.vue'
import ShowcaseSection from '@/components/ShowcaseSection.vue'
import FaqSection from '@/components/FaqSection.vue'
</script>

<template>
  <NavBar />
  <main class="max-w-6xl mx-auto flex flex-col space-y-24 mt-15 px-4">
    <HeroSection />
    <PartnerSection />
    <FeatureSection />
    <StatisticSection />
    <ShowcaseSection />
    <FaqSection />
  </main>

  <footer></footer>
</template>

<style scoped></style>
