import { motion } from 'framer-motion';
import useStars from '../Fondo';

export default function Hero() {
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
          <span className="relative z-10 flex items-center gap-4">
            {/*título */}
            <a
              href="https://drive.google.com/file/d/1Uz1tIqGoCHasPeJMCF7uoP5PM0OHpy3U/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-600 text-white rounded-lg shadow hover:bg-cyan-700 transition"
            >
              Ver Título
            </a>

            {/*GitHub */}
            <a
              href="https://github.com/FacundoECornet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
            >
              {/* Logo de GitHub*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.72 1.27 3.39.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.75.8 1.2 1.82 1.2 3.07 0 4.39-2.68 5.36-5.24 5.65.42.37.8 1.1.8 2.22 0 1.61-.01 2.91-.01 3.31 0 .31.21.67.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
              GitHub
            </a>
          </span>

          <div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }}
          />
          <div className="absolute inset-0 bg-cyan-400 group-hover:bg-transparent transition-all duration-300" />
        </motion.a>
      </div>

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
