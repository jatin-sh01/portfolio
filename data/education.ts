export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
   
    {
      id: "Vivekananda",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vivekananda Institue Of Technology",
      location: "Jaipur,India",
      startDate: "October 2022",
      endDate: "April 2026",
         }
  ];