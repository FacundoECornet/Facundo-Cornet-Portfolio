// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos temporal en memoria
let tasks = [];

// Rutas

// Obtener todas las tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Agregar nueva tarea
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  const newTask = { id: Date.now(), text, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Marcar tarea como completada o incompleta
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  task.completed = !task.completed;
  res.json(task);
});

// Eliminar tarea
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id != id);
  res.json({ message: 'Task deleted' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});
