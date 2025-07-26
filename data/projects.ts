export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}


  export const projects: Project[] = [
  {
    id: "finmate",
    title: "FinMate | Smart Budgeting App",
    description: "FinMate is a smart budgeting application built with the MERN stack to help users efficiently track income, expenses, and budgets.",
    longDescription: "FinMate is a smart budgeting application built with the MERN stack to help users efficiently track income, expenses, and budgets. Featuring dynamic dashboards, JWT-based authentication for security, and Redux for state management, the app ensures seamless performance. Deployed with CI/CD pipelines using a Dockerized Node.js server and Vercel for frontend hosting.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Axios"],
    achievements: [
      "Implemented JWT-based secure authentication system",
      "Built dynamic dashboards with Redux for efficient state management",
      "Deployed with CI/CD pipelines using Docker and hosted frontend on Vercel"
    ],
    image: "/images/projects/finmate/finmate.jpg",
    github: "https://github.com/jatin-sh01/FinMate.git",
    liveUrl: "https://fin-mate-lac.vercel.app/",
    featured: true
  },
  {
    id: "quickcart",
    title: "QuickCart | Real-Time eCommerce Platform",
    description: "QuickCart is a full-stack eCommerce platform offering secure authentication, real-time cart management, and admin dashboards.",
    longDescription: "QuickCart is a full-stack eCommerce platform offering secure authentication, real-time cart management, and comprehensive admin dashboards. It integrates Razorpay for smooth, secure payments and was deployed on Render for production use. The platform emphasizes scalability and an optimized user experience for online shopping.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Render"],
    achievements: [
      "Integrated Razorpay for seamless and secure payments",
      "Developed real-time cart and order management",
      "Deployed production-ready build on Render"
    ],
    image: "/images/projects/quickcart/quickcart.jpg",
    github: "https://github.com/jatin-sh01/QuickCart.git",
    liveUrl: "",
    featured: false
  },
  {
    id: "fortipass",
    title: "FortiPass | Secure Password Generator",
    description: "FortiPass is a secure password generator with customizable options and real-time password strength indicators.",
    longDescription: "FortiPass is a secure password generator designed to help users create strong, random passwords with ease. Featuring customizable options for length and character types, it ensures maximum security for online accounts. The app includes a sleek UI, real-time password strength indicators, and a quick copy-to-clipboard feature to enhance user experience.",
    technologies: ["JavaScript", "HTML", "CSS"],
    achievements: [
      "Designed responsive and minimal UI for usability",
      "Added real-time password strength meter",
      "Implemented copy-to-clipboard functionality"
    ],
    image: "/images/projects/fortipass/fortipass.jpg",
    github: "https://github.com/jatin-sh01/fortipass.git",
    liveUrl: "",
    featured: false
  },
  {
    id: "skycast",
    title: "SkyCast | Responsive Weather App",
    description: "SkyCast is a modern weather app offering global forecasts via OpenWeatherMap API.",
    longDescription: "SkyCast is a modern weather application that delivers real-time, accurate weather updates globally. It integrates the OpenWeatherMap API to provide detailed information on temperature, humidity, wind speed, and conditions. With its responsive UI and global search functionality, users can easily access weather forecasts anytime, anywhere.",
    technologies: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
    achievements: [
      "Fetched real-time weather data using OpenWeatherMap API",
      "Created responsive design compatible with all screen sizes",
      "Added global search and city-based weather lookup"
    ],
    image: "/images/projects/skycast/skycast.jpg",
    github: "https://github.com/jatin-sh01/SkyCast.git",
    liveUrl: "",
    featured: false
  }
];
