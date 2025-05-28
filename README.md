## Nam Needs TODO
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/docker-257bd6?style=for-the-badge&logo=docker&logoColor=white)

> A full-stack MERN Todo App built with a modern stack and containerized for easy setup.

---

### Frontend
- [React.js](https://reactjs.org/) – for building interactive UIs
- [Tailwind CSS](https://tailwindcss.com/) – for utility-first styling
- [Axios](https://axios-http.com/) – for handling API requests
- [Vite](https://vitejs.dev/) – for fast frontend dev/build tool

### Backend
- [Node.js](https://nodejs.org/) – JavaScript runtime environment
- [Express.js](https://expressjs.com/) – lightweight web framework

### Database
- [MongoDB](https://www.mongodb.com/) – NoSQL document database
- [Mongoose](https://mongoosejs.com/) – ODM to interact with MongoDB in Node

---

![image](./frontend/src/assets/image.png)

---

### Requirements

Make sure you have [**Docker**](https://www.docker.com/products/docker-desktop) installed:
```bash
docker --version
```

---

### Run the Project
Clone the project and launch everything with Docker:
```bash
git clone https://github.com/namneyugn21/NamNeedsTODO.git

cd NamNeedsTODO

docker-compose up --build
```
Then open:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000/todos
- MongoDB is handled automatically inside Docker (no setup needed!)

---

### License

This project is open source and available under the [MIT License](LICENSE).
