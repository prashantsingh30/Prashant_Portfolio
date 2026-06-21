'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/lib/data';
import {
  SectionHeading,
  Spotlight,
  staggerContainer,
  staggerItem,
} from '@/components/primitives/anim';

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-[400px] rounded-full bg-[hsl(var(--accent-blue)/0.04)] blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 size-[300px] rounded-full bg-[hsl(var(--accent-violet)/0.04)] blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-7xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title={
            <>
              My <span className="text-serif-gradient italic">Expertise</span>
            </>
          }
          subtitle="A deep and deliberate toolbox spanning languages, frontend, backend, databases, and the systems thinking that ties them all together."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} variants={staggerItem}>
                <SkillCard
                  icon={Icon}
                  title={category.title}
                  accent={category.accent}
                  skills={category.skills}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({
  icon: Icon,
  title,
  accent,
  skills,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  accent: string;
  skills: string[];
}) {
  return (
    <Spotlight className="group relative h-full rounded-2xl glass-card hover:bg-foreground/[0.04] transition-all duration-500 overflow-hidden">
      {/* Animated top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      {/* Corner glow */}
      <div
        className="absolute -top-10 -right-10 size-28 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `${accent}18` }}
      />
      {/* Inset border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}25` }}
      />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div
            className="inline-flex items-center justify-center size-11 rounded-xl glass-card group-hover:scale-110 transition-transform duration-300 shrink-0"
            style={{ boxShadow: `0 0 28px ${accent}22`, borderColor: `${accent}20` }}
          >
            <Icon className="size-5" style={{ color: accent }} />
          </div>
          <div>
            <h3 className="font-bold text-base tracking-tight text-foreground">{title}</h3>
            <p className="text-[11px] text-muted-foreground/60 font-mono uppercase tracking-widest mt-0.5">
              {skills.length} skills
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
              whileHover={{ y: -2, scale: 1.04 }}
              className="relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-muted-foreground bg-foreground/[0.04] border border-foreground/8 hover:border-foreground/20 hover:text-foreground hover:bg-foreground/[0.07] transition-all duration-200 cursor-default"
            >
              <span
                className="absolute left-1.5 top-1/2 -translate-y-1/2 size-1 rounded-full opacity-0 group-hover:opacity-60 transition-opacity"
                style={{ background: accent }}
              />
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </Spotlight>
  );
}
