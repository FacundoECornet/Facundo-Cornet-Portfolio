import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function GuessNumberGame() {
  const navigate = useNavigate();
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (!num) return;
    setAttempts(attempts + 1);

    if (num === number) {
      setMessage(`🎉 ¡Correcto! Adivinaste en ${attempts + 1} intentos.`);
    } else if (num < number) {
      setMessage('⬆️ El número es mayor');
    } else {
      setMessage('⬇️ El número es menor');
    }

    setGuess('');
  };

  const resetGame = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div className="min-h-screen bg-[#0B1E3D] text-[#FFAA4C] p-6 flex flex-col items-center justify-center">
      {/* Botón Volver */}
      <motion.button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-[#FF5E3A] hover:bg-[#FF784E] rounded-lg font-bold shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Volver
      </motion.button>

      {/* Título */}
      <motion.h2
        className="text-5xl font-extrabold mb-4 text-[#FFA65C]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Adivina el Número
      </motion.h2>
      <motion.p
        className="mb-6 text-[#FFD8A8]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Intenta adivinar un número entre 1 y 100
      </motion.p>

      {/* Input y botón */}
      <div className="flex gap-3 mb-6">
        <motion.input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Tu número..."
          className="px-4 py-3 rounded-lg border border-[#FFAA4C] bg-[#122B50] text-[#FFD8A8] focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          onClick={handleGuess}
          className="px-6 py-3 bg-[#FF784E] hover:bg-[#FF9A6F] rounded-lg font-bold shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Adivinar
        </motion.button>
      </div>

      {/* Mensaje con animación */}
      <AnimatePresence>
        {message && (
          <motion.p
            key={message}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className={`mb-6 text-xl font-semibold ${
              message.includes('¡Correcto!') ? 'text-[#4CEB7C]' : 'text-[#FFA65C]'
            }`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Reiniciar juego */}
      <motion.button
        onClick={resetGame}
        className="px-6 py-3 bg-[#122B50] border border-[#FFAA4C] rounded-lg font-bold hover:bg-[#FFAA4C] hover:text-[#0B1E3D] shadow-md transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Reiniciar Juego
      </motion.button>

      {/* Intentos */}
      {attempts > 0 && (
        <motion.p className="mt-4 text-[#FFD8A8]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Intentos: {attempts}
        </motion.p>
      )}
    </div>
  );
}
