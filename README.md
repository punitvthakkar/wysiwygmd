# WYSIWYG MD 📝

**[Live Demo](https://punitvthakkar.github.io/wysiwygmd/)** 

WYSIWYG MD is a purely visual Markdown editor. It allows you to write and format text exactly as it will appear, without ever having to write or look at Markdown syntax. Behind the scenes, it generates clean, standard `.md` files.

## ✨ Features

* **Visual Editing:** Edit text like you would in a standard word processor (Word, Google Docs). 
* **True Markdown Export:** Your formatted text is instantly converted to clean Markdown when you save.
* **Rich Formatting:** Supports headings, bold, italics, strikethrough, blockquotes, code blocks, bulleted/numbered lists, and horizontal rules.
* **Media Support:** Easily insert links and images via the toolbar.
* **Drag & Drop:** Drag any existing `.md` or `.txt` file directly into the browser to start editing.
* **Dark Mode:** Built-in light and dark themes (accessible via the top-right menu).
* **Word Count:** Live tracking in the bottom status bar.

## 🚀 How to Use

1. **Start Typing:** Open the app and simply start typing in the main editor area.
2. **Format Text:** Highlight any text and use the top toolbar (or standard keyboard shortcuts like `Ctrl+B`) to apply styles.
3. **Open Existing Files:** Click the **Open** button in the top right, or drag and drop an existing `.md` file right into the editor window.
4. **Save Your Work:** Click the **Save** button to instantly download your formatted document as a standard `document.md` file. 

## 🛠 Under the Hood

This is a lightweight, single-file application. It uses **[Marked.js](https://marked.js.org/)** to parse uploaded Markdown files into the visual editor, and **[Turndown.js](https://github.com/mixmark-io/turndown)** to cleanly convert your visual edits back into standard Markdown upon saving.
