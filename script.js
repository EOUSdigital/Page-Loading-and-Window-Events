"use strict";

//Title 🟧 Module 8 - Events: Lesson 11. Page Loading and Window Events

//?  🛠️ Guided Practice

//🎯 Task 1: DOM Ready

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");
});

//  🎯 Task 2: Page Loaded

window.addEventListener("load", function () {
    console.log("Page fully loaded");
});

//  🎯 Task 3: Resize

window.addEventListener("resize", function () {
    console.log("Window resized");
});

//  🎯 Task 4: Scroll

window.addEventListener("scroll", function () {
    console.log("Scrolling . . .");
});


//?  🧠 Auto-Initializing UI with DOMContentLoaded

document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById('app');
    const listElement = document.createElement('ul');

    const items = ["Item One", "Item Two", "Item Three"];

    items.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.className = 'item';

        const text = document.createElement('span');
        text.textContent = item;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";

        listItem.appendChild(text);
        listItem.appendChild(deleteBtn);
        listElement.appendChild(listItem);
    });

    app.appendChild(listElement);

    listElement.addEventListener('click', function (e) {
        const deleteBtn = e.target.closest('.deleteBtn');
        if (!deleteBtn) return;

        const item = deleteBtn.closest('.item');
        if (item) item.remove();
    });
});

