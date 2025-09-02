import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Proyects';
import Works from '../components/Works';
import useStars from '../Fondo';

export default function Home() {
  useStars();

  return (
    <div className="relative min-h-screen text-gray-100 font-sans overflow-x-hidden">
      {/* Fondo*/}
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
