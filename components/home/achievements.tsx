"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Code, Cpu, Zap, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  colorClass: string;
}

const achievements: Achievement[] = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Led Full Stack Development at SCJ Entertainments",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Built StudyBuddies App during Infosys Internship",
    colorClass: "text-teal-600 dark:text-teal-400",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Developed & Deployed 3+ MERN Stack Projects",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Certified in Cybersecurity (Cisco) & JavaScript (Infosys)",
    colorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Ranked 5914 in TCS CodeVita Round 1 (Top 6%)",
    colorClass: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Pitched Working Prototype in 24hr College Hackathon",
    colorClass: "text-green-600 dark:text-green-400",
  },
];


export function Achievements() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl/relaxed mt-4 sm:mt-6">
            Recognition and milestones from my technical journey
          </p>
        </motion.div>
        
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring", 
                stiffness: 100,
                damping: 15
              }}
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <div className={`${achievement.colorClass} shrink-0 mt-0.5`}>
                    <div className="h-5 w-5 sm:h-6 sm:w-6">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base leading-relaxed">{achievement.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          <Badge variant="secondary" className="text-xs sm:text-sm py-1 sm:py-1.5 px-2 sm:px-3">Technical Leadership</Badge>
          <Badge variant="secondary" className="text-xs sm:text-sm py-1 sm:py-1.5 px-2 sm:px-3">Problem Solver</Badge>
          <Badge variant="secondary" className="text-xs sm:text-sm py-1 sm:py-1.5 px-2 sm:px-3">Research</Badge>
          <Badge variant="secondary" className="text-xs sm:text-sm py-1 sm:py-1.5 px-2 sm:px-3">Gaming</Badge>
        </div>
      </div>
    </section>
  );
}