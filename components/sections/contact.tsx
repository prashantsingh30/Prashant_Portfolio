'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Send, Check, FileDown, ArrowUpRight } from 'lucide-react';
import { contactInfo, personalInfo } from '@/lib/data';
import { Reveal, SectionHeading, MagneticButton } from '@/components/primitives/anim';
import { cn } from '@/lib/utils';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1400);
    setTimeout(() => {
      setStatus('idle');
      setName('');
      setEmail('');
      setMessage('');
    }, 3800);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-[hsl(var(--accent-blue)/0.05)] blur-[140px] pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s <span className="text-serif-gradient italic">connect</span>
            </>
          }
          subtitle="Recruiters, founders, or collaborators — if you have a role, a project, or an idea worth pursuing, I'd love to hear about it."
        />

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Left: contact info */}
          <Reveal>
            <div className="flex flex-col gap-3 h-full">
              {/* Resume primary CTA */}
              <MagneticButton href={personalInfo.resumeUrl} strength={0.2} newTab>
                <div className="group flex items-center justify-between gap-3 p-5 rounded-2xl bg-foreground text-background hover:opacity-90 transition-opacity shadow-premium">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center size-9 rounded-lg bg-background/10">
                      <FileDown className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Download Resume</div>
                      <div className="text-[11px] text-background/60">PDF · Updated June 2026</div>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </MagneticButton>

              {/* Contact info cards */}
              <div className="rounded-2xl glass-card p-5 flex-1">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">
                  Contact Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-foreground/[0.04] transition-colors group/row"
                      >
                        <div className="inline-flex items-center justify-center size-9 rounded-lg glass-card shrink-0">
                          <Icon className="size-4 text-muted-foreground group-hover/row:text-foreground transition-colors" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/50">
                            {item.label}
                          </div>
                          <div className="text-sm font-medium text-foreground/90 truncate">
                            {item.value}
                          </div>
                        </div>
                      </motion.div>
                    );
                    if (item.href) {
                      return (
                        <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                          {content}
                        </a>
                      );
                    }
                    return <div key={item.label}>{content}</div>;
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="relative h-full glass-card rounded-2xl p-6 lg:p-7"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <FormField
                  label="Name"
                  id="name"
                  value={name}
                  onChange={setName}
                  placeholder="Your name"
                  required
                />
                <FormField
                  label="Email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role or project..."
                  required
                  rows={5}
                  className="w-full rounded-xl bg-foreground/[0.02] border border-foreground/8 px-4 py-3 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--accent-blue)/0.5)] focus:bg-foreground/[0.04] focus:ring-2 focus:ring-[hsl(var(--accent-blue)/0.15)] transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] text-muted-foreground/60">
                  Typical response within 24 hours.
                </span>
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={cn(
                    'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300',
                    status === 'sent'
                      ? 'bg-[hsl(var(--accent-emerald))] text-background'
                      : 'bg-foreground text-background hover:opacity-90'
                  )}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {status === 'idle' && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        Send message
                        <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </motion.span>
                    )}
                    {status === 'sending' && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        Sending...
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          className="size-4 rounded-full border-2 border-background/30 border-t-background"
                        />
                      </motion.span>
                    )}
                    {status === 'sent' && (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        Message sent
                        <Check className="size-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-foreground/[0.02] border border-foreground/8 px-4 py-3 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--accent-blue)/0.5)] focus:bg-foreground/[0.04] focus:ring-2 focus:ring-[hsl(var(--accent-blue)/0.15)] transition-all"
      />
    </div>
  );
}
