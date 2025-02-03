<script lang="ts" setup></script>

<template>
  <div
    class="relative bg-white py-10 hover:py-7 rounded-3xl hover:bg-primary hover:text-white transition-colors duration-300 group"
  >
    <div
      class="absolute bg-white w-5 h-25 rounded-full opacity-0 group-hover:opacity-30 blur-md top-0 mt-5 right-0 mr-12 rotate-[30deg]"
    ></div>
    <div class="flex flex-col justify-center items-center text-center space-y-5">
      <span class="text-secondary group-hover:text-white">
        <slot name="icon"></slot>
      </span>
      <h5>
        <span class="font-bold text-lg">
          <slot name="title"></slot>
        </span>
        <a href="#" class="hidden group-hover:block font-semibold text-tertiary">Learn More</a>
      </h5>
    </div>
  </div>
</template>
