# Scandiweb Developer Test Assignment Documentation

## Overview

This repository contains a web application developed using PHP, MySQL, Reactjs, and SASS. The project is set up to enhance performance through Docker. The application focuses on providing a user-friendly experience with two primary pages:

1.  **Product List Page:** Displays a list of products with seamless delete functionality.
2.  **Add Product Page:** Allows users to effortlessly add new products to the system.

    <h2>Watch the Demo</h2>

    <p>Check out the demo video to get a quick overview of the project:</p>

    <video width="800" height="450" controls>
        <source src="Assets/show.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <h2>Getting Started</h2>

    <ol>
        <li><strong>Clone the Repository:</strong></li>
        <code>git clone https://github.com/effectiveone/Scandiweb-PHP-task.git</code>

        <li><strong>Build and Start Docker Containers:</strong></li>
        <code>cd Scandiweb-PHP-task</code><br>
        <code>docker-compose up -d --build</code>

        <li><strong>Access the Frontend:</strong></li>
        <p>The frontend can be accessed at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>

    </ol>

    <h2>Project Structure</h2>

    <p>The project is organized for clarity and maintainability. Here's an overview of the key directories:</p>

    <h3>React/</h3>
    <p>This directory contains the ReactJS frontend, housing all frontend-related assets and components. The user interface is developed and managed within this section.</p>

    <h3>PHP/</h3>
    <p>The PHP backend code is organized into subdirectories for improved organization:</p>

    <h4>Core/</h4>
    <p>This directory holds PHP core models and functions designed for broader usability across projects. It serves as a repository for reusable and foundational code.</p>

    <h4>Http/</h4>
    <p>Contains controllers and validations specific to the application. These components handle the server-side logic related to processing incoming HTTP requests and managing the application's HTTP routes.</p>

    <h4>Models/</h4>
    <p>Contains models associated with the application, representing the underlying data structures and business logic. These models encapsulate interactions with the database or other data sources.</p>

    <h4>routes.php</h4>
    <p>This file acts as the central hub for API routes, defining paths along with their corresponding controllers and actions. It provides a clear map for handling incoming requests.</p>

    <h4>helpers.php</h4>
    <p>Dedicated to housing helper functions that can be utilized throughout the application.</p>

    <h4>config.php</h4>
    <p>A configuration file that returns the application's settings.</p>

    <h4>index.php</h4>
    <p>The entry point for the application.</p>

    <p>Feel free to explore and modify the code based on your requirements. If you have any questions or need further assistance, don't hesitate to reach out. Happy coding!</p>
