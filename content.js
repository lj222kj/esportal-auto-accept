
let timeout = null;
const observer = new MutationObserver(async (_) => {
    try {
        const accept = document.getElementById('match-accept')
        if (accept) {
            await waitForThrottle()
            clearTimeout(timeout)
            accept.click()
        }
    } catch (e){
        console.error(e)
    }
});

async function waitForThrottle() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['checked', 'throttle'], ({ checked, throttle } ) => {
            if (!checked) reject(new Error('Auto-accept is disabled, requires checkbox to be checked.'))
            timeout = setTimeout(() => {
                console.info('Ready to accept match')
                resolve()
            }, throttle * 1000)
        });
    })
}
observer.observe(document, { childList: true, subtree: true });

