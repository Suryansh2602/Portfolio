import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useTicTacToe } from '../hooks/useTicTacToe';
import { getRandomIndex } from '../utils/random';
import planeImage from '../assets/plane.png';
import BorderGlow from './BorderGlow';

type Choice = 'Rock' | 'Paper' | 'Scissors';

const choices: Choice[] = ['Rock', 'Paper', 'Scissors'];
const confettiPieces = Array.from({ length: 24 }, (_, index) => index);
const planeSprinkles = Array.from({ length: 18 }, (_, index) => index);
const crackerBursts = [
  { top: '18%', left: '14%', delay: 0 },
  { top: '24%', left: '78%', delay: 1.18 },
  { top: '42%', left: '28%', delay: 1.36 },
  { top: '52%', left: '68%', delay: 1.52 },
  { top: '70%', left: '18%', delay: 1.72 },
  { top: '64%', left: '82%', delay: 1.92 },
];

const getRoundWinner = (user: Choice, computer: Choice) => {
  if (user === computer) return 'Draw';
  if (
    (user === 'Rock' && computer === 'Scissors') ||
    (user === 'Paper' && computer === 'Rock') ||
    (user === 'Scissors' && computer === 'Paper')
  ) {
    return 'User';
  }
  return 'Computer';
};

export const Game = ({ onCelebrate }: { onCelebrate?: () => void }) => {
  const { board, handleClick, winner, isDraw, resetGame, isXNext } = useTicTacToe();
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const roundWinner = useMemo(() => {
    if (!userChoice || !computerChoice || !isRevealed) return null;
    return getRoundWinner(userChoice, computerChoice);
  }, [computerChoice, isRevealed, userChoice]);

  const handleChoiceSelect = (choice: Choice) => {
    setUserChoice(choice);
    setComputerChoice(choices[getRandomIndex(choices.length)]);
    setIsRevealed(false);
    setShowCelebration(false);
  };

  const revealRound = () => {
    if (!userChoice || !computerChoice) return;
    setIsRevealed(true);
    if (getRoundWinner(userChoice, computerChoice) === 'User') {
      setShowCelebration(true);
      onCelebrate?.();
      window.setTimeout(() => setShowCelebration(false), 7200);
    }
  };

  const resetRps = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setIsRevealed(false);
    setShowCelebration(false);
  };

  return (
    <section className="relative px-4 py-20  overflow-hidden min-h-screen">
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyan-200/5" />
            <motion.div
              initial={{ x: '-55vw', y: 42, opacity: 0 }}
              animate={{ x: '132vw', y: -12, opacity: [0, 1, 1, 1, 0] }}
              transition={{ duration: 6.8, ease: 'linear' }}
              className="absolute left-0 top-[16%] z-[82]"
            >
              <div className="relative flex items-center">
                <div className="ml-3 rounded-full border border-white/70 px-5 py-2 text-sm font-black uppercase tracking-[0.28em] ">
                  You Won
                </div>
                <div className="-ml-2 rounded-full bg-white/90 p-2 ">
                  <img src={planeImage} alt="Plane" className="h-10 w-10 object-contain" />
                </div>
                {planeSprinkles.map((s) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: [0, 1, 0], x: [-18 - s * 3, -110 - s * 7], y: [0, s % 2 === 0 ? 28 : -28] }}
                    className="absolute h-2 w-2 rounded-full bg-cyan-400"
                  />
                ))}
              </div>
            </motion.div>
            {crackerBursts.map((burst, i) => (
              <div key={i} className="absolute" style={{ top: burst.top, left: burst.left }}>
                {Array.from({ length: 10 }).map((_, si) => (
                  <motion.span
                    key={si}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], x: Math.cos(si) * 70, y: Math.sin(si) * 70, scale: [0, 1, 0.5] }}
                    transition={{ duration: 0.9, delay: burst.delay }}
                    className="absolute h-2 w-2 rounded-full bg-amber-300 shadow-glow"
                  />
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Take a Break?</h2>
          <p className="mt-4 text-slate-400 text-lg">Quick games for a quick refresh.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 bg-none backdrop-blur-sm">
          {/* GAME ONE: TIC TAC TOE */}
          <BorderGlow
            glowColor="192 132 252"
            borderRadius={32}
            glowRadius={50}
            colors={['#c084fc', '#38bdf8']}
          >
            <article className="p-6 h-full flex flex-col ">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-purple-400">Game One</p>
                <h3 className="mt-2 text-3xl font-black ">Tic-Tac-Toe</h3>
              </div>

              <div className="grid grid-cols-3 gap-3 rounded-3xl ">
                {board.map((value, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-24 items-center justify-center rounded-2xl  text-4xl font-black  bg-purple-300/30  shadow-inner transition-colors"
                    onClick={() => handleClick(i)}
                  >
                    <AnimatePresence mode="wait">
                      {value && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={value === 'X' ? 'text-cyan-400' : 'text-rose-500'}
                        >
                          {value}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center">
                {winner ? (
                  <p className="text-2xl font-black text-emerald-400">Winner: {winner}</p>
                ) : isDraw ? (
                  <p className="text-2xl font-black text-slate-400">Draw Game</p>
                ) : (
                  <p className="text-slate-300 text-lg">Turn: <span className="font-black">{isXNext ? 'X' : 'O'}</span></p>
                )}
                <button
                  onClick={resetGame}
                  className="mt-6 rounded-full border border-white/10 px-8 py-3 text-sm font-bold  hover:bg-white/5 transition-all"
                >
                  Reset Board
                </button>
              </div>
            </article>
          </BorderGlow>

          {/* GAME TWO: ROCK PAPER SCISSORS */}
          <BorderGlow
            glowColor="56 189 248"
            backgroundColor="#1A1625"
            borderRadius={32}
            glowRadius={50}
            colors={['#38bdf8', '#f472b6']}
          >
            <article className="p-8 h-full flex flex-col">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">Game Two</p>
                <h3 className="mt-2 text-3xl font-black ">R-P-S</h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {choices.map((choice) => (
                  <motion.button
                    key={choice}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleChoiceSelect(choice)}
                    className={`rounded-2xl border-2 px-4 py-6 text-center transition-all ${userChoice === choice
                        ? 'border-cyan-500 bg-cyan-500/20 '
                        : 'border-white/5 bg-white/5 text-slate-400 hover:border-white/20'
                      }`}
                  >
                    <p className="text-lg font-black">{choice}</p>
                  </motion.button>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-black/20 p-4 border border-white/5 text-center">
                  <p className="text-[10px] font-bold uppercase text-slate-500 tracking-tighter">You</p>
                  <p className="text-xl font-black  mt-1">{userChoice ?? '-'}</p>
                </div>
                <div className="rounded-2xl bg-black/20 p-4 border border-white/5 text-center">
                  <p className="text-[10px] font-bold uppercase text-slate-500 tracking-tighter">CPU</p>
                  <p className="text-xl font-black  mt-1">
                    {isRevealed ? computerChoice : '???'}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="flex gap-4">
                  <button
                    onClick={revealRound}
                    disabled={!userChoice || isRevealed}
                    className="flex-1 rounded-xl bg-white px-6 py-4 text-sm font-black hover:bg-cyan-400 transition-all disabled:opacity-100"
                  >
                    Reveal
                  </button>
                  <button
                    onClick={resetRps}
                    className="flex-1 rounded-xl border border-white/10 px-6 py-4 text-sm font-bold  hover:bg-white/5"
                  >
                    Reset
                  </button>
                </div>

                <div className="mt-6 h-12 flex items-center justify-center">
                  {isRevealed && (
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className={`text-xl font-black ${roundWinner === 'User' ? 'text-emerald-400' :
                          roundWinner === 'Draw' ? 'text-slate-400' : 'text-rose-500'
                        }`}
                    >
                      {roundWinner === 'Draw' ? "It's a Tie!" :
                        roundWinner === 'User' ? "Victory!" : "CPU Wins!"}
                    </motion.p>
                  )}
                </div>
              </div>
            </article>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};