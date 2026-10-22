<div align="center">

# 🌟 VecFlow Image Language 🌟
**The AI-Powered Domain-Specific Language (DSL) for Image Processing.**

[![NPM Version](https://img.shields.io/badge/npm-v5.1.3-blue.svg)](https://www.npmjs.com/package/vecflow-isaiah)
[![Python Version](https://img.shields.io/badge/python-3.8%2B-yellow.svg)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Founder](https://img.shields.io/badge/Founder-Isaiah%20Micheal%20Asuquo-purple.svg)](#)

</div>

---

## 📖 What is VecFlow?
**VecFlow** is a custom programming language built from scratch to manipulate, generate, and filter images directly from your terminal. It bridges the gap between code and visual art, allowing you to generate AI images, draw geometric shapes, apply Photoshop-style filters, and view ASCII previews—all with simple, human-readable commands.

## ✨ Key Features
- **🤖 AI Image Generation:** Generate real pictures using the Cloudflare `flux-1-schnell` AI model. 
- **🪄 Interactive Wizard Mode:** Don't want to memorize syntax? Just type a command (like `AI` or `CANVAS`), press Enter, and VecFlow will guide you through the process step-by-step.
- **🎨 Photoshop Filters:** Blur, Sharpen, Edge Detection, Invert, Sepia, Cartoon, and Threshold.
- **✏️ Drawing Tools:** Create blank canvases, draw rectangles, circles, lines, and write custom text with HEX colors.
- **🖥️ ASCII Terminal Rendering:** View your images directly in the terminal as text before saving them.
- **🔒 Secure by Default:** Uses `.env` architecture to keep API keys completely hidden from public repositories.

---

## 📦 Installation

VecFlow is distributed via **NPM**. You can install it globally on any system with Node.js and Python installed:

```bash
npm install -g vecflow-isaiah




$ vecflow
Welcome to VecFlow v5.1.3!
VecFlow> 


VecFlow> AI
🤖 [VecFlow AI Generator - Cloudflare]
What do you want me to draw? > A beautiful sunset over the ocean
Enter variable name for the image: sunset
[Engine] ⚡ Contacting Cloudflare AI: 'A beautiful sunset over the ocean'...
[Engine] 🤖 Image generated and stored in variable 'sunset'!
[Engine] Auto-saved to /sdcard/Download/sunset.jpg


// my_art.vf
CANVAS 800 800 #1A1A2E -> my_canvas
DRAW_CIRCLE my_canvas 400 400 200 RED -> step1
DRAW_TEXT step1 "ISAIAH" 200 350 80 WHITE -> step2
BLUR step2 -> final_art
SAVE final_art AS "my_poster.png"




vecflow my_art.vf



Category Commands
🤖 AI & Input AI, ASK, PICK
🎨 Generators CANVAS, PLASMA, DRAW_RECT, DRAW_LINE, DRAW_CIRCLE, DRAW_TEXT, PASTE
✨ Filters CARTOON, SEPIA, BLUR, SHARPEN, EDGES, INVERT, THRESHOLD
🧮 Math & Logic SET, MULTIPLY, ADD, SUBTRACT, MAX
📐 Geometry RESIZE, CROP, FLIP, BLEND
💾 System & I/O LOAD, SAVE, VIEW, RENDER, OUTPUT





👨‍💻 About the Founder

Isaiah Micheal Asuquo
Creator & Lead Developer

"I built VecFlow from scratch to prove that powerful, AI-driven image processing doesn't require a heavy graphical interface. By combining Python's backend power with NPM's distribution, I created a terminal tool that is both accessible to beginners and powerful enough for developers."

· GitHub: @isaiahmumudevelop-hue
· NPM Package: vecflow-isaiah

---





### 🚀 How to apply this to your GitHub:
1. In your `~/npm_build` terminal, open your README:
   ```bash
   nano README.md






