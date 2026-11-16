<script setup lang="js">
import { computed, nextTick, ref, watch } from 'vue'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import UsernameTab from '@/components/wizard-tabs/UsernameTab.vue'
import EmailTab from '@/components/wizard-tabs/EmailTab.vue'
import DescriptionTab from '@/components/Description.vue'
import FemaleUserImage from '@/assets/images/female-user.svg'
import FemaleEmail from '@/assets/images/female-email.svg'
import FemaleReview from '@/assets/images/female-review.svg'
import { isUsernameValid, isEmailValid, isInputEmpty } from '@/utils/validateInputs'

const userInfo = ref({
  username: '',
  email: '',
  description: ''
})

const tabs = ['username', 'email', 'review']
const selectedTab = ref(tabs[0])

const error = ref('')
const stepIndex = computed(() => tabs.indexOf(selectedTab.value))
const stepContent = {
  username: {
    title: 'Make it yours.',
    subtitle: 'Every great start begins with a name. Choose yours.',
    caption: 'Your next chapter starts here.',
    detail: 'Three simple steps. One fresh beginning.'
  },
  email: {
    title: 'Let’s stay in touch.',
    subtitle: 'Add the email address you’d like to use.',
    caption: 'A little more connected.',
    detail: 'Your details, one simple step at a time.'
  },
  review: {
    title: 'Looking good!',
    subtitle: 'Take a moment to review your details.',
    caption: 'All the details. All you.',
    detail: 'Review your information before you go.'
  }
}
watch(
  () => [userInfo.value.username, userInfo.value.email],
  () => {
    error.value = ''
  }
)
watch(
  selectedTab,
  async () => {
    error.value = ''
    await nextTick()
    document.getElementById(selectedTab.value === 'review' ? 'description' : selectedTab.value)?.focus()
  },
  { flush: 'post' }
)

const usernameValidate = () => {
  error.value = ''
  if (isUsernameValid(userInfo.value.username)) {
    error.value = 'Invalid Username.'
  }
  return !error.value
}

const emailValidate = () => {
  error.value = ''
  if (isEmailValid(userInfo.value.email) || isInputEmpty(userInfo.value.email)) {
    error.value = 'Invalid email address.'
  }
  return !error.value
}

const clickNextButton = () => {
  if (selectedTab.value === 'review') return
  if (selectedTab.value === 'username') {
    if (!usernameValidate()) return
  } else if (selectedTab.value === 'email') {
    if (!emailValidate()) return
  }

  const index = tabs.findIndex((tab) => tab == selectedTab.value)
  selectedTab.value = tabs[index + 1]
}

const clickPreviousButton = () => {
  if (selectedTab.value === 'username') return
  const index = tabs.findIndex((tab) => tab == selectedTab.value)
  selectedTab.value = tabs[index - 1]
}
</script>

<template>
  <section class="registration-section" aria-labelledby="page-title">
    <div class="page-intro">
      <span class="eyebrow"><span aria-hidden="true">✦</span> A FRESH START</span>
      <h1 id="page-title">Good things start <span>with you.</span></h1>
      <p>A few details. A few clicks. Your next step starts here.</p>
    </div>
    <Card class="wizard-card">
      <aside class="illustration-panel" aria-label="Registration introduction">
        <span class="panel-label"><span class="status-dot" aria-hidden="true"></span> YOUR NEXT CHAPTER</span>
        <div class="illustration-wrap">
          <img :src="[FemaleUserImage, FemaleEmail, FemaleReview][stepIndex]" alt="" class="step-illustration" />
          <span class="illustration-spark spark-one" aria-hidden="true">✦</span>
          <span class="illustration-spark spark-two" aria-hidden="true">+</span>
        </div>
        <div class="panel-copy"
          ><h2>{{ stepContent[selectedTab].caption }}</h2
          ><p>{{ stepContent[selectedTab].detail }}</p></div
        >
        <div class="panel-dots" aria-hidden="true"
          ><span v-for="(_, index) in tabs" :key="index" :class="{ active: index === stepIndex }"></span
        ></div>
      </aside>
      <form class="form-panel" novalidate @submit.prevent="clickNextButton">
        <ol class="stepper" aria-label="Registration progress">
          <li
            v-for="(tab, index) in tabs"
            :key="tab"
            :class="{ current: stepIndex === index, complete: stepIndex > index }"
            :aria-current="stepIndex === index ? 'step' : undefined"
          >
            <span class="step-number" aria-hidden="true">{{ stepIndex > index ? '✓' : index + 1 }}</span><span>{{
              tab === 'username' ? 'Username' : tab === 'email' ? 'Email' : 'Review'
            }}</span>
          </li>
        </ol>
        <div class="form-heading" aria-live="polite"
          ><p class="step-label">Step: {{ selectedTab }}</p
          ><h2>{{ stepContent[selectedTab].title }}</h2
          ><p>{{ stepContent[selectedTab].subtitle }}</p></div
        >
        <div class="step-content">
          <UsernameTab v-if="selectedTab === 'username'" v-model="userInfo.username" :error="error" />
          <EmailTab v-else-if="selectedTab === 'email'" v-model="userInfo.email" :error="error" />
          <DescriptionTab v-else :user-info="userInfo" v-model="userInfo.description" />
        </div>
        <div class="form-actions" aria-label="Step navigation">
          <Button
            id="btn-prev"
            type="button"
            variant="outline"
            :disabled="selectedTab === 'username'"
            @click="clickPreviousButton"
            ><span aria-hidden="true">←</span> Previous</Button
          >
          <Button id="btn-next" type="submit" variant="primary" :disabled="selectedTab === 'review'"
            >Next <span aria-hidden="true">→</span></Button
          >
        </div>
        <p class="form-note"
          ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
            <rect x="5" y="10" width="14" height="11" rx="3" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg
          >Just a demo. Your details stay in this page.</p
        >
      </form>
    </Card>
    <p class="below-card"><span aria-hidden="true">✧</span> Simple by design. Thoughtful in every detail.</p>
  </section>
</template>
