<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
})

const { activeItems, toggleItem } = inject('accordion')

const isActive = computed(() => {
  return Array.isArray(activeItems.value)
    ? activeItems.value.includes(props.id)
    : activeItems.value === props.id
})

const toggle = () => {
  toggleItem(props.id)
}
</script>

<template>
  <div class="rounded-2xl overflow-clip">
    <h2>
      <button
        @click="toggle"
        :aria-expanded="isActive"
        :aria-controls="`content-${id}`"
        class="w-full p-5 text-left text-primary font-bold text-lg lg:text-xl bg-white transition-colors duration-200 cursor-pointer flex justify-between items-center"
      >
        <slot name="title">{{ title }}</slot>
        <div
          class="rounded-full p-1 transform transition-all duration-300"
          :class="{ 'bg-primary text-white rotate-180': isActive }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m6 9l6 6l6-6"
            />
          </svg>
        </div>
      </button>
    </h2>
    <div
      :id="`content-${id}`"
      v-if="isActive"
      class="overflow-hidden bg-white transition-all duration-300 ease-in-out"
      role="region"
    >
      <div class="px-5 pt-0 pb-5 space-y-4">
        <slot />
      </div>
    </div>
  </div>
</template>
