import { computed, reactive, ref, watch } from 'vue'
import { registrationSteps } from '../constants/registrationSteps.js'
import { validateRegistrationStep } from '../utils/validateInputs.js'

export function useRegistrationForm() {
  const userInfo = reactive({ username: '', email: '', description: '' })
  const currentIndex = ref(0)
  const error = ref('')
  const stepIndex = computed(() => currentIndex.value)
  const activeStep = computed(() => registrationSteps[currentIndex.value])
  const isFirstStep = computed(() => currentIndex.value === 0)
  const isLastStep = computed(() => currentIndex.value === registrationSteps.length - 1)

  watch(
    () => [userInfo.username, userInfo.email],
    () => {
      error.value = ''
    },
    { flush: 'sync' }
  )

  function next() {
    if (isLastStep.value) return false
    error.value = validateRegistrationStep(activeStep.value.id, userInfo)
    if (error.value) return false
    currentIndex.value += 1
    return true
  }

  function previous() {
    if (isFirstStep.value) return false
    error.value = ''
    currentIndex.value -= 1
    return true
  }

  return { userInfo, error, stepIndex, activeStep, isFirstStep, isLastStep, next, previous }
}
