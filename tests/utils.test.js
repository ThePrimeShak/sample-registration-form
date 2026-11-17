import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isBalancedText } from '../src/utils/isBalancedText.js'
import { debounce } from '../src/utils/debounce.js'

test('balanced brackets allow text and nesting but reject mismatched ordering', () => {
  for (const value of ['', 'Hello', '(hello)', '[are (you)]', '{how [are (you)]}', '{}[]()', 'متن (توضیح)']) {
    assert.equal(isBalancedText(value), true, value)
  }
  for (const value of ['(', ')', '[(you', '[you)', '{[(you', 'you)]}', '([you)]}', '([)]', '}{']) {
    assert.equal(isBalancedText(value), false, value)
  }
})

test('debounce calls once with the latest arguments and preserves this', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  const calls = []
  const context = { name: 'context' }
  const callback = debounce(function (value) {
    calls.push([this.name, value])
  }, 1000)
  callback.call(context, 'first')
  t.mock.timers.tick(500)
  callback.call(context, 'latest')
  t.mock.timers.tick(999)
  assert.deepEqual(calls, [])
  t.mock.timers.tick(1)
  assert.deepEqual(calls, [['context', 'latest']])
})

test('cancel prevents delayed work and the function can be reused', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  let calls = 0
  const callback = debounce(() => {
    calls += 1
  }, 1000)
  callback()
  callback.cancel()
  callback.cancel()
  t.mock.timers.tick(2000)
  assert.equal(calls, 0)
  callback()
  t.mock.timers.tick(1000)
  assert.equal(calls, 1)
})
