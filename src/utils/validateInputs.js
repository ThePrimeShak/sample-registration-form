const USERNAME_PATTERN = /^\w{4,15}$/
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const isUsernameValid = (value) => typeof value === 'string' && USERNAME_PATTERN.test(value)
export const isEmailValid = (value) => typeof value === 'string' && EMAIL_PATTERN.test(value)

export function validateRegistrationStep(step, userInfo) {
  if (step === 'username' && !isUsernameValid(userInfo.username)) return 'Invalid Username.'
  if (step === 'email' && !isEmailValid(userInfo.email)) return 'Invalid email address.'
  return ''
}
