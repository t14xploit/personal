'use client';
import React, { useEffect, useState } from 'react';

type TerminalLine = {
  prompt: boolean;
  text: string;
};

const lines: TerminalLine[] = [
  { prompt: true, text: 'initializing portfolio...' },
  { prompt: false, text: '✔ Environment loaded' },
  { prompt: false, text: '✔ Running on Next.js + TailwindCSS' },
  { prompt: false, text: '✔ Theme: Cyberpunk / Terminal' },
  { prompt: false, text: '' },
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'Name: T14Xploit' },
  { prompt: false, text: 'Role: Full-Stack Web Developer' },
  { prompt: false, text: 'Stack: TypeScript, React, Next.js, TailwindCSS' },
  { prompt: false, text: 'Focus: Clean UI, Developer Experience, and Performance' },
  { prompt: false, text: '' },
  { prompt: true, text: 'skills --installed' },
  { prompt: false, text: '✔ Prisma' },
  { prompt: false, text: '✔ React' },
  { prompt: false, text: '✔ Next.js' },
  { prompt: false, text: '✔ BetterAuth' },
  { prompt: false, text: '✔ Python' },
  { prompt: false, text: '✔ Linux' },
  { prompt: false, text: '✔ PostgreSQL' },
  { prompt: false, text: '✔ Zod' },
  { prompt: false, text: '' },
  { prompt: true, text: '_' }
];

export default function TerminalContent() {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const fullText = lines[lineIndex].text;
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 30); // Character typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
        setCurrentLine('');
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, 300); // Delay before next line
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="px-4 py-4 text-sm leading-relaxed font-mono text-[#00f0ff] whitespace-pre-wrap">
      {displayedLines.map((line, idx) => (
        <p key={idx}>
          {line.prompt && <span className="text-[#00ffcc]">guest@T14Xploit:~$ </span>}
          <span className="text-[#00ffff]">{line.text}</span>
        </p>
      ))}

      {/* Currently typing line with cursor */}
      {lineIndex < lines.length && (
        <p>
          {lines[lineIndex].prompt && <span className="text-[#00ffcc]">guest@T14Xploit:~$ </span>}
          <span className="text-[#00ffff]">{currentLine}</span>
          <span className="blink text-[#00ffff]">|</span>
        </p>
      )}
    </div>
  );
}
