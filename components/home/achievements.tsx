"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Code, Cpu, Gamepad, Zap, BookOpen } from "lucide-react";
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
    <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Recognition and milestones from my technical journey
          </p>
        </motion.div>
        
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
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
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`${achievement.colorClass} shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{achievement.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 inline-flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Technical Leadership</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Problem Solver</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Research</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Gaming</Badge>
        </div>
      </div>
    </section>
  );
}