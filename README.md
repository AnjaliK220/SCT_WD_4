# 📝 Professional To-Do Web App

A clean, modern, and fully responsive To-Do Web Application built using vanilla HTML, CSS, and JavaScript. This application allows users to create, organize, edit, and maintain their daily tasks along with specific dates and times.

---

## 🚀 Features

* Task Scheduling: Users can add task descriptions along with a specific date and time using a native picker.
* In-Place Editing: Dynamically update task details on the fly using responsive prompt flows.
* Completion Toggle: Mark tasks as completed with an instantaneous visual strike-through and faded style state.
* Dynamic DOM Deletion: Remove tasks permanently from the viewport instantly.
* Modern Dark UI: A beautiful dark-themed interface built for seamless viewing across mobile and desktop displays.

---

## 🛠️ Tech Stack Used

* HTML5: Structuring the main task manager wrapper, input fields, and dynamic list components.
* CSS3: Responsive flexbox/grid layouts, custom borders, neon accents, and smooth hover state transitions.
* JavaScript (ES6): Dynamic element creation, form event submission capturing, and real-time DOM updates.

---

## 📝 How It Works

1. Add Task: Listens to the form submit event, prevents page reload using preventDefault(), parses the inputs, and sends data to the component factory.
2. Format Date: Converts the HTML datetime string into a user-friendly local format using the native toLocaleString() method.
3. Edit/Delete: Leverages structured element nodes and event listeners bound to each action button to dynamically update text or execute the remove() function.
