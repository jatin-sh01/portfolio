// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: 'work' | 'research' | 'education' | 'leadership';
}

export const experiences: Experience[] = [
  {
    id: "full-stack-dev",
    title: "Full Stack Developer",
    company: "SCJ Entertainments",
    location: "Remote, India",
    startDate: "May 2024",
    endDate: "Present",
    description:
      "Spearheaded full-stack web development for a media-tech startup, delivering scalable, performant, and responsive features across SCJ's entertainment portfolio.",
    achievements: [
      "Built a modular architecture with React, Tailwind, and Node.js with encrypted content upload on ServerByte",
      "Integrated secure admin access and encrypted backend routes for media upload (trailers, thumbnails, and analytics)",
      "Created dashboard analytics modules for content performance tracking and distributor metrics",
      "Collaborated with design, content, and hosting teams to launch multiple dynamic microservices"
    ],
    type: "work"
  },
  {
    id: "infosys-intern",
    title: "Technical Intern (Full Stack)",
    company: "Infosys Springboard",
    location: "Remote, India",
    startDate: "February 2024",
    endDate: "April 2024",
    description:
      "Built and deployed a MERN-based collaborative flashcard app for students as part of Infosys Springboard Internship.",
    achievements: [
      "Designed & built StudyBuddies: a multi-user MERN app supporting real-time card collaboration",
      "Implemented login, content moderation, and admin review panel with JWT-based access control",
      "Used MongoDB Atlas for cloud database and deployed the platform on Render & Vercel",
      "Earned certification in JavaScript (Infosys) and Cybersecurity Essentials (Cisco)"
    ],
    type: "work"
  },
  {
    id: "codevita",
    title: "TCS CodeVita (Round 1)",
    company: "Tata Consultancy Services",
    location: "Remote, India",
    startDate: "July 2023",
    endDate: "July 2023",
    description:
      "Competitive programming event testing problem-solving skills with real-time online challenges.",
    achievements: [
      "Ranked 5914 out of 1,00,000+ participants globally (Top 6%)",
      "Solved algorithmic problems using optimized data structures under timed constraints"
    ],
    type: "work"
  },
  {
    id: "college-hackathon",
    title: "24hr Hackathon (Prototype Pitch)",
    company: "Vivekananda Institute of Technology",
    location: "Jaipur, India",
    startDate: "March 2023",
    endDate: "March 2023",
    description:
      "Participated in an in-person 24-hour hackathon organized by the institute with end-to-end prototype delivery.",
    achievements: [
      "Led frontend & backend integration for a social impact web app prototype",
      "Pitched a working app with live features, winning appreciation from panelists"
    ],
    type: "leadership"
  }
];
