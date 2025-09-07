"use client";

import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const smallFeatures = [
  {
    title: "Password Generator",
    description: "Secure password generator with customizable options",
    url: "/features/password-generator",
    icon: "🔐",
    skills: "React logic, Clipboard API, Form controls"
  },
  {
    title: "Typing Speed Test",
    description: "Test your typing speed and accuracy with random quotes",
    url: "/features/typing-test",
    icon: "⌨️",
    skills: "Event handling, Timing logic, Game mechanics"
  },
  {
    title: "World Clock",
    description: "Display current time in multiple cities worldwide",
    url: "/features/world-clock",
    icon: "🌍",
    skills: "Array mapping, Date manipulation, Component reusability"
  },
  {
    title: "Cookie Consent",
    description: "GDPR-compliant cookie consent banner",
    url: "/features/cookie-consent",
    icon: "🍪",
    skills: "UI/UX design, LocalStorage, Cookie handling"
  },
];

const ongoingProjects = [
  {
    title: "Discovery 5",
    description: "Collaborative app for developers to share their favorite dev tools. Complete rewrite of ShadCN components to fit custom styling. Working with rootv89 as main contributor.",
    techStack: ["Next.js", "ShadCN", "Drizzle", "Better Auth"],
    githubUrl: "https://github.com/rootv890/project-discovery5",
    status: "In Development",
    icon: "🔍"
  },
  {
    title: "Restaurant Food Delivery App",
    description: "Complete React Next.js & Tailwind tutorial project covering responsive design, cart functionality, authentication, and e-commerce features with automatic image sliders.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "React"],
    status: "Tutorial Project",
    icon: "🍕"
  },
  {
    title: "Social X App",
    description: "Full-stack social media app with real-time notifications using Socket.io. Features infinite scrolling, React Query, Prisma ORM, MySQL, and advanced authentication with Clerk.",
    techStack: ["Next.js 15", "MySQL", "Prisma", "Socket.io", "Clerk", "React Query"],
    status: "Learning Project",
    icon: "📱"
  },
  {
    title: "Hospital Management System",
    description: "ASP.NET hospital management system using N-Tier Architecture, Entity Framework, Identity management, role-based access, and data seeding for roles and admin users.",
    techStack: ["ASP.NET", "Entity Framework", "SQL Server", "Identity"],
    status: "In Development",
    icon: "🏥"
  },
];

const projects = [
  {
    title: "TinyTalker",
    description: "Speech development tracker for busy parents. Helps track children's vocabulary progress with age-appropriate word lists, automatic level assessment, and visual progress tracking. Built for parents supporting children with speech development.",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Better-Auth", "Tailwind", "ShadCN"],
    githubUrl: "https://github.com/t14xploit/speech-app",
    liveUrl: "https://tinytalker.netlify.app",
    type: "live"
  },
  {
    title: "Pamadorka",
    description: "Cyberpunk-themed Pomodoro timer with neural interface design. Features focus sessions, brain training games, background music, comprehensive statistics, and progress tracking. Built for enhanced productivity and mental well-being.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Lucide"],
    githubUrl: "https://github.com/t14xploit/pamadorka",
    liveUrl: "https://pamadorka.netlify.app",
    type: "live"
  },
  {
    title: "News Platform",
    description: "Collaborative news website with admin dashboard, real-time weather/price APIs, and modern design. Features CRUD operations for articles, authors, and categories, plus user/admin interfaces. Built with 2 other developers.",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "APIs", "ShadCN"],
    githubUrl: "https://github.com/t14xploit/news-website",
    videoUrl: "/Recording 2025-08-02 162429.mp4",
    type: "video"
  },
  {
    title: "Weather App",
    description: "Modern weather application with dynamic glassmorphism design. Features real-time weather data, 7-day forecasts, location detection, and adaptive day/night themes with weather-specific backgrounds.",
    techStack: ["React", "TypeScript", "Vite", "OpenWeather API"],
    githubUrl: "https://github.com/t14xploit/weather-app",
    liveUrl: "https://weather-t14x.netlify.app",
    type: "live"
  },
];
  

const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-12 px-2 sm:px-4 lg:px-6">
      <header className="text-center mb-8 lg:mb-12 font-light">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#00f0ff] tracking-wide mb-4">
          Featured Projects
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Real applications I&apos;ve built and deployed. Each project showcases different aspects of full-stack development, from speech therapy tools to cyberpunk productivity apps.
        </p>
      </header>

      {/* Tech Stack Overview */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 lg:mb-12 px-2">
        {[
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Prisma",
          "Tailwind",
          "APIs",
          "ShadCN",
        ].map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-[#00f0ff] border-[#0f1f24] hover:border-[#1a3a42] hover:bg-[#00f0ff11] transition-all duration-300"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#020b12] border border-[#0f1f24] rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,240,255,0.05)] hover:shadow-[0_0_12px_rgba(0,240,255,0.15)] transition-all duration-300 hover:border-[#1a3a42]">
            {/* Project Preview */}
            <div className="h-48 sm:h-56 md:h-64 bg-[#010c14] border-b border-[#0f1f24] relative overflow-hidden">
              {project.type === "live" && (
                <iframe
                  src={project.liveUrl}
                  className="w-full h-full border-0 scale-75 origin-top-left"
                  style={{ width: '133.33%', height: '133.33%' }}
                  title={`${project.title} preview`}
                />
              )}
              {project.type === "video" && (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a3a42] to-[#0f1f24]">
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="max-w-full max-h-full object-contain rounded"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-light text-[#00f0ff] mb-2 sm:mb-3">{project.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.techStack.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-xs text-[#00f0ff] border-[#0f1f24] hover:border-[#1a3a42] hover:bg-[#00f0ff11] transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-[#1a3a42] text-[#00f0ff] hover:border-[#00f0ff] hover:bg-[#00f0ff11] transition-all duration-300 text-xs sm:text-sm"
                >
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Code
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[#1a3a42] text-[#00f0ff] hover:border-[#00f0ff] hover:bg-[#00f0ff11] transition-all duration-300 text-xs sm:text-sm"
                  >
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ongoing Projects */}
      <section className="my-20">
        <h2 className="text-2xl font-light mb-6 tracking-wide text-[#00f0ff]">
          Currently Working On
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ongoingProjects.map((project, index) => (
            <div key={index} className="bg-[#020b12] border border-[#0f1f24] rounded-lg p-6 shadow-[0_2px_8px_rgba(0,240,255,0.05)] hover:shadow-[0_0_12px_rgba(0,240,255,0.15)] transition-all duration-300 hover:border-[#1a3a42]">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{project.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-light text-[#00f0ff]">{project.title}</h3>
                    <Badge
                      variant="outline"
                      className="text-xs text-orange-400 border-orange-400/30 bg-orange-400/10"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs text-[#00f0ff] border-[#0f1f24] hover:border-[#1a3a42] hover:bg-[#00f0ff11] transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* GitHub Link (if available) */}
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#1a3a42] text-[#00f0ff] hover:border-[#00f0ff] hover:bg-[#00f0ff11] transition-all duration-300"
                    >
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Small Features & Experiments */}
      <section className="my-20">
        <h2 className="text-2xl font-light mb-6 tracking-wide text-[#00f0ff]">
          Small Features & Experiments
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {smallFeatures.map((feature, index) => (
            <Link key={index} href={feature.url} passHref>
              <div className="group p-4 bg-[#020b12] border border-[#00f0ff33] rounded text-center shadow-md hover:shadow-[0_0_25px_#00f0ff55] transition-shadow duration-300">
                <h3 className="text-sm text-[#00f0ff] font-light mb-1 group-hover:underline">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-400">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
