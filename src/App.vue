<script setup>
import Logo from '@/components/icon/Logo.vue'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import PartnerSection from '@/components/PartnerSection.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import StatisticSection from '@/components/StatisticSection.vue'
import ShowcaseSection from '@/components/ShowcaseSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import CTASection from '@/components/CTASection.vue'
import useLenis from './composables/useLenis'

useLenis()
</script>

<template>
  <NavBar />
  <main class="max-w-6xl mx-auto flex flex-col space-y-24 mt-36 px-4 xl:px-0">
    <HeroSection />
    <PartnerSection />
    <FeatureSection />
    <StatisticSection />
    <ShowcaseSection />
    <FaqSection />
    <CTASection />
    <div></div>
  </main>
  <footer class="w-full bg-[#070C29] min-h-[700px] mt-[-22rem] pb-12">
    <div class="max-w-6xl mx-auto px-4 xl:px-0 pt-[21rem] text-[#8D90A8] space-y-12">
      <div class="flex flex-col lg:flex-row justify-between gap-y-6">
        <div class="space-y-7">
          <Logo class="text-white" />
          <p class="leading-7">
            We host your empire business today <br />
            using the latest technologies.
          </p>
          <div class="sosmed flex gap-x-3.5">
            <button class="bg-white size-11 rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="bg-white size-11 rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00001 3H9.00001C7.05001 8.84 7.05001 15.16 9.00001 21H8.00001"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 3C16.95 8.84 16.95 15.16 15 21"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="bg-white size-11 rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
            </button>
            <button class="bg-white size-11 rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.51999 7.11011H21.48"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.51999 2.11011V6.97011"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.48 2.11011V6.52011"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.75 14.4501V13.2501C9.75 11.7101 10.84 11.0801 12.17 11.8501L13.21 12.4501L14.25 13.0501C15.58 13.8201 15.58 15.0801 14.25 15.8501L13.21 16.4501L12.17 17.0501C10.84 17.8201 9.75 17.1901 9.75 15.6501V14.4501V14.4501Z"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="space-y-7">
          <h6 class="text-white font-bold text-lg">Products</h6>
          <ul class="leading-10">
            <li>Powerfull Reports</li>
            <li>Blockchain</li>
            <li>Auto-Backup</li>
            <li>Data Science</li>
            <li>Auto-Scaling Up</li>
          </ul>
        </div>
        <div class="space-y-7">
          <h6 class="text-white font-bold text-lg">Resources</h6>
          <ul class="leading-10">
            <li>Support 24/7</li>
            <li>Help Center</li>
            <li>Ho-to Instructions</li>
            <li>Blog & Tips</li>
            <li>About Us</li>
          </ul>
        </div>
        <div class="space-y-7">
          <h6 class="text-white font-bold text-lg">Company</h6>
          <ul class="leading-10">
            <li>Privacy and Policy</li>
            <li>Terms and Conditions</li>
            <li>Investor Relations</li>
            <li>Join With Us</li>
            <li>Our Statistic</li>
          </ul>
        </div>
      </div>
      <p class="text-center">
        All Rights Reserved • Copyright Weserve by BuildWithAngga 2024 in Bandung. <br />
        Slicing with Vue + Tailiwind by MoRP.
      </p>
    </div>
  </footer>
</template>

<style>
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: clip;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}
</style>
