# CRUD Application with TypeScript

A simple and robust CRUD (Create, Read, Update, Delete) application built using TypeScript. This project demonstrates the fundamental operations for data management and showcases best practices for using TypeScript in a full-stack or backend environment.

## Features

- **Create**: Add new records to the database
- **Read**: Retrieve and display records
- **Update**: Modify existing records
- **Delete**: Remove records from the database
- Written entirely in [TypeScript](https://www.typescriptlang.org/)
- Clean code structure and best practices
- Easy to extend and integrate

## Tech Stack

- [Node.js](https://nodejs.org/) (backend)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
git clone https://github.com/moge741/CRUD_TypeScript.git
cd CRUD_TypeScript
npm install
```

### Running the Application

```bash
# For development with auto-reload
npm run dev

# For production
npm run build
npm start
```

## API Endpoints

| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------ |
| GET    | /items      | List all items     |
| GET    | /items/:id  | Get single item    |
| POST   | /items      | Create new item    |
| PUT    | /items/:id  | Update item        |
| DELETE | /items/:id  | Delete item        |

> Update route names as per your implementation.

## Project Structure

```
src/
├── controllers/
├── routes/
└── app.ts
```

## Scripts
- `npm run dev` – Run with nodemon for development

## Contributing
Pull requests are welcome! Please open an issue first to discuss proposed changes.
## License
