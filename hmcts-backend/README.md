# HMCTS Task Management API (Backend)

## Overview

This project is a **RESTful Task Management API** built with **NestJS**.
It allows users to create, retrieve, update, and manage tasks with status tracking and due dates.

The API follows modern backend development practices including:

* DTO validation
* RESTful architecture
* TypeORM for database interaction
* Swagger API documentation
* Modular NestJS structure

---

## Tech Stack

* **Framework:** NestJS
* **Language:** TypeScript
* **Database:** PostgreSQL (via TypeORM)
* **Validation:** class-validator
* **Documentation:** Swagger (OpenAPI)
* **API Style:** REST

---

## Project Structure

```
src
│
├── tasks
│   ├── dto
│   │   ├── create-task.dto.ts
│   │   └── update-task.dto.ts
│   │
│   ├── task.entity.ts
│   ├── tasks.controller.ts
│   ├── tasks.service.ts
│   └── tasks.module.ts
│
├── app.module.ts
└── main.ts
```

---

## Installation

Clone the repository:

```
git clone <repository-url>
cd hmcts-backend
```

Install dependencies:

```
npm install
```

---

## Environment Configuration

Create a `.env` file in the root directory.

Example:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=tasks_db
```

---

## Running the Application

Start the development server:

```
npm run start:dev
```

The API will run at:

```
http://localhost:3000
```

---

## API Documentation

Swagger documentation is available at:

```
http://localhost:3000/api
```

This interface allows you to:

* Explore available endpoints
* Test API requests
* View request/response schemas

---

## Task Entity

Each task contains the following fields:

| Field       | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| id          | number   | Unique identifier                    |
| title       | string   | Task title                           |
| description | string   | Task description                     |
| status      | enum     | Task status (`PENDING`, `COMPLETED`) |
| dueDateTime | datetime | Optional due date                    |
| createdAt   | datetime | Creation timestamp                   |

---

## Task Status Enum

```
PENDING
COMPLETED
```

Tasks are created with **PENDING status by default**.

---

## API Endpoints

### Create Task

```
POST /tasks
```

Example body:

```
{
"title": "Prepare report",
"description": "Prepare weekly status report",
"dueDateTime": "2026-03-12T18:00:00"
}
```

---

### Get All Tasks

```
GET /tasks
```

Returns a list of all tasks.

---

### Get Task By ID

```
GET /tasks/:id
```

Returns a single task.

---

### Update Task

```
PATCH /tasks/:id
```

Example body:

```
{
"status": "COMPLETED"
}
```

---

### Delete Task

```
DELETE /tasks/:id
```

Removes a task from the database.

---

## Validation

All incoming requests are validated using **DTOs and class-validator**.

Example validation rules:

* Title is required when creating tasks
* Status must match the `TaskStatus` enum
* Due date must be a valid ISO datetime string

---

## Development Scripts

Run the following commands:

```
npm run start
npm run start:dev
npm run build
npm run test
```

---

## Future Improvements

Possible enhancements include:

* Authentication and authorization
* Task filtering
* Pagination
* Task priority levels
* User ownership of tasks
* Logging and monitoring

---

## Author

Developed as part of the **HMCTS technical assessment**.
