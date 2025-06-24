"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle} from "lucide-react";

const smallFeatures = [
  { title: "Tic Tac Toe", description: "Classic 2-player game", url: "/tic-tac-toe" },
  { title: "Counter", description: "Simple increment/decrement", url: "/counter" },
  { title: "Clock", description: "Live digital time display", url: "/clock" },
  { title: "Color Picker", description: "Select and copy colors", url: "/color-picker" },
  { title: "To-do List", description: "Basic task manager", url: "/todo" },
  // Add more features as needed
];
const upcomingProjects = [
  {
    title: "Threads Clone (Full Stack)",
    description:
      "A full-stack Threads app using Next.js 14, MongoDB, Clerk, and Tailwind. Real-time updates, image uploads, authentication, and scalable architecture.",
    techStack: ["Next.js 14", "TypeScript", "MongoDB", "Clerk", "Tailwind CSS"],
  },
  {
    title: "Price Tracker",
    description:
      "Web scraping eCommerce project with cron jobs and email alerts. Scrapes Amazon data, stores product history, and sends notifications when prices drop.",
    techStack: ["Next.js", "BrightData", "NodeMailer", "MongoDB", "CRON"],
  },
  {
    title: "Animated Dev Portfolio",
    description:
      "A sleek, animated portfolio powered by Next.js and Framer Motion. Includes sections like Hero, Projects, Testimonials, and custom interactions.",
    techStack: ["Next.js", "Framer Motion", "Tailwind", "Sentry"],
  },
  {
    title: "GitHub Cyber Profile",
    description:
      "A futuristic GitHub profile viewer with a neon cyberpunk UI. Fetches real-time data from GitHub API to display repositories, activity, language usage, and social links.",
    techStack: ["Next.js", "GitHub API", "Shadcn", "Cyberpunk UI", "Zod"],
  },
];

const projects = [
    {
      title: "MovieShop",
      description:
        "E-commerce app for buying movies with role-based auth, admin dashboard, product browsing, cart system, and mock checkout. Built with Prisma, BetterAuth, Next.js, Tailwind, PostgreSQL, and Zod.",
      techStack: [
        "Next.js",
        "Prisma",
        "BetterAuth",
        "Tailwind CSS",
        "PostgreSQL",
        "Zod",
        "TypeScript",
      ],
      githubUrl: "https://github.com/yourusername/movieshop",
      liveUrl: "https://movieshop.example.com",
    },
    {
      title: "News Website",
      description:
        "Dynamic news platform using real-time weather and spot price APIs. Features admin/editor dashboards, role models, categories, subscriptions, CRUD system, and a modern UI.",
      techStack: [
        "Next.js",
        "Prisma",
        "BetterAuth",
        "Shadcn",
        "Zod",
        "TypeScript",
        "Weather API",
      ],
      githubUrl: "https://github.com/yourusername/news-platform",
      liveUrl: "https://news.example.com",
    },
    {
      title: "Weather App",
      description:
        "Simple React weather app built in 2022 using OpenWeatherAPI. Enter a city and get current weather, temperature, and conditions in a clean UI.",
      techStack: ["React", "OpenWeatherAPI", "CSS"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-app.example.com",
    },
    {
      title: "Speech Progress Tracker",
      description:
        "A colorful app for tracking speech development. Parents can log and monitor words learned by children with speech delay. Simple, visual, and easy to use.",
      techStack: ["React", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/yourusername/speech-tracker",
      liveUrl: "https://speechtracker.example.com",
    },
  ];
  

const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-12 px-2 sm:px-4 lg:px-6">
      <header className="text-center mb-8 lg:mb-12 font-light">
        <div className="mb-6">
          <Alert variant="destructive" className="mb-6 max-w-md mx-auto">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="text-red-600">Page Under Construction</AlertTitle>
            <AlertDescription className="text-red-400">
              This section is still being built. Expect things to shift, break, or glow unexpectedly!
            </AlertDescription>
          </Alert>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#00f0ff] tracking-wide mb-4">
          Projects & Experiments
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
          A collection of things I&apos;ve built — from frontend interfaces to
          full-stack systems. Some are polished products, others are experiments
          in new tech or performance.
        </p>
      </header>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-8 lg:mb-12 px-2">
        {[
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "PostgreSQL",
          "Tailwind",
          "Vite",
          "Python",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
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
      {/* Coming Soon Projects Carousel */}
      <section className="my-10">
        <h2 className="text-2xl font-light mb-6 tracking-wide">
          Coming Soon...
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[85%] mx-auto"
        >
          <CarouselContent>
            {upcomingProjects.map((project, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 "
              >
                <div className="rounded-lg border border-[#00f0ff33] p-4  shadow-xl hover:shadow-[0_0_30px_#00f0ff55] transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="w-full h-40 bg-gradient-to-br from-[#1a3a42] to-[#0f1f24] rounded mb-4 flex items-center justify-center opacity-80">
                    <div className="text-[#00f0ff] text-3xl opacity-70">🚀</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg  font-light">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.techStack.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className=" text-xs border-[#00f0ff55]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};

export default ProjectsPage;
