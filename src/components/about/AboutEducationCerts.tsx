// src/components/about/AboutEducationCerts.tsx
import React from "react";
import styles from "./AboutEducationCerts.module.css";

const education = [
  "Lexicon – Full-stack Next.js Development",
  "University of the People – BSc in Computer Science",
  "Synergy University – BEd in Translation & Linguistics",
  "Beetroot Academy – Front-End Web Development",
  "Harbin Institute of Technology – Chinese Language Studies",
];

const certifications = [
  "IBM Cybersecurity Analyst",
  "IBM Data Science Specialization",
  "Google IT Support Specialization",
  "SAS Advanced Programmer",
  "Computer Hardware Basics",
];

export default function AboutEducationCerts() {
  return (
    <section className={`${styles.eduCerts} glowing-panel`} data-augmented-ui="tl-clip br-clip both">
      <h2 className={styles.title}>Clearance File: Training & Certs</h2>
      <div className={styles.columns}>
        <div className={styles.section}>
          <h3 className={styles.subheading}>Academic Credentials</h3>
          <ul>
            {education.map((item) => (
              <li key={item} className={styles.item}>
                🎓 {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.subheading}>Security Certifications</h3>
          <ul>
            {certifications.map((item) => (
              <li key={item} className={styles.item}>
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
