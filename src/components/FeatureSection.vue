<script lang="ts" setup>
import FeatureCard from './FeatureCard.vue'
import Feature1 from './icon/Feature1.vue'
import Feature2 from './icon/Feature2.vue'
import Feature3 from './icon/Feature3.vue'
import Feature4 from './icon/Feature4.vue'
</script>

<template>
  <section class="features">
    <h2 class="text-4xl lg:text-[46px] font-bold text-center mb-8 font-clash">Your Best Choice</h2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-7">
      <FeatureCard title="Extra Layers" desc="Making your project more secure avoiding DDoS">
        <template #icon>
          <Feature1 class="stroke-secondary group-hover:!stroke-white" />
        </template>
      </FeatureCard>

      <FeatureCard title="Customizable" desc="Only install what your business needs to grow">
        <template #icon>
          <Feature2 class="stroke-secondary group-hover:!stroke-white" />
        </template>
      </FeatureCard>

      <FeatureCard title="AI Automation" desc="Decide the business flow based on latest reports">
        <template #icon>
          <Feature3 class="stroke-secondary group-hover:!stroke-white" />
        </template>
      </FeatureCard>

      <FeatureCard title="Auto-Scaling" desc="Have a long weekend without worrying any loss">
        <template #icon>
          <Feature4 class="stroke-secondary group-hover:!stroke-white" />
        </template>
      </FeatureCard>
    </div>
  </section>
</template>
