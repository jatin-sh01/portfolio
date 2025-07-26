export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/jatin-sh01",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/JatinSharma-/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:Jatinsharma708090@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+917014955704",
      icon: "phone"
    }
  ];