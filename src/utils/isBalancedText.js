const OPENING_BRACKETS = new Set(['(', '[', '{'])
const BRACKET_PAIRS = { ')': '(', ']': '[', '}': '{' }

export function isBalancedText(text) {
  const stack = []
  for (const character of text) {
    if (OPENING_BRACKETS.has(character)) {
      stack.push(character)
    } else if (Object.hasOwn(BRACKET_PAIRS, character) && stack.pop() !== BRACKET_PAIRS[character]) {
      return false
    }
  }
  return stack.length === 0
}
