import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import {
  FaGithub,
  FaReact,
  FaLinux,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCloud,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiZod,
  SiSass,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMui,
  SiThreedotjs,
  SiRadixui,
} from "react-icons/si";
import { BsShieldShaded } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { RiNextjsLine } from "react-icons/ri";
import styles from "@/components/TerminalContent.module.css"; 

export default function SkillsModule() {
  return (
    <section className="mt-10 px-6 py-8 font-light">
     <h2 className="text-2xl">Skills</h2>
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* 🪩 Holographic Cards with Augmented UI */}
        <div className="space-y-6 max-w-md w-full lg:w-1/3">
          {/* Card 1 - Frontend */}
          <div
            data-augmented-ui="bl-clip tl-2-clip-x br-2-clip-x border"
            className={styles.skillContainer}
          >
            <h3 className="text-[#00eaff] text-lg mb-2">Frontend / Full Stack</h3>
            <p className="text-sm text-gray-300">
              React, Next.js, Tailwind CSS, Bootstrap, SASS, JavaScript, TypeScript, Material UI, ShadCN, Three.js
            </p>
          </div>

          {/* Card 2 - Backend */}
          <div
            data-augmented-ui="bl-clip tl-2-clip-x br-2-clip-x border"
            className={styles.skillContainer}          >
            <h3 className="text-[#00eaff] text-lg mb-2">Backend / Infrastructure</h3>
            <p className="text-sm text-gray-300">
              Node.js, Prisma, PostgreSQL, Zod, Docker, Security Awareness, Better-Auth, Bug Bounty
            </p>
          </div>

          {/* Card 3 - Programming / Cloud */}
          <div
            data-augmented-ui="bl-clip tl-2-clip-x br-2-clip-x border"
            className={styles.skillContainer}
                  >
                    <div  className={styles.skillContent}>

            <h3 className="text-[#00eaff] text-lg mb-2">Programming / OS / Cloud</h3>
            <p className="text-sm text-gray-300">
              Python, Linux, Java, Git, CLI / Shell, Cloud Platforms
            </p>
                    </div>
          </div>
        </div>

        {/* 🌐 Orbit Section */}
        <div className="relative h-[650px] w-full lg:w-2/3">
          <div className="absolute inset-0 flex items-center justify-center">

            {/* Inner */}
            <OrbitingCircles radius={140} path={true} iconSize={25}>
              <FaPython title="Python" size={25} />
              <FaLinux title="Linux" size={25} />
              <FaGitAlt title="Git" size={25} />
              <FaTerminal title="Shell / CLI" size={25} />
              <FaCloud title="Cloud" size={25} />
             < FaGithub title="Github" size={25}/>
            </OrbitingCircles>

            {/* Middle */}
            <OrbitingCircles radius={200} path={true} reverse iconSize={30}>
              <SiNodedotjs title="Node.js" size={30} />
              <SiPrisma title="Prisma" size={30} />
              <SiPostgresql title="PostgreSQL" size={30} />
              <SiZod title="Zod" size={30} />
              <FaDocker title="Docker" size={30} />
              <MdOutlineSecurity title="Security Awareness" size={30} />
              <BsShieldShaded title="Bug Bounty" size={30} />
            </OrbitingCircles>

            {/* Outer */}
            <OrbitingCircles radius={260} path={true} iconSize={40}>
              <FaReact title="React" size={40} />
              <RiNextjsLine title="Next.js" size={40} />
              <SiTailwindcss title="Tailwind CSS" size={40} />
              <FaHtml5 title="HTML5" size={40} />
              <SiSass title="SASS" size={40} />
              <SiJavascript title="JavaScript" size={40} />
              <SiTypescript title="TypeScript" size={40} />
              <SiMui title="Material UI" size={40} />
              <SiRadixui title="ShadCN (Radix UI)" size={40} />
              <SiThreedotjs title="Three.js" size={40} />
            </OrbitingCircles>

          </div>
        </div>
      </div>
    </section>
  );
}
