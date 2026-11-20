# 📚 Book API

Hi there! 👋 Welcome to my **Book API** repository. 

I built this simple, beginner-friendly RESTful API using **Express.js** and **MongoDB (Mongoose)** to practice backend development. It is designed to manage a digital library of books—allowing users to create, read, update, and delete (CRUD) book records.

As a beginner transitioning into full-stack / MERN development, I created this hands-on project to learn and apply core backend concepts in a clean, structured way.

---

## ✨ What I Learned & Practiced

Through building this project, I focused on implementing several important backend best practices:
- **Modular Routing:** Keeping routes organized and separate from the main server file.
- **Schema Design:** Structuring book data cleanly using Mongoose schemas.
- **Request Body Destructuring:** Extracting incoming JSON data neatly in route handlers.
- **Error Handling:** Returning clear status codes and helpful error messages when something goes wrong.
- **Duplicate Prevention:** Making sure the same book isn't added twice to the database.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for building the REST API
- **MongoDB** – NoSQL database for storing book records
- **Mongoose** – ODM library to model and interact with MongoDB data

---

## 🚀 Getting Started

If you'd like to run this project locally on your machine, follow these steps:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed (or a free MongoDB Atlas account).

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/book-api.git
cd book-api
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Set Up Environment Variables
Create a `.env` file in the root folder and add your MongoDB connection string and port:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5. Run the Server
```bash
npm start
```
*(Or use `npm run dev` if you have nodemon configured!)*

---

## 📌 API Endpoints

You can test these endpoints using tools like **Postman**, **Thunder Client**, or **Insomnia**:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/books` | Get all books from the library |
| `GET` | `/api/books/:id` | Get a single book by its ID |
| `POST` | `/api/books` | Add a new book record |
| `PUT` | `/api/books/:id` | Update an existing book's details |
| `DELETE` | `/api/books/:id` | Delete a book from the library |

---

## 🤝 Feedback & Contributions

Since I am still learning backend development, any feedback, tips, or suggestions on how I can improve my code are always welcome! Feel free to fork this repo or open an issue.

Happy coding! 🚀