"use client";

import Image from "next/image";
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
      "A full-stack Threads app using Next.js 14, MongoDB, Clerk, and Tailwind. Real-time updates, image uploads, authentication, and scalable architecture. Based on JS Mastery course.",
    image: "/coming-soon-threads.png",
    techStack: ["Next.js 14", "TypeScript", "MongoDB", "Clerk", "Tailwind CSS"],
  },
  {
    title: "Price Tracker",
    description:
      "Web scraping eCommerce project with cron jobs and email alerts. Scrapes Amazon data, stores product history, and sends notifications when prices drop.",
    image: "/coming-soon-price-tracker.png",
    techStack: ["Next.js", "BrightData", "NodeMailer", "MongoDB", "CRON"],
  },
  {
    title: "Animated Dev Portfolio",
    description:
      "A sleek, animated portfolio powered by Next.js and Framer Motion. Includes sections like Hero, Projects, Testimonials, and custom interactions.",
    image: "/coming-soon-portfolio.png",
    techStack: ["Next.js", "Framer Motion", "Tailwind", "Sentry"],
  },
  {
    title: "GitHub Cyber Profile",
    description:
      "A futuristic GitHub profile viewer with a neon cyberpunk UI. Fetches real-time data from GitHub API to display repositories, activity, language usage, and social links.",
    image: "/coming-soon-github.png",
    techStack: ["Next.js", "GitHub API", "Shadcn", "Cyberpunk UI", "Zod"],
  },
];

const projects = [
    {
      image: "/project-movieshop.png",
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
      image: "/project-news.png",
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
      image: "/project-weather.png",
      title: "Weather App",
      description:
        "Simple React weather app built in 2022 using OpenWeatherAPI. Enter a city and get current weather, temperature, and conditions in a clean UI.",
      techStack: ["React", "OpenWeatherAPI", "CSS"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-app.example.com",
    },
    {
      image: "/project-speech.png",
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
    <>
      <header className="my-6 font-light">
        <h1 className="text-2xl text-[#00f0ff] tracking-wide mb-4">
          Projects & Experiments
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          A collection of things I&apos;ve built — from frontend interfaces to
          full-stack systems. Some are polished products, others are experiments
          in new tech or performance.
        </p>
      </header>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap justify-start gap-2 mb-10">
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
          <Badge key={tech} variant="outline" className="text-[#00f0ff]">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-light w-[95%] ">
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
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    width={500}
                    height={500}
                    className="font-light rounded mb-4 w-full object-cover h-40 opacity-80"
                  />
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
    </>
  );
};

export default ProjectsPage;
