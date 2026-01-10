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
    <section className="mt-10 py-8 font-light">
      <h2
        className="text-2xl mb-8 font-mono tracking-wide"
        style={{ color: "var(--accent)" }}
      >
        [SYSTEM LAYERS]
      </h2>

      <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 items-center justify-center">
        {/* Skill Cards */}
        <div className="space-y-4 lg:space-y-6 max-w-md w-full xl:w-1/3">
          <div
            data-augmented-ui="bl-clip tl-2-clip-x br-2-clip-x border"
            className={styles.skillContainer}
          >
            <h3
              className="text-lg mb-2 font-mono"
              style={{ color: "var(--accent)" }}
            >
              Cybersecurity & Systems
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
            >
              System security, threat awareness, and operational fundamentals.
              <br />
              Linux, Docker, CLI, Git, cloud platforms, security awareness,
              bug bounty practice
            </p>
          </div>

          <div
            data-augmented-ui="bl-clip tl-2-clip-x br-2-clip-x border"
            className={styles.skillContainer}
          >
            <h3
              className="text-lg mb-2 font-mono"
              style={{ color: "var(--accent)" }}
            >
              Data & Computation
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
            >
               Data modeling, analysis, and application-level computation.
              <br />
              Python, PostgreSQL, Prisma, Zod, Node.js, data workflows
            </p>
          </div>

          <div
            data-augmented-ui="bl-clip tl-2-clip-x br-2-clip-x border"
            className={styles.skillContainer}
          >
            <h3
              className="text-lg mb-2 font-mono"
              style={{ color: "var(--accent)" }}
            >
              Web & Interface Engineering
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
            >
              Building modern interfaces and full-stack applications.
              <br />
              React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Three.js
            </p>
          </div>
        </div>
{/* 🌐 Orbit Section */} <div className="relative w-full xl:w-1/2 flex justify-center overflow-hidden"> {/* Mobile & Small screens */} <div className="relative h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] md:hidden"> <div className="absolute inset-0 flex items-center justify-center"> <OrbitingCircles radius={50} path={true} iconSize={18}> <FaPython title="Python" size={18} /> <FaLinux title="Linux" size={18} /> <FaGitAlt title="Git" size={18} /> <FaTerminal title="Shell / CLI" size={18} /> <FaCloud title="Cloud" size={18} /> <FaGithub title="Github" size={18} /> </OrbitingCircles> <OrbitingCircles radius={85} path={true} reverse iconSize={22}> <SiNodedotjs title="Node.js" size={22} /> <SiPrisma title="Prisma" size={22} /> <SiPostgresql title="PostgreSQL" size={22} /> <SiZod title="Zod" size={22} /> <FaDocker title="Docker" size={22} /> <MdOutlineSecurity title="Security Awareness" size={22} /> <BsShieldShaded title="Bug Bounty" size={22} /> </OrbitingCircles> <OrbitingCircles radius={120} path={true} iconSize={26}> <FaReact title="React" size={26} /> <RiNextjsLine title="Next.js" size={26} /> <SiTailwindcss title="Tailwind CSS" size={26} /> <FaHtml5 title="HTML5" size={26} /> <SiSass title="SASS" size={26} /> <SiJavascript title="JavaScript" size={26} /> <SiTypescript title="TypeScript" size={26} /> <SiMui title="Material UI" size={26} /> <SiRadixui title="ShadCN (Radix UI)" size={26} /> <SiThreedotjs title="Three.js" size={26} /> </OrbitingCircles> </div> </div> {/* Medium screens */} <div className="relative h-[650px] w-[650px] hidden md:block lg:hidden"> <div className="absolute inset-0 flex items-center justify-center"> <OrbitingCircles radius={120} path={true} iconSize={22}> <FaPython title="Python" size={22} /> <FaLinux title="Linux" size={22} /> <FaGitAlt title="Git" size={22} /> <FaTerminal title="Shell / CLI" size={22} /> <FaCloud title="Cloud" size={22} /> <FaGithub title="Github" size={22} /> </OrbitingCircles> <OrbitingCircles radius={180} path={true} reverse iconSize={26}> <SiNodedotjs title="Node.js" size={26} /> <SiPrisma title="Prisma" size={26} /> <SiPostgresql title="PostgreSQL" size={26} /> <SiZod title="Zod" size={26} /> <FaDocker title="Docker" size={26} /> <MdOutlineSecurity title="Security Awareness" size={26} /> <BsShieldShaded title="Bug Bounty" size={26} /> </OrbitingCircles> <OrbitingCircles radius={240} path={true} iconSize={32}> <FaReact title="React" size={32} /> <RiNextjsLine title="Next.js" size={32} /> <SiTailwindcss title="Tailwind CSS" size={32} /> <FaHtml5 title="HTML5" size={32} /> <SiSass title="SASS" size={32} /> <SiJavascript title="JavaScript" size={32} /> <SiTypescript title="TypeScript" size={32} /> <SiMui title="Material UI" size={32} /> <SiRadixui title="ShadCN (Radix UI)" size={32} /> <SiThreedotjs title="Three.js" size={32} /> </OrbitingCircles> </div> </div> {/* Large screens and up */} <div className="relative h-[800px] w-[800px] hidden lg:block"> <div className="absolute inset-0 flex items-center justify-center"> <OrbitingCircles radius={150} path={true} iconSize={25}> <FaPython title="Python" size={25} /> <FaLinux title="Linux" size={25} /> <FaGitAlt title="Git" size={25} /> <FaTerminal title="Shell / CLI" size={25} /> <FaCloud title="Cloud" size={25} /> <FaGithub title="Github" size={25} /> </OrbitingCircles> <OrbitingCircles radius={220} path={true} reverse iconSize={30}> <SiNodedotjs title="Node.js" size={30} /> <SiPrisma title="Prisma" size={30} /> <SiPostgresql title="PostgreSQL" size={30} /> <SiZod title="Zod" size={30} /> <FaDocker title="Docker" size={30} /> <MdOutlineSecurity title="Security Awareness" size={30} /> <BsShieldShaded title="Bug Bounty" size={30} /> </OrbitingCircles> <OrbitingCircles radius={290} path={true} iconSize={38}> <FaReact title="React" size={38} /> <RiNextjsLine title="Next.js" size={38} /> <SiTailwindcss title="Tailwind CSS" size={38} /> <FaHtml5 title="HTML5" size={38} /> <SiSass title="SASS" size={38} /> <SiJavascript title="JavaScript" size={38} /> <SiTypescript title="TypeScript" size={38} /> <SiMui title="Material UI" size={38} /> <SiRadixui title="ShadCN (Radix UI)" size={38} /> <SiThreedotjs title="Three.js" size={38} /> </OrbitingCircles> </div> </div> </div> </div> </section>
  );
}
