<script>
// why optional API?
// the test was written in a different way
// (methods does not exposed to use in Description test file)

import { debounce } from '@/utils/debounce.js'
export default {
  props: { userInfo: Object, modelValue: { type: String, default: '' } },
  emits: ['update:modelValue'],
  data() {
    return {
      textMessage: ''
    }
  },
  methods: {
    isBalanced(text) {
      const balancedMessage = 'The text is balanced.'
      const unBalancedMessage = 'The text is not balanced.'

      this.textMessage = ''
      const stack = []

      for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i)

        if (char === '{' || char === '(' || char === '[') {
          stack.push(char)
        } else if (char === ']') {
          if (stack[stack.length - 1] != '[' || stack.length === 0) {
            this.textMessage = unBalancedMessage
            break
          } else {
            stack.pop()
          }
        } else if (char === ')') {
          if (stack.length === 0 || stack[stack.length - 1] != '(') {
            this.textMessage = unBalancedMessage
            break
          } else {
            stack.pop()
          }
        } else if (char === '}') {
          if (stack[stack.length - 1] != '{' || stack.length === 0) {
            this.textMessage = unBalancedMessage
            break
          } else {
            stack.pop()
          }
        }
      }

      if (stack.length !== 0) this.textMessage = unBalancedMessage
      else if (!this.textMessage) this.textMessage = balancedMessage
    },

    handleInput(event) {
      this.$emit('update:modelValue', event.target.value)
      this.descriptionInput(event)
    },

    descriptionInput() {}
  },

  created() {
    this.descriptionInput = debounce((event) => {
      this.isBalanced(event.target.value)
    }, 1000)
  }
}
</script>

<template>
  <div class="review-content">
    <div class="review-details"
      ><p
        >Username: <strong>{{ userInfo ? userInfo.username : '' }}</strong></p
      ><p
        >Email: <strong>{{ userInfo ? userInfo.email : '' }}</strong></p
      ></div
    >
    <div class="field-group">
      <label for="description">A little about you <span class="optional">(optional)</span></label>
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
        >{{ textMessage }}</p
      >
    </div>
  </div>
</template>
