# Web Technologies Course Assignments

This project contains a collection of assignments and exercises completed throughout the semester, demonstrating fundamental concepts in HTML, CSS, and vanilla JavaScript, as well as server-side development with Node.js and Express.

## Table of Contents

- [About The Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Setup and Running Instructions](#setup-and-running-instructions)
- [Author](#author)

## About The Project

This repository serves as a portfolio of my work, illustrating my progress and understanding of core web development principles. The assignments range from creating static layouts and responsive designs to building interactive client-side applications and simple server-side APIs. Each task is self-contained in its own directory, showcasing a specific skill or concept.

Key concepts explored in this repository include:
- Semantic HTML5 structure
- Advanced CSS, including Flexbox, Grid, and responsive design with media queries
- DOM manipulation with vanilla JavaScript
- Handling user events and interactions
- Asynchronous JavaScript: AJAX, Fetch API, and Promises
- Building simple RESTful APIs with Node.js and Express
- Reading from and writing to files on the server (`fs` module)
- Handling different data formats like CSV, JSON, and XML

## 💻 Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend:** Node.js
- **Frameworks/Libraries:** Express.js
- **Data Formats:** JSON, CSV, XML
- **Tools:** Git, Visual Studio Code, [Any other tools you used, e.g., Postman, NPM]

## Key Assignments Showcase

Here are some highlights from the repository that demonstrate key skills.

### Static HTML & CSS Projects

- **Responsive Card Layout:** A project demonstrating the use of CSS Flexbox/Grid and relative units (`rem`, `vw`, `clamp()`) to create a fully responsive card layout that adapts to all screen sizes.
- **Table Styling:** An exercise in styling standard HTML tables with custom borders, colors, and spacing using `border-collapse` and pseudo-selectors.

### 🤖 JavaScript DOM Manipulation

- **Tabbed Navigation (`/javascript-dom-tasks/tabbed-navigation/`):** A Single Page Application (SPA) interface where content for different sections is loaded dynamically using JavaScript without a page reload. This project heavily utilizes event listeners and DOM manipulation to create a seamless user experience.
- **Interactive Dice Game:** A game built with vanilla JS, demonstrating class-based object-oriented programming, DOM element creation, and complex state management through event listeners.

### Asynchronous JavaScript & APIs

- **Creature Search App:** An application that uses the `fetch` API to send a GET request to an external API (FreeCodeCamp's RPG Creature API). It handles asynchronous operations with Promises (`.then/.catch` or `async/await`) and dynamically updates the DOM with the fetched data.
- **AJAX Form Submission (`/asynchronous-js-tasks/ajax-form-submission/`):** An HTML form that submits data to a server endpoint in JSON format without a page refresh. This demonstrates preventing default form behavior and handling the server's response asynchronously.

### Node.js & Express Server

- **CSV to JSON API (`/node-express-server-tasks/csv-to-json-api/`):** A simple Node.js server that reads a local `.txt` file in CSV format, parses it, and serves the content as a structured JSON object via a GET endpoint.
- **CRUD Tasks API (`/node-express-server-tasks/crud-tasks-api/`):** A more advanced RESTful API built with Express.js that handles GET, POST, and PUT requests to manage a list of tasks stored in a CSV file. This includes input validation and returning appropriate status messages.

## ⚙️ Setup and Running Instructions

Each assignment folder is self-contained.

**For static HTML/CSS/JS projects:**
1. Navigate into the project directory (e.g., `cd javascript-dom-tasks/tabbed-navigation`).
2. You will need a simple live server to avoid CORS issues. An easy way is to use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code.
3. Right-click the `index.html` file and select "Open with Live Server".

**For Node.js/Express projects:**
1. Navigate into the project directory (e.g., `cd node-express-server-tasks/tasks-api`).
2. Install the necessary dependencies:
   ```bash
   npm install
    ```
   
  3.  Start the server: node index.js
4. The server will typically be running on http://localhost:8080 or another specified port. Check the console output for the exact address.
