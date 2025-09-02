const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware CORS para permitir peticiones desde cualquier origen
app.use(cors({ origin: '*' }));

// Middleware para parsear JSON
app.use(express.json());

// Middleware de logging para depuración
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Base de datos temporal en memoria
let tasks = [];

// =======================
// RUTAS DEL API
// =======================

// Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Agregar nueva tarea
app.post('/api/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  const newTask = { id: Date.now(), text, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Marcar tarea como completada/incompleta
app.put('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  task.completed = !task.completed;
  res.json(task);
});

// Eliminar tarea
app.delete('/api/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: 'Task deleted' });
});

// =======================
// SERVIR FRONTEND DE REACT
// =======================

// Asegurarse que la carpeta build/dist exista
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Cualquier otra ruta que no sea /api va al index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// =======================
// INICIAR SERVIDOR
// =======================
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
