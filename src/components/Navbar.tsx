export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo con efecto neón */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg relative">
          Facundo Cornet
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
            Facundo Cornet
          </div>
        </h1>

        {/* Links de navegación */}
        <div className="flex space-x-8">
          <a
            href="#hero"
            className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 group px-3 py-2"
          >
            <span className="relative z-10">Inicio</span>
            <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/50 rounded-md transition-all duration-300 group-hover:shadow-md group-hover:shadow-cyan-400/20"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
          </a>

          <a
            href="#skills"
            className="relative text-gray-300 hover:text-purple-400 transition-all duration-300 group px-3 py-2"
          >
            <span className="relative z-10">Skills</span>
            <div className="absolute inset-0 border border-transparent group-hover:border-purple-400/50 rounded-md transition-all duration-300 group-hover:shadow-md group-hover:shadow-purple-400/20"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></div>
          </a>

          <a
            href="#projects"
            className="relative text-gray-300 hover:text-green-400 transition-all duration-300 group px-3 py-2"
          >
            <span className="relative z-10">Proyectos</span>
            <div className="absolute inset-0 border border-transparent group-hover:border-green-400/50 rounded-md transition-all duration-300 group-hover:shadow-md group-hover:shadow-green-400/20"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
          </a>

          <a
            href="#works"
            className="relative text-gray-300 hover:text-yellow-400 transition-all duration-300 group px-3 py-2"
          >
            <span className="relative z-10">Trabajos</span>
            <div className="absolute inset-0 border border-transparent group-hover:border-yellow-400/50 rounded-md transition-all duration-300 group-hover:shadow-md group-hover:shadow-yellow-400/20"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>
      </div>

      {/* Línea decorativa inferior con efecto neón */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
    </nav>
  );
}
