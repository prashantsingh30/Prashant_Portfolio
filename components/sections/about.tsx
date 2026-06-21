'use client';

import { motion } from 'framer-motion';
import { aboutSummary, aboutCards } from '@/lib/data';
import { Reveal, SectionHeading, Spotlight } from '@/components/primitives/anim';

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 size-[400px] rounded-full bg-[hsl(var(--accent-blue)/0.04)] blur-[140px] pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              A developer who <span className="text-serif-gradient italic">ships</span>
            </>
          }
          subtitle="MCA student, BSc CS graduate with a 9.73 CGPA, and a relentless builder of production-grade software — from AI platforms to full-stack applications."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: professional summary */}
          <Reveal>
            <div className="space-y-5">
              <p className="text-base lg:text-lg text-muted-foreground leading-[1.85]">
                I&apos;m{' '}
                <span className="font-serif text-foreground italic font-semibold">Prashant Singh</span>
                {' '}— an MCA student at Bharati Vidyapeeth with a BSc in Computer Science
                (CGPA <span className="text-foreground font-bold text-[hsl(var(--accent-emerald))]">9.73</span>), recognized as{' '}
                <span className="text-foreground font-semibold">Student of the Year</span> for
                academic excellence and technical leadership.
              </p>
              {aboutSummary.slice(1).map((para, i) => (
                <p key={i} className="text-sm lg:text-base text-muted-foreground leading-[1.85]">{para}</p>
              ))}

              {/* Key highlights strip */}
              <div className="pt-4 grid grid-cols-3 gap-3">
                {[
                  { value: '9.73', label: 'CGPA', color: 'hsl(var(--accent-emerald))' },
                  { value: '3+', label: 'Production Apps', color: 'hsl(var(--accent-blue))' },
                  { value: '2026', label: 'Research Paper', color: 'hsl(var(--accent-violet))' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="relative p-4 rounded-xl glass-card text-center overflow-hidden group"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 50% 100%, ${stat.color}10, transparent 70%)` }}
                    />
                    <div className="font-serif text-2xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/60 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Signature line */}
              <div className="pt-2 flex items-center gap-4">
                <span className="font-serif text-xl italic text-foreground/70 font-semibold">
                  Prashant Singh
                </span>
                <span className="h-px flex-1 bg-foreground/8" />
                <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">
                  Mumbai, India
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: achievement cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {aboutCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={i * 0.07}>
                  <Spotlight className="group relative h-full rounded-2xl glass-card hover:bg-foreground/[0.04] transition-all duration-300 overflow-hidden">
                    {/* Hover top accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
                    />
                    {/* Corner glow */}
                    <div
                      className="absolute -top-8 -right-8 size-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: `${card.accent}15` }}
                    />
                    <div className="relative p-5">
                      <div
                        className="inline-flex items-center justify-center size-11 rounded-xl glass-card mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ boxShadow: `0 0 22px ${card.accent}18` }}
                      >
                        <Icon className="size-[18px]" style={{ color: card.accent }} />
                      </div>
                      <h3 className="font-bold text-sm tracking-tight mb-1.5 text-foreground leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </Spotlight>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
