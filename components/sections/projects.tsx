'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Check, Image as ImageIcon } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import { Reveal, SectionHeading, MagneticButton } from '@/components/primitives/anim';
import { cn } from '@/lib/utils';

export function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/4 size-[500px] rounded-full bg-[hsl(var(--accent-blue)/0.04)] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 size-[500px] rounded-full bg-[hsl(var(--accent-emerald)/0.03)] blur-[140px] pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Things I&apos;ve <span className="text-gradient">built</span>
            </>
          }
          subtitle="Three production-grade products — each engineered end-to-end, from architecture to deployment."
        />

        <div className="space-y-20">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <ProjectShowcase project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative"
    >
      <div className={cn('grid lg:grid-cols-2 gap-8 lg:gap-12 items-center', isReversed && 'lg:[&>*:first-child]:order-2')}>
        {/* Image side */}
        <div className="relative">
          <ProjectImage project={project} />
        </div>

        {/* Details side */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider"
              style={{ color: project.accent, background: `${project.accent}14` }}
            >
              <span
                className="size-1.5 rounded-full"
                style={{ background: project.accent, boxShadow: `0 0 6px ${project.accent}` }}
              />
              {project.tagline}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/50">
              {project.category}
            </span>
          </div>

          <h3 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
            {project.name}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-pretty max-w-lg">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">
              Features
            </h4>
            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 max-w-lg">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
                >
                  <Check className="size-3 shrink-0" style={{ color: project.accent }} />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton href={project.liveUrl} strength={0.2}>
              <span
                className="group/btn inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-medium transition-colors"
                style={{ background: project.accent, color: 'hsl(240 10% 4.5%)' }}
              >
                <ExternalLink className="size-3.5" />
                Live Demo
              </span>
            </MagneticButton>
            <MagneticButton href={project.githubUrl} strength={0.2}>
              <span className="group/btn inline-flex items-center gap-1.5 rounded-full glass-card hover:bg-white/8 px-5 py-2.5 text-xs font-medium transition-colors">
                <Github className="size-3.5" />
                GitHub
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:shadow-elevated hover:border-foreground/10 cursor-pointer block"
      style={{
        boxShadow: `0 0 0 1px rgba(255, 255, 255, 0.03), 0 4px 12px -4px rgba(0, 0, 0, 0.3)`,
      }}
      whileHover={{
        boxShadow: `0 0 0 1px ${project.accent}20, 0 12px 40px -12px ${project.glow}`,
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute -inset-8 opacity-60 pointer-events-none transition-opacity duration-500 group-hover:opacity-80"
        style={{ background: `radial-gradient(circle at 50% 50%, ${project.glow}, transparent 70%)` }}
      />

      {/* Browser chrome */}
      <div className="absolute inset-0 glass-strong flex flex-col">
        {/* Top bar */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-foreground/5 shrink-0 bg-foreground/[0.02]">
          <span className="size-2 rounded-full bg-red-500/60 group-hover:bg-red-500/80 transition-colors duration-300" />
          <span className="size-2 rounded-full bg-yellow-500/60 group-hover:bg-yellow-500/80 transition-colors duration-300" />
          <span className="size-2 rounded-full bg-green-500/60 group-hover:bg-green-500/80 transition-colors duration-300" />
          <div className="ml-2 flex-1 h-4 rounded-full bg-foreground/[0.04] pr-3">
            <div className="h-full flex items-center px-2 text-[8px] font-mono text-muted-foreground/50 truncate">
              {project.liveUrl.replace('https://', '')}
            </div>
          </div>
        </div>

        {/* Body — image with premium scroll animation */}
        <div className="relative flex-1 w-full overflow-hidden bg-zinc-950/40">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top transition-[object-position,transform] ease-in-out group-hover:scale-[1.03] group-hover:object-bottom"
              style={{ transitionDuration: '4.5s' }}
              loading="lazy"
            />
          ) : (
            <>
              {/* Grid background fallback */}
              <div className="absolute inset-0 bg-grid opacity-30" />

              {/* Monogram watermark */}
              <div className="relative">
                <div
                  className="absolute -inset-12 rounded-full blur-3xl opacity-40"
                  style={{ background: project.accent }}
                />
                <div className="relative flex flex-col items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative size-20 rounded-2xl glass-card flex items-center justify-center shadow-premium group-hover:shadow-elevated transition-shadow duration-500"
                  >
                    <span
                      className="font-serif text-4xl font-semibold"
                      style={{ color: project.accent }}
                    >
                      {project.name.charAt(0)}
                    </span>
                  </motion.div>
                  {/* Upload hint */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/40">
                    <ImageIcon className="size-3" />
                    <span>Screenshot placeholder</span>
                  </div>
                </div>
              </div>

              {/* Floating UI mock cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-6 glass-card rounded-lg p-2 space-y-1"
              >
                <div className="h-1.5 w-16 rounded-full bg-white/10" />
                <div className="h-1.5 w-10 rounded-full bg-white/8" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 left-6 glass-card rounded-lg p-2 space-y-1"
              >
                <div className="h-1.5 w-12 rounded-full" style={{ background: `${project.accent}40` }} />
                <div className="h-1.5 w-8 rounded-full bg-white/8" />
              </motion.div>
            </>
          )}

          {/* Premium reflections and gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
          
          {/* Subtle shine line overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Hover overlay button */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75">
        <span 
          className="inline-flex items-center gap-1.5 glass-strong rounded-full px-3 py-1.5 text-xs font-semibold shadow-premium transition-all duration-300 hover:scale-105"
          style={{ borderColor: `${project.accent}30` }}
        >
          View Live Demo
          <ArrowUpRight className="size-3.5" style={{ color: project.accent }} />
        </span>
      </div>
    </motion.a>
  );
}
