// Function to extract and save options from the page
function updateStoredLanguages() {
  const selectEl = document.getElementById("lang");
  if (selectEl) {
    const options = Array.from(selectEl.options).map(opt => ({
      value: opt.value,
      text: opt.text
    }));
    chrome.storage.local.set({ availableLanguages: options });
  }
}

// Run immediately and observe for dynamic page changes (SPAs)
updateStoredLanguages();
const observer = new MutationObserver(updateStoredLanguages);
observer.observe(document.body, { childList: true, subtree: true });

// Helper to check if user is typing in a text field
function isTyping(event) {
  const targetTag = event.target.tagName.toLowerCase();
  return targetTag === 'input' || targetTag === 'textarea' || event.target.isContentEditable;
}

// KEY DOWN: Switch to secondary language when 'S' is pressed
document.addEventListener('keydown', (event) => {
  if (isTyping(event)) return;

  // event.repeat prevents continuous triggering while holding down the key
  if (event.key.toLowerCase() === 's' && !event.repeat) {
    chrome.storage.sync.get({
      primaryLang: 'en:subtitles',
      secondaryLang: 'fr:subtitles'
    }, (items) => {
      var el = document.getElementById("lang");
      if (!el) return;

      if (el.value !== items.secondaryLang) {
        el.value = items.secondaryLang;
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  }
});

// KEY UP: Switch back to primary language when 'S' is released
document.addEventListener('keyup', (event) => {
  if (isTyping(event)) return;

  if (event.key.toLowerCase() === 's') {
    chrome.storage.sync.get({
      primaryLang: 'en:subtitles',
      secondaryLang: 'fr:subtitles'
    }, (items) => {
      var el = document.getElementById("lang");
      if (!el) return;

      if (el.value !== items.primaryLang) {
        el.value = items.primaryLang;
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  }
});