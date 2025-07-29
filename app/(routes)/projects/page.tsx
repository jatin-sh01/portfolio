"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/project-card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort();

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((project) =>
        project.technologies.includes(activeFilter)
      )
    : projects;

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            My Projects
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
            A showcase of my work across various technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 md:mt-12"
        >
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-6 sm:mb-8 max-w-4xl mx-auto">
            <Badge
              variant={activeFilter === null ? "default" : "outline"}
              className="cursor-pointer text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-3 transition-colors"
              onClick={() => setActiveFilter(null)}
            >
              All
            </Badge>
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant={activeFilter === tech ? "default" : "outline"}
                className="cursor-pointer text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-3 transition-colors"
                onClick={() => setActiveFilter(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-muted-foreground text-sm sm:text-base">
              No projects found with the selected technology. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}