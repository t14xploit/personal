'use client';

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import '@/styles/augmented-ui.css';
import styles from "@/components/TerminalContent.module.css";

export default function IdentityHeader() {
  return (
    <section
      className={styles.terminalTemp}
      data-augmented-ui="bl-clip tl-2-clip-x br-2-clip-x both"
    >
      <div className={styles.terminalContentTemp}>
        <header className="my-4 space-y-2 leading-snug font-light">
          <p>
            <span
              className="text-lg font-medium"
              style={{ color: "var(--accent)" }}
            >
              [ALIAS]
            </span>{" "}
            <span
              className="text-sm"
              style={{ color: "var(--foreground-muted)" }}
            >
              T14Xploit
            </span>
          </p>

          <p>
            <span
              className="text-lg font-medium"
              style={{ color: "var(--accent)" }}
            >
              [FOCUS]
            </span>{" "}
            <span
              className="text-sm"
              style={{ color: "var(--foreground-muted)" }}
            >
              Computing, Data, Security & Systems
            </span>
          </p>

          <p>
            <span
              className="text-lg font-medium"
              style={{ color: "var(--accent)" }}
            >
              [LOCATION]
            </span>{" "}
            <span
              className="text-sm"
              style={{ color: "var(--foreground-muted)" }}
            >
              Earth-based · Sweden (currently)
            </span>
          </p>
        </header>

        <p
          className="italic text-xs opacity-90 pl-3"
          style={{
            borderLeft: "3px solid var(--accent)",
            color: "var(--foreground-muted)",
          }}
        >
          <Typewriter
            words={[
              "“The quieter you become, the more you can hear.”",
            ]}
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
