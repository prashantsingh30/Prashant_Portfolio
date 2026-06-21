'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, BookOpen, Quote, ExternalLink, Shield, Lock, KeyRound, ShieldAlert, BadgeCheck, GraduationCap } from 'lucide-react';
import { publications } from '@/lib/data';
import { Reveal, SectionHeading, Spotlight } from '@/components/primitives/anim';

const topicIcons = [Shield, KeyRound, Lock, ShieldAlert];

export function Publications() {
  return (
    <section id="research" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-[hsl(var(--accent-violet)/0.04)] blur-[140px] pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-5xl">
        <SectionHeading
          eyebrow="Research & Publications"
          title={
            <>
              Published <span className="text-serif-gradient italic">research</span>
            </>
          }
          subtitle="Bridging academic theory and applied engineering — formalizing how modern cloud systems can be made more secure."
        />

        <div className="space-y-5">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.1}>
              <Spotlight className="group relative rounded-3xl glass-card hover:bg-foreground/[0.03] transition-colors duration-500 overflow-hidden">
                {/* Accent border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent-violet))] to-transparent opacity-60" />

                <div className="relative p-7 lg:p-10">
                  {/* Badges row — publication + conference */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[hsl(var(--accent-violet))] bg-[hsl(var(--accent-violet)/0.08)] border border-[hsl(var(--accent-violet)/0.2)]">
                      <BadgeCheck className="size-3" />
                      Published
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-foreground/[0.04] border border-foreground/8">
                      <BookOpen className="size-3" />
                      {pub.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[hsl(var(--accent-emerald))] bg-[hsl(var(--accent-emerald)/0.08)] border border-[hsl(var(--accent-emerald)/0.2)]">
                      <GraduationCap className="size-3" />
                      Conference
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-foreground/[0.04] border border-foreground/8">
                      <Calendar className="size-3" />
                      {pub.year}
                    </span>
                  </div>

                  <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 items-center">
                    {/* Icon */}
                    <div className="hidden lg:flex flex-col items-center gap-3">
                      <div className="relative size-16 rounded-2xl glass-card flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute -inset-2 rounded-2xl bg-[hsl(var(--accent-violet)/0.15)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <FileText className="size-6 text-[hsl(var(--accent-violet))]" />
                      </div>
                      <Quote className="size-3 text-muted-foreground/40" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-serif text-xl lg:text-2xl font-semibold tracking-tight mb-3 text-balance">
                        {pub.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-pretty">
                        {pub.description}
                      </p>

                      {/* Presented at */}
                      <div className="flex items-center gap-2 mb-5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/50">
                          Presented at
                        </span>
                        <span className="text-xs font-medium text-foreground/90">
                          {pub.venue}
                        </span>
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2">
                        {pub.topics.map((topic, ti) => {
                          const TIcon = topicIcons[ti % topicIcons.length];
                          return (
                            <motion.span
                              key={topic}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + ti * 0.08 }}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-muted-foreground bg-foreground/[0.03] border border-foreground/8 hover:border-foreground/15 hover:text-foreground transition-all"
                            >
                              <TIcon className="size-3 text-[hsl(var(--accent-violet))]" />
                              {topic}
                            </motion.span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="hidden lg:block">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 rounded-full glass-card hover:bg-foreground/[0.06] px-4 py-2 text-xs font-medium transition-colors"
                      >
                        View paper
                        <ExternalLink className="size-3.5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
