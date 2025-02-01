<script lang="ts" setup>
import Statistic1 from './icon/Statistic1.vue'
import Statistic2 from './icon/Statistic2.vue'
import Statistic3 from './icon/Statistic3.vue'
import StatisticCard from './StatisticCard.vue'
</script>

<template>
  <section id="statistic">
    <div class="flex items-center gap-16">
      <div class="hero-img w-[500px]">
        <img class="w-full" src="/hero2.png" alt="" />
      </div>
      <div class="flex-1 flex flex-col gap-10">
        <div id="hero-text" class="space-y-2">
          <h1 class="text-5xl font-clash leading-14">
            We Have Very <br class="hidden md:block" />
            Strong Ecosystem
          </h1>
          <p class="text-tertiary leading-8">
            We provide a variety of servers to grow your users <br class="hidden md:block" />
            acquisition much user-friendly and boosting up sales.
          </p>
        </div>
        <div class="space-y-5 mr-15">
          <StatisticCard>
            <template #icon>
              <Statistic1 />
            </template>
            <template #title> $880 Mio </template>
            <template #desc> Company budget saved </template>
          </StatisticCard>
          <StatisticCard>
            <template #icon>
              <Statistic2 />
            </template>
            <template #title> 450,392 </template>
            <template #desc> All servers available </template>
          </StatisticCard>
          <StatisticCard>
            <template #icon>
              <Statistic3 />
            </template>
            <template #title> 189 Mio </template>
            <template #desc> Websites are running good </template>
          </StatisticCard>
        </div>
        <div id="hero-btn" class="flex items-center">
          <button class="px-10 py-4 bg-secondary rounded-full text-white font-bold cursor-pointer">
            Explore More
          </button>
          <button
            class="px-10 py-4 font-semibold text-secondary flex items-center gap-1 cursor-pointer"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 12.2V13.9C20.5 17.05 18.7 18.4 16 18.4H7C4.3 18.4 2.5 17.05 2.5 13.9V8.5C2.5 5.35 4.3 4 7 4H9.7C9.57 4.38 9.5 4.8 9.5 5.25V9.15002C9.5 10.12 9.82 10.94 10.39 11.51C10.96 12.08 11.78 12.4 12.75 12.4V13.79C12.75 14.3 13.33 14.61 13.76 14.33L16.65 12.4H19.25C19.7 12.4 20.12 12.33 20.5 12.2Z"
                stroke="#640EF1"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5 5.25V9.15002C22.5 10.64 21.74 11.76 20.5 12.2C20.12 12.33 19.7 12.4 19.25 12.4H16.65L13.76 14.33C13.33 14.61 12.75 14.3 12.75 13.79V12.4C11.78 12.4 10.96 12.08 10.39 11.51C9.82 10.94 9.5 10.12 9.5 9.15002V5.25C9.5 4.8 9.57 4.38 9.7 4C10.14 2.76 11.26 2 12.75 2H19.25C21.2 2 22.5 3.3 22.5 5.25Z"
                stroke="#640EF1"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.89999 22H15.1"
                stroke="#640EF1"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5 18.4V22"
                stroke="#640EF1"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.9955 7.25H19.0045"
                stroke="#640EF1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.1957 7.25H16.2047"
                stroke="#640EF1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3954 7.25H13.4044"
                stroke="#640EF1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span> Schedule a demo </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
