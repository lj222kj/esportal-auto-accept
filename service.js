const checked = true
const throttle = 5 // Represented as seconds

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ checked, throttle })
  console.info(`Auto accept by default set to:  ${checked} after ${throttle} seconds`)
})

