// components/Timeline.tsx
import { GraduationCap } from 'lucide-react';

const education = [
  { title: "Lexicon", degree: "Full-stack Next.js Development", years: "2024–2025" },
  { title: "University of the People", degree: "BSc in Computer Science", years: "2022–2024" },
  { title: "Beetroot Academy", degree: "Front-End Web Development", years: "2022" },
  { title: "Harbin Institute of Technology", degree: "Chinese Language Studies", years: "2019" },
  { title: "Synergy University", degree: "Translation & Linguistics", years: "2018–2024" },
  { title: "Jilin University", degree: "Chinese Language Studies", years: "2018" },
];

export default function Timeline() {
  return (
    <section className="max-w-2xl mx-auto  font-light">
      <h2 className=" text-2xl  mb-10">Education</h2>
      <div className="relative border-l-2 border-[#00f0ff] pl-10 space-y-6">
        {education.map((item, index) => (
          <div key={index} className="relative">
            {/* Icon inside timeline dot */}
            <div className="absolute -left-[32px] top-1 w-8 h-8 rounded-full bg-[#00f0ff] flex items-center justify-center shadow-md">
              <GraduationCap className="text-[#010c14] w-5 h-5" />
            </div>

            <div className="mx-2">
              <h3 className="text-base ">{item.title}</h3>
              <p className="text-sm">{item.degree}</p>
              <span className="text-xs opacity-70">{item.years}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
