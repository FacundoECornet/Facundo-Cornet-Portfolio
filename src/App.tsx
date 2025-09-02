import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importar la página completa
import Spotify from './projects/Spotify';
import TodoApp from './projects/To-do';
import GuessNumberGame from './projects/Number';
import useStars from './Fondo';

export default function App() {
  useStars(); // Fondo de estrellas

  return (
    <>
      <div className="background-start"></div>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Página principal completa */}
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/game" element={<GuessNumberGame />} />
      </Routes>
    </>
  );
}
