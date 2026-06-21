'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import {
  SectionHeading,
  staggerContainer,
  staggerItem,
  Spotlight,
} from '@/components/primitives/anim';

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--accent-blue)/0.025)] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 size-[500px] rounded-full bg-[hsl(var(--accent-amber)/0.04)] blur-[160px] pointer-events-none -translate-y-1/2" />

      <div className="container relative mx-auto px-6 max-w-7xl">
        <SectionHeading
          eyebrow="Recognition"
          title={
            <>
              Awards &amp; <span className="text-serif-gradient italic">Achievements</span>
            </>
          }
          subtitle="Concrete recognitions spanning academics, competitive hackathons, research publications, and technical community leadership."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={staggerItem}>
                <Spotlight className="group relative h-full rounded-2xl glass-card hover:bg-foreground/[0.04] transition-all duration-500 overflow-hidden">
                  {/* Top gradient line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                  />
                  {/* Background glow */}
                  <div
                    className="absolute -top-16 -right-16 size-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `${item.accent}12` }}
                  />

                  <div className="relative p-6 h-full flex flex-col">
                    {/* Number badge + icon row */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="inline-flex items-center justify-center size-12 rounded-xl glass-card group-hover:scale-110 transition-transform duration-300 shrink-0"
                        style={{ boxShadow: `0 0 28px ${item.accent}22`, borderColor: `${item.accent}20` }}
                      >
                        <Icon className="size-5" style={{ color: item.accent }} />
                      </div>
                      <span
                        className="text-4xl font-black opacity-[0.06] group-hover:opacity-[0.10] transition-opacity select-none font-serif"
                        style={{ color: item.accent }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Org badge */}
                    <div
                      className="inline-flex self-start items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.18em]"
                      style={{
                        color: item.accent,
                        background: `color-mix(in srgb, ${item.accent} 10%, transparent)`,
                        border: `1px solid ${item.accent}25`,
                      }}
                    >
                      <span className="size-1 rounded-full" style={{ background: item.accent }} />
                      {item.org}
                    </div>

                    <h3 className="font-bold text-base tracking-tight mb-2 leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>
                </Spotlight>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
