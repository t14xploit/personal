'use client';
import React, { useEffect, useState } from 'react';
import styles from './TerminalContent.module.css'; // Import CSS Module
import '@/styles/augmented-ui.css'; // Augmented UI CSS is globally imported here.

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
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]); // Display lines
  const [currentLine, setCurrentLine] = useState(''); // Current line being typed
  const [lineIndex, setLineIndex] = useState(0); // Track line index
  const [charIndex, setCharIndex] = useState(0); // Track character index

  useEffect(() => {
    if (lineIndex >= lines.length) return; // Stop if no more lines

    const fullText = lines[lineIndex].text;
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 30); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
        setCurrentLine('');
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, 300); // Delay before moving to next line
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
<section className={styles.terminalContainer} data-augmented-ui="tl-clip 30px br-clip 20px both">
{/* Terminal Top Bar */}
      <div className={styles.topBar}>
        <div className={`${styles.dot} ${styles.red}`}></div>
        <div className={`${styles.dot} ${styles.yellow}`}></div>
        <div className={`${styles.dot} ${styles.green}`}></div>
        <span className={styles.title}>T14Xploit Terminal</span>
      </div>

      {/* Terminal Content (Lines of text) */}
      <div className={styles.terminalContent}>
        {displayedLines.map((line, idx) => (
          <p key={idx}>
            {line.prompt && <span className="text-[#00ffcc]">guest@T14Xploit:~$ </span>}
            <span className="text-[#00ffff]">{line.text}</span>
          </p>
        ))}

        {/* Current typing line with cursor */}
        {lineIndex < lines.length && (
          <p>
            {lines[lineIndex].prompt && <span className="text-[#00ffcc]">guest@T14Xploit:~$ </span>}
            <span className="text-[#00ffff]">{currentLine}</span>
            <span className={styles.blink}>|</span> {/* Cursor */}
          </p>
        )}
      </div>
    </section>
  );
}
