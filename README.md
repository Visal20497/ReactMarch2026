# 🚀 React + TypeScript Advanced Patterns Project

This project is a comprehensive React application built using **TypeScript**, **Vite**, and modern frontend tools. It demonstrates multiple state management techniques, scalable architecture, and now includes **Docker support for production deployment**.

---

## 📌 Features

* ⚛️ Functional Components with Hooks

* 🏛️ Class Components (for comparison & learning)

* 🔄 State Management:

  * useState
  * useReducer
  * Redux (Classic)
  * Redux Toolkit (Recommended)

* 🎯 API Data Fetching Examples

* 🧱 Reusable UI Components

* 🧩 Layout System (Header, Sidebar, Theme)

* 🎨 Theme Management (Dark/Light Mode)

* 🛡️ Error Handling (Error Boundaries)

* ⏳ Loading & Error UI States

* 🐳 Dockerized for production deployment

---

## 🏗️ Project Structure

```
src/
│
├── assets/
├── components/
│   ├── layout/
│   ├── ui/
│   ├── classcomponent/
│   ├── FetchWithUseReducer.tsx
│   ├── MotivationalQuotes.tsx
│   ├── Todo.tsx
│   └── TodowithUserReducer.tsx
│
├── Redux/
├── ReduxToolkit/
├── theme/
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## ⚙️ Installation & Setup (Local Development)

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

---

## 🌱 Environment Variables

Create a `.env` file:

```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=React App
```

👉 All variables must start with `VITE_`

---

## 🐳 Docker Setup (Production)

### 📁 Required Files

* Dockerfile
* nginx.conf
* .dockerignore
* docker-compose.yml (optional)

---

### 🧱 Build Docker Image

```bash
docker build -t react-ts-app \
  --build-arg VITE_API_URL=https://api.example.com .
```

---

### 🚀 Run Container

```bash
docker run -p 3000:80 react-ts-app
```

👉 Open: http://localhost:3000

---

### 🧩 Using Docker Compose

```bash
docker-compose up -d --build
```

---

### 📜 View Logs

```bash
docker-compose logs -f
```

---

### ⛔ Stop Containers

```bash
docker-compose down
```

---

## 🧠 Important Notes

* Vite builds output to `dist/`
* Environment variables are injected at **build time**
* Rebuild Docker image if env values change
* Nginx is used to serve static files

---

## 📊 State Management Comparison

| Method        | Use Case              | Complexity |
| ------------- | --------------------- | ---------- |
| useState      | Simple local state    | ⭐ Easy     |
| useReducer    | Complex logic         | ⭐⭐ Medium  |
| Redux         | Global state (legacy) | ⭐⭐⭐ Hard   |
| Redux Toolkit | Global state (modern) | ⭐⭐ Medium  |

---

## 🎯 Best Practices

* Modular folder structure
* Reusable components
* Type safety with TypeScript
* Clean architecture
* Separation of concerns

---

## 🚀 Future Improvements

* React Router integration
* Axios service layer
* Runtime environment variables
* Unit & integration testing
* CI/CD pipeline
* Cloud deployment (AWS / Docker Hub / Kubernetes)

---

## 👨‍💻 Author

Built as part of a React learning journey exploring advanced frontend architecture and DevOps practices.

---

## 📄 License

MIT License
