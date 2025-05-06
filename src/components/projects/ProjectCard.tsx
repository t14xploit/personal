import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, techStack, githubUrl, liveUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<Card className="font-light max-w-xs mx-auto bg-[#020b12] border border-[#00f0ff33] shadow-xl hover:shadow-[0_0_30px_#00f0ff55] transition-shadow duration-300">
<CardHeader className="relative">
        <Image 
        src={image} 
        alt={title} 
        width={500}
        height={500}
        className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent>
        <CardTitle className="font-light mb-4">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mb-2">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-[#00f0ff]">
              {tech}
            </Badge>
          ))}
        </div>
        <CardDescription className="line-clamp-1">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-2">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub className="text-[#00f0ff]" />
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" title="Live Site">
            <FaExternalLinkAlt className="text-[#00f0ff]" />
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#00f0ff]">
          {isOpen ? "↑ Hide Details" : "↓ Show Details"}
        </button>
      </CardFooter>
      {isOpen && (
        <div className="p-4 bg-[#1e1e1e]">
          <p>{description}</p>
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
