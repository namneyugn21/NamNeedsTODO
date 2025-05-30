const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// middleware
const { jsonMiddleware, corsMiddleware } = require('./middleware/global');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

// routes
const todoRoutes = require('./routes/todos');

// global middlewares
app.use(logger); // logging first
app.use(corsMiddleware);
app.use(jsonMiddleware);

// api routes
app.use('/todos', todoRoutes);

// error handling middleware
app.use(errorHandler);

// connect to MongoDB and then start server
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'todos',
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}. Bonjour!`);
  });
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
