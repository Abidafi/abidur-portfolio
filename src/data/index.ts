// --- Interfaces ---
export interface Job {
  title?: string;
  period?: string;
  project?: string; 
  points: string[];
}

export interface Company {
  company: string;
  role: string;
  period: string;
  location: string;
  jobs: Job[];
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  mau: string;
  link: string;
  type: string;
}

// --- Data ---
export const heroData = {
  name: "Hi, I'm Abidur Rahman",
  roles: "AI Powered Full-Stack Software Developer",
  achievements: "Former Fire Safety Engineer in ACCORD Bangladesh | A trained Civil Engineer | Global Outreach as an International Masters Student in Brandenburg University of Technology, Cottbus-Germany",
  image: "/profile.jpg", 
};

export const experienceData: Company[] = [
  {
    company: "M/S MATZ Enterprise Ltd.",
    role: "Consultant- Fire Protection Engineer",
    period: "May 2019 – September 2021",
    location: "Dhaka, Bangladesh",
    jobs: [
      {
        points: [
          "Spearheaded bidding and conceptualization for 12 government tender projects, maintaining liaisons with regulatory authorities to deliver 100% of project milestones on or ahead of schedule.",
          "Managed cross-functional execution of 3 high-value government-collaborated projects, optimizing resource allocation to reduce project delays by 25%.",
          "Trained and equipped a 40+ member engineering team on Fire Protection Regulations and Structural Safety, successfully outfitting 5 factories with an 80% fire risk reduction capability through strategic safety product procurement.",
          "Implemented comprehensive health and safety protocols across 4 operational sites during the COVID-19 pandemic, maintaining 98% staff attendance and achieving zero virus-related work stoppages."
        ]
      }
    ]
  },
  {
    company: "Bangladesh ACCORD",
    role: "Fire Safety Engineer",
    period: "January 2016 - March 2019",
    location: "Dhaka, Bangladesh",
    jobs: [
      {
        points: [
          "Conducted around 500 factory inspections in accordance with Accord standards and produced detailed inspection reports.",
          "Provided engineering and technical support to factories, workers, and brand representatives for executing corrective action plans.",
          "Coordinated communications and work schedules between brands, factory owners, workers, inspection companies, ED, and CSI.",
          "Maintained qualitative and quantitative case files for assigned factories and conducted follow-ups to ensure remediation within required timeframes."
        ]
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "GearUp- Sports and Outdoor equipment rental service",
    desc: "Full-Stack Sports and Outdoor equipment rental service — Customers can browse available gear, place rental orders, make secure payments, and return equipment. Providers manage their gear inventory and fulfill rental orders, while Admins oversee the platform, manage users, and moderate listings.",
    tags: ["Next JS", "Typescript", "Tanstack Query", "Custom JWT Middleware", "PostgreSQL + Prisma"],
    mau: "15K+",
    link: "https://nextgym-frontend.onrender.com/",
    type: "OPEN SOURCE"
  },
  {
    title: "DevPulse - Internal Tech Issue & Feature Tracker",
    desc: "DevPulse is a collaborative platform for software teams to report bugs, suggest features, and coordinate resolutions. It provides a robust API for managing issues with role-based access control, authentication, and comprehensive filtering capabilities.",
    tags: ["Node.JS", "Typescript", "Express.JS", "PostgreSQL", "bcrypt", "JWT"],
    mau: "10K+",
    link: "https://devpulse-o5ks.onrender.com/",
    type: "WEB PLATFORM"
  }
];