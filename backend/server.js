const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todo')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error', err));

const todosRouter = require('./routes/todos');
app.use('/api/todos', todosRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
