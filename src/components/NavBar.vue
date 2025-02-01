<script setup>
import Logo from '@/components/icon/Logo.vue'
import Cart from '@/components/icon/Cart.vue'

const navLinks = [
  {
    name: 'Products',
    link: '#',
  },
  {
    name: 'Services',
    link: '#',
  },
  {
    name: 'Pricing',
    link: '#',
  },
  {
    name: 'Testimonials',
    link: '#',
  },
  {
    name: 'Blog',
    link: '#',
  },
]
</script>

<template>
  <nav class="flex items-center justify-between max-w-7xl mx-auto py-10">
    <Logo />
    <ul class="flex items-center gap-x-7">
      <li v-for="link in navLinks" :key="link.name">{{ link.name }}</li>
    </ul>
    <div id="button" class="flex items-center gap-2">
      <button class="bg-white p-2 rounded-full">
        <Cart />
      </button>
      <a href="#" class="rounded-full px-7 py-2 bg-[#080C2E] text-white font-semibold text-nowrap"
        >Sign In</a
      >
    </div>
  </nav>
</template>
