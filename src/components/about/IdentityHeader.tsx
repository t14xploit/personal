'use client';

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import '@/styles/augmented-ui.css'; // Global Augmented UI logic (still needed)
import styles from "@/components/TerminalContent.module.css"

export default function IdentityHeader() {
    return (
        <section className={styles.terminalTemp} data-augmented-ui="bl-clip tl-2-clip-x br-2-clip-x both">
        
        
              <div className={styles.terminalContentTemp}>
            <header className="my-4 space-y-2 leading-snug font-light">
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
            
                  <p className="border-l-4 border-cyan-500 italic text-cyan-300 text-xs opacity-90">
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
