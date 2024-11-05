# Todo List App

A simple Todo List application built with Vue.js and Pinia, utilizing an API for managing todos. The application allows users to create, view, update, and delete todos and provides filter options to sort todos by their status.

## Table of Contents
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [API Example](#api-example)

## Usage

1. **View Todos**: The homepage displays a list of all todos.
2. **Add Todo**: Use the input field to create a new todo. You can specify a priority and add details.
3. **Edit Todo**: Select a todo to view its details, update its status, or save changes.
4. **Filter Todos**: Use the filter options to view all, open, or completed todos.
5. **Delete Todo**: Remove completed todos using the `removeDoneTodos` action.

## Features

- **Todo Creation**: Add todos with descriptions, priority, and deadline.
- **Todo Details**: View detailed information about each todo in a modal view.
- **Filtering**: Filter todos by status (all, open, completed).
- **Persistence**: Use an API to store and manage todos.
- **API Integration**: The app integrates with a RESTful API to load, create, and delete todos.

## Technologies

- **Vue.js 3**: Main framework for the user interface
- **Pinia**: State management for Vue.js
- **Vite**: Development server and build tool
- **JSON Server**: Mock API for CRUD operations
- **JavaScript**: Application programming language
- **HTML & CSS**: Structure and styling for the UI

## API Example

The app expects a REST API with the following endpoints:

- **GET /todos** - Retrieve all todos
- **POST /todos** - Create a new todo
- **PATCH /todos/:id** - Update a todo
- **DELETE /todos/:id** - Delete a todo

### Example Todo Object
```json
{
  "id": 1,
  "description": "Learn Vue.js",
  "details": "Go through the official documentation",
  "priority": "high",
  "done": false,
  "deadline": "2023-12-31"
}