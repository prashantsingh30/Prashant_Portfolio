'use client';

import { motion } from 'framer-motion';
import { quickHighlights } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/components/primitives/anim';

export function QuickHighlights() {
  return (
    <section className="relative py-10 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="container relative mx-auto px-6 max-w-7xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {quickHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex flex-col items-center text-center p-4 rounded-2xl glass-card hover:bg-white/[0.05] transition-colors duration-300"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                />
                <Icon className="size-5 mb-3" style={{ color: item.accent }} />
                <div className="font-display text-base font-semibold tracking-tight mb-0.5">
                  {item.value}
                </div>
                <div className="text-[11px] text-muted-foreground leading-snug">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
