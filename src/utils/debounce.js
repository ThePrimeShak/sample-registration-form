export function debounce(callback, delay) {
  let timer

  function cancel() {
    clearTimeout(timer)
    timer = undefined
  }

  function debounced(...args) {
    cancel()
    timer = setTimeout(() => {
      timer = undefined
      callback.apply(this, args)
    }, delay)
  }

  debounced.cancel = cancel
  return debounced
}
