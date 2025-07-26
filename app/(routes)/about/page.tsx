// app/(routes)/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, SkillCategory } from "@/data/skills";

export default function AboutPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get to know more about my background and skills
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m Jatin Sharma, a Full Stack Developer passionate about
                building scalable web applications and solving real-world
                problems with clean, efficient code. I'm currently pursuing a
                B.Tech in Computer Science from Vivekananda Institute of
                Technology, Jaipur.
              </p>
              <p>
                With hands-on experience in the MERN stack, Docker, and CI/CD
                workflows, I&apos;ve led full-stack projects like SCJ
                Entertainments and developed collaborative tools like
                StudyBuddies during my Infosys internship. I enjoy turning ideas
                into responsive, user-friendly experiences using React, Tailwind
                CSS, and modern APIs.
              </p>
              <p>
                I&apos;m also exploring areas like UI/UX design, cybersecurity,
                and cloud deployment, and I actively participate in hackathons
                and coding contests like TCS CodeVita. I aim to grow as a
                developer who writes secure, scalable, and impactful software.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id}>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        {edu.startDate} - {edu.endDate}
                      </span>
                      <span className="text-muted-foreground">
                        {edu.location}
                      </span>
                    </div>
                    {edu.gpa && (
                      <Badge variant="outline" className="mt-2">
                        CGPA: {edu.gpa}
                      </Badge>
                    )}
                    {edu.description && (
                      <p className="mt-2 text-sm">{edu.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Skills</h2>

            {Object.keys(skills).map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills[category as SkillCategory].map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}

           <h2 className="text-2xl font-bold mt-8 mb-4">Achievements</h2>
<Card>
  <CardContent className="p-4">
    <ul className="space-y-3">
      <li className="flex items-start">
        <span className="text-primary mr-2 font-bold">•</span>
        <span>
          Led Full Stack Development at SCJ Entertainments.
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2 font-bold">•</span>
        <span>
          Built StudyBuddies App during Infosys Internship.
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2 font-bold">•</span>
        <span>
          Developed & Deployed 3+ MERN Stack Projects.
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2 font-bold">•</span>
        <span>
          Certified in Cybersecurity (Cisco) & JavaScript (Infosys).
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2 font-bold">•</span>
        <span>
          Ranked 5914 in TCS CodeVita Round 1 (Top 6%).
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2 font-bold">•</span>
        <span>
          Pitched Working Prototype in 24hr College Hackathon.
        </span>
      </li>
    </ul>
  </CardContent>
</Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
