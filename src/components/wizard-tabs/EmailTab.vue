<script setup>
defineProps({ error: { type: String, default: '' } })
const email = defineModel({ type: String, required: true })
</script>

<template>
  <div class="field-group">
    <label for="email">Email:</label>
    <div class="input-wrap"
      ><span class="input-symbol" aria-hidden="true">✉</span
      ><input
        v-model="email"
        id="email"
        name="email"
        class="input with-symbol"
        type="email"
        autocomplete="email"
        placeholder="you@example.com"
        :aria-invalid="!!error"
        aria-describedby="email-hint email-error"
    /></div>
    <p id="email-hint" class="field-hint">Use a valid email address, like you@example.com.</p>
    <p id="email-error" class="field-error" role="alert">{{ error }}</p>
  </div>
</template>
