<script setup>
import { provide, ref } from 'vue'

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
})

const activeItems = ref(props.multiple ? [] : null)

const toggleItem = (id) => {
  if (props.multiple) {
    const index = activeItems.value.indexOf(id)
    index === -1 ? activeItems.value.push(id) : activeItems.value.splice(index, 1)
  } else {
    activeItems.value = activeItems.value === id ? null : id
  }
}

provide('accordion', { activeItems, toggleItem })
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-4">
    <slot />
  </div>
</template>
