<script setup>
import Logo from '@/components/icon/Logo.vue'
import Cart from '@/components/icon/Cart.vue'
import { onMounted, onUnmounted, ref } from 'vue'

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

// Reactive state for shadow and scroll
const isScrolled = ref(false)

// Function to handle the scroll event
let scrollTimeout
const handleScroll = () => {
  if (window.scrollY > 20) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

// Throttle the scroll event using requestAnimationFrame
const throttleScroll = () => {
  if (!scrollTimeout) {
    scrollTimeout = requestAnimationFrame(() => {
      handleScroll()
      scrollTimeout = null
    })
  }
}

// Add the scroll event listener when the component is mounted
onMounted(() => {
  window.addEventListener('scroll', throttleScroll)
})

// Remove the scroll event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', throttleScroll)
  if (scrollTimeout) {
    cancelAnimationFrame(scrollTimeout)
  }
})
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 bg-[#f1f4f5]/40 z-50 transition-[shadow,padding] duration-300 ease-in-out py-10 px-4 lg:px-0"
    :class="{ '!py-6 backdrop-blur-xl shadow-md': isScrolled }"
  >
    <nav class="flex items-center justify-between max-w-7xl mx-auto">
      <Logo />
      <ul class="lg:flex items-center gap-x-7 hidden">
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
  </header>
</template>
