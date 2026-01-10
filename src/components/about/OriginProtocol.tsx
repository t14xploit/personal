'use client';

import React from "react";
import '@/styles/augmented-ui.css';
import styles from "@/components/TerminalContent.module.css";

export default function OriginProtocol() {
  return (
    <section
      className={styles.protocolContainer}
      data-augmented-ui="tl-clip tr-2-clip-y t-clip-x r-clip br-2-clip-x bl-2-clip-x both"
    >
      <div className={styles.protocolContent}>
        <h2
          className="text-lg font-mono mb-4 tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          [ORIGIN PROTOCOL · DECRYPTED]
        </h2>

        <p
          className="text-sm leading-relaxed font-light max-w-screen"
          style={{ color: "var(--foreground-muted)" }}
        >
          I didn’t begin with code — I began with human language. Studying
          interpretation and translation taught me how meaning, ambiguity, and
          intent travel through words, tone, and context.
          <br />
          <br />
          That curiosity naturally extended into computing. Programming felt
          like another language system — formal, precise, and unforgiving —
          where clarity matters as much as correctness. This intersection led
          me into computer science, where I started exploring how systems
          process information, communicate, and fail.
          <br />
          <br />
          Through academic training and hands-on work, I’ve moved across
          full-stack development, data analysis, and cybersecurity. I’ve built
          production systems, analyzed security threats, worked with databases,
          and explored how language processing and automation intersect with
          modern software.
          <br />
          <br />
          Today, my focus is broad but intentional: understanding systems end
          to end — from user interfaces and data flows to security boundaries,
          infrastructure, and human interaction.
        </p>
      </div>
    </section>
  );
}
