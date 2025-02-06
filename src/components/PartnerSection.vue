<script setup>
import Partner1 from '@/components/icon/Partner1.vue'
import Partner2 from '@/components/icon/Partner2.vue'
import Partner3 from '@/components/icon/Partner3.vue'
import Partner4 from '@/components/icon/Partner4.vue'
import Partner5 from '@/components/icon/Partner5.vue'
</script>

<template>
  <section id="partners">
    <div>
      <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-x-15 gap-y-15">
          <Partner1 class="fill-primary hover:fill-secondary" />
          <Partner2 class="fill-primary hover:fill-secondary" />
          <Partner3 class="fill-primary hover:fill-secondary" />
          <Partner4 class="fill-primary hover:fill-secondary" />
          <Partner5 class="fill-primary hover:fill-secondary" />
        </div>
      </div>
    </div>
  </section>
</template>
