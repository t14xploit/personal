// components/SkillsModule.tsx
const skills = {
    'Core Stack': ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Zod'],
    'Cyber Toolkit': ['Linux', 'BetterAuth', 'Security Awareness', 'Bug Bounty (HackerOne)'],
    'Other Tech': ['Python', 'SASS', 'Docker', 'REST APIs'],
  };
  
  export default function SkillsModule() {
    return (
      <section className="mt-10 px-6 py-8 bg-[#0b0f1c] border border-[#00f0ff22] rounded-lg">
        <h2 className="text-[#00f0ff] text-lg font-mono mb-6">[SKILLS MODULE]</h2>
        <div className="grid md:grid-cols-3 gap-6 text-[#9eeaf9] text-sm font-light">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3 className="text-[#00ffff] font-semibold text-base mb-2">{category}</h3>
              <ul className="space-y-1 border-l-2 border-cyan-400/50 pl-4">
                {list.map((item) => (
                  <li key={item}>→ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  