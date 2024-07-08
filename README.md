# Course Management API Website

This project is a comprehensive web application for managing courses. It is built with a React frontend and a Spring Boot backend, enabling users to add, delete, update, and view courses. The project uses MySQL as its database for data storage and retrieval and is only for educational purpose.

## Features
- **Add Courses**: Allows users to input course details and add new courses to the system.
- **View Courses**: Displays a list of all available courses with detailed views for each.
- **Update Courses**: Enables users to update existing course information.
- **Delete Courses**: Facilitates the removal of courses from the system.

## Technologies Used
- **Frontend**: React
- **Backend**: Java Spring Boot
- **Database**: MySQL

## Setup and Installation

### Prerequisites
- Node.js and npm installed
- Java Development Kit (JDK)
- MySQL Server

### Backend Setup (Spring Boot)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Rest-api.git
2. Navigate to the backend directory
3. Configure the MySQL database connection in application.properties:
    ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/your-database-name
    spring.datasource.username=your-username
    spring.datasource.password=your-password
4.Build and run the Spring Boot application

### Frontend Setup (React)
1. Navigate to the frontend directory
2. Install the dependencies:
    ```bash
    npm install
3.Start the React application


## API Endpoints
- GET /courses: Retrieve all courses
- GET /courses/{id}: Retrieve a specific course by ID
- POST /courses: Add a new course
- PUT /courses/{id}: Update an existing course by ID
- DELETE /courses/{id}: Delete a course by ID


