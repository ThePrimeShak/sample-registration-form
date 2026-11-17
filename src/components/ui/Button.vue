<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline'].includes(value)
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  disabled: { type: Boolean, default: false }
})
</script>

<template>
  <button :type="type" class="button" :disabled="disabled" :class="variant">
    <slot />
  </button>
</template>
