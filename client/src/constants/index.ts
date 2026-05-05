export const PROFILE = {
  name: "John Wesly P D",
  role: "Software Engineer",
  location: "Coimbatore, India",
  email: "johnweslypd@gmail.com",
  linkedin: "https://www.linkedin.com/in/john-wesly-pd/",
  github: "https://github.com/johnwesly08/",
  phone: "+91 7092714600",
  summary: "A software engineer specializing in the MERN stack, Java, and IoT architecture. Passionate about building scalable backend systems, secure hardware communications, and AI-integrated applications, with a proven track record in national hackathons and professional certifications from Google, IBM, and Meta.",
};

export const SKILLS = {
  languages: ["Python", "Java", "JavaScript", "TypeScript", "C"],
  web: ["React.js", "Next.js", "Node.js", "Express.js", "Django", "FastAPI", "Tailwind CSS"],
  mobile: ["Flutter", "Kotlin", "Android SDK"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
  hardwareAndAI: ["ESP32", "LoRa / LPWAN", "Gemini", "AI Agents", "LLM Integration"],
  core: ["DSA", "System Design", "OS", "Computer Networks", "DBMS"],
};

export const PROJECTS = [
  {
    title: "Career Compass",
    description: "An AI-powered recruitment and career intelligence platform that analyzes resumes and user skills to provide personalized career recommendations and matching scores. Built to reduce manual screening effort for institutions.",
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "LLM Integration"],
    link: "https://github.com/johnwesly08/",
    demo: "#",
    win: "Automated resume processing and skill-gap analysis for data-driven hiring."
  },
  {
    title: "Convo",
    description: "A real-time messaging Android application featuring secure authentication, live chat synchronization, and push notifications using MVVM architecture for reliable message delivery.",
    tech: ["Kotlin", "Firebase", "Firestore", "FCM", "MVVM"],
    link: "https://github.com/johnwesly08/",
    demo: "#",
    win: "Implemented efficient real-time state management with StateFlow."
  },
  {
    title: "Pedals",
    description: "A smart campus bicycle rental and mobility management platform with OTP-based authentication and real-time stand tracking. Designed for high-concurrency student use.",
    tech: ["Flutter", "Firebase", "Supabase", "GetX", "REST APIs"],
    link: "https://github.com/johnwesly08/",
    demo: "#",
    win: "Scalable deployment planned for 200+ students across multiple campus stands."
  },
  {
    title: "Multi Cart",
    description: "A multi-tenant e-commerce platform enabling independent vendors to manage their own storefronts, products, and orders through a unified system with role-based access.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/johnwesly08/",
    demo: "#",
    win: "Achieved complete data isolation for multiple concurrent vendor accounts."
  },
];

// Split from your original EXPERIENCE array to fit the new UI
export const EXPERIENCE = [
  {
    role: "Ninja Developer",
    company: "TATA Consultancy Services (TCS)",
    period: "Upcoming",
    description: "Accepted offer for the Ninja role; shortlisted for Prime category interview based on top performance in the National Qualifier Test (NQT).",
    location: "India"
  }
];

// New array to feed the Education section of your UI
export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in ECE",
    institution: "KGiSL Institute of Technology",
    period: "2022 — 2026",
    description: "Focusing on electronics, communication, software architecture, and IoT systems. Maintained a strong CGPA of 8.29/10.",
    location: "Coimbatore, TN"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Runner-up, Smart India Hackathon (SIH)",
    description: "Nationally recognized for solving critical real-world problems using technology.",
    year: "2024"
  },
  {
    title: "IEEE Manuscript Submission",
    description: "Co-authored 'Design And Implementation Of A Tamper-Proof Secure LoRa Communication System' for IEEE Computer Architecture Letters.",
    year: "2026"
  },
  {
    title: "RESET Conference Presenter",
    description: "Presented a research survey on LoRa and LPWAN systems at the 5th National Conference on Renewable and Sustainable Energy Technologies.",
    year: "2026"
  },
  {
    title: "Finalist, Clash of Codes v1.0",
    description: "Competed at Microsoft Office, Gurgaon, showcasing advanced problem-solving skills.",
    year: "2024"
  }
];

export const CERTIFICATIONS = [
  { name: "Google Certified UI/UX Designer", year: "2025" },
  { name: "IBM Certified Mobile App Developer", year: "2025" },
  { name: "Meta Certified Frontend Developer", year: "2023" },
  { name: "Infosys Certified DSA using Java", year: "2025" },
  { name: "AI Agents Intensive Capstone", year: "2026" }
];