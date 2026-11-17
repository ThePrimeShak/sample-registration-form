<script setup>
import { ref, watch } from 'vue'
import Button from '@/components/ui/Button.vue'
import UsernameStep from '@/components/registration/UsernameStep.vue'
import EmailStep from '@/components/registration/EmailStep.vue'
import RegistrationIllustration from '@/components/registration/RegistrationIllustration.vue'
import RegistrationProgress from '@/components/registration/RegistrationProgress.vue'
import Description from '@/components/Description.vue'
import { useRegistrationForm } from '@/composables/useRegistrationForm.js'
import { registrationSteps } from '@/constants/registrationSteps.js'

const { userInfo, error, stepIndex, activeStep, isFirstStep, isLastStep, next, previous } = useRegistrationForm()
const formElement = ref(null)

watch(
  activeStep,
  (step) => {
    formElement.value?.querySelector(`#${step.focusField}`)?.focus()
  },
  { flush: 'post' }
)
</script>

<template>
  <section class="registration-section" aria-labelledby="page-title">
    <div class="page-intro">
      <span class="eyebrow">
        <span aria-hidden="true">✦</span>
        A FRESH START
      </span>
      <h1 id="page-title">
        Good things start
        <span>with you.</span>
      </h1>
      <p>A few details. A few clicks. Your next step starts here.</p>
    </div>
    <article class="wizard-card">
      <RegistrationIllustration :step="activeStep" :steps="registrationSteps" :step-index="stepIndex" />
      <form class="form-panel" ref="formElement" novalidate @submit.prevent="next">
        <RegistrationProgress :steps="registrationSteps" :step-index="stepIndex" />
        <div class="form-heading" aria-live="polite">
          <p class="step-label">Step: {{ activeStep.id }}</p>
          <h2>{{ activeStep.title }}</h2>
          <p>{{ activeStep.subtitle }}</p>
        </div>
        <div class="step-content">
          <UsernameStep v-if="activeStep.id === 'username'" v-model="userInfo.username" :error="error" />
          <EmailStep v-else-if="activeStep.id === 'email'" v-model="userInfo.email" :error="error" />
          <Description v-else :user-info="userInfo" v-model="userInfo.description" />
        </div>
        <div class="form-actions" aria-label="Step navigation">
          <Button id="btn-prev" type="button" variant="outline" :disabled="isFirstStep" @click="previous">
            <span aria-hidden="true">←</span>
            Previous
          </Button>
          <Button id="btn-next" type="submit" variant="primary" :disabled="isLastStep">
            Next
            <span aria-hidden="true">→</span>
          </Button>
        </div>
        <p class="form-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
            <rect x="5" y="10" width="14" height="11" rx="3" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          Just a demo. Your details stay in this page.
        </p>
      </form>
    </article>
    <p class="below-card">
      <span aria-hidden="true">✧</span>
      Simple by design. Thoughtful in every detail.
    </p>
  </section>
</template>
