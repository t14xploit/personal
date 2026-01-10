'use client';

import { Typewriter } from 'react-simple-typewriter';
import styles from './JourneyLog.module.css';

const logs = [
    {
    date: "[2025–NOW]",
    title: "CURRENT FOCUS",
    focus: "System Development, Web Exploitation, Data Manipulation, Language & Voice Processing",
    thoughts:
      "Today I explore end-to-end web solutions, cybersecurity, and intelligent systems that interpret language. My goal: build performant, secure, and user-centered platforms that bridge human and machine understanding.",
  },

    {
    date: "[2024–2025]",
    title: "SYSTEM DEVELOPMENT EXPERIENCE",
    location: "Luxe Group AB (Next.js Internship) / Lexicon AB (System Developer)",
    focus: "Next.js, React, TailwindCSS, Prisma, Fabric.js, PostgreSQL",
    thoughts:
      "Rebuilt a production WordPress webshop into a modern, scalable Next.js application. Implemented dynamic legal pages, custom product constructors, and responsive admin tools — blending front-end finesse with backend precision.",
  },
  {
    date: "[2023–2025]",
    title: "CYBERSECURITY AND ADVANCED CERTIFICATIONS",
    focus: "Python, Java, SQL, Network Security, Cloud, Ethical Hacking",
    thoughts:
      "Dove into ethical hacking, penetration testing, and cloud security with IBM, Cisco, and TryHackMe. These experiences sharpened my problem-solving instincts and reinforced a security-first mindset.",
  },
    {
    date: "[2022–2024]",
    title: "DUAL BACHELORS & FORMAL CS TRAINING",
    location: "University of the People / Synergy University",
    focus: "Computer Science, Translation & Education",
    thoughts:
      "Simultaneously earning a BSc in Computer Science and a BEd in Language Interpretation taught me to balance analytical precision with human-centric thinking. Algorithms, databases, and programming became my new vocabulary.",
  },
  {
    date: "[2022]",
    title: "FRONT-END INITIATION",
    location: "Beetroot Academy & SheCodes Workshops",
    focus: "HTML, CSS, JavaScript, React",
    thoughts:
      "Exploring web development turned curiosity into passion. Crafting interactive interfaces showed me that code can be as expressive as language, blending creativity with logic.",
  },
  {
    date: "[2021–2023]",
    title: "COMMUNITY & IMPACT",
    location: "Tarjimly & University of the People",
    focus: "Interpreter, Ambassador, Mentorship",
    thoughts:
      "Supported multilingual refugee communication and guided students in accessible education programs. Learned the value of human-centered systems — a principle I carry into all my software design.",
  },
  {
    date: "[2018–2020]",
    title: "LINGUISTIC FOUNDATION",
    location: "Russia & China",
    focus: "Languages, Cultural Contexts, Interpretation",
    thoughts:
      "Started my journey in human language — mastering Russian, English, Spanish, and Chinese. Interpreting for real-world situations taught me to decode complex information quickly and accurately, building the foundation for analytical thinking and structured problem solving.",
  },

];

export default function JourneyLog() {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <Typewriter
          words={[`> SYSTEM BOOTING...\n> Initializing cognitive modules...\n> Self-awareness achieved. Commencing journey log.`]}
          cursor
          cursorStyle="|"
          loop={1}
          typeSpeed={70}
          delaySpeed={1500}
        />
      </div>

      {logs.map((log, idx) => (
        <div key={idx} className={styles.logEntry}>
          <div className={styles.date}>{log.date}</div>
          <div className={styles.title}>{log.title}</div>
          {log.location && <div className={styles.item}>→ <span className={styles.label}>Location:</span> {log.location}</div>}
          {log.focus && <div className={styles.item}>→ <span className={styles.label}>Focus:</span> {log.focus}</div>}
          <div className={styles.thoughts}>{log.thoughts}</div>
        </div>
      ))}
    </section>
  );
}
