# Web Page Project

This project implements a simple web application with a tabbed interface that loads content dynamically from separate HTML files without reloading the page.

## Project Structure

- **index.html**: The main page of the web application. It contains the structure for the tabbed interface and uses JavaScript to load content from `stranica1.html`, `stranica2.html`, and `stranica3.html`.
- **stranica1.html**: Contains the content for the first tab.
- **stranica2.html**: Contains the content for the second tab.
- **stranica3.html**: Contains the content for the third tab.
- **README.md**: Documentation for the project.

## Instructions

To set up and run the project locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```
   cd AJAX
   ```

3. **Open the `index.html` file in a web browser**:
   You can simply double-click on `index.html` or open it through your browser's file menu.

4. **Using a Local Server** (optional but recommended):
   For a better experience, especially if you are using AJAX or fetching local files, set up a local server. You can use Python's built-in server:
   - For Python 3:
     ```
     python -m http.server
     ```
   - For Python 2:
     ```
     python -m SimpleHTTPServer
     ```
   Then, navigate to `http://localhost:8000` in your web browser.

## Features

- Tabbed navigation to switch between different content sections.
- Dynamic loading of content without page reloads, enhancing user experience.
