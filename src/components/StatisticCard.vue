<script lang="ts" setup></script>

<template>
  <div class="card p-5 bg-white rounded-2xl flex gap-4 items-center">
    <slot name="icon"></slot>
    <div class="card-text">
      <h4 class="font-bold text-xl">
        <slot name="title"></slot>
      </h4>
      <p class="text-tertiary">
        <slot name="desc"></slot>
      </p>
    </div>
  </div>
</template>
