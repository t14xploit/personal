"use client";
import { Typewriter } from 'react-simple-typewriter';
import styles from './JourneyLog.module.css';

const logs = [
  {
    date: "[2018]",
    title: "IDENTITY BASELINE – LINGUISTICS PATH",
    location: "Russia, China",
    focus: "Linguistics, Language, Cultural Studies",
    thoughts:
      "I initially pursued a career in interpretation — language acquisition came naturally, and I was passionate about cross-cultural communication. But over time, I realized I wanted to create and engineer, not just translate. I needed a more technical, hands-on domain.",
  },
  {
    date: "[2022-05]",
    title: "BOOT SEQUENCE: FRONTEND AWAKENING",
    location: "Sweden (Beetroot Academy), Online (SheCodes)",
    focus: "HTML, CSS, JavaScript, React",
    thoughts:
      "Exploring frontend development started as a curiosity — but quickly became a turning point. I was drawn to the blend of logic, structure, and creativity. Writing code felt intuitive and intellectually satisfying. I discovered a medium where I could both design and build, and I was fully immersed.",
  },
  {
    date: "[2022-10]",
    title: "MODULE COMPLETED: SheCodes Workshops",
    projects: "Real-world frontend challenges",
    thoughts:
      "These workshops offered practical, project-based learning that solidified my frontend skills. Building responsive, user-centric applications helped me understand the importance of clean UI/UX, accessibility, and writing maintainable code in real-world scenarios.",
  },
  {
    date: "[2022-11]",
    title: "MODULE COMPLETED: Beetroot Academy",
    thoughts:
      "Completing this program confirmed that my transition into tech was the right move. I gained a strong foundation in frontend engineering and began to see myself not just as a learner, but as a developer. It marked a professional identity shift.",
  },
  {
    date: "[2022–2024]",
    title: "SYSTEM REBUILD – COMPUTER SCIENCE DEGREE",
    location: "University of the People (USA, online)",
    focus: "CS fundamentals – Data structures, Algorithms, Programming, Databases",
    learning: "Simultaneous formal and self-directed study",
    thoughts:
      "I began formal studies in computer science to deepen my understanding of software architecture, algorithms, and data structures. Balancing academic coursework with independent projects taught me how to solve complex problems and think like an engineer.",
  },
  {
    date: "[2023]",
    title: "SYSTEM OVERCLOCK – DEEPENING KNOWLEDGE",
    location: "Online (Coursera, IBM, Cisco, Google, AWS, SAS)",
    focus: "Python, Java, OOP, SQL, Cybersecurity, Networking",
    certs:
      "IBM: Full Stack, Cybersecurity | Google & Cisco | SAS Advanced Programmer | AWS Security Analyst (2 weeks)",
    thoughts:
      "I pursued advanced technical certifications to build expertise in software development, cybersecurity, and system design. These courses expanded my skills across the stack and gave me practical knowledge in object-oriented programming, relational databases, cloud infrastructure, and secure coding practices.",
  },
  {
    date: "[2024-11]",
    title: "MODULE INSTALLED: FULL-STACK WEB DEV",
    location: "Lexicon University (Sweden)",
    focus: "Backend, APIs, Node.js, Databases, Cloud",
    status: "In Progress (until July 2025)",
    thoughts:
      "To become a well-rounded developer, I focused on backend technologies and scalable system design. Working with Node.js, RESTful APIs, and cloud services gave me a deeper understanding of full-stack architecture and end-to-end application development.",
  },
  {
    date: "[2025]",
    title: "SYSTEM STATUS: ACTIVE | SELF-OPTIMIZING",
    passion: "Web Development & Cybersecurity",
    output: "Constant learning, creating, exploring",
    thoughts:
      "Software development has become more than a profession — it’s an ongoing process of growth, exploration, and refinement. I'm focused on building secure, scalable applications, staying current with evolving technologies, and continuously expanding my capabilities as a developer.",
  },
];

export default function JourneyLog() {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
       
        <div>
          <Typewriter
            words={[          `> SYSTEM BOOTING...\n> Initializing cognitive modules...\n> Self-awareness achieved. Commencing journey log.`,
            ]}
            cursor
            cursorStyle="|"
            loop={1}
          
            typeSpeed={70}
            delaySpeed={1500}
          />
        </div>
       
      </div>

      {/* Logs section */}
      {logs.map((log, idx) => (
        <div key={idx} className={styles.logEntry}>
          <div className={styles.date}>{log.date}</div>
          <div className={styles.title}>{log.title}</div>
          {log.location && <div className={styles.item}>→ <span className={styles.label}>Location:</span> {log.location}</div>}
          {log.focus && <div className={styles.item}>→ <span className={styles.label}>Focus:</span> {log.focus}</div>}
          {log.projects && <div className={styles.item}>→ <span className={styles.label}>Projects:</span> {log.projects}</div>}
          {log.learning && <div className={styles.item}>→ <span className={styles.label}>Learning Mode:</span> {log.learning}</div>}
          {log.certs && <div className={styles.item}>→ <span className={styles.label}>Certifications:</span> {log.certs}</div>}
          {log.status && <div className={styles.item}>→ <span className={styles.label}>Status:</span> {log.status}</div>}
          {log.passion && <div className={styles.item}>→ <span className={styles.label}>Passion:</span> {log.passion}</div>}
          {log.output && <div className={styles.item}>→ <span className={styles.label}>Output:</span> {log.output}</div>}
          <div className={styles.thoughts}>{log.thoughts}</div>
        </div>
      ))}

    </section>
  );
}
