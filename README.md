# TV5Monde+ Subtitle Toggle Extension

A lightweight Chrome/Edge extension that allows you to temporarily switch subtitle languages on **TV5Monde+** by holding down a key (`S`).

## Features

- **Push-to-Toggle Subtitles**: Press and hold **S** to switch to your secondary subtitle language; release **S** to revert back to your primary language.
- **Dynamic Language Detection**: Automatically scans available languages directly from the video player.
- **Toolbar Quick Settings**: Conveniently select your preferred primary and secondary languages right from the extension popup.

---

## Installation (Developer Mode)

If you downloaded or cloned this source code:

1. Open your browser and navigate to:
   - **Chrome**: `chrome://extensions`
   - **Edge**: `edge://extensions`
2. Enable **Developer mode** (toggle switch in the upper right or bottom left corner).
3. Click **Load unpacked**.
4. Select the folder containing these extension files.

---

## How to Use

1. Open any video on [TV5Monde+](https://www.tv5mondeplus.com/).
2. Click the **Extension icon** in your browser toolbar to set your **Primary** and **Secondary** languages.
3. While watching a video:
   - **Hold 'S'**: Switches to your Secondary language.
   - **Release 'S'**: Switches back to your Primary language.

---

## Folder Structure

```text
tv5monde-subtitle-toggle/
├── manifest.json   # Extension configuration (Manifest V3)
├── content.js       # Keypress listener & DOM handler
├── popup.html       # Popup interface for language selection
├── popup.js         # Settings & storage logic
└── README.md        # Documentation
```

---

## License

MIT License. Feel free to modify and share!