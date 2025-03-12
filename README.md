# ✨ Random Quote Generator with Dynamic Backgrounds

A simple web app that displays **random quotes** with **beautiful Unsplash backgrounds**.  
Includes **Dark Mode**, a **typing animation**, and a **smooth loader**.

---

## 🚀 **Features**

- ✔ **Fetches random quotes from an API** (qapi.vercel.app)
- ✔ **Loads a new Unsplash background image every 5 quotes**
- ✔ **Dark Mode Toggle** 🌙☀
- ✔ **Typing animation for quotes**
- ✔ **Smooth loading screen**
- ✔ **Optimized API requests (Prevents Unsplash API abuse)**

---

---

## 🛠 **Installation & Setup**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/quote-generator.git
cd quote-generator
```

### **2️⃣ Install Live Server (Optional)**

If you want to run it locally, use Live Server:

```sh
npm install -g live-server
live-server
```

---

## 🔑 **Configuring the API Key**

This project requires an **Unsplash API key** to fetch background images.

### **1️⃣ Get an Unsplash API Key**

- Sign up at **[Unsplash Developers](https://unsplash.com/developers)**
- Create a new application
- Get your **Access Key**

### **2️⃣ Create a `config.js` File (DO NOT UPLOAD IT!)**

Inside your project folder, create a **config.js** file:

```js
const UNSPLASH_ACCESS_KEY = 'your_api_key_here';
export { UNSPLASH_ACCESS_KEY };
```

### **3️⃣ Add `config.js` to `.gitignore` (VERY IMPORTANT!)**

Make sure **config.js** is NOT uploaded to GitHub! Add this line to `.gitignore`:

```
config.js
```

---

## 🌐 **Usage**

1. Open `index.html` in a browser
2. Click **"Generate Quote"** to get a new quote & background
3. Toggle **Dark Mode** for a different theme

---

## 🌟 **Technologies Used**

- **HTML** (Structure)
- **CSS** (Styling & Dark Mode)
- **JavaScript** (Fetching API, animations, interactivity)
- **Unsplash API** (Background images)
- **Quotable API (or alternative)** (Quotes)

---

---

## 🤝 **Contributing**

Feel free to **fork this project**, improve it, and create a **pull request**! 😊

---

## ⚠ **Important Notes**

⚠ **Never expose your Unsplash API key publicly!**  
⚠ **Always add `config.js` to `.gitignore` before pushing to GitHub!**

---

### ⭐ **Enjoy this project? Give it a star!** ⭐
