'use client';
import React, { useEffect, useState } from 'react';
import styles from './TerminalContent.module.css'; 
import '@/styles/augmented-ui.css'; 

type TerminalLine = {
  prompt: boolean;
  text: string;
};

const lines: TerminalLine[] = [
  { prompt: true, text: 'cat about.txt' },
  { prompt: false, text: '' },
  { prompt: false, text: 'Hi! I\'m a passionate full-stack developer who loves building' },
  { prompt: false, text: 'modern web applications with clean, efficient code.' },
  { prompt: false, text: '' },
  { prompt: false, text: 'Currently focused on:' },
  { prompt: false, text: '• Creating intuitive user experiences' },
  { prompt: false, text: '• Building scalable web applications' },
  { prompt: false, text: '• Learning new technologies and frameworks' },
  { prompt: false, text: '' },
  { prompt: true, text: 'ls -la skills/' },
  { prompt: false, text: 'Frontend:     React, Next.js, TypeScript, Tailwind CSS' },
  { prompt: false, text: 'Backend:      Node.js, Prisma, PostgreSQL, Better-Auth' },
  { prompt: false, text: 'Tools:        Git, Linux, Docker, Vite' },
  { prompt: false, text: 'Learning:     ASP.NET, Socket.io, Advanced React patterns' },
  { prompt: false, text: '' },
  { prompt: true, text: 'cat projects.md | head -4' },
  { prompt: false, text: '1. TinyTalker - Speech development tracker for children' },
  { prompt: false, text: '2. Pamadorka - Cyberpunk-themed productivity timer' },
  { prompt: false, text: '3. News Platform - Collaborative news website with admin dashboard' },
  { prompt: false, text: '4. Weather App - Modern weather app with dynamic design' },
  { prompt: false, text: '' },
  { prompt: true, text: 'echo "Let\'s build something amazing together!"' },
  { prompt: false, text: 'Let\'s build something amazing together!' },
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
<section className={styles.terminalContainer} data-augmented-ui="tl-clip  br-clip both">
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
