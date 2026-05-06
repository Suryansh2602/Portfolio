import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useTicTacToe } from '../hooks/useTicTacToe';
import { getRandomIndex } from '../utils/random';
import planeImage from '../assets/plane.png';

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
    if (!userChoice || !computerChoice || !isRevealed) {
      return null;
    }

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
    <section className="relative bg-slate-50 px-4 py-20">
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-cyan-200/10"
            />
            <motion.div
              initial={{ x: '-55vw', y: 42, opacity: 0 }}
              animate={{ x: '132vw', y: -12, opacity: [0, 1, 1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 6.8, ease: 'linear' }}
              className="absolute left-0 top-[16%] z-[82]"
            >
              <div className="relative flex items-center">
                <div className="ml-3 rounded-full border border-white/70 bg-slate-950/90 px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-white shadow-2xl">
                  You Won
                </div>
                <div className="-ml-2 rounded-full bg-white/90 p-2 shadow-[0_12px_32px_rgba(15,23,42,0.2)]">
                  <img
                    src={planeImage}
                    alt="Celebration plane"
                    className="h-10 w-10 object-contain"
                  />
                </div>
                {planeSprinkles.map((sprinkle) => (
                  <motion.span
                    key={sprinkle}
                    initial={{ opacity: 0, x: -8, y: 0, scale: 0.4 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: [-18 - sprinkle * 3, -110 - sprinkle * 7],
                      y: [0, sprinkle % 2 === 0 ? 28 : -28],
                      scale: [0.4, 1, 0.6],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.2,
                      ease: 'easeOut',
                      delay: 0.3 + sprinkle * 0.05,
                    }}
                    className={`absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${
                      sprinkle % 3 === 0
                        ? 'bg-cyan-300'
                        : sprinkle % 3 === 1
                          ? 'bg-amber-300'
                          : 'bg-emerald-300'
                    } shadow-[0_0_16px_rgba(255,255,255,0.8)]`}
                  />
                ))}
              </div>
            </motion.div>
            {crackerBursts.map((burst, burstIndex) => (
              <div
                key={`${burst.top}-${burst.left}`}
                className="absolute"
                style={{ top: burst.top, left: burst.left }}
              >
                {Array.from({ length: 10 }, (_, sparkIndex) => (
                  <motion.span
                    key={`${burstIndex}-${sparkIndex}`}
                    initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.2, 1, 0.85],
                      x: [0, Math.cos((sparkIndex / 10) * Math.PI * 2) * 70],
                      y: [0, Math.sin((sparkIndex / 10) * Math.PI * 2) * 70],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.9,
                      ease: 'easeOut',
                      delay: burst.delay,
                    }}
                    className={`absolute left-0 top-0 h-3 w-3 rounded-full ${
                      sparkIndex % 3 === 0
                        ? 'bg-amber-300'
                        : sparkIndex % 3 === 1
                          ? 'bg-cyan-300'
                          : 'bg-rose-300'
                    } shadow-[0_0_20px_rgba(255,255,255,0.65)]`}
                  />
                ))}
                <motion.span
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.3, 2.2, 2.8] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: burst.delay }}
                  className="absolute left-0 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70"
                />
              </div>
            ))}
            {confettiPieces.map((piece) => (
              <motion.span
                key={piece}
                initial={{
                  opacity: 0,
                  y: -120,
                  x: `${(piece % 8) * 12 + 4}vw`,
                  rotate: 0,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: ['-10vh', '105vh'],
                  rotate: [0, 220, 360],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2.3,
                  ease: 'easeOut',
                  delay: (piece % 8) * 0.07,
                }}
                className={`absolute top-0 h-4 w-4 rounded-sm ${
                  piece % 3 === 0
                    ? 'bg-cyan-500'
                    : piece % 3 === 1
                      ? 'bg-amber-400'
                      : 'bg-emerald-400'
                }`}
              />
            ))}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="absolute inset-x-0 top-16 mx-auto w-fit rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-2xl"
            >
              You win! Clean victory.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Take a Break?</h2>
          <p className="mt-3 text-slate-500">Play a quick round before the next build ships.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Game One</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">Tic-Tac-Toe</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Classic and quick. Try to outplay the board.</p>
            </div>

            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-200 p-2 shadow-inner">
              {board.map((value, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-20 w-full items-center justify-center rounded-xl bg-white text-3xl font-bold shadow-sm md:h-24"
                  onClick={() => handleClick(i)}
                >
                  <AnimatePresence>
                    {value && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.7 }}
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

            <div className="mt-6 text-center">
              {winner ? (
                <motion.p initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-xl font-bold text-green-600">
                  Winner: {winner}
                </motion.p>
              ) : isDraw ? (
                <p className="text-xl font-bold text-slate-600">It&apos;s a draw</p>
              ) : (
                <p className="text-base text-slate-700">
                  Next player: <span className="font-bold">{isXNext ? 'X' : 'O'}</span>
                </p>
              )}

              <button
                onClick={resetGame}
                className="mt-4 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-700 hover:text-cyan-700"
              >
                Reset Game
              </button>
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Game Two</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">Rock Paper Scissors</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                The computer picks first but keeps it hidden. You choose, then reveal the winner.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {choices.map((choice) => (
                <motion.button
                  key={choice}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleChoiceSelect(choice)}
                  className={`rounded-[1.5rem] border px-4 py-5 text-left transition ${
                    userChoice === choice
                      ? 'border-cyan-700 bg-cyan-50 shadow-md'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <p className="text-lg font-bold text-slate-900">{choice}</p>
                  <p className="mt-2 text-sm text-slate-500">Choose this move</p>
                </motion.button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Your Choice</p>
                <p className="mt-3 text-xl font-black text-slate-950">{userChoice ?? 'Waiting for selection'}</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Computer Choice</p>
                <p className="mt-3 text-xl font-black text-slate-950">
                  {isRevealed ? computerChoice : 'Hidden until reveal'}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={revealRound}
                disabled={!userChoice}
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition enabled:hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Reveal Result
              </button>
              <button
                onClick={resetRps}
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-700 hover:text-cyan-700"
              >
                Reset Round
              </button>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4">
              {!isRevealed ? (
                <p className="text-sm leading-7 text-slate-600">
                  Pick your move first. Once you reveal, both choices appear together and the winner is decided.
                </p>
              ) : roundWinner === 'Draw' ? (
                <p className="text-lg font-bold text-slate-700">It&apos;s a draw. Both picked {userChoice}.</p>
              ) : roundWinner === 'User' ? (
                <p className="text-lg font-bold text-emerald-600">
                  You win. {userChoice} beats {computerChoice}.
                </p>
              ) : (
                <p className="text-lg font-bold text-rose-600">
                  Computer wins. {computerChoice} beats {userChoice}.
                </p>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
