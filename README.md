Contact Management Web Application

A full-stack web application for managing contacts, built with React for the frontend and Node.js with Express for the backend. This application enables users to perform CRUD (Create, Read, Update, Delete) operations on contacts, including uploading and displaying profile images.

Features

        Create Contacts: Add new contacts with details such as name, address, email, and profile image.
        
        Read Contacts: View a list of all contacts with their details and profile images.
        
        Update Contacts: Edit existing contact details and update profile images.
        
        Delete Contacts: Remove contacts from the list.
        
        Image Upload: Upload and display profile images for contacts.
        
        Responsive Design: Built with Bootstrap to ensure a mobile-friendly user interface.

Technologies Used

    Frontend
    
        React: JavaScript library for building the user interface.
        
        React Router: Handles navigation between pages.
        
        Axios: Facilitates HTTP requests to the backend.
        
        Bootstrap: Provides styling and responsive design.
    
    Backend
    
        Node.js: JavaScript runtime for backend logic.
        
        Express: Web framework for building RESTful APIs.
        
        MySQL: Relational database for storing contact data.
        
        Multer: Middleware for handling file uploads.

Tools

    Docker: Used for containerization and deployment.
    
    Jenkins: Automates CI/CD pipeline.

Installation

Follow these steps to set up the project locally:

Prerequisites

    Ensure Node.js and npm are installed on your machine.
    
    Have a running MySQL server (local or remote).
    
    Optionally, install Docker for containerized deployment.

Steps

Clone the Repository

git clone https://github.com/your-username/contact-management-app.git
cd contact-management-app

Set Up the Backend

Navigate to the backend directory:

cd backend

Install dependencies:

    npm install
    
    Set up the MySQL database:
    
    Create a database named contacts_db.
    
    Update MySQL connection settings in server.js if necessary.
    
    Start the backend server:

npm start

Set Up the Frontend

Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the development server:

npm start

Access the application at: http://localhost:3000.

Docker Deployment

You can also deploy the application using Docker:

Build the Docker image:

docker build -t contact-management-app .

Run the Docker container:

docker run -p 3000:3000 contact-management-app

Access the application at: http://localhost:3000.

Jenkins CI/CD Pipeline

The project includes a Jenkins pipeline for automated builds and deployments:

Pipeline Steps

SCM Checkout: The pipeline fetches the latest code from GitHub.

Build Docker Image: The pipeline builds a Docker image for the application.

Deploy: The Docker image is deployed to a container.

Setup Instructions

Ensure Jenkins is installed and configured.

Create a new pipeline job in Jenkins.

Paste the provided Jenkinsfile into the pipeline configuration.

Acknowledgments

This project leverages the following technologies:

    React
    
    Express
    
    MySQL
    
    Bootstrap
    
    Docker
    
    Jenkins
