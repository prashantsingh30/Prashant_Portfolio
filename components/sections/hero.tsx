'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, FileDown, Mail, Sparkles } from 'lucide-react';
import { typingRoles, heroCtas, heroSocials, profileTechBadges, personalInfo } from '@/lib/data';
import { MagneticButton } from '@/components/primitives/anim';
import { Typewriter } from '@/components/primitives/typewriter';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(var(--accent-blue)/0.06)] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-[hsl(var(--accent-blue)/0.06)] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 size-96 rounded-full bg-[hsl(var(--accent-emerald)/0.05)] blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-[22%] -translate-y-1/2 size-[550px] rounded-full bg-[hsl(var(--accent-violet)/0.05)] blur-[150px] pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">

          {/* ── Left copy ── */}
          <div className="flex flex-col">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 self-start mb-6 glass rounded-full px-4 py-1.5 text-xs font-medium tracking-wide"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--accent-emerald))] opacity-75 animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-[hsl(var(--accent-emerald))]" />
              </span>
              <span className="text-muted-foreground">Available for SDE roles</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] font-normal tracking-[-0.04em] leading-[0.92] text-balance"
            >
              <span className="text-gradient-heading block">Prashant</span>
              <span className="text-serif-gradient italic block">Singh</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 flex items-center gap-3 h-7"
            >
              <span className="h-px w-8 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-transparent" />
              <Typewriter
                words={typingRoles}
                className="font-mono text-sm sm:text-base text-[hsl(var(--accent-blue))] font-medium tracking-wider"
              />
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty font-light"
            >
              Passionate software developer pursuing MCA at {personalInfo.institution}, building
              full-stack applications, AI-powered platforms, and scalable software solutions
              with modern technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href={heroCtas.primary.href} strength={0.3} newTab>
                <span className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-premium">
                  <FileDown className="size-4 transition-transform group-hover:-translate-y-0.5" />
                  {heroCtas.primary.label}
                </span>
              </MagneticButton>
              <MagneticButton href={heroCtas.secondary.href} strength={0.3}>
                <span className="group inline-flex items-center gap-2 rounded-full glass-strong hover:bg-foreground/[0.06] px-7 py-3.5 text-sm font-semibold transition-colors">
                  {heroCtas.secondary.label}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </MagneticButton>
              <MagneticButton href={heroCtas.tertiary.href} strength={0.3}>
                <span className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 hover:border-foreground/30 hover:bg-foreground/[0.03] px-7 py-3.5 text-sm font-semibold transition-colors">
                  <Mail className="size-4" />
                  {heroCtas.tertiary.label}
                </span>
              </MagneticButton>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">
                Connect
              </span>
              <span className="h-px flex-1 max-w-[40px] bg-foreground/10" />
              {heroSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <MagneticButton key={social.label} href={social.href} strength={0.3}>
                    <span className="group inline-flex items-center justify-center size-10 rounded-full glass-card hover:bg-foreground/[0.06] transition-colors border border-foreground/5 hover:border-foreground/10">
                      <Icon className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </span>
                  </MagneticButton>
                );
              })}
            </motion.div>
          </div>

          {/* ── Right: Profile image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center justify-center"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROFILE IMAGE — Premium cinematic framing
   ───────────────────────────────────────────── */
function ProfileImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 55, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 22 });

  // Parallax layers
  const imgX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const imgY = useTransform(springY, [-0.5, 0.5], [-12, 12]);
  const ring1X = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const ring1Y = useTransform(springY, [-0.5, 0.5], [-5, 5]);
  const ring2X = useTransform(springX, [-0.5, 0.5], [-9, 9]);
  const ring2Y = useTransform(springY, [-0.5, 0.5], [-9, 9]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  /* Floating stat badges */
  const floatingStats = [
    { label: '9.73 CGPA', sub: 'Academic', color: 'hsl(var(--accent-emerald))', x: '-58%', y: '18%', delay: 1.5 },
    { label: '10+ Projects', sub: 'Built', color: 'hsl(var(--accent-blue))', x: '105%', y: '22%', delay: 1.7 },
    { label: 'Student of', sub: 'the Year', color: 'hsl(var(--accent-violet))', x: '108%', y: '60%', delay: 1.9 },
  ];

  return (
    <div ref={containerRef} className="relative flex flex-col items-center gap-6 w-full max-w-[400px] mx-auto select-none">

      {/* ── Layered ambient glows ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 rounded-full"
          style={{ background: 'radial-gradient(ellipse, hsl(var(--accent-blue)/0.18) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-80 rounded-full"
          style={{ background: 'radial-gradient(ellipse, hsl(var(--accent-violet)/0.1) 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Main floating frame ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ x: ring1X, y: ring1Y }}
        className="relative"
      >
        {/* Outermost decorative dashed ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-6 rounded-full border border-dashed border-foreground/[0.07] pointer-events-none"
          style={{ x: ring2X, y: ring2Y }}
        />

        {/* Second ring with dots */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-3 rounded-full pointer-events-none"
          style={{ x: ring2X, y: ring2Y }}
        >
          {[0, 90, 180, 270].map((deg) => (
            <span
              key={deg}
              className="absolute size-1.5 rounded-full bg-[hsl(var(--accent-blue)/0.5)]"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${deg}deg) translateY(-${Math.round(Math.abs(Math.cos((deg * Math.PI) / 180) * 100))}%) translateX(-50%)`,
              }}
            />
          ))}
        </motion.div>

        {/* Animated conic gradient border */}
        <div className="absolute inset-0 rounded-full p-[2.5px] overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[-50%]"
          >
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_20%,hsl(var(--accent-blue)/0.8)_40%,hsl(var(--accent-violet)/0.6)_60%,hsl(var(--accent-emerald)/0.7)_80%,transparent_100%)]" />
          </motion.div>
        </div>
        {/* Inner background to clip the border */}
        <div className="absolute inset-[2.5px] rounded-full bg-background" />

        {/* Photo container with mouse parallax */}
        <motion.div
          style={{ x: imgX, y: imgY }}
          className="relative size-64 sm:size-72 lg:size-80 rounded-full overflow-hidden"
        >
          {/* Shimmer sweep animation */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
            className="absolute inset-0 z-30 pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)',
            }}
          />

          {/* Photo */}
          <img
            src="/profile.png"
            alt="Prashant Singh"
            className="w-full h-full object-cover object-[center_10%]"
            draggable={false}
          />

          {/* Bottom mood gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--accent-blue)/0.15)] via-transparent to-transparent z-10 pointer-events-none" />

          {/* Top vignette */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.25)] z-20 pointer-events-none" />
        </motion.div>

        {/* ── Floating stat badges ── */}
        {floatingStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
            transition={{
              opacity: { delay: stat.delay, duration: 0.5 },
              scale: { delay: stat.delay, duration: 0.5 },
              y: { duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 },
            }}
            className="absolute z-40 pointer-events-none"
            style={{ left: stat.x, top: stat.y }}
          >
            <div
              className="glass-strong rounded-xl px-3 py-2 text-center min-w-[80px] shadow-elevated"
              style={{ borderColor: `${stat.color}30` }}
            >
              <div className="text-xs font-bold" style={{ color: stat.color }}>
                {stat.label}
              </div>
              <div className="text-[10px] text-muted-foreground">{stat.sub}</div>
            </div>
          </motion.div>
        ))}

        {/* Sparkle icon top-right */}
        <motion.div
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-2 -right-2 z-40 size-8 rounded-full glass-strong flex items-center justify-center border border-[hsl(var(--accent-amber)/0.4)]"
        >
          <Sparkles className="size-3.5 text-[hsl(var(--accent-amber))]" />
        </motion.div>
      </motion.div>


    </div>
  );
}
