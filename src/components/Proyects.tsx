import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStars from '../Fondo';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const navigate = useNavigate();

  useStars();

  const projects = [
    {
      name: 'Spotify Album Search',
      subtitle: 'React + TypeScript + Tailwind',
      description:
        'Aplicación web que permite buscar artistas y mostrar sus álbumes usando la API de Spotify. Incluye vista de álbumes, enlaces a Spotify y filtrado por artista.',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Fetch API'],
      route: '/spotify',
      icon: '🎵',
      status: 'Completado',
      difficulty: 'Intermedio',
    },
    {
      name: 'Todo App',
      subtitle: 'React + TypeScript + Node.js + Express',
      description:
        'Aplicación de lista de tareas donde puedes agregar, completar y eliminar tareas. Ideal para mostrar manejo de estado y eventos en React.',
      technologies: ['React', 'TypeScript', 'Node.js', 'JSON Server'],
      route: '/todo',
      icon: '📝',
      status: 'Completado',
      difficulty: 'Avanzado',
    },
    {
      name: 'Juego Adivina el Número',
      subtitle: 'React + TypeScript + Tailwind',
      description:
        'Juego interactivo donde el usuario debe adivinar un número aleatorio entre 1 y 100. Muestra interacción, lógica y estado en React.',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      route: '/game',
      icon: '🎮',
      status: 'Completado',
      difficulty: 'Intermedio',
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Intermedio':
        return 'text-yellow-400 border-yellow-400/50';
      case 'Avanzado':
        return 'text-orange-400 border-orange-400/50';
      case 'Experto':
        return 'text-red-400 border-red-400/50';
      default:
        return 'text-green-400 border-green-400/50';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Completado'
      ? 'text-green-400 bg-green-400/10'
      : 'text-blue-400 bg-blue-400/10';
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-bold mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Algunos proyectos recientes que muestran mis habilidades en React y Tailwind
          </motion.p>
        </motion.div>

        {/* Grid  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{project.icon}</div>
                    <div className="flex gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                          project.difficulty,
                        )}`}
                      >
                        {project.difficulty}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          project.status,
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/70 text-gray-300 text-xs rounded-md border border-gray-600/50 hover:border-pink-400 hover:text-pink-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    onClick={() => navigate(project.route)}
                    className="w-full py-2 px-4 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-400 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver Proyecto
                  </motion.button>
                </div>
              </div>

              {hoveredProject === index && (
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900/80 rounded-full text-pink-400 text-xs font-medium border border-pink-400/50"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  Click para explorar
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
