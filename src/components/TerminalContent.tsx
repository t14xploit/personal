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
  { prompt: false, text: "Technical problem solver operating at the intersection of data, IT, and cybersecurity." },
  { prompt: false, text: "Designing automated systems, analyzing complex datasets, and securing infrastructures." },
  { prompt: false, text: '' },
  { prompt: true, text: 'ls skills/' },
  { prompt: false, label: 'Data', value: 'Python, Pandas, SQL, Matplotlib, Jupyter' },
  { prompt: false, label: 'Systems', value: 'Linux, Windows, Networking, Bash/CLI, Docker' },
  { prompt: false, label: 'Security', value: 'Penetration testing, Vulnerability Assessment, IAM, Cyber Hygiene' },
  { prompt: false, label: 'Cloud', value: 'AWS, Cloud Security, Infrastructure as Code' },
  { prompt: false, label: 'Tools', value: 'Git, VSCode, Monitoring/Logging, Automation Scripts' },

  { prompt: false, text: '' },
  { prompt: true, text: 'cat lab-log.txt' },
  { prompt: false, text: '• Automated data pipelines and system monitoring scripts' },
  { prompt: false, text: '• Security testing and risk assessment frameworks' },
  { prompt: false, text: '• Developed automation scripts for infrastructure management' },
  { prompt: false, text: '' },
  { prompt: true, text: 'echo "Continuous improvement and applied practice."' },
  { prompt: false, text: 'Continuous improvement and applied practice.' },
  { prompt: false, text: '' },
  { prompt: true, text: '_' }
];

export default function TerminalContent() {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (skip) {
      setDisplayedLines(lines);
      setCurrentLine('');
      return;
    }

    if (lineIndex >= lines.length) return;

    const fullText = lines[lineIndex].text;

    if (charIndex < fullText.length) {
      const charTimeout = setTimeout(() => {
        setCurrentLine((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 1); // 1ms per char for ultra-fast typing
      return () => clearTimeout(charTimeout);
    } else {
      const lineTimeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
        setCurrentLine('');
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, 10); // 10ms delay before next line
      return () => clearTimeout(lineTimeout);
    }
  }, [charIndex, lineIndex, skip]);

  return (
    <section
      className={styles.terminalContainer}
      data-augmented-ui="tl-clip br-clip both"
      onClick={() => setSkip(true)}
    >
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`${styles.dot} ${styles.red}`} />
        <div className={`${styles.dot} ${styles.yellow}`} />
        <div className={`${styles.dot} ${styles.green}`} />
        <span className={styles.title}>T14Xploit Terminal</span>
      </div>

      {/* Terminal Content */}
      <div className={styles.terminalContent}>
        {displayedLines.map((line, idx) => (
  <p key={idx}>
    {line.prompt && <span className="text-[#00ffcc]">guest@T14Xploit:~$ </span>}

    {line.label ? (
      <>
        <span className="text-[#ff4d4d] font-semibold">{line.label}:</span>{' '}
        <span className="text-[#00ff00]">{line.value}</span>
      </>
    ) : (
      <span className="text-[#00ffff]">{line.text}</span>
    )}
  </p>
))}


        {lineIndex < lines.length && (
          <p>
            {lines[lineIndex].prompt && <span className="text-[#00ffcc]">guest@T14Xploit:~$ </span>}
            <span className="text-[#00ffff]">{currentLine}</span>
            <span className={styles.blink}>|</span>
          </p>
        )}
      </div>
    </section>
  );
}
