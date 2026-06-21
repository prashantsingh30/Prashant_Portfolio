'use client';

import { useEffect, useState } from 'react';

export function Typewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1600,
  className,
}: {
  words: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) return;

    if (!deleting && subIndex === words[index].length) {
      const timer = setTimeout(() => setDeleting(true), pauseDuration);
      return () => clearTimeout(timer);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className} aria-label={words[index]}>
      <span>{words[index].substring(0, subIndex)}</span>
      <span className="inline-block w-[2px] h-[0.9em] ml-0.5 bg-[hsl(var(--accent-blue))] align-middle animate-pulse" />
    </span>
  );
}
