"use strict";

//Title 🟧 Module 8 - Events: Lesson 11. Page Loading and Window Events

//* 🧠 Concept Explanation

//  So far, you’ve been reacting to:
//  • clicks
//  • inputs
//  • user actions

//  Now we look at:
//  👉 Events triggered by the browser itself

//# 💡 What are Window Events?
//  These are events that happen when:
//  • the page loads
//  • the page finishes loading resources
//  • the user leaves or refreshes

//? 🧩 1. DOMContentLoaded
//  💡 What it means:
//  👉 “HTML is fully loaded and ready”

//  ✅ Example

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");
});

//  🔍 Why it matters
//  • Ensures your elements exist before JS runs
//  • Prevents null errors from getElementById

//* 🧠 Mental Model
//  HTML loaded → DOM ready → JS can safely run

//? 🧩 2. load Event
//  💡 What it means:
//  👉 “Everything is loaded”
//  • HTML
//  • CSS
//  • Images
//  • Fonts

//  ✅ Example

window.addEventListener("load", function () {
    console.log("Page fully loaded");
});

//! 🔍 Difference from DOMContentLoaded
//  | Event                     | When it fires         |
//  | ------------------------- | --------------------- |
//  | DOMContentLoaded          | HTML ready            |
//  | load                      | Everything ready      |

//? 🧩 3. beforeunload
//  💡 What it means:
//  👉 Triggered when user tries to leave the page

//  ✅ Example

window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue();
});

//  🔍 Use Case
//  • Warn user before leaving
//  • Prevent losing unsaved data

//? 🧩 4. resize
//  💡 What it means:
//  👉 Fires when browser window changes size

//  ✅ Example

window.addEventListener("resize", function () {
    console.log("Window resize");
});

//? 🧩 5. scroll
//  💡 What it means:
//  👉 Fires when user scrolls

//  ✅ Example

window.addEventListener("scroll", function () {
    console.log("Scrolling . . .");
});

//! ⚠️ Common Beginner Mistakes
//  • Running JS before DOM is ready
//  • Confusing DOMContentLoaded with load
//  • Overusing scroll events (can affect performance)


//* 🛠️ Guided Practice

//? 🎯 Task 1: DOM Ready
//  • Log a message when DOM is ready

//? 🎯 Task 2: Page Loaded
//  • Log when full page loads

//? 🎯 Task 3: Resize
//  • Log window width when resizing

//? 🎯 Task 4: Scroll
//  • Log scroll position (window.scrollY)

//  ✅ You are done when:
//  • Each event logs correctly
//  • You understand when each event fires


//# 🤔 Reflection Question

//  Why do you think most JavaScript apps use 'DOMContentLoaded' instead of 'load'?
//  Answer: Most JavaScript apps use DOMContentLoaded because it fires as soon as the HTML is parsed and the DOM is ready, so scripts can start wiring up the page sooner. The load event waits for everything on the page — images, stylesheets, iframes, and other resources — which is usually later than needed for most app logic.

//! ⁉️ Feedback

//  DOMContentLoaded vs load
//  ✔️ Correct
//  👉 Key point: DOM is ready earlier → faster interaction


//TODO  🧠 Mini Feature: Auto-Initializing UI with DOMContentLoaded

//* 🎯 Goal
//  We will simulate a real app behavior:

//  👉 When the page loads:
//  • The app automatically displays some items
//  • No user interaction needed

//* 🧩 What You Will Build

//  A simple system where:
//  • Page loads → Items appear automatically in the UI

//  👉 This mimics:
//  • Loading saved data
///  • Initializing UI state

//* 🏗️ Setup (HTML)
//  Use your existing structure or create something like:
<div id="app"></div>

//* 🛠️ Your Task (No Full Code — You Build It)

//? Step 1: Listen for DOM Ready
//  👉 Use:
//  • DOMContentLoaded

//? Step 2: Create Initial Data
//  Inside the event:
//  👉 Create an array like:
//  • ["Item One", "Item Two", "Item Three"]

//? Step 3: Render Items
//  For each item:
//  • Create a new element (div, li, etc.)
//  • Add text content
//  • Append it to your container (#app)

//? Step 4: Make It Look Like Your Previous Cards
//  Optional but recommended:
//  👉 Add:
//  • A title/text
//  • A delete button (you already know how 😉)

//* 🔍 Expected Behavior
//  When you refresh the page:
//  • Item One
//  • Item Two
//  • Item Three
//  👉 appear automatically

//# 💡 Why This Matters

//  This is the bridge to Module 9
//  Because later you will:
//  • localStorage → load data → display on page
//  👉 This is the same pattern, just with real data

//! ⚠️ Common Mistakes
//  • Running code outside DOMContentLoaded
//  • Forgetting to append elements
//  • Overwriting instead of appending
//  • Not selecting the container correctly

//* 🧠 Mental Model
//  DOM ready
//     ↓
//  Load data (array)
//     ↓
//  Create elements
//     ↓
//  Render UI

//# 🤔 Reflection Question

//  Why do you think we initialize the UI after DOM is loaded, instead of running the code immediately?
//  Answer: We initialize the UI after the DOM is loaded so the elements we want to use actually exist first. Otherwise, our code might run too early and fail because it can’t find buttons, inputs, or containers yet.

//! ⁉️ Feedback

//  Initializing after DOM load
//  ✔️ Correct
//  👉 Key point: Prevents null errors by ensuring elements exist


//TODO  💻 Code Feedback (Focused & Practical)
//  ✅ What You Did Well
//  • Used DOMContentLoaded correctly ✔️
//  • Created elements dynamically ✔️
//  • Used an array to render UI ✔️
//  • Applied event delegation ✔️
//  • Updated UI title ✔️
//  👉 This is solid and structured.

//! ⚠️ Improvements (Important)

//? 1️⃣ Delete Button Placement
//  Right now:
//  • One global Delete button
//  • Deletes the last item only
//  👉 This is not scalable

//# 💡 Better Approach (Concept)

//  Each item should have its own delete button
//  • Item One   [Delete]
//  • Item Two   [Delete]
//  👉 Then remove the clicked item, not the last one

//? 2️⃣ Unused Element
const listContainer = document.createElement('div');
//  👉 Not used → can be removed

//? 3️⃣ Event Delegation Target
//  You used:
if (e.target.classList.contains("deleteBtn")) {};
//  👉 Works, but less robust than .closest()

//* 🧠 Key Insight
//  Your current logic:
//  • Click → delete last item
//  Better logic:
//  • Click → identify button → find its item → remove it

//* 🛠️ Mini Upgrade (Your Next Step)
//  👉 Modify your UI so:
//  1. Each <li> has its own Delete button
//  2. Clicking it removes that specific item

//# 🤔 Reflection Question

//  Why is deleting a specific item better than always deleting the last item?
//  Answer: Deleting a specific item is usually better because it removes the right element without creating a hole or accidentally changing the meaning of your array.

//! ⁉️ Reflection Feedback

//  ✔️ Partially correct — but slightly off focus
//  👉 Better answer:
//  • Deleting a specific item is better because it removes the exact element the user selected, making the UI predictable and user-friendly.
//  👉 Your mention of arrays is fine, but this question is more about UI behavior and user intent


//TODO  🧠 What You Did Right (Brief)

//  ✔️ One event listener on the parent (app)
//  ✔️ Used .closest('.deleteBtn') correctly
//  ✔️ Safely exited with if (!deleteBtn) return;
//  ✔️ Found and removed the correct .item
//  ✔️ Clean, scalable structure
//  👉 This is proper event delegation

//? 🔍 Small Professional Note

//  You chose:
app.addEventListener();

//  👉 This works perfectly, but you could also attach it to:
listElement
//  ✔️ Slightly more precise (limits scope)
//  ✔️ Same behavior in this case

//* 🧠 What You’ve Achieved

//  You now have:
//  Auto-load UI
//       ↓
//  Dynamic DOM creation
//       ↓
//  Event delegation
//       ↓
//  Correct item removal
//  👉 This is real app-level logic

//# 🤔 Reflection Feedback

//  What happens with 1000 individual listeners?
//  Answer: It increases memory usage and reduces performance, because each element stores its own listener instead of sharing one.


//TODO  🧠 What You Want to Do

//  Right now you have:
app.addEventListener("click", "...")

//  👉 You want to attach the event to:
listElement

//? 📍 Where to Place It

//  👉 Important: Add it after you create listElement
//  Example flow:
//  create listElement
//      ↓
//  append items
//      ↓
//  attach event listener to listElement
//      ↓
//  append to app

//* 🧠 Why This Is Better

//  Current (your version)
//  • app → handles ALL clicks inside it

//  Improved
//  • listElement → handles ONLY list-related clicks
//  👉 This is called scoping your event listener

//# ⚖️ Comparison

//  | Attach to         | Behavior                              |
//  | ----------------- | ------------------------------------- |
//  | `app`             | Handles everything inside app         |
//  | `listElement`     | Handles only list items (cleaner) ✅  |

//# 🤔 Reflection Question

//  Why is it better to limit an event listener’s scope instead of attaching it to a larger container?
//  Answer: Limiting an event listener’s scope is usually better because it reduces unnecessary work, uses less memory, and makes the code easier to maintain.
