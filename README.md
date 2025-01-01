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
  - [Running the Project with Docker](#running-the-project-with-docker)
- [API Endpoints](#api-endpoints)
- [Development and Production Builds](#development-and-production-builds)
- [Contributing](#contributing)

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

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/csv-to-json-converter.git
   cd csv-to-json-converter/FE
