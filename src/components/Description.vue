<script>
import { debounce } from '@/utils/debounce.js'
import { isBalancedText } from '@/utils/isBalancedText.js'

export default {
  props: {
    userInfo: { type: Object, default: () => ({ username: '', email: '' }) },
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue'],
  data() {
    return { textMessage: '', debouncedCheck: null }
  },
  created() {
    this.debouncedCheck = debounce((value) => this.isBalanced(value), 1000)
    if (this.modelValue) this.isBalanced(this.modelValue)
  },
  beforeUnmount() {
    this.debouncedCheck.cancel()
  },
  methods: {
    // Keep the public method used by the existing component tests.
    isBalanced(text) {
      this.textMessage = isBalancedText(text) ? 'The text is balanced.' : 'The text is not balanced.'
    },
    handleInput(event) {
      const value = event.target.value
      this.$emit('update:modelValue', value)
      this.textMessage = ''
      this.debouncedCheck(value)
    }
  }
}
</script>

<template>
  <div class="review-content">
    <div class="review-details">
      <p>
        Username:
        <strong>{{ userInfo.username }}</strong>
      </p>
      <p>
        Email:
        <strong>{{ userInfo.email }}</strong>
      </p>
    </div>
    <div class="field-group">
      <label for="description">
        A little about you
        <span class="optional">(optional)</span>
      </label>
      <input
        id="description"
        name="description"
        class="input"
        placeholder="Something you’d like to share…"
        :value="modelValue"
        aria-describedby="description-hint description-status"
        @input="handleInput"
      />
      <p id="description-hint" class="field-hint">We’ll check that any brackets in your text are balanced.</p>
      <p
        id="description-status"
        class="balance-message"
        :class="{ 'field-error': textMessage === 'The text is not balanced.' }"
        role="status"
      >
        {{ textMessage }}
      </p>
    </div>
  </div>
</template>
