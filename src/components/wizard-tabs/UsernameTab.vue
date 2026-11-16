<script setup>
defineProps({ error: { type: String, default: '' } })
const username = defineModel({ type: String, required: true })
</script>

<template>
  <div class="field-group">
    <label for="username">Username:</label>
    <div class="input-wrap"
      ><span class="input-symbol" aria-hidden="true">@</span
      ><input
        v-model="username"
        id="username"
        name="username"
        class="input with-symbol"
        type="text"
        autocomplete="username"
        autocapitalize="none"
        spellcheck="false"
        placeholder="e.g. primeshak"
        :aria-invalid="!!error"
        aria-describedby="username-hint username-error"
    /></div>
    <p id="username-hint" class="field-hint">4–15 characters. Letters, numbers, and underscores.</p>
    <p id="username-error" class="field-error" role="alert">{{ error }}</p>
  </div>
</template>
