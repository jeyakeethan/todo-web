# 📝 **ToDo App — Full Stack .NET + React**

A minimal yet powerful full-stack ToDo app built with **ASP.NET Core**, **React**, **MySQL**, and **Docker**.  
This app lets you quickly manage daily tasks — add, complete, and view the 5 most recent todos.

---

## 🚀 Features

- 🆕 **Add new tasks** with a required title and optional description.
- 👀 View the **5 most recently added** tasks.
- ✅ Mark tasks as **Done** to permanently remove them.
- 📦 Seeded with initial sample tasks using EF Core Migrations.
- 🐳 Fully containerized: backend, frontend, and database.

---

## 🛠️ Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: ASP.NET Core 9.0 (C#)
- **Database**: MySQL 8
- **ORM**: Entity Framework Core (with Pomelo MySQL Provider)
- **Containerized with**: Docker + Docker Compose
- **Web Server**: Nginx (for serving the React frontend)

---

## 📂 Project Structure

```plaintext
📦 root
├── docker-compose.yml                # Docker Compose setup
├── todo-api/                          # .NET Web API backend
│   ├── Controllers/                   # API controllers
│   ├── Data/                          # Database configuration
│   ├── Migrations/                    # EF Core migrations
│   ├── Program.cs                     # Application entry point
│   └── Dockerfile                     # Docker setup for backend
├── todo-web/                          # React frontend
│   ├── public/                        # Static assets
│   │   ├── index.html                 # HTML template
│   ├── src/                           # Frontend source files
│   │   ├── components/                # React components
│   │   ├── pages/                     # React pages
│   │   ├── services/                  # API call services
│   │   ├── styles/                    # Styles for components
│   │   ├── App.js                     # Main app component
│   │   ├── index.js                   # React entry point
│   │   ├── Dockerfile                 # Docker setup for frontend
│   │   ├── package.json               # Frontend dependencies
```
## 🐳 Docker Setup (Production)

### 1. Clone the repository
```
git clone --recurse-submodules https://github.com/jeyakeethan/todo-app.git
cd todo-app
```

This command will clone the parent repository along with all its submodules (`todo-api` and `todo-web`).

### 2. Run the app

```
docker-compose up --build
```

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **API**: [http://localhost:5194/api/todo](http://localhost:5194/api/todo)

---

## 🧩 API Endpoints

| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| GET    | `/api/todo`             | Get the 5 most recent tasks     |
| POST   | `/api/todo`             | Add a new task                  |
| DELETE | `/api/todo/{title}`     | Remove a task by title          |

---

## 🧑‍💻 Usage Instructions

- **Add a task**: Type a title (required) and optional description.
- **Submit the task**: Press Enter or click the "Add Task" button.
- **Mark a task as Done**: Click "Done" next to a task to permanently remove it.

---

## 🧾 Database

- The database is automatically seeded with 8 sample tasks upon the first migration.
- Migration runs automatically when the backend starts via:

```
CMD ["sh", "-c", "dotnet ef database update && dotnet todo-api.dll"]
```
MYSQL_HOST=mysql
MYSQL_PORT=3306
MYSQL_DATABASE=tododb
MYSQL_USER=root
MYSQL_PASSWORD=1234

---

## 🔧 Local Development (optional)

### Backend

1. Navigate to the `todo-api` directory:

```
cd todo-api
```

2. Restore dependencies and apply migrations:

```
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend

1. Navigate to the `todo-web` directory:

```
cd todo-web
```

2. Install dependencies and start the frontend:

```
npm install
npm start
```

---

## 📸 Screenshots (optional)

You can add screenshots or a demo link if available.

---

## 📄 License

This project is open-source. [Choose a license, e.g., MIT].

---

## 🙌 Contributions

Pull requests are welcome! Please fork the repo and submit a PR.

---

## Parent Repository Setup

This project includes a parent repository that combines the following two repositories as submodules:

- **API Repository** - Backend (ASP.NET Core)
- **Web Repository** - Frontend (React)

The parent repository (todo-app) contains a `docker-compose.yml` file for managing the backend, frontend, and MySQL database as services.

### 1. Clone the parent repository:

```
git clone --recurse-submodules https://github.com/jeyakeethan/todo-app.git
cd todo-app
```

This command will clone the parent repository and its submodules in one step.

### 2. Run the application:

```
docker-compose up --build
```

This command will start the backend (`todo-api`), frontend (`todo-web`), and the MySQL database as containers.
