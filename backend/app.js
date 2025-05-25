const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const todoRoutes = require('./routes/todos');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'todos',
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use(express.json());
app.use(cors());
app.use('/todos', todoRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}. Bonjour!`);
});