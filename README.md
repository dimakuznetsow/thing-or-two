# Song List Database App

This repository contains a simple web application that reads a CSV file containing a list of songs, processes the data, and stores it in a PostgreSQL database. The stored songs can then be viewed in a tabular format on the frontend.

## Assignment Overview

The goal of this assignment is to create a program that reads a CSV file named "songs.csv," converts all words to lowercase, and stores the song information in a PostgreSQL database. The songs should be displayed in a table on the frontend, ordered by the band name.

## Technologies Used

- **Backend Framework:** NestJS
- **CSV Parsing:** csv-parser npm package
- **Frontend Framework:** React
- **UI Styling:** Tailwind CSS with DaisyUI library
- **Database:** PostgreSQL
- **ORM:** Prisma

## Getting Started

Before running the application, make sure you have the following prerequisites installed:

- Node.js

### Backend Setup

1. Navigate to the `backend` directory: cd backend
2. Install dependencies: npm install
3. Run migrations to create the database tables: npx prisma migrate dev
4. Start the backend server: npm run start:dev

### Frontend Setup

1. Navigate to the `frontend` directory: cd frontend
2. Install dependencies: npm install
3. Start the frontend development server: npm start

## Usage

1. Once both the backend and frontend servers are running, open your web browser and navigate to the provided URL (usually `http://localhost:3000`).

2. The song list from the CSV file will be automatically processed and stored in the PostgreSQL database.

3. On the frontend, you will see a table displaying the songs, ordered by the band name.

## Folder Structure

- `backend/`: Contains the NestJS backend application.
- `frontend/`: Contains the React frontend application.

## Credits

This assignment is developed by Dmitry Kuznetsov.
