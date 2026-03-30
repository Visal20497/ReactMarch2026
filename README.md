Here’s your **enhanced, production-level README.md** with added professional details (Docker, Husky, lint-staged, workflow, etc.) 👇

---

# 🚀 React + TypeScript Advanced Patterns Project

A scalable and production-ready frontend application built using **React**, **TypeScript**, and **Vite**.
This project demonstrates modern frontend architecture, multiple state management strategies, and DevOps practices like **Dockerization** and **Git hooks automation**.

---

## 📌 Features

* ⚛️ Functional Components with Hooks

* 🏛️ Class Components (for learning comparison)

* 🔄 State Management:

  * useState
  * useReducer
  * Redux (Classic)
  * Redux Toolkit (Recommended)

* 🎯 API Data Fetching Examples

* 🧱 Reusable UI Components

* 🧩 Layout System (Header, Sidebar, Theme)

* 🎨 Theme Management (Dark/Light Mode)

* 🛡️ Error Boundaries

* ⏳ Loading & Error UI States

* 🐳 Dockerized for production deployment

* 🧪 Pre-commit linting with Husky + lint-staged

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

## ⚙️ Local Development Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run development server

```bash
npm run dev
```

👉 App runs on: `http://localhost:5173`

---

## 🌱 Environment Variables

Create a `.env` file in root:

```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=React App
```

### ⚠️ Important Rules

* Must start with `VITE_`
* Used only at **build time**
* Requires rebuild for changes

---

## 🐳 Docker Setup (Production Ready)

### 📁 Required Files

* `Dockerfile`
* `nginx.conf`
* `.dockerignore`
* `docker-compose.yml` (optional)

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

👉 Open: [http://localhost:3000](http://localhost:3000)

---

### 🧩 Docker Compose (Recommended)

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

## 🐳 Docker Architecture

* Multi-stage build:

  * 🏗️ Build stage → Node.js (Vite build)
  * 🌐 Serve stage → Nginx (static hosting)
* Optimized image size
* Production-ready static serving

---

## 🧪 Git Hooks with Husky

This project uses **Husky + lint-staged** to enforce code quality.

### 🔧 Pre-commit Hook

* Runs ESLint on staged files
* Automatically fixes lint issues
* Blocks bad commits

---

### 📁 `.husky/pre-commit`

```bash
#!/bin/sh

npx lint-staged
```

---

### 📦 lint-staged Config

```json
"lint-staged": {
  "*.{ts,tsx,js,jsx}": [
    "eslint --fix"
  ]
}
```

---

## 🧠 Important Notes

* Vite outputs build to `dist/`
* Env variables injected at build time
* Docker uses Nginx to serve static files
* Husky ensures code quality before commits

---

## 📊 State Management Comparison

| Method        | Use Case              | Complexity |
| ------------- | --------------------- | ---------- |
| useState      | Simple local state    | ⭐ Easy     |
| useReducer    | Complex logic         | ⭐⭐ Medium  |
| Redux         | Global state (legacy) | ⭐⭐⭐ Hard   |
| Redux Toolkit | Global state (modern) | ⭐⭐ Medium  |

---

## 🎯 Best Practices Followed

* 📦 Modular folder structure
* ♻️ Reusable components
* 🔒 Type safety with TypeScript
* 🧼 Clean and readable code
* separation of concerns
* ⚡ Optimized production build

---

## 🚀 Future Improvements

* 🔀 React Router integration
* 🌐 API service layer (Axios)
* 🔄 Runtime environment variables
* 🧪 Unit & integration testing
* ⚙️ CI/CD pipeline (GitHub Actions)
* ☁️ Deployment (AWS / Docker Hub / Kubernetes)

---

## 👨‍💻 Author

Developed as part of a learning journey to master:

* Advanced React patterns
* State management strategies
* Scalable frontend architecture
* DevOps practices (Docker, Git Hooks)

---

## 📄 License

MIT License

---

```
