const enable = document.getElementById("enable")
const wait = document.getElementById("wait")

enable.addEventListener("change", toggleChecked)
wait.addEventListener("change", toggleSelect)
function sync() {
  chrome.storage.sync.get(['checked', 'throttle'], ({ checked, throttle }) => {
    enable.checked = Boolean(checked)
    setDefaultSelectionTo(throttle)    
  });
}
sync()

function setDefaultSelectionTo(throttle) {
  for (let o = 0; o < wait.options.length ; o++) {
    if (Number(wait.options[o].value) === throttle) {
      wait.selectedIndex = o
    }
  }
}
function toggleChecked({ target: { checked }}) {
   chrome.storage.sync.set({ checked })
}

function toggleSelect({ target: { value } }) {
   chrome.storage.sync.set({ throttle: Number(value) })
}
