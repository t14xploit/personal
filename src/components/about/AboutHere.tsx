// src/components/about/AboutHero.tsx
import React from "react";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={`${styles.hero} glowing-panel`} data-augmented-ui="tl-clip br-clip both">
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <span className="text-[#00f0ff]">alias:</span> T14Xploit
        </h1>
        <p className={styles.tagline}>
          <span className="text-[#00eaff]">Role:</span> Full-Stack Developer & Cybersecurity Specialist
        </p>
        <p className={styles.tagline}>
          <span className="text-[#00eaff]">Location:</span> Earth (mostly) — currently based in Sweden
        </p>
        <p className={styles.motto}>
          “The quieter you become, the more you can hear.”
        </p>
      </div>
    </section>
  );
}
