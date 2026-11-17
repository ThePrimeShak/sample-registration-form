<script setup>
defineProps({
  steps: { type: Array, required: true },
  stepIndex: { type: Number, required: true }
})
</script>

<template>
  <ol class="stepper" aria-label="Registration progress">
    <li
      v-for="(step, index) in steps"
      :key="step.id"
      :class="{ current: stepIndex === index, complete: stepIndex > index }"
      :aria-current="stepIndex === index ? 'step' : undefined"
    >
      <span class="step-number" aria-hidden="true">{{ stepIndex > index ? '✓' : index + 1 }}</span>
      <span>{{ step.label }}</span>
    </li>
  </ol>
</template>
