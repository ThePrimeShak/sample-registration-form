<script setup lang="js">
defineProps({
  variant: {
    type: String, // primary || outline
    required: true
  },
  type: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <button :type class="button" :disabled :class="variant">
    <slot />
  </button>
</template>
