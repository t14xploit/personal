'use client';

import React from "react";
import '@/styles/augmented-ui.css'; // Global Augmented UI logic (still needed)
import styles from "@/components/TerminalContent.module.css"; // Assuming you have the styles defined here

export default function OriginProtocol() {
  return (
    <section
      className={styles.protocolContainer}
      data-augmented-ui="tl-clip tr-2-clip-y t-clip-x r-clip br-2-clip-x bl-2-clip-x both"
    >
      <div className={styles.protocolContent}>
        <h2 className="text-[#00f0ff] text-lg font-mono mb-4">[ORIGIN PROTOCOL DECRYPTED]</h2>
        <p className="text-[#9eeaf9] text-sm leading-relaxed font-light max-w-3xl">
          I didn&apos;t start with code — I started with languages. Human ones. I was fascinated by how meaning moves through words, tone, and context. Then I discovered programming and realized it was just another kind of language — one built on precision, logic, and structure.
          <br />
          <br />
          That shift led me into full-stack development. Along the way, I earned a Computer Science degree and gained certifications across web development, cybersecurity, and cloud computing. Each step helped me better understand not just how systems work — but how to build them well.
          <br />
          <br />
          Today, I focus on clean user interfaces, secure systems, and scalable architecture. I work primarily with TypeScript, React, Next.js, and PostgreSQL — always looking to create performant solutions that are both efficient and user-friendly.
        </p>
      </div>
    </section>
  );
}
