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
  { prompt: false, text: "Technical problem solver working at the intersection of data, IT, and cybersecurity." },
  { prompt: false, text: "Designing automated monitoring systems, analyzing complex datasets, and securing infrastructures." },
  { prompt: false, text: '' },
  { prompt: true, text: 'ls skills/' },
  { prompt: false, text: 'Data:        Python, Pandas, SQL, Matplotlib, Jupyter' },
  { prompt: false, text: 'Systems:     Linux, Windows, Networking, Bash/CLI, Docker' },
  { prompt: false, text: 'Security:    Penetration testing, Vulnerability assessment, Cyber hygiene, IAM' },
  { prompt: false, text: 'Cloud:       AWS, Cloud Security, Infrastructure as Code' },
  { prompt: false, text: 'Tools:       Git, VSCode, Monitoring/Logging, Automation scripts' },
  { prompt: false, text: '' },
  { prompt: true, text: 'cat lab-log.txt' },
  { prompt: false, text: '• Automated data pipeline extracting insights from multiple sources' },
  { prompt: false, text: '• Deployed Linux server with monitoring and alerting scripts' },
  { prompt: false, text: '• Tested application security using penetration testing frameworks' },
  { prompt: false, text: '• Built scripts to automate system maintenance tasks' },
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
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 5); // faster typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
        setCurrentLine('');
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, 50); // faster line delay
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, skip]);

  return (
    <section
      className={styles.terminalContainer}
      data-augmented-ui="tl-clip br-clip both"
      onClick={() => setSkip(true)} // click to skip
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
            <span className="text-[#00ffff]">{line.text}</span>
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
