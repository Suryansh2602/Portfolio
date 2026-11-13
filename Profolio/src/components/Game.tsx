import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import planeImage from '../assets/plane.png';
import { useTicTacToe } from '../hooks/useTicTacToe';
import { getRandomIndex } from '../utils/random';
import { MaskLine } from './MaskLine';
import { SectionLabel } from './SectionLabel';

type Choice = 'Rock' | 'Paper' | 'Scissors';

const choices: Choice[] = ['Rock', 'Paper', 'Scissors'];
const planeSprinkles = Array.from({ length: 18 }, (_, index) => index);
const crackerBursts = [
  { top: '18%', left: '14%', delay: 0 },
  { top: '24%', left: '78%', delay: 1.18 },
  { top: '42%', left: '28%', delay: 1.36 },
  { top: '52%', left: '68%', delay: 1.52 },
  { top: '70%', left: '18%', delay: 1.72 },
  { top: '64%', left: '82%', delay: 1.92 },
];

const CELEBRATION_MS = 7200;

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

export const Game = () => {
  const { board, handleClick, winner, isDraw, resetGame, isXNext } = useTicTacToe();
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const celebrationTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(celebrationTimer.current), []);

  const roundWinner = useMemo(() => {
    if (!userChoice || !computerChoice || !isRevealed) return null;
    return getRoundWinner(userChoice, computerChoice);
  }, [computerChoice, isRevealed, userChoice]);

  const stopCelebration = () => {
    window.clearTimeout(celebrationTimer.current);
    setShowCelebration(false);
  };

  const handleChoiceSelect = (choice: Choice) => {
    setUserChoice(choice);
    setComputerChoice(choices[getRandomIndex(choices.length)]);
    setIsRevealed(false);
    stopCelebration();
  };

  const revealRound = () => {
    if (!userChoice || !computerChoice) return;
    setIsRevealed(true);
    if (getRoundWinner(userChoice, computerChoice) === 'User') {
      setShowCelebration(true);
      celebrationTimer.current = window.setTimeout(() => setShowCelebration(false), CELEBRATION_MS);
    }
  };

  const resetRps = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setIsRevealed(false);
    stopCelebration();
  };

  const ticTacToeStatus = winner ? `Winner — ${winner}` : isDraw ? 'Draw game' : `Turn — ${isXNext ? 'X' : 'O'}`;

  return (
    <section id="play" className="py-14 md:py-20">
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
          >
            <motion.div
              initial={{ x: '-55vw', y: 42, opacity: 0 }}
              animate={{ x: '132vw', y: -12, opacity: [0, 1, 1, 1, 0] }}
              transition={{ duration: 6.8, ease: 'linear' }}
              className="absolute left-0 top-[16%]"
            >
              <div className="relative flex items-center">
                <div className="ml-3 rounded-full bg-accent px-5 py-2 font-mono text-sm uppercase tracking-[0.2em] text-on-accent">
                  You won
                </div>
                <div className="-ml-2 rounded-full bg-ink p-2">
                  <img src={planeImage} alt="" className="h-10 w-10 object-contain" />
                </div>
                {planeSprinkles.map((sprinkle) => (
                  <motion.span
                    key={sprinkle}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: [-18 - sprinkle * 3, -110 - sprinkle * 7],
                      y: [0, sprinkle % 2 === 0 ? 28 : -28],
                    }}
                    className="absolute h-2 w-2 rounded-full bg-accent"
                  />
                ))}
              </div>
            </motion.div>
            {crackerBursts.map((burst, burstIndex) => (
              <div key={burstIndex} className="absolute" style={{ top: burst.top, left: burst.left }}>
                {Array.from({ length: 10 }).map((_, sparkIndex) => (
                  <motion.span
                    key={sparkIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: Math.cos(sparkIndex) * 70,
                      y: Math.sin(sparkIndex) * 70,
                      scale: [0, 1, 0.5],
                    }}
                    transition={{ duration: 0.9, delay: burst.delay }}
                    className="absolute h-2 w-2 rounded-full bg-accent"
                  />
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-x">
        <SectionLabel index="07">Off the clock</SectionLabel>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-12">
          <h2 className="display-lg md:col-span-8">
            <MaskLine>Take a</MaskLine>
            <MaskLine delay={0.08}>
              <span className="serif-accent">break?</span>
            </MaskLine>
          </h2>
          <p className="max-w-sm leading-relaxed text-muted md:col-span-4 md:self-end">
            Two quick games for a quick refresh.
          </p>
        </div>

        <div className="mt-10 grid gap-px border border-line bg-line md:mt-12 lg:grid-cols-2">
          {/* GAME ONE: TIC TAC TOE */}
          <article className="flex flex-col bg-bg p-6 md:p-10">
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-medium tracking-tight">Tic-Tac-Toe</h3>
              <span className="label text-accent-ink">Game 01</span>
            </div>

            <div className="mx-auto mt-8 grid w-full max-w-sm grid-cols-3 gap-px border border-line bg-line">
              {board.map((value, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Square ${index + 1}${value ? `, ${value}` : ''}`}
                  onClick={() => handleClick(index)}
                  className="grid aspect-square place-items-center bg-bg text-5xl transition-colors hover:bg-bg-elevated md:text-6xl"
                >
                  <AnimatePresence mode="wait">
                    {value && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={value === 'X' ? 'font-semibold text-accent-ink' : 'serif-accent'}
                      >
                        {value}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className={`label ${winner ? 'text-accent-ink' : 'text-ink'}`} aria-live="polite">
                {ticTacToeStatus}
              </p>
              <button type="button" onClick={resetGame} className="btn-outline py-2.5">
                Reset board
              </button>
            </div>
          </article>

          {/* GAME TWO: ROCK PAPER SCISSORS */}
          <article className="flex flex-col bg-bg p-6 md:p-10">
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-medium tracking-tight">Rock, Paper, Scissors</h3>
              <span className="label text-accent-ink">Game 02</span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-px border border-line bg-line">
              {choices.map((choice) => (
                <button
                  key={choice}
                  type="button"
                  aria-pressed={userChoice === choice}
                  onClick={() => handleChoiceSelect(choice)}
                  className={`px-3 py-8 text-lg font-medium transition-colors ${
                    userChoice === choice ? 'bg-accent text-on-accent' : 'bg-bg hover:bg-bg-elevated'
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-px border border-line bg-line">
              <div className="bg-bg p-5">
                <p className="label">You</p>
                <p className="mt-2 text-2xl font-medium">{userChoice ?? '—'}</p>
              </div>
              <div className="bg-bg p-5">
                <p className="label">CPU</p>
                <p className="mt-2 text-2xl font-medium">{isRevealed ? computerChoice : '???'}</p>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <div className="flex h-14 items-center" aria-live="polite">
                {isRevealed && (
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`display-md ${roundWinner === 'User' ? 'text-accent-ink' : ''}`}
                  >
                    {roundWinner === 'Draw' ? "It's a tie." : roundWinner === 'User' ? 'Victory.' : 'CPU wins.'}
                  </motion.p>
                )}
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={revealRound}
                  disabled={!userChoice || isRevealed}
                  className="btn-accent flex-1 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-accent disabled:hover:text-on-accent"
                >
                  Reveal
                </button>
                <button type="button" onClick={resetRps} className="btn-outline flex-1">
                  Reset
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
