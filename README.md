# Book API

This repository contains the code for a Book API built using Express.js and Mongoose. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books stored in a MongoDB database.

## Features

- User-friendly endpoints for managing books:
  - GET `/home`: Retrieve all books from the database.
  - POST `/home`: Add a new book to the database.
  - GET `/books/:query`: Search for books by title or author.
  - DELETE `/books/:query`: Delete a book by its ID.
- CORS support: Cross-Origin Resource Sharing (CORS) is enabled to allow requests from `http://localhost:3000` (change this as needed).
- JSON data format: The API accepts and returns data in JSON format.
- Error handling: Basic error handling is implemented for database queries and requests.

## Prerequisites

Before running the API, make sure you have the following prerequisites:

- Node.js installed on your machine.
- MongoDB installed and running.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/nabeel-w/Books_API
   ```

2. Install the dependencies:

   ```bash
   cd Book_API
   npm install
   ```

3. Start the server:

   ```bash
   node app.js
   ```

   The server will start on `http://localhost:5000`.

## API Endpoints

- `GET /home`: Retrieve all books from the database.
- `POST /home`: Add a new book to the database.
- `GET /books/:query`: Search for books by title or author.
- `DELETE /books/:query`: Delete a book by its ID.

## Examples

### Retrieve all books

**Request:**

```bash
GET /home
```

**Response:**

```json
[
  {
    "_id": "60ebea69f5b5de4224ee64d1",
    "title": "Book Title",
    "author": "Author Name"
  },
  {
    "_id": "60ebea74f5b5de4224ee64d2",
    "title": "Another Book",
    "author": "John Doe"
  }
]
```

### Add a new book

**Request:**

```bash
POST /home
Content-Type: application/json

{
  "title": "New Book",
  "author": "Jane Doe"
}
```

**Response:**

```text
Successfully Added Entry
```

### Search for books

**Request:**

```bash
GET /books/book title
```

**Response:**

```json
[
  {
    "_id": "60ebea69f5b5de4224ee64d1",
    "title": "Book Title",
    "author": "Author Name"
  }
]
```

### Delete a book

**Request:**

```bash
DELETE /books/60ebea74f5b5de4224ee64d2
```

**Response:**

```text
Record Deleted
```

## License

This project is licensed under the MIT License.

## Acknowledgements

This project utilizes the following npm packages:

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js
- [Mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool.
- [Body-parser](https://www.npmjs.com/package/body-parser): Middleware for parsing request bodies.
- [Lodash](https://www.npmjs.com/package/lodash): Utility library that provides helpful functions for working with arrays, objects, and more.
- [Cors](https://www.npmjs.com/package/cors): Middleware for enabling CORS in Express.js applications.

Special thanks to the developers of these packages for their contributions to the open-source community.
