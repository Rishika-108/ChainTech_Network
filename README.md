# ChainTech Network Task Manager

A simple task management API built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete tasks
- Mark tasks as completed
- RESTful API endpoints

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB URI: `MONGO_URI=your_mongodb_connection_string`
4. Run the server: `npm run dev`

## API Endpoints

- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Get all tasks
- `PUT /api/tasks/:id` - Update a task
- `PATCH /api/tasks/:id/complete` - Mark task as completed
- `DELETE /api/tasks/:id` - Delete a task

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables

## Author

Rishika Thakur