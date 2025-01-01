# CSV to JSON Converter

A simple web application that allows users to upload a CSV file and convert it into JSON format. The project consists of two main parts:
- **Frontend (FE)**: A React-based web app.
- **Backend (BE)**: A REST API built using Go and Gin for handling the conversion process.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [API Endpoints](#api-endpoints)
- [Development and Production Builds](#development-and-production-builds)

## Tech Stack

### Frontend (FE)
- **React** (JavaScript/JSX)
- **Axios** (for HTTP requests)
- **TailwindCSS** (for styling)

### Backend (BE)
- **Go** (Golang)
- **Gin** (for building REST API)
- **CORS** (for enabling cross-origin requests between frontend and backend)

### Docker
- Docker Compose (to orchestrate the containers for FE and BE)

## Features
- Upload CSV files through the frontend.
- Convert the CSV content into a JSON object on the backend.
- Display the resulting JSON on the frontend.
- Download the resulting JSON file with the same name as the uploaded CSV file.

## Setup Instructions

### Frontend Setup (FE)

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/csv-to-json-converter.git
   cd csv-to-json-converter/FE
   
2. **Install the required dependencies:**
  ```
  npm install
 ```
3. **Start the frontend development server:**
 ```
npm start
```
By default, the React frontend will be available at http://localhost:3000.

### Backend Setup (BE)

1. **Navigate to the BE folder:**

  ```
  cd csv-to-json-converter/BE
  ```

2. **Install Go dependencies:**
  ```
  go mod tidy
  ```

3. **Start the backend server:**
  ```
  go run main.go
  ```
The backend will be running on http://localhost:8081.

### API Endpoints
`POST /convert`

- Description: Sample endpoint to check if the backend is working. (optional for testing)
- Response:
  - Simple message confirming the API is running.
  - Example Response:
  ```
  {
  "message": "API is running"
  }
  ```
  
  


