// src/components/about/AboutStory.tsx
import React from "react";
import styles from "./AboutStory.module.css";

export default function AboutStory() {
  return (
    <section className={`${styles.story} glowing-panel`} data-augmented-ui="tl-clip br-clip both">
      <h2 className={styles.heading}>Origin Protocol</h2>
      <p className={styles.paragraph}>
        I didn’t start with code — I started with languages. Human ones. Then I discovered programming and realized it’s just another language… but with fewer bugs in grammar.
      </p>
      <p className={styles.paragraph}>
        After earning a Computer Science degree and absorbing more certifications than a firewall can handle (IBM, Google, SAS, CISCO...), I locked onto full-stack development like a zero-day on an unpatched server.
      </p>
      <p className={styles.paragraph}>
        The last half year has been deep immersion: React, Next.js, Prisma, PostgreSQL, Zod — rinse, build, and repeat. If it’s TypeScript-powered and terminal-themed, I’m already in.
      </p>
      <p className={styles.paragraph}>
        Whether it’s building UIs or breaking them (ethically), I live at the intersection of beauty and security. I debug with precision and caffeinate like it's a deployment pipeline.
      </p>
    </section>
  );
}
