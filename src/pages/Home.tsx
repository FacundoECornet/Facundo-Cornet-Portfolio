import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Proyects';
import Works from '../components/Works';
import useStars from '../Fondo'; // Hook del fondo animado

export default function Home() {
  // Llamamos al hook para inicializar el fondo
  useStars();

  return (
    <div className="relative min-h-screen text-gray-100 font-sans overflow-x-hidden">
      {/* Fondo animado */}
      <div className="background-start fixed inset-0 pointer-events-none -z-10"></div>

      {/* Contenido */}
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Works />
    </div>
  );
}
