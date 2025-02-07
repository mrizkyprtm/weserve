<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const portfolios = ref([
  {
    id: 1,
    title: 'Project 1',
    category: 'Web Design',
    image: '/showcase-1.png',
  },
  {
    id: 2,
    title: 'Project 2',
    category: 'Mobile App',
    image: '/showcase-2.png',
  },
  {
    id: 3,
    title: 'Project 3',
    category: 'Branding',
    image: '/showcase-3.png',
  },
  {
    id: 4,
    title: 'Project 4',
    category: 'Web Development',
    image: '/showcase-4.png',
  },
])

const modules = [Pagination, Navigation, Autoplay]
const swiperInstance = ref(null)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

// const slideNext = () => {
//   swiperInstance.value?.slideNext()
// }

// const slidePrev = () => {
//   swiperInstance.value?.slidePrev()
// }

// Responsive breakpoints
const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
}
</script>

<template>
  <section id="showcase">
    <div class="relative">
      <div class="space-y-3">
        <h2 class="text-center font-clash text-4xl font-semibold text-primary lg:text-5xl">
          Our Showcase
        </h2>
        <p class="text-center leading-8 text-tertiary">
          They built amazing website to help more people around the world<br
            class="hidden lg:block"
          />
          by using our recommendation services and products
        </p>
      </div>

      <swiper
        :modules="modules"
        :slides-per-view="2"
        :space-between="30"
        :loop="true"
        :pagination="{
          clickable: true,
          el: '.custom-pagination',
        }"
        :breakpoints="breakpoints"
        :autoplay="{
          delay: 3000,
          pauseOnMouseEnter: true,
        }"
        @swiper="onSwiper"
        class="portfolio-swiper mt-10"
      >
        <swiper-slide v-for="portfolio in portfolios" :key="portfolio.id">
          <div
            class="portfolio-item shadow-md outline-0 hover:outline-4 hover:outline-secondary hover:-outline-offset-4"
          >
            <img
              :src="portfolio.image"
              :alt="portfolio.title"
              class="portfolio-image"
              loading="lazy"
            />
            <div class="swiper-lazy-preloader"></div>
            <div class="portfolio-overlay">
              <h3 class="portfolio-title">{{ portfolio.title }}</h3>
              <p class="portfolio-category">{{ portfolio.category }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div class="custom-pagination"></div>

      <!-- Navigation buttons -->
      <!-- <div class="swiper-nav">
        <button @click="slidePrev" class="swiper-button-prev"></button>
        <button @click="slideNext" class="swiper-button-next"></button>
      </div> -->
    </div>
  </section>
</template>

<style lang="css" scoped>
.portfolio-swiper {
  padding: 1rem 0.5rem;
}

.portfolio-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.portfolio-image {
  width: 100%;
  /* height: 300px; */
  object-fit: cover;
  display: block;
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.2s ease-in-out;
}

.portfolio-item:hover .portfolio-overlay {
  transform: translateY(0);
}

.custom-pagination {
  position: relative;
  margin-top: 10px;
  text-align: center;
}

/* Optional: Customize pagination bullets */
:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  opacity: 1;
  margin: 0 4px !important;
  transition: background-color 300ms;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-secondary);
}

.swiper-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.swiper-button-prev,
.swiper-button-next {
  width: 40px;
  height: 40px;
  border: 2px solid #333;
  border-radius: 50%;
  cursor: pointer;
  position: static;
  margin-top: 0;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid #333;
  border-width: 2px 2px 0 0;
}

.swiper-button-prev::after {
  transform: rotate(-135deg);
  margin-left: 4px;
}

.swiper-button-next::after {
  transform: rotate(45deg);
  margin-right: 4px;
}

@media (max-width: 768px) {
  .portfolio-image {
    height: 250px;
  }
}
</style>
