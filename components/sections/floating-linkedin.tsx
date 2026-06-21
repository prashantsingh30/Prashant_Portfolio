'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '@/lib/data';

export function FloatingLinkedIn() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 500);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ type: 'spring', stiffness: 360, damping: 25 }}
          className="fixed bottom-8 right-8 z-40 hidden md:block"
        >
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.94 }}
            className="relative flex items-center justify-center size-14 rounded-full cursor-pointer select-none shadow-premium hover:shadow-elevated transition-shadow duration-300"
          >
            {/* Background Circle */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #0077B5 0%, #005fa3 60%, #004080 100%)',
              }}
              animate={{ opacity: hovered ? 1 : 0.95 }}
            />

            {/* Shimmer sweep on hover */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  key="shimmer"
                  initial={{ x: '-100%', y: '-100%' }}
                  animate={{ x: '100%', y: '100%' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)',
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulse rings */}
            {[1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute inset-0 rounded-full border border-[#0077B5]"
                animate={{ scale: [1, 1.35 + i * 0.1], opacity: [0.55, 0] }}
                transition={{
                  duration: 2.0,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: i * 0.6,
                }}
              />
            ))}

            {/* Icon */}
            <motion.div
              animate={{ rotate: hovered ? 360 : 0, scale: hovered ? 1.1 : 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 15 }}
              className="relative z-10 flex items-center justify-center"
            >
              <Linkedin className="size-6 text-white" strokeWidth={2} />
            </motion.div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
