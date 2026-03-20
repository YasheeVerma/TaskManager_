# 📝 Task Manager (MERN Stack)

A full-stack Task Manager web application built using the MERN stack (MongoDB, Express, React + Vite, Node.js). It allows users to create, update, delete, and manage tasks efficiently with a clean and responsive UI.

---

## 🚀 Live Demo

* 🌐 Frontend: https://task-managerrrr.netlify.app
* ⚙️ Backend: https://taskmanager-jndi.onrender.com

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose

---

## ✨ Features

* ➕ Add new tasks
* 📝 Edit task title & description
* ✅ Toggle task status (complete/incomplete)
* ❌ Delete tasks
* 🌐 Fully deployed (Frontend + Backend + Database)

---

## 📁 Project Structure

```
TaskManager_/
 └── taskManager/
      ├── backend/
      │    ├── models/
      │    ├── routes/
      │    ├── server.js
      │    └── package.json
      │
      ├── frontend/
      │    ├── src/
      │    ├── public/
      │    ├── index.html
      │    └── package.json
```

---

## ⚙️ Setup Instructions (Local)

### 1️⃣ Clone the repository

```
git clone https://github.com/YasheeVerma/TaskManager_.git
cd TaskManager_/taskManager
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd ../frontend
npm install
npm run dev
```

---

## 🌍 Deployment

### Backend

* Deployed on Render
* Uses environment variable `MONGO_URI`

### Frontend

* Deployed on Netlify
* Connected to backend API

---

## 🔗 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get all tasks |
| POST   | /api/tasks     | Create task   |
| PUT    | /api/tasks/:id | Update task   |
| DELETE | /api/tasks/:id | Delete task   |

---

## ⚠️ Environment Variables

Create `.env` in backend:

```
MONGO_URI=your_connection_string
```


## 📌 Future Improvements

* 🔐 User Authentication (JWT)
* 🌙 Dark Mode UI
* 📊 Dashboard & Analytics
* 📅 Due dates & reminders

---

## 👨‍💻 Author

**Yashee Verma**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it!
