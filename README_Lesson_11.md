# 🟧 Module 08 – Lesson 11: Page Loading & Window Events

## 📌 Overview
This lesson introduces browser-driven events such as page loading, resizing, scrolling, and unloading. These events allow developers to control how an application behaves when the page loads or changes state.

---

## 🧠 Concepts Covered

### 1. DOMContentLoaded
- Fires when the HTML is fully parsed
- Ensures the DOM is ready before JavaScript runs
- Used to safely initialise UI and attach event listeners

### 2. load Event
- Fires when the entire page is fully loaded
- Includes images, CSS, fonts, and other resources

### 3. beforeunload Event
- Fires when the user attempts to leave the page
- Can be used to warn users about unsaved changes

### 4. resize Event
- Fires when the browser window is resized

### 5. scroll Event
- Fires when the user scrolls the page

---

## 💻 Example: DOMContentLoaded

```js
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and ready");
});
```

---

## 💻 Example: load Event

```js
window.addEventListener("load", function () {
  console.log("Page fully loaded");
});
```

---

## 💻 Example: beforeunload

```js
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});
```

---

## 💻 Example: resize

```js
window.addEventListener("resize", function () {
  console.log(window.innerWidth);
});
```

---

## 💻 Example: scroll

```js
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});
```

---

## 🔑 Key Takeaways

- Use `DOMContentLoaded` to safely initialise your app
- Use `load` only when full resources are needed
- Window events manage application lifecycle
- Event delegation works with dynamic elements

---

## ⚠️ Common Mistakes

- Running JavaScript before DOM is ready
- Confusing `load` with `DOMContentLoaded`
- Not checking element existence

---

## 🧠 Real-World Use Cases

- Initialising UI components
- Loading saved data
- Preventing data loss
- Responsive design handling

---

## 🤔 Reflection Questions

- 1️⃣ Why is `DOMContentLoaded` preferred over `load`?
- Answer: We use DOMContentLoaded the code only needs access to HTML elements on the page, such as buttons, forms, or text containers. The load event waits for everything on the page, including images, stylesheets, and iframes, so it fires later. For most beginner UI code, waiting longer gives no benefit.
- 2️⃣ Why initialize UI after DOM is ready?
- Answer: We initialize UI after the DOM is ready because JavaScript often needs to find elements first, and those elements do not exist in the page until the browser finishes parsing the HTML. If we run too early, querySelector or getElementById may return nothing, and the code can fail or do nothing. A simple example is attaching click handlers to a button only after that button exists in the DOM.
- 3️⃣ When would you use `beforeunload`?
- Answer: Use beforeunload when we want to warn the user before leaving a page, especially if they may lose unsaved work, like a form, draft, or editor content. It is meant for “Are you sure you want to leave?” situations, not for normal page setup. Because browsers limit and control this behavior, it should be used sparingly.

---

## 💡 Final Thought

Understand how JavaScript interacts with the browser lifecycle — a key step toward building real applications.
