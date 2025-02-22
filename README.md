Contact Management Web Application

A full-stack web application for managing contacts, built with React for the frontend and Node.js with Express for the backend. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on contacts, including uploading profile images.

Features
Create Contacts: Add new contacts with details like name, address, email, and profile image.

Read Contacts: View a list of all contacts with their details and profile images.

Update Contacts: Edit existing contact details and update profile images.

Delete Contacts: Remove contacts from the list.

Image Upload: Upload and display profile images for contacts.

Responsive Design: Built with Bootstrap for a mobile-friendly user interface.

Technologies Used
Frontend
React: JavaScript library for building the user interface.

React Router: For navigation between pages.

Axios: For making HTTP requests to the backend.

Bootstrap: For styling and responsive design.

Backend
Node.js: JavaScript runtime for the backend.

Express: Web framework for building RESTful APIs.

MySQL: Relational database for storing contact data.

Multer: Middleware for handling file uploads.

Tools
Docker: For containerization and deployment.

Jenkins: For CI/CD pipeline automation.

Installation
Follow these steps to set up the project locally:

Prerequisites
Node.js and npm installed on your machine.

MySQL server running locally or remotely.

Docker (optional, for containerized deployment).


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

Update the MySQL connection settings in server.js if necessary.

Start the server:


npm start
Set Up the Frontend

Navigate to the frontend directory:


cd ../frontend
Install dependencies:

bash
Copy
npm install
Start the development server:


npm start
Access the Application

Open your browser and go to http://localhost:3000 to view the application.

Docker Deployment
You can also deploy the application using Docker:

Build the Docker Image


docker build -t contact-management-app .
Run the Docker Container


docker run -p 3000:3000 contact-management-app
Access the application at http://localhost:3000.

Jenkins CI/CD Pipeline
The project includes a Jenkins pipeline for automated builds and deployments. Here's how it works:

SCM Checkout: The pipeline checks out the code from the GitHub repository.

Build Docker Image: The pipeline builds a Docker image for the application.

Deploy: The Docker image is deployed to a container.

To set up the pipeline:

Ensure Jenkins is installed and configured.

Create a new pipeline job in Jenkins and paste the provided Jenkinsfile.

Acknowledgments
    React
    
    Express
    
    MySQL
    
    Bootstrap
    
    Docker
    
    Jenkins
