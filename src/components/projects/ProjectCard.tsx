import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  image?: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, techStack, githubUrl, liveUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="font-light max-w-xs mx-auto bg-[#020b12] border border-[#0f1f24] shadow-[0_2px_8px_rgba(0,240,255,0.05)] hover:shadow-[0_0_12px_rgba(0,240,255,0.15)] transition-all duration-300 hover:border-[#1a3a42] group">
      {image && (
        <CardHeader className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </CardHeader>
      )}
      {!image && (
        <CardHeader className="relative overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-[#1a3a42] to-[#0f1f24] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="text-[#00f0ff] text-4xl opacity-50">📁</div>
          </div>
        </CardHeader>
      )}
      <CardContent>
        <CardTitle className="font-light mb-4 text-[#00f0ff] group-hover:text-[#00eaff] transition-colors duration-300">
          {title}
        </CardTitle>
        <div className="flex flex-wrap gap-2 mb-2">
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-[#00f0ff] border-[#0f1f24] hover:border-[#1a3a42] hover:bg-[#00f0ff11] transition-all duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <CardDescription className="line-clamp-1 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-[#00f0ff] hover:text-[#00eaff] hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Live Site"
            className="text-[#00f0ff] hover:text-[#00eaff] hover:scale-110 transition-all duration-300"
          >
            <FaExternalLinkAlt size={16} />
          </a>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#00f0ff] hover:text-[#00eaff] text-sm transition-colors duration-300 hover:underline"
        >
          {isOpen ? "↑ Hide Details" : "↓ Show Details"}
        </button>
      </CardFooter>
      {isOpen && (
        <div className="p-4 bg-[#010c14] border-t border-[#00f0ff33] animate-in slide-in-from-top-2 duration-300">
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
