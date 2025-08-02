"use client";

import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const smallFeatures = [
  { title: "Tic Tac Toe", description: "Classic 2-player game", url: "/tic-tac-toe" },
  { title: "Counter", description: "Simple increment/decrement", url: "/counter" },
  { title: "Clock", description: "Live digital time display", url: "/clock" },
  { title: "Color Picker", description: "Select and copy colors", url: "/color-picker" },
  { title: "To-do List", description: "Basic task manager", url: "/todo" },
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
    videoUrl: "/Recording 2025-08-02 162447.gif",
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-20">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#020b12] border border-[#0f1f24] rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,240,255,0.05)] hover:shadow-[0_0_12px_rgba(0,240,255,0.15)] transition-all duration-300 hover:border-[#1a3a42]">
            {/* Project Preview */}
            <div className="h-64 bg-[#010c14] border-b border-[#0f1f24] relative overflow-hidden">
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
            <div className="p-6">
              <h3 className="text-xl font-light text-[#00f0ff] mb-3">{project.title}</h3>
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

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-[#1a3a42] text-[#00f0ff] hover:border-[#00f0ff] hover:bg-[#00f0ff11] transition-all duration-300"
                >
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[#1a3a42] text-[#00f0ff] hover:border-[#00f0ff] hover:bg-[#00f0ff11] transition-all duration-300"
                  >
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

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
