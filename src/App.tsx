import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Spotify from './projects/Spotify';
import TodoApp from './projects/To-do';
import GuessNumberGame from './projects/Number';
import useStars from './Fondo';

export default function App() {
  useStars();

  return (
    <>
      <div className="background-start"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/game" element={<GuessNumberGame />} />
      </Routes>
    </>
  );
}
