import { motion } from 'framer-motion';
import { useState } from 'react';
import useStars from '../Fondo'; // Hook del fondo animado

export default function Skills() {
  const [, setHoveredSkill] = useState<string | null>(null);

  const skillsData = [
    { name: 'HTML', category: 'frontend', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', category: 'frontend', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', category: 'frontend', color: 'from-yellow-400 to-orange-500' },
    { name: 'React', category: 'frontend', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', category: 'backend', color: 'from-green-400 to-emerald-500' },
    { name: 'Express.js', category: 'backend', color: 'from-gray-600 to-gray-800' },
    { name: 'TypeScript', category: 'frontend', color: 'from-blue-600 to-indigo-500' },
    { name: 'Next.js', category: 'frontend', color: 'from-black to-gray-800' },
    { name: 'MySQL', category: 'database', color: 'from-blue-600 to-cyan-600' },
    { name: 'PostgreSQL', category: 'database', color: 'from-blue-500 to-purple-500' },
    { name: 'Firebase', category: 'database', color: 'from-yellow-500 to-orange-600' },
    { name: 'Git/GitHub', category: 'tools', color: 'from-gray-600 to-gray-800' },
    { name: 'Unity (C#)', category: 'gamedev', color: 'from-gray-700 to-purple-600' },
    { name: 'Storybook', category: 'tools', color: 'from-pink-500 to-rose-500' },
    { name: 'Mantine', category: 'frontend', color: 'from-blue-400 to-indigo-500' },
  ];

  const categories = {
    frontend: { name: 'Frontend', icon: '🎨', color: 'cyan' },
    backend: { name: 'Backend', icon: '⚡', color: 'green' },
    database: { name: 'Database', icon: '🗄️', color: 'blue' },
    tools: { name: 'Tools', icon: '🛠️', color: 'purple' },
    gamedev: { name: 'Game Dev', icon: '🎮', color: 'pink' },
  };

  // Inicializar el fondo global de estrellas
  useStars();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Título con efecto holográfico */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-30 -z-10"></div>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Grid de skills por categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <motion.div
              key={key}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * Object.keys(categories).indexOf(key) }}
            >
              <div className="bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span className={`text-${category.color}-400`}>{category.name}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData
                    .filter((skill) => skill.category === key)
                    .map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        className="relative px-3 py-1.5 text-sm bg-gray-800/80 border border-gray-600/50 rounded-lg cursor-pointer overflow-hidden group/skill"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <span className="relative z-10 text-gray-300 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}
                        ></div>
                        <div
                          className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${skill.color} group-hover/skill:w-full transition-all duration-300`}
                        ></div>
                      </motion.span>
                    ))}
                </div>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-${category.color}-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
