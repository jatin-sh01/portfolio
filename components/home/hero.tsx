// components/home/hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { socialLinks } from "@/data/social";

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const displayedSkills = [
    "Full Stack Developer",
    "MERN Stack",
    "UI/UX Design",
    "Agile & CI/CD",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex(
        (prevIndex) => (prevIndex + 1) % displayedSkills.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Get icon component for social links
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "mail":
        return <Mail className="h-5 w-5" />;
      case "phone":
        return <Phone className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Background elements - removed parallax to fix scrolling issues */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70" />
        <div className="absolute left-20 bottom-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_450px] 2xl:grid-cols-[1fr_500px]">
          <motion.div
            className="flex flex-col justify-center space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl/none">
                  Hi, I&apos;m Jatin Sharma
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-12 sm:h-14 md:h-16"
              >
                <div className="relative overflow-hidden h-full flex items-center">
                  {displayedSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className={`absolute transition-all duration-500 transform ${
                        index === currentSkillIndex
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                    >
                      <h2 className="text-xl font-semibold text-primary sm:text-2xl md:text-3xl lg:text-4xl">
                        {skill}
                      </h2>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              >
                A passionate developer with expertise in Next.js, React,
                Tailwind CSS, and . Currently pursuing Bachelor's degree in
                Computer Science at Vit Jaipur.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a
                  href="/resume.pdf"
                  download="Jatin_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links - Added here from navbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-3 pt-2 justify-center sm:justify-start"
            >
              {socialLinks.map((social) => (
                <motion.div
                  key={social.id}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full bg-muted/50 hover:bg-primary/10"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {getIconComponent(social.icon)}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-md overflow-hidden rounded-full">
              <Image
                src="/images/profile.jpg"
                alt="Jatin Sharma"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 400px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
