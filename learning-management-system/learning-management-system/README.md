# 🎓 Learning Management System

A full-stack Learning Management System built with **React + Spring Boot + PostgreSQL**.

---

## 🗂️ Project Structure

```
learning-management-system/
├── backend/              # Spring Boot REST API
│   ├── src/main/java/com/ikaansh/backend/
│   │   ├── config/       # Security config
│   │   ├── controller/   # REST controllers
│   │   ├── dto/          # Data Transfer Objects
│   │   ├── entity/       # JPA Entities
│   │   ├── repository/   # JPA Repositories
│   │   ├── security/     # UserDetailsService
│   │   ├── service/      # Business logic
│   │   └── BackendApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
├── frontend/             # React + Vite
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── context/      # Auth context
│   │   ├── pages/        # Login, Register, Dashboard
│   │   ├── services/     # Axios API config
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Prerequisites

- Java 17+
- Maven 3.8+
- Node.js 18+
- PostgreSQL 14+

---

## 🗄️ Database Setup

1. Install and start PostgreSQL.
2. Open psql or pgAdmin and run:

```sql
CREATE DATABASE learning_management;
```

3. Default credentials used in `application.properties`:
   - Username: `postgres`
   - Password: `admin123`
   - (Change these to match your local PostgreSQL setup)

---

## 🚀 Backend Setup

```bash
cd backend
mvn spring-boot:run
```

Backend runs on: **http://localhost:8080**

### API Endpoints

| Method | Endpoint              | Description       |
|--------|-----------------------|-------------------|
| POST   | /api/auth/register    | Register new user |
| POST   | /api/auth/login       | Login user        |

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: **http://localhost:5173**

---

## 🔑 Default Test Flow

1. Open http://localhost:5173
2. Click **Register here** → fill in name, email, password, role
3. After registering, login with your credentials
4. You'll land on the **Dashboard**

---

## 🛠️ Tech Stack

| Layer    | Technology              |
|----------|-------------------------|
| Frontend | React 18, Vite, Axios   |
| Backend  | Spring Boot 3, Java 17  |
| Security | Spring Security          |
| Database | PostgreSQL, Spring JPA   |
| Build    | Maven, npm              |

---

## 📦 Deployment

| Service  | Platform          |
|----------|-------------------|
| Frontend | Vercel / Netlify  |
| Backend  | Render / Railway  |

---

## 🔮 Future Improvements

- JWT token-based auth
- Course CRUD (Admin)
- Enrollment system
- File upload for resources
- Search and filter courses
- Responsive Tailwind CSS UI
- Admin dashboard
