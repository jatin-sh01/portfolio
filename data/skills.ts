// data/skills.ts

export type SkillCategory =
  | "Languages"
  | "Frameworks/Libraries"
  | "Cloud/DevOps"
  | "Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "C++", category: "Languages", logoKey: "cplusplus" },
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
    { name: "TypeScript", category: "Languages", logoKey: "typescript" },
    { name: "SQL", category: "Languages", logoKey: "mysql" },
  ],
  "Frameworks/Libraries": [
    { name: "React.js", category: "Frameworks/Libraries", logoKey: "react" },
    { name: "Node.js", category: "Frameworks/Libraries", logoKey: "nodejs" },
    { name: "Next.js", category: "Frameworks/Libraries", logoKey: "nextjs" },
    {
      name: "Express.js",
      category: "Frameworks/Libraries",
      logoKey: "express",
    },
    {
      name: "Tailwind CSS",
      category: "Frameworks/Libraries",
      logoKey: "tailwindcss",
    },
  ],
  "Cloud/DevOps": [
    { name: "Vercel", category: "Cloud/DevOps", logoKey: "vercel" },
    { name: "Render", category: "Cloud/DevOps", logoKey: "render" },
    { name: "GitHub", category: "Cloud/DevOps", logoKey: "github" },
    { name: "MongoDB", category: "Cloud/DevOps", logoKey: "mongodb" },
    { name: "Postman", category: "Cloud/DevOps", logoKey: "postman" },
    { name: "ServerByte", category: "Cloud/DevOps", logoKey: "serverbyte" },
  ],
  Concepts: [
    { name: "System Design", category: "Concepts", logoKey: "github" },
    {
      name: "Data Structures & Algorithms",
      category: "Concepts",
      logoKey: "github",
    },
    { name: "Distributed Systems", category: "Concepts", logoKey: "github" },
    { name: "API Design", category: "Concepts", logoKey: "swagger" },
    { name: "Microservices", category: "Concepts", logoKey: "docker" },
    { name: "Security", category: "Concepts", logoKey: "github" },
  ],
  
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};
