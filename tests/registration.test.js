import assert from 'node:assert/strict'
import { test } from 'node:test'
import { effectScope } from 'vue'
import { useRegistrationForm } from '../src/composables/useRegistrationForm.js'
import { isUsernameValid, isEmailValid } from '../src/utils/validateInputs.js'

function setup(t) {
  const scope = effectScope()
  t.after(() => scope.stop())
  return scope.run(useRegistrationForm)
}

test('username and email validators return true only for valid values', () => {
  for (const value of ['', 'usr', 'invalid@name', 'abcdefghijklmnop', null, undefined]) {
    assert.equal(isUsernameValid(value), false)
  }
  for (const value of ['user', 'valid_username', 'a'.repeat(15)]) assert.equal(isUsernameValid(value), true)
  for (const value of ['', 'user @local.test', 'user@example', null]) assert.equal(isEmailValid(value), false)
  assert.equal(isEmailValid('user@local.test'), true)
})

test('invalid steps cannot advance, and editing clears stale errors', (t) => {
  const form = setup(t)
  assert.equal(form.previous(), false)
  assert.equal(form.next(), false)
  assert.equal(form.error.value, 'Invalid Username.')
  form.userInfo.username = 'valid_username'
  assert.equal(form.error.value, '')
  assert.equal(form.next(), true)
  assert.equal(form.activeStep.value.id, 'email')
  assert.equal(form.next(), false)
  assert.equal(form.error.value, 'Invalid email address.')
  assert.equal(form.stepIndex.value, 1)
  form.previous()
  assert.equal(form.error.value, '')
})

test('all entered values survive navigation and review is the final step', (t) => {
  const form = setup(t)
  form.userInfo.username = 'primeshak'
  form.next()
  form.userInfo.email = 'user@local.test'
  form.next()
  form.userInfo.description = 'Hello (world)'
  assert.equal(form.isLastStep.value, true)
  assert.equal(form.next(), false)
  assert.equal(form.activeStep.value.id, 'review')
  form.previous()
  form.previous()
  assert.equal(form.previous(), false)
  assert.equal(form.isFirstStep.value, true)
  assert.deepEqual(
    { ...form.userInfo },
    {
      username: 'primeshak',
      email: 'user@local.test',
      description: 'Hello (world)'
    }
  )
  form.next()
  form.next()
  assert.equal(form.userInfo.description, 'Hello (world)')
})

test('separate form instances never share data', (t) => {
  const first = setup(t)
  const second = setup(t)
  first.userInfo.username = 'primeshak'
  first.next()
  assert.equal(second.userInfo.username, '')
  assert.equal(second.isFirstStep.value, true)
})
