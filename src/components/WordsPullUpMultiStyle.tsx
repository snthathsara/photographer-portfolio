import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Flatten segments into array of word tokens
  const wordTokens: { word: string; className: string; globalIndex: number }[] = [];
  let counter = 0;

  segments.forEach((seg) => {
    const parts = seg.text.trim().split(/\s+/);
    parts.forEach((p) => {
      wordTokens.push({
        word: p,
        className: seg.className || '',
        globalIndex: counter++,
      });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center items-center ${className}`}>
      {wordTokens.map((item, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.25em] last:mr-0 my-[0.05em]">
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 28, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 }}
            transition={{
              duration: 0.65,
              delay: item.globalIndex * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
