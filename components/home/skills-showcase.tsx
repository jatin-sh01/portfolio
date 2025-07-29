"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TechIcon } from "@/components/tech-icon";
import { Badge } from "@/components/ui/badge";
import { skills, SkillCategory } from "@/data/skills";


export function SkillsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("Languages");
  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Technical Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
            My expertise across various technologies and tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 md:mt-12"
        >
          <Tabs defaultValue="Languages" 
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value as SkillCategory)}
            className="w-full">
            <div className="flex justify-center mb-6 sm:mb-8">
              <TabsList className="flex flex-wrap gap-1 sm:gap-2 h-auto p-1 max-w-full">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="w-full">
                <div className="bg-muted/50 rounded-lg p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                    {skills[category].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 bg-background hover:bg-accent transition-colors flex items-center gap-1.5 sm:gap-2"
                        >
                          <TechIcon logoKey={skill.logoKey} name={skill.name} className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="whitespace-nowrap">{skill.name}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}