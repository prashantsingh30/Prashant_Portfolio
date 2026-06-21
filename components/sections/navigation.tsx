'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sun, Moon } from 'lucide-react';
import { navLinks, personalInfo } from '@/lib/data';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/primitives/anim';
import { useTheme } from '@/components/theme-provider';

/* ─────────────────────────────────────────────
   THEME TOGGLE — animated sun/moon flip
   ───────────────────────────────────────────── */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative inline-flex items-center justify-center size-9 rounded-full border transition-all duration-300 cursor-pointer',
        isDark
          ? 'bg-white/[0.06] border-white/[0.12] hover:bg-white/[0.12] hover:border-white/20'
          : 'bg-black/[0.05] border-black/[0.12] hover:bg-black/[0.09] hover:border-black/20'
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -45, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="size-4 text-blue-400" strokeWidth={1.5} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 45, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -45, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="size-4 text-amber-400" strokeWidth={1.5} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

/* ─────────────────────────────────────────────
   NAVIGATION
   ───────────────────────────────────────────── */
export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4"
      >
        <motion.nav
          animate={{
            width: scrolled ? '100%' : '92%',
            paddingLeft: scrolled ? '12px' : '16px',
            paddingRight: scrolled ? '12px' : '16px',
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'flex items-center justify-between transition-all duration-500 rounded-2xl max-w-3xl',
            scrolled
              ? 'glass-strong shadow-elevated py-2'
              : 'bg-transparent py-2'
          )}
        >
          {/* ── Logo ── */}
          <a
            href="#home"
            className="flex items-center gap-2.5 pl-1 pr-2 py-1 rounded-xl hover:bg-foreground/5 transition-colors shrink-0 group"
          >
            {/* Animated logo mark */}
            <div className="relative size-7 shrink-0">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full opacity-40"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(var(--accent-blue)), hsl(var(--accent-violet)), hsl(var(--accent-emerald)), hsl(var(--accent-blue)))',
                }}
              />
              <div className="absolute inset-[1.5px] rounded-full bg-background flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M 3 11 L 6 3 L 8.5 9.5 L 11 3" stroke="url(#lg)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--accent-blue))" />
                      <stop offset="100%" stopColor="hsl(var(--accent-emerald))" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <span className="hidden sm:inline shrink-0">
              <span
                className="font-bold text-sm tracking-tight bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, hsl(var(--accent-blue)), hsl(var(--accent-violet)), hsl(var(--accent-emerald)))' }}
              >
                Prashant
              </span>
              <span className="font-semibold text-sm tracking-tight text-foreground/80 ml-1">
                Singh
              </span>
            </span>
          </a>

          {/* ── Center nav links ── */}
          <div className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'group relative px-3.5 py-1.5 text-[13px] font-medium tracking-wide rounded-full transition-colors duration-200',
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {/* Active pill background */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-full bg-foreground/[0.07]"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{link.label}</span>
                  {/* Hover underline */}
                  <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-emerald))] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              );
            })}
          </div>

          {/* ── Right: Theme toggle + Resume + Mobile toggle ── */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Resume CTA */}
            <MagneticButton href={personalInfo.resumeUrl} strength={0.25} className="hidden sm:block" newTab>
              <span className="group inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-1.5 text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm">
                <FileDown className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
                Resume
              </span>
            </MagneticButton>

            {/* Mobile menu open */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-foreground/5 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="absolute right-0 top-0 bottom-0 w-[78%] max-w-sm glass-strong p-6 flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[hsl(var(--accent-emerald))] animate-pulse" />
                  <span className="text-sm font-semibold">Menu</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-foreground/5"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </motion.button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.055 }}
                    className={cn(
                      'px-4 py-3 text-base font-medium tracking-tight rounded-xl transition-colors',
                      activeSection === link.href.slice(1)
                        ? 'bg-foreground/[0.07] text-foreground'
                        : 'hover:bg-foreground/5 text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Bottom CTA row */}
              <div className="mt-auto flex items-center gap-3">
                <ThemeToggle />
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold"
                >
                  <FileDown className="size-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
