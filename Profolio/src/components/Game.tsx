// src/sections/Game.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useTicTacToe } from '../hooks/useTicTacToe';

export const Game = () => {
  const { board, handleClick, winner, isDraw, resetGame, isXNext } = useTicTacToe();

  return (
    <section className="py-20 bg-slate-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Take a Break?</h2>
      <p className="text-slate-500 mb-8">Beat the developer at Tic-Tac-Toe</p>

      <div className="grid grid-cols-3 gap-2 bg-slate-200 p-2 rounded-xl shadow-inner">
        {board.map((value, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center text-3xl font-bold shadow-sm"
            onClick={() => handleClick(i)}
          >
            <AnimatePresence>
              {value && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={value === 'X' ? 'text-blue-600' : 'text-rose-500'}
                >
                  {value}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      <div className="mt-8 text-center">
        {winner ? (
          <motion.div initial={{ y: 10 }} animate={{ y: 0 }}>
            <p className="text-2xl font-bold text-green-600">Winner: {winner}! 🎉</p>
          </motion.div>
        ) : isDraw ? (
          <p className="text-2xl font-bold text-slate-600">It's a Draw! 🤝</p>
        ) : (
          <p className="text-lg">Next player: <span className="font-bold">{isXNext ? 'X' : 'O'}</span></p>
        )}

        <button 
          onClick={resetGame}
          className="mt-4 text-blue-600 underline font-medium hover:text-blue-800"
        >
          Reset Game
        </button>
      </div>
    </section>
  );
};