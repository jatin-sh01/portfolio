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
      <div className="container px-3 sm:px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Technical Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl/relaxed px-4 sm:px-0">
            My expertise across various technologies and tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <Tabs defaultValue="Languages" 
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value as SkillCategory)}
            className="w-full">
            {/* Mobile-first tab layout */}
            <div className="flex justify-center mb-6 sm:mb-8 px-2 sm:px-0">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-1 sm:gap-2 h-auto p-1 w-full max-w-2xl lg:max-w-full">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-1.5 sm:px-3 py-2 sm:py-2.5 whitespace-nowrap flex-1 lg:flex-initial transition-all duration-200"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {/* Skills content with improved mobile layout */}
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="w-full">
                <div className="bg-muted/50 rounded-lg p-3 sm:p-4 md:p-6 border border-border/50">
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
                    {skills[category].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="w-full"
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 bg-background hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200 flex items-center gap-2 sm:gap-2.5 w-full justify-start sm:justify-center min-h-[2.75rem] sm:min-h-[3.25rem] group cursor-default"
                        >
                          <TechIcon 
                            logoKey={skill.logoKey} 
                            name={skill.name} 
                            className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-transform group-hover:scale-110" 
                          />
                          <span className="font-medium text-left sm:text-center flex-1 sm:flex-initial">{skill.name}</span>
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