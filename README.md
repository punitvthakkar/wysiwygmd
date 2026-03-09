# WYSIWYG MD 📝

**[Live Demo](https://punitvthakkar.github.io/wysiwygmd/)** 

WYSIWYG MD is a purely visual Markdown editor. It allows you to write and format text exactly as it will appear, without ever having to write or look at Markdown syntax. Behind the scenes, it generates clean `.md` files, using standard Markdown where possible and raw HTML inside Markdown for features that Markdown cannot express on its own.

## ✨ Features

* **Visual Editing:** Edit text like you would in a standard word processor (Word, Google Docs). 
* **Markdown-First Export:** Your formatted text is converted to Markdown when you save, with raw HTML embedded only for features like font color and explicit image alignment.
* **Rich Formatting:** Supports headings, bold, italics, strikethrough, inline code, blockquotes, code blocks, bulleted/numbered lists, task lists, tables, and horizontal rules.
* **Advanced Styling:** Apply font color directly in the editor. Color is preserved as HTML inside the saved Markdown file because standard Markdown has no font-color syntax.
* **Media Support:** Insert image URLs via the toolbar, paste images directly from your clipboard, or drop image files into the editor.
* **Image Alignment:** Align images left, center, right, or full-width inside the document column. This is preserved as HTML inside the Markdown file.
* **Drag & Drop:** Drag any existing `.md` or `.txt` file directly into the browser to start editing.
* **Dark Mode:** Built-in light and dark themes (accessible via the top-right menu).
* **Word Count:** Live tracking in the bottom status bar.

## 🚀 How to Use

1. **Start Typing:** Open the app and simply start typing in the main editor area.
2. **Format Text:** Highlight text and use the top toolbar to apply Markdown-native formatting like bold, inline code, task lists, and tables.
3. **Use Advanced Styling:** Apply text color or explicit image alignment when you need richer presentation. These features are saved as raw HTML inside the `.md` file.
4. **Insert Images:** Use the image button for remote image URLs, paste screenshots directly, or drop image files into the editor.
5. **Open Existing Files:** Click the **Open** button in the top right, or drag and drop an existing `.md` file right into the editor window.
6. **Save Your Work:** Click the **Save** button to instantly download your formatted document as `document.md`.

## 🛠 Under the Hood

This is a lightweight, single-file application. It uses **[Marked.js](https://marked.js.org/)** to parse uploaded Markdown files into the visual editor, and **[Turndown.js](https://github.com/mixmark-io/turndown)** to convert your visual edits back into Markdown on save.

Most formatting exports as standard Markdown. Features that standard Markdown does not support, such as font color and explicit image alignment, are preserved as raw HTML inside the saved `.md` file.

## Notes And Constraints

* **Font color is not standard Markdown:** The editor preserves it with HTML spans inside the Markdown file.
* **Explicit image alignment is not standard Markdown:** The editor preserves left, center, right, and full-width image alignment with HTML attributes inside the Markdown file.
* **Pasted images are embedded:** Clipboard and dropped images are stored as data URLs inside the document, which keeps everything self-contained but can make files much larger.
* **Embedded images export as references when possible:** Non-aligned embedded images are saved as reference-style Markdown such as `![Screenshot][img1]`, with the Base64 `data:` URLs emitted at the bottom of the file. Images that need HTML-only alignment metadata still export as inline HTML.
* **This is not a freeform canvas:** Images can be aligned within the document column, but they cannot be freely positioned like objects on a design canvas.
