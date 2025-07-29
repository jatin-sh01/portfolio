"use client";

import { motion } from "framer-motion";
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
import { projects } from "@/data/projects";
import Link from "next/link";


export function FeaturedProjects() {

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-12 md:py-20 lg:py-24 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl/relaxed mt-4">
              Check out some of my recent work
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-2 transition-all hover:border-primary group">
                  {project.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        width={600}
                        height={400}
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
                          <ArrowRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
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
              </motion.div>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}