import { motion } from 'framer-motion';
import useStars from '../Fondo';

export default function Works() {
  useStars();

  return (
    <section id="works" className="relative overflow-hidden py-24">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Título */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Trabajos Realizados
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 rounded-xl blur-lg opacity-20 -z-10"></div>
          </h2>
        </motion.div>

        {/* Card del proyecto */}
        <motion.div
          className="group relative cursor-pointer max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ y: -10 }}
        >
          <div className="relative bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden group-hover:border-emerald-400/50 transition-all duration-500 p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🏢</div>
                <div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    Atelier Homes
                  </h3>
                  <p className="text-emerald-400 font-medium">Sitio Web Inmobiliario</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="px-4 py-2 rounded-full text-sm font-medium text-green-400 bg-green-400/10 border border-green-400/30">
                  ✅ Activo
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
                  2024
                </span>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Desarrollo completo de la página web para una prestigiosa inmobiliaria en Tucumán.
              Incluye catálogo de propiedades, sistema de búsqueda avanzada y formularios de
              contacto optimizados.
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['React', 'Firebase', 'API REST', 'CRM', 'SEO'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800/80 text-gray-300 text-sm rounded-lg border border-gray-600/50 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Botón principal */}
            <motion.a
              href="https://atelierhomesarg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 py-4 px-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl text-white font-semibold relative overflow-hidden group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all duration-500 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Ver Proyecto Live</span>
              <span className="relative z-10 text-xl">🚀</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </div>
        </motion.div>

        {/* Contacto*/}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-gray-400 text-lg mb-4">¿Interesado en trabajar conmigo?</p>
          <motion.a
            href="mailto:facucornet@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar 💼
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
