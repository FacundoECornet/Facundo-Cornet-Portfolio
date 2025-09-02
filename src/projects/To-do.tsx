import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const API_URL = '/tasks'; // No necesitamos localhost en deploy

export default function Todo() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const addTask = async () => {
    if (!input.trim()) return;
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input }),
      });
      const newTask = await res.json();
      setTasks((prev) => [...prev, newTask]);
      setInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (id: number) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'PUT' });
      const updatedTask = await res.json();
      setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)));
    } catch (err) {
      console.error(err);
    }
  };

  const removeTask = async (id: number) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-20 text-white">Cargando tareas...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 text-white p-6">
      <motion.button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-lg font-semibold shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Volver
      </motion.button>

      <motion.h2
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        To-Do List
      </motion.h2>

      <div className="flex mb-8 gap-3 max-w-3xl mx-auto">
        <motion.input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Agregar tarea..."
          className="flex-1 px-4 py-3 rounded-lg border border-blue-400 bg-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          onClick={addTask}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Agregar
        </motion.button>
      </div>

      <ul className="space-y-3 max-w-3xl mx-auto">
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className={`flex justify-between items-center p-4 rounded-xl shadow-lg cursor-pointer ${
                task.completed
                  ? 'bg-purple-800/60 line-through text-gray-300'
                  : 'bg-blue-800 hover:bg-blue-700'
              }`}
            >
              <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
              <motion.button
                onClick={() => removeTask(task.id)}
                className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded-lg text-white font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ✕
              </motion.button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
