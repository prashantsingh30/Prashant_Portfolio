'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown, ArrowUp } from 'lucide-react';
import { personalInfo, footerQuickLinks } from '@/lib/data';
import { Reveal } from '@/components/primitives/anim';

const linkIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
};

const finalQuote =
  '“Great software is built not just with code, but with curiosity, consistency, and the courage to keep learning.”';

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-foreground/8">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_60%)] pointer-events-none opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent-blue)/0.4)] to-transparent" />

      <div className="container relative mx-auto px-6 max-w-5xl">
        {/* Main grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <Reveal>
            <div>
              <a href="#home" className="flex items-center gap-2 mb-3">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <defs>
                    <linearGradient id="footerLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--accent-blue))" />
                      <stop offset="100%" stopColor="hsl(var(--accent-emerald))" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 7 21 L 12 7 L 16 18 L 21 7"
                    stroke="url(#footerLogo)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <span className="font-serif text-lg font-semibold tracking-tight">
                  {personalInfo.name}
                </span>
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {personalInfo.role} building AI-powered platforms, full-stack products,
                and developer tools.
              </p>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={0.1}>
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50 mb-4">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2.5">
                {footerQuickLinks.map((link) => {
                  const Icon = linkIcons[link.label];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                    >
                      {Icon && <Icon className="size-3.5" />}
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Resume + socials */}
          <Reveal delay={0.15}>
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50 mb-4">
                Connect
              </h4>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium hover:opacity-90 transition-opacity mb-4"
              >
                <FileDown className="size-3.5" />
                Download Resume
              </a>
              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: personalInfo.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ y: -2 }}
                    aria-label={s.label}
                    className="inline-flex items-center justify-center size-9 rounded-full glass-card hover:bg-foreground/[0.06] transition-colors"
                  >
                    <s.icon className="size-4 text-muted-foreground" />
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="h-px bg-foreground/8 mb-8" />

        {/* Final quote */}
        <Reveal delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-8"
          >
            <p className="font-serif text-base sm:text-lg italic text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {finalQuote}
            </p>
          </motion.div>
        </Reveal>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-foreground/5">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Designed and Developed by{' '}
            <span className="text-foreground font-medium">{personalInfo.name}</span>
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
            <span className="font-mono">© {new Date().getFullYear()}</span>
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              Back to top
              <ArrowUp className="size-3 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
