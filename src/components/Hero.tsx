import { motion } from 'framer-motion';
import useStars from '../Fondo'; // Hook del fondo animado

export default function Hero() {
  // Inicializar el fondo global de estrellas
  useStars();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Contenido principal */}
      <div className="relative z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            background: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff00, #ffff00)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow:
              '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3), 0 0 90px rgba(0, 255, 0, 0.2)',
          }}
        >
          Facundo Eduardo Cornet
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-cyan-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            textShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
          }}
        >
          Técnico Superior en Programación
        </motion.p>

        <motion.a
          href="/tu-titulo.pdf"
          target="_blank"
          className="inline-block px-8 py-4 text-lg font-semibold text-black bg-cyan-400 rounded-lg relative overflow-hidden group transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.1)',
          }}
        >
          <span className="relative z-10">
            <a href="https://drive.google.com/file/d/1Uz1tIqGoCHasPeJMCF7uoP5PM0OHpy3U/view?usp=sharing">
              Ver Título
            </a>
          </span>
          <div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }}
          />
          <div className="absolute inset-0 bg-cyan-400 group-hover:bg-transparent transition-all duration-300" />
        </motion.a>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
