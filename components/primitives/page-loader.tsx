'use client';

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

/* ── Particle dot (floating ambient orbs) ── */
function Particle({ index }: { index: number }) {
  const angle = (index / 12) * Math.PI * 2;
  const radius = 90 + (index % 3) * 28;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const size = 2 + (index % 3);
  const delay = index * 0.12;

  return (
    <motion.span
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        background: index % 3 === 0
          ? 'hsl(var(--accent-blue))'
          : index % 3 === 1
          ? 'hsl(var(--accent-violet))'
          : 'hsl(var(--accent-emerald))',
        boxShadow: index % 3 === 0
          ? '0 0 8px 2px hsl(var(--accent-blue)/0.6)'
          : index % 3 === 1
          ? '0 0 8px 2px hsl(var(--accent-violet)/0.6)'
          : '0 0 8px 2px hsl(var(--accent-emerald)/0.6)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0.4, 0.9, 0],
        scale: [0, 1, 0.7, 1.1, 0],
        x: [0, Math.cos(angle + 0.5) * 12, 0],
        y: [0, Math.sin(angle + 0.5) * 12, 0],
      }}
      transition={{
        duration: 2.8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/* ── Animated progress counter ── */
function Counter({ value }: { value: number }) {
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(motionVal, value, { duration: 1.4, ease: 'easeOut' });
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [value, motionVal, rounded]);

  return <span>{display}</span>;
}

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'done'>('loading');

  useEffect(() => {
    // Simulate progress ramp
    const steps = [
      { target: 35, delay: 100 },
      { target: 62, delay: 400 },
      { target: 88, delay: 900 },
      { target: 100, delay: 1350 },
    ];
    const timers: ReturnType<typeof setTimeout>[] = [];
    steps.forEach(({ target, delay }) => {
      timers.push(setTimeout(() => setProgress(target), delay));
    });
    timers.push(setTimeout(() => setPhase('done'), 1500));
    timers.push(setTimeout(() => setLoading(false), 2100));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: 'blur(12px)',
            transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ background: 'hsl(var(--background))' }}
        >
          {/* ── Deep ambient gradient layers ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                'radial-gradient(ellipse 60% 50% at 20% 30%, hsl(var(--accent-blue)/0.12) 0%, transparent 60%)',
                'radial-gradient(ellipse 50% 40% at 80% 70%, hsl(var(--accent-violet)/0.10) 0%, transparent 60%)',
                'radial-gradient(ellipse 40% 35% at 50% 50%, hsl(var(--accent-cyan)/0.06) 0%, transparent 70%)',
              ].join(', '),
            }}
          />

          {/* ── Grid overlay ── */}
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)] pointer-events-none opacity-30" />

          {/* ── Slow rotating outer ring ── */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute pointer-events-none"
            style={{ width: 280, height: 280 }}
          >
            <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
              <circle
                cx="140" cy="140" r="130"
                stroke="url(#outerRingGrad)"
                strokeWidth="1"
                strokeDasharray="8 16"
                strokeLinecap="round"
                opacity="0.25"
              />
              <defs>
                <linearGradient id="outerRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent-blue))" />
                  <stop offset="50%" stopColor="hsl(var(--accent-violet))" />
                  <stop offset="100%" stopColor="hsl(var(--accent-emerald))" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* ── Reverse rotating middle ring ── */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute pointer-events-none"
            style={{ width: 200, height: 200 }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle
                cx="100" cy="100" r="90"
                stroke="hsl(var(--accent-violet)/0.2)"
                strokeWidth="1"
                strokeDasharray="4 20"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* ── Particles ── */}
          <div className="absolute" style={{ width: 300, height: 300 }}>
            {Array.from({ length: 12 }, (_, i) => (
              <Particle key={i} index={i} />
            ))}
          </div>

          {/* ── Core logo mark ── */}
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Glow behind logo */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[-20px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, hsl(var(--accent-blue)/0.3) 0%, transparent 70%)' }}
              />

              {/* Logo container with spinning gradient border */}
              <div className="relative size-24 flex items-center justify-center">
                {/* Conic gradient border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'conic-gradient(from 0deg, hsl(var(--accent-blue)), hsl(var(--accent-violet)), hsl(var(--accent-emerald)), hsl(var(--accent-cyan)), hsl(var(--accent-blue)))',
                    padding: '1.5px',
                  }}
                >
                  <div className="absolute inset-[1.5px] rounded-2xl" style={{ background: 'hsl(var(--background))' }} />
                </motion.div>

                {/* SVG path logo */}
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" className="relative z-10">
                  <defs>
                    <linearGradient id="lgMark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--accent-blue))" />
                      <stop offset="50%" stopColor="hsl(var(--accent-cyan))" />
                      <stop offset="100%" stopColor="hsl(var(--accent-emerald))" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 14 50 L 26 14 L 34 38 L 48 14"
                    fill="none"
                    stroke="url(#lgMark)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* ── Name reveal ── */}
            <motion.div
              className="flex flex-col items-center gap-1.5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[hsl(var(--accent-blue)/0.5)]" />
                <h1
                  className="text-xs font-bold uppercase tracking-[0.45em] bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, hsl(var(--accent-blue)), hsl(var(--accent-violet)), hsl(var(--accent-emerald)))' }}
                >
                  Prashant Singh
                </h1>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-[hsl(var(--accent-emerald)/0.5)]" />
              </div>
              <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/50">
                Software Developer
              </p>
            </motion.div>

            {/* ── Progress bar ── */}
            <motion.div
              className="flex flex-col items-center gap-2.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* Track */}
              <div className="w-48 h-[2px] bg-foreground/[0.06] rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--accent-blue)), hsl(var(--accent-cyan)), hsl(var(--accent-emerald)))',
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                {/* Shimmer on the fill */}
                <motion.div
                  className="absolute inset-y-0 rounded-full pointer-events-none"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, transparent 60%, rgba(255,255,255,0.4) 80%, transparent 100%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{ backgroundPosition: ['200% 0', '-100% 0'] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Counter % + done state */}
              <AnimatePresence mode="wait">
                {phase === 'loading' ? (
                  <motion.span
                    key="counter"
                    exit={{ opacity: 0, y: -8 }}
                    className="text-[11px] font-mono tabular-nums text-muted-foreground/60"
                  >
                    <Counter value={progress} />%
                  </motion.span>
                ) : (
                  <motion.span
                    key="done"
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-[11px] font-mono uppercase tracking-widest text-[hsl(var(--accent-emerald))]"
                  >
                    Ready ✦
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
