'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { timelineEvents } from '@/lib/data';
import { Reveal, SectionHeading } from '@/components/primitives/anim';
import { cn } from '@/lib/utils';

const tagColors: Record<string, string> = {
  Education: 'hsl(217 91% 60%)',
  Milestone: 'hsl(152 65% 45%)',
  Research: 'hsl(265 80% 65%)',
  Achievement: 'hsl(38 92% 58%)',
};

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 60%'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="timeline" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-[hsl(var(--accent-blue)/0.04)] blur-[160px] pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-5xl">
        <SectionHeading
          eyebrow="My Journey"
          title={
            <>
              Milestones &amp; <span className="text-serif-gradient italic">Growth</span>
            </>
          }
          subtitle="A living record of the key milestones that shaped how I think, build, and grow as a software engineer."
        />

        <div ref={containerRef} className="relative pl-8 sm:pl-0">
          {/* Base line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-2 bottom-2 w-px bg-foreground/[0.07]" />
          {/* Animated progress line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[hsl(var(--accent-blue))] via-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-emerald))]"
          />

          <div className="space-y-10">
            {timelineEvents.map((event, i) => (
              <TimelineItem key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  event,
  index,
}: {
  event: { year: string; title: string; description: string; tag: string };
  index: number;
}) {
  const isLeft = index % 2 === 0;
  const color = tagColors[event.tag] ?? 'hsl(217 91% 60%)';

  return (
    <div className={cn('relative flex sm:items-center', isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse')}>
      {/* Glowing milestone node */}
      <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 -translate-x-[14px] sm:-translate-x-[7px] top-1 sm:top-1/2 sm:-translate-y-1/2 z-10">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="block size-3.5 rounded-full border-2"
          style={{
            background: 'hsl(var(--surface-1))',
            borderColor: color,
            boxShadow: `0 0 16px ${color}80, 0 0 0 4px hsl(var(--surface-1))`,
          }}
        >
          <motion.span
            animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full"
            style={{ background: color }}
          />
        </motion.span>
      </div>

      {/* Card */}
      <div
        className={cn(
          'ml-8 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)]',
          isLeft ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'
        )}
      >
        <Reveal x={isLeft ? -16 : 16} y={0} delay={index * 0.06}>
          <div className="group relative p-5 rounded-2xl glass-card hover:bg-foreground/[0.04] transition-all duration-500 overflow-hidden">
            {/* Hover top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
            />

            {/* Year + tag row */}
            <div className={cn('flex items-center gap-2.5 mb-3', isLeft ? 'sm:justify-end' : 'sm:justify-start')}>
              <span className="font-serif text-2xl font-bold tracking-tight text-gradient">
                {event.year}
              </span>
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider"
                style={{
                  color,
                  background: `color-mix(in srgb, ${color} 12%, transparent)`,
                  border: `1px solid ${color}25`,
                }}
              >
                <span className="size-1 rounded-full" style={{ background: color }} />
                {event.tag}
              </div>
            </div>

            <h3 className="font-bold text-sm tracking-tight mb-1.5 text-foreground leading-snug">
              {event.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {event.description}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
