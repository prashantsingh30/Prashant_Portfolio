'use client';

import { motion } from 'framer-motion';
import { exploringTracks } from '@/lib/data';
import {
  SectionHeading,
  staggerContainer,
  staggerItem,
  Spotlight,
} from '@/components/primitives/anim';

export function Learning() {
  return (
    <section id="learning" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--accent-violet)/0.025)] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-[hsl(var(--accent-violet)/0.03)] blur-[160px] pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-7xl">
        <SectionHeading
          eyebrow="Growth Track"
          title={
            <>
              Currently <span className="text-serif-gradient italic">Learning</span>
            </>
          }
          subtitle="Active focus areas — a deliberate and disciplined path toward senior software engineering and applied AI development."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {exploringTracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div key={track.title} variants={staggerItem}>
                <Spotlight className="group relative h-full rounded-2xl glass-card hover:bg-foreground/[0.04] transition-all duration-500 overflow-hidden">
                  {/* Top gradient accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${track.accent}, transparent)` }}
                  />
                  {/* Ambient glow */}
                  <div
                    className="absolute -top-12 -right-12 size-36 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `${track.accent}12` }}
                  />

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Icon + step number */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="inline-flex items-center justify-center size-12 rounded-xl glass-card group-hover:scale-110 transition-transform duration-300"
                        style={{ boxShadow: `0 0 28px ${track.accent}20` }}
                      >
                        <Icon className="size-5" style={{ color: track.accent }} />
                      </div>
                      <span
                        className="text-4xl font-black opacity-[0.06] group-hover:opacity-[0.10] transition-opacity select-none font-serif"
                        style={{ color: track.accent }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="font-bold text-base tracking-tight mb-2 leading-snug text-foreground">
                      {track.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {track.description}
                    </p>

                    {/* Progress bar */}
                    <div className="mt-5 relative h-px bg-foreground/8 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${55 + (i % 3) * 15}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.07, duration: 1.2, ease: 'easeOut' }}
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${track.accent}80, ${track.accent})` }}
                      />
                    </div>
                    <p className="mt-1.5 text-[10px] font-mono text-muted-foreground/50 uppercase tracking-wider">
                      In Progress
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
