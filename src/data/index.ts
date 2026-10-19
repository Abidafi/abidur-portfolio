// --- Interfaces ---
export interface Job {
  title: string;
  period: string;
  project?: string; // The '?' makes this optional (since YouKnowWho doesn't have it)
  points: string[];
}

export interface Company {
  company: string;
  role: string;
  period: string;
  location: string;
  logoText: string;
  jobs: Job[];
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  stars: string | null;
  mau: string;
  link: string;
  type: string;
}

// --- Data ---
export const heroData = {
  name: "Hi, I'm Abidur Rahman",
  roles: "Senior Software Engineer | Led teams developing AI agents and RAG pipelines at AlpineX AI | Engineered Full Stack blockchain and DeFi applications at Affine DeFi",
  achievements: "2x ICPC World Finalist | Problem Setter at International Math Olympiad | Codeforces Grandmaster",
  image: "/profile.jpg", 
};

export const experienceData: Company[] = [
  {
    company: "Multiplyr",
    role: "Senior Software Engineer",
    period: "Feb 2022 – Present · 4 yrs 9 mos",
    location: "Remote (New York, United States)",
    logoText: "M",
    jobs: [
      {
        title: "Senior Software Engineer - Full Stack & AI",
        period: "Aug 2023 – Present · 3 yrs 3 mos",
        project: "Project: AlpineX AI",
        points: [
          "Led team of 4 engineers to architect production-scale RAG pipeline processing millions of data points from social/web sources using vector embeddings, Pinecone vector database and optimized PostgreSQL schemas.",
          "Built advanced RAG retrieval system with reranking, enabling Web3 AI agents with sub-100ms latency, and shipped 100+ Twitter AI agents using LangChain with OAuth 2.0 authentication and AI reasoning frameworks.",
          "Engineered AWS cloud infrastructure (ECS, EKS, EC2) with Docker containerization and Datadog monitoring and alerting, achieving 99.9% system reliability with <5min incident response time."
        ]
      },
      {
        title: "Software Engineer – Full Stack",
        period: "Aug 2022 – Aug 2023 · 1 yr 1 mo",
        project: "Project: Affine DeFi",
        points: [
          "Architected and scaled FastAPI backend supporting 50K+ users with hundreds of concurrent users and $5M+ TVL.",
          "Built real-time multi-chain data pipeline processing 2K+ daily blockchain transactions with 90% latency reduction and implemented custom Merkle Tree algorithm in Python, saving thousands in gas costs.",
          "Developed React/Next.js/TypeScript frontend on Vercel and deployed backend services on AWS EKS using Kubernetes, Argo CD, and CI/CD pipelines, achieving zero-downtime deployments with auto-scaling."
        ]
      }
    ]
  },
  {
    company: "YouKnowWho Academy",
    role: "Founder & Technical Lead",
    period: "Nov 2021 – Present · 5 yrs",
    location: "Dhaka, Bangladesh",
    logoText: "Y",
    jobs: [
      {
        title: "Founder & Technical Lead",
        period: "Nov 2021 – Present · 5 yrs",
        points: [
          "Founded and architected EdTech platform serving 3K+ students with 300+ hours of content, generating significant revenue.",
          "Engineered full-stack web application with React/Next.js/Chakra UI/Firebase and AI-powered learning assistant using Vercel AI SDK, featuring automated grading pipelines and real-time leaderboards."
        ]
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "The Ultimate Code Library",
    desc: "A widely used algorithmic code template library containing optimized implementations of data structures, algorithms, and competitive programming templates.",
    tags: ["C++", "Algorithms", "Data Structures", "Template Library"],
    stars: "3.7K",
    mau: "15K+",
    link: "#",
    type: "OPEN SOURCE"
  },
  {
    title: "YouKnowWho Academy Website",
    desc: "A comprehensive educational platform serving 3000+ students with 300+ hours of video content on competitive programming, data structures, and algorithms.",
    tags: ["React", "Next.js", "Chakra UI", "Firebase"],
    stars: null,
    mau: "10K+",
    link: "#",
    type: "WEB PLATFORM"
  }
];