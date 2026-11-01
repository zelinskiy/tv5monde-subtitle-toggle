document.addEventListener('DOMContentLoaded', () => {
  // Fetch available languages dynamically grabbed from the active page
  chrome.storage.local.get(['availableLanguages'], (data) => {
    const primarySelect = document.getElementById('primaryLang');
    const secondarySelect = document.getElementById('secondaryLang');
    const warningEl = document.getElementById('warning');

    if (!data.availableLanguages || data.availableLanguages.length === 0) {
      warningEl.textContent = '⚠️ Open a video page on tv5mondeplus.com first to populate languages!';
      return;
    }

    primarySelect.innerHTML = '';
    secondarySelect.innerHTML = '';

    data.availableLanguages.forEach(lang => {
      primarySelect.add(new Option(lang.text, lang.value));
      secondarySelect.add(new Option(lang.text, lang.value));
    });

    chrome.storage.sync.get({
      primaryLang: 'en:subtitles',
      secondaryLang: 'fr:subtitles'
    }, (items) => {
      primarySelect.value = items.primaryLang;
      secondarySelect.value = items.secondaryLang;
    });
  });
});

// Save options and close popup
document.getElementById('save').addEventListener('click', () => {
  const primaryLang = document.getElementById('primaryLang').value;
  const secondaryLang = document.getElementById('secondaryLang').value;

  chrome.storage.sync.set({
    primaryLang: primaryLang,
    secondaryLang: secondaryLang
  }, () => {
    const status = document.getElementById('status');
    status.textContent = 'Saved successfully!';
    setTimeout(() => {
      window.close();
    }, 800);
  });
});