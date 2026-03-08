# HMCTS Task Management Dashboard (Frontend)

## Overview

This project is a **Task Management Dashboard** built with **React**, **Vite**, and **Material UI**.

The application connects to the **NestJS backend API** to allow users to:

* Create tasks
* View tasks in a table
* Mark tasks as completed
* Track task status
* View due dates

The UI focuses on simplicity and usability while demonstrating clean React component architecture.

---

## Tech Stack

* **Framework:** React
* **Build Tool:** Vite
* **Language:** JavaScript
* **UI Library:** Material UI
* **HTTP Client:** Axios

---

## Project Structure

```
src
│
├── services
│   └── taskService.js
│
├── components
│   └── Tasks
│        └── TaskTable.jsx
│
├── pages
│   └── Dashboard.jsx
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository:

```
git clone <repository-url>
cd hmcts-frontend
```

Install dependencies:

```
npm install
```

---

## Running the Application

Start the development server:

```
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## API Configuration

The frontend communicates with the backend API.

Default API URL:

```
http://localhost:3000/tasks
```

This can be changed in:

```
src/services/taskService.js
```

---

## Features

### Task Table

Displays tasks with:

* Title
* Description
* Status
* Due Date
* Action buttons

---

### Status Indicators

Tasks are displayed using colored badges:

| Status    | Color  |
| --------- | ------ |
| Pending   | Yellow |
| Completed | Green  |

---

### Complete Task

Tasks with **PENDING status** display a **Complete button**.

Clicking the button:

1. Sends a `PATCH` request to the backend
2. Updates the task status to `COMPLETED`
3. Refreshes the task list
4. Removes the button

---

## API Integration

Example API function:

```
export const updateTask = (id, data) => {
  return axios.patch(`${API_URL}/${id}`, data);
};
```

---

## Development Scripts

Available scripts:

```
npm run dev
npm run build
npm run preview
```

---

## UI Components

The project uses **Material UI components** including:

* Table
* TableRow
* TableCell
* Chip
* Button
* Stack
* Paper

---

## Future Improvements

Potential improvements include:

* Search and filtering
* User authentication
* Responsive mobile layout

---

## Author

Developed as part of the **HMCTS technical assessment**.

The project demonstrates:

* React component design
* API integration
* State management
* UI development with Material UI
