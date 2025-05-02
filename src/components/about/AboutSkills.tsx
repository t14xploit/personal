// src/components/about/AboutSkills.tsx
import React from "react";
import styles from "./AboutSkills.module.css";

const skillCategories = {
  "Core Stack": ["Next.js", "React", "TypeScript", "TailwindCSS", "Zod", "Prisma", "PostgreSQL"],
  "Cyber Toolkit": ["Linux", "BetterAuth", "Security Awareness", "Bug Bounty (HackerOne)"],
  "Other Tech": ["Python", "SASS", "Docker", "REST APIs"],
  "Soft Systems": ["Project Management", "Mentoring", "Tech Writing", "Client Communication"],
};

export default function AboutSkills() {
  return (
    <section className={`${styles.skills} glowing-panel`} data-augmented-ui="tl-clip br-clip both">
      <h2 className={styles.heading}>System Boot Log: Skills Module</h2>
      <div className={styles.grid}>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className={styles.card}>
            <h3 className={styles.category}>{category}</h3>
            <ul className={styles.list}>
              {skills.map((skill) => (
                <li key={skill} className={styles.skill}>
                  <span className={styles.bullet}>⮞</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
