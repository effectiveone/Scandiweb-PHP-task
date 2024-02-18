# Scandiweb Developer Test Assignment Documentation

## Overview

This repository contains a web application developed using PHP, MySQL, Reactjs, and SASS. The project is set up to enhance performance through Docker. The application focuses on providing a user-friendly experience with two primary pages:

1.  **Product List Page:** Displays a list of products with seamless delete functionality.
2.  **Add Product Page:** Allows users to effortlessly add new products to the system.

## Watch the Demo

Check out the demo video to get a quick overview of the project:



https://github.com/effectiveone/Scandiweb-PHP-task/assets/85121335/f158fd14-e870-4c71-96d6-c19b106062fc


_Note: Click on the image to watch the demo._

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/effectiveone/Scandiweb-PHP-task.git
   ```

2. **Build and Start Docker Containers:**

   ```bash
   cd Scandiweb-PHP-task
   docker-compose up -d --build
   ```

3. **Access the Frontend:**
   The frontend can be accessed at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project is organized for clarity and maintainability. Here's an overview of the key directories:

### React/

This directory contains the ReactJS frontend, housing all frontend-related assets and components. The user interface is developed and managed within this section.

### PHP/

The PHP backend code is organized into subdirectories for improved organization:

- **Core/:** Holds PHP core models and functions designed for broader usability across projects. It serves as a repository for reusable and foundational code.

- **Http/:** Contains controllers and validations specific to the application. These components handle the server-side logic related to processing incoming HTTP requests and managing the application's HTTP routes.

- **Models/:** Contains models associated with the application, representing the underlying data structures and business logic. These models encapsulate interactions with the database or other data sources.

- **routes.php:** Acts as the central hub for API routes, defining paths along with their corresponding controllers and actions. It provides a clear map for handling incoming requests.

- **helpers.php:** Dedicated to housing helper functions.

- **config.php:** A configuration file that returns the application's settings.

- **index.php:** The entry point for the application.

Feel free to explore and modify the code based on your requirements. If you have any questions or need further assistance, don't hesitate to reach out. Happy coding!
