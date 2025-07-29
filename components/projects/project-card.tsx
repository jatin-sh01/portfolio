import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden border-2 transition-all hover:border-primary group">
      {project.image && (
        <div className="aspect-video overflow-hidden relative w-full">
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            priority={project.featured}
          />
        </div>
      )}
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-4 sm:p-6 pt-0">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs sm:text-sm">+{project.technologies.length - 4}</Badge>
          )}
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
          {project.achievements.slice(0, 2).map((achievement, i) => (
            <li key={i} className="flex items-start">
              <ArrowRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2 p-4 sm:p-6 pt-0">
        <Button asChild variant="default" size="sm" className="flex-1 sm:flex-initial text-xs sm:text-sm">
          <Link href={`/projects/${project.id}`}>
            View Details
            <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </Button>
        <div className="flex gap-1 sm:gap-2">
          {project.github && (
            <Button asChild variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}