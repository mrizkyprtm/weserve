<script setup>
defineProps({
  title: {
    type: String,
    default: 'title',
  },
  desc: {
    type: String,
    default: 'desc',
  },
})
</script>

<template>
  <div
    class="relative card bg-white hover:bg-primary hover:text-white transition-all duration-300 rounded-2xl py-7 px-6 space-y-8 group"
  >
    <div
      class="bg-white w-16 h-32 rounded-full opacity-0 group-hover:opacity-40 blur-xl absolute right-0 mr-14 rotate-[30deg]"
    ></div>
    <slot name="icon"></slot>
    <div class="card-text space-y-1">
      <h3 class="font-bold text-xl">{{ title }}</h3>
      <p class="text-tertiary">{{ desc }}</p>
    </div>
    <a href="#" class="font-semibold text-secondary group-hover:text-white">Learn More</a>
  </div>
</template>
