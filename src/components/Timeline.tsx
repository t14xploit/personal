// components/Timeline.tsx
import * as React from "react";
import { GraduationCap } from "lucide-react";
import styles from "@/components/TerminalContent.module.css";

// Education data
const bachelors = [
  { title: "University of the People", degree: "BSc in Computer Science", years: "2022–2024" },
  { title: "Synergy University", degree: "BEd in Translation & Linguistics", years: "2018–2024" },
];

const shortCourses = [
  { title: "Lexicon AB", degree: "System Development", years: "2024" },
  { title: "Beetroot Academy", degree: "Front-End Web Development", years: "2022" },
  { title: "Harbin Institute of Technology / Jilin University", degree: "Chinese Language Studies", years: "2018–2019" },
];

export default function Timeline() {
  const renderBachelors = (item: typeof bachelors[0], index: number) => (
    <div key={index} className="relative">
      {/* Dot with Graduation Cap */}
      <div className="absolute -left-5 top-0 w-8 h-8 rounded-full bg-green-400 flex items-center justify-center shadow-md">
        <GraduationCap className="text-black" size={20} />
      </div>

      {/* Text */}
      <div className="ml-5">
        <h3 className="text-base font-mono font-semibold text-green-400">{item.degree}</h3>
        <p className="text-sm font-mono text-green-400">{item.title}</p>
        <span className="text-xs opacity-70 font-mono text-green-400">{item.years}</span>
      </div>
    </div>
  );

  const renderShortCourses = (item: typeof shortCourses[0], index: number) => (
    <div key={index} className="relative">
      {/* Simple dot without icon */}
      <div className="absolute -left-5 top-2 w-4 h-4 rounded-full bg-green-300" />

      {/* Text */}
      <div className="ml-5">
        <h3 className="text-sm font-mono font-light text-[var(--foreground-muted)]">{item.degree}</h3>
        <p className="text-xs font-mono font-light text-[var(--foreground-muted)]">{item.title}</p>
        <span className="text-xs opacity-70 font-mono text-[var(--foreground-muted)]">{item.years}</span>
      </div>
    </div>
  );

  return (
    <div
      data-augmented-ui="tr-2-round-x l-clip-y border"
      className={`${styles.skillContainer} p-6`}
    >
      {/* Bachelors */}
      <div className="mb-6 ml-3">
        {bachelors.map(renderBachelors)}
      </div>

      {/* Short Courses / Language */}
      <div className="mt-4 ml-3">
        {shortCourses.map(renderShortCourses)}
      </div>
    </div>
  );
}
