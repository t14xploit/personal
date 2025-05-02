'use client';
import { Typewriter } from 'react-simple-typewriter';
import styles from "@/components/TerminalContent.module.css"
import '@/styles/augmented-ui.css'; // Augmented UI CSS is globally imported here.


export default function Terminal() {
 

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
    <header className="mb-4 space-y-2 leading-snug font-light">
            <p>
              <span className="text-[#00f0ff] text-lg font-medium">[ALIAS]</span>{" "}
              <span className="text-sm">T14Xploit</span>
            </p>
            <p>
              <span className="text-[#00f0ff] text-lg font-medium">[ROLE]</span>{" "}
              <span className="text-sm">Full-Stack Developer</span>
            </p>
            <p>
              <span className="text-[#00f0ff] text-lg font-medium">[LOCATION]</span>{" "}
              <span className="text-sm">Earth (mostly) — Sweden currently.</span>
            </p>
          </header>
    
          <p className="border-l-4 border-cyan-500 pl-4 italic text-cyan-300 text-xs opacity-90">
            <Typewriter
              words={[" “  The quieter you become,  the more you can hear.  ”"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              delaySpeed={1500}
            />
          </p>

     
      </div>
    </section>
  );
}
