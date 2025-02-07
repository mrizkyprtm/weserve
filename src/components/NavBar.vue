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
    submenu: [
      { name: 'Web Development', link: '#' },
      { name: 'Mobile App Development', link: '#' },
      { name: 'UI/UX Design', link: '#' },
      { name: 'Digital Marketing', link: '#' },
    ],
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

// Reactive state for mobile menu
const isMenuOpen = ref(false)

// Reactive state for submenu (mobile)
const isSubmenuOpen = ref(false)

// Function to toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) {
    isSubmenuOpen.value = false // Close submenu when menu is closed
  }
}

// Function to toggle submenu (mobile)
const toggleSubmenu = () => {
  isSubmenuOpen.value = !isSubmenuOpen.value
}

// Reactive state for shadow and scroll
const isScrolled = ref(false)

// Function to handle the scroll event
// let scrollTimeout
const handleScroll = () => {
  if (window.scrollY > 20) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

// Throttle the scroll event using requestAnimationFrame
// const throttleScroll = () => {
//   if (!scrollTimeout) {
//     scrollTimeout = requestAnimationFrame(() => {
//       handleScroll()
//       scrollTimeout = null
//     })
//   }
// }

// Add the scroll event listener when the component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Remove the scroll event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  // if (scrollTimeout) {
  //   cancelAnimationFrame(scrollTimeout)
  // }
})
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 bg-[#f1f4f5]/40 z-50 transition-[shadow,padding] duration-300 ease-in-out py-8 px-4 xl:px-0"
    :class="{ '!py-5 backdrop-blur-xl shadow-md': isScrolled }"
  >
    <nav class="flex items-center justify-between max-w-7xl mx-auto">
      <Logo />

      <!-- Navigation Links -->
      <ul class="hidden lg:flex items-center gap-x-8 lg:flex-row lg:p-0">
        <li v-for="link in navLinks" :key="link.name" class="relative group">
          <a
            :href="link.link"
            class="group-hover:text-secondary flex items-center justify-between lg:justify-start gap-1 py-4"
          >
            {{ link.name }}
            <!-- Chevron Down Icon for Services -->
            <svg
              v-if="link.name === 'Services'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transition-transform duration-200 lg:group-hover:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <!-- Submenu for Services -->
          <ul
            v-if="link.name === 'Services'"
            class="absolute top-full left-0 bg-white shadow-lg rounded-lg py-4 px-4 space-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out"
          >
            <li v-for="subLink in link.submenu" :key="subLink.name">
              <a
                :href="subLink.link"
                class="hover:text-secondary block whitespace-nowrap text-sm"
                >{{ subLink.name }}</a
              >
            </li>
          </ul>
        </li>
      </ul>

      <div id="button" class="flex items-center gap-2">
        <button class="bg-white p-2 rounded-full invisible lg:visible">
          <Cart />
        </button>
        <a href="#" class="rounded-full px-7 py-2 bg-[#080C2E] text-white font-semibold text-nowrap"
          >Sign In</a
        >
        <!-- Hamburger Menu for Mobile -->
        <button @click="toggleMenu" class="lg:hidden p-2 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Nav -->
      <div
        class="absolute lg:hidden top-full left-0 w-full px-4 py-2 opacity-0 invisible transform -translate-y-4 duration-200 ease-in-out"
        :class="{ 'opacity-100 visible translate-y-0 transition-all': isMenuOpen }"
      >
        <ul
          class="flex-col bg-white rounded-lg shadow-lg px-4 py-2 divide-y divide-gray-300 space-y-2"
          :class="{ hidden: !isMenuOpen, flex: isMenuOpen }"
        >
          <li v-for="link in navLinks" :key="link.name" class="relative group">
            <a
              :href="link.link"
              class="hover:text-gray-700 flex items-center justify-between py-2"
              @click.prevent="link.name === 'Services' ? toggleSubmenu() : null"
            >
              {{ link.name }}
              <!-- Chevron Down Icon for Services -->
              <svg
                v-if="link.name === 'Services'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform duration-200 lg:group-hover:rotate-180"
                :class="{ 'rotate-180': isSubmenuOpen }"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <!-- Submenu for Services -->
            <ul
              v-if="link.name === 'Services'"
              class="pl-4 divide-y divide-gray-300 transition-all duration-200 ease-in-out"
              :class="{ block: isSubmenuOpen, hidden: !isSubmenuOpen }"
            >
              <li v-for="subLink in link.submenu" :key="subLink.name">
                <a :href="subLink.link" class="text-gray-700 block whitespace-nowrap py-2">{{
                  subLink.name
                }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
