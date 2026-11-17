<script setup>
defineProps({
  step: { type: Object, required: true },
  steps: { type: Array, required: true },
  stepIndex: { type: Number, required: true }
})
</script>

<template>
  <aside class="illustration-panel" aria-label="Registration introduction">
    <span class="panel-label">
      <span class="status-dot" aria-hidden="true"></span>
      YOUR NEXT CHAPTER
    </span>
    <div class="illustration-wrap">
      <img :src="step.image" alt="" class="step-illustration" />
      <span class="illustration-spark spark-one" aria-hidden="true">✦</span>
      <span class="illustration-spark spark-two" aria-hidden="true">+</span>
    </div>
    <div class="panel-copy">
      <h2>{{ step.caption }}</h2>
      <p>{{ step.detail }}</p>
    </div>
    <div class="panel-dots" aria-hidden="true">
      <span v-for="(_, index) in steps" :key="index" :class="{ active: index === stepIndex }"></span>
    </div>
  </aside>
</template>
