// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos temporal en memoria
let tasks = [];

// Rutas API
app.get('/api/tasks', (req, res) => res.json(tasks));

app.post('/api/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  const newTask = { id: Date.now(), text, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  task.completed = !task.completed;
  res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id != id);
  res.json({ message: 'Task deleted' });
});

// Servir React en producción
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
