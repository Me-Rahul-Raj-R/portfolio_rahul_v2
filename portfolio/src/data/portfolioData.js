// ============================================================
// PORTFOLIO DATA — Rahul Raj R
// Single source of truth — edit this file to update the site
// ============================================================

export const personal = {
  name: "Rahul Raj R",

  // "Software Developer" is first → shows as default in typewriter
  roles: [
    "Software Developer",
    "Java Developer",
    "MERN Stack Engineer",
    "Full Stack Developer",
  ],

  headline: "Building robust full-stack applications with architectural precision.",

  // SUMMARY REMOVED from Hero — still kept here for meta/SEO use
  summary:
    "Results-driven Software Developer with 4+ months of hands-on experience in Java backend development and MERN stack full-stack applications. Delivered 4 production-ready systems processing 1,000+ daily transactions. SIH 2025 Internal Hackathon — Top 20 Teams.",

  email:    "rahulrajan9384@gmail.com",
  phone:    "+91-8754696286",
  location: "Pollachi, Coimbatore, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/rahul-raj-r-4a56702b5/",
  github:   "https://github.com/Me-Rahul-Raj-R",
  leetcode: "https://leetcode.com/u/Rahul-Raj-R/",
};

// ── METRICS TICKER (4 animated numbers below Hero) ──────────
// CHANGE: Replaced SIH "1/15" with TCS CodeVita Rank 946
export const metrics = [
  {
    value: "946",
    suffix: "",
    label: "TCS CodeVita Global Rank",
    description: "Season 13 — worldwide TCS competition",
  },
  {
    value: "1000",
    suffix: "+",
    label: "Daily Transactions",
    description: "Handled across production systems",
  },
  {
    value: "150",
    suffix: "+",
    label: "LeetCode Problems",
    description: "Arrays, DP, Strings, Recursion",
  },
  {
    value: "85",
    suffix: "%+",
    label: "LeetCode Consistency",
    description: "Submission accuracy rate",
  },
];

// ── SKILLS ──────────────────────────────────────────────────
export const skills = [
  {
    category: "Languages",
    color:    "cyan",
    items:    ["Java (OOP, Collections, Multithreading)", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    color:    "violet",
    items:    ["HTML5", "CSS3", "React.js"],
  },
  {
    category: "Backend",
    color:    "emerald",
    items:    ["Node.js", "Express.js", "Fast-API", "REST APIs"],
  },
  {
    category: "Databases",
    color:    "amber",
    items:    ["MySQL (Schema Design, CRUD, Query Optimization)", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    color:    "indigo",
    items:    ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "ServiceNow"],
  },
  {
    category: "CS Concepts",
    color:    "pink",
    items:    ["Data Structures & Algorithms", "OOP", "Debugging", "Code Optimization"],
  },
];

// ── PROJECTS ────────────────────────────────────────────────
// CHANGE in EDUTRACK: SIH claim updated to "Top 20 Teams"
export const projects = [
  {
    id: 1,
    name:     "FINCOPILOT",
    subtitle: "Smart AI Financial Copilot",
    tech:     ["Java", "Fast-API", "HTML5", "JavaScript"],
    description:
      "AI-powered financial application delivering fraud detection at 95% accuracy across 10,000+ transactions. Java backend processes 500+ API requests per day, integrated with Fast-API middleware and a responsive HTML5/JavaScript dashboard for real-time expense tracking.",
    metrics: [
      "95% fraud detection accuracy",
      "10,000+ transactions processed",
      "500+ API requests / day",
    ],
    github:   "https://github.com/Me-Rahul-Raj-R/FINCOPILOT",
    featured: true,
  },
  {
    id: 2,
    name:     "EDUTRACK",
    subtitle: "Smart Attendance Management System",
    tech:     ["Java", "MySQL"],
    description:
      "QR code-based smart attendance system processing 200+ student records at 99.5% accuracy with real-time data synchronization. RESTful APIs cut attendance logging time by 60%. Selected in Top 20 teams at SIH 2025 Internal Hackathon.",
    // ↑ CHANGED: was "Awarded 1st place ... Rank 1 of 15" → now "Top 20 teams"
    metrics: [
      "99.5% attendance accuracy",
      "200+ student records",
      "60% faster logging",
      "🏆 SIH 2025 — Top 20 Teams",  // CHANGED from "Rank 1 / 15"
    ],
    github:   "https://github.com/Me-Rahul-Raj-R/v0-smart-attendance-app",
    featured: true,
  },
  {
    id: 3,
    name:     "Expense Tracker",
    subtitle: "Personal Finance Manager (MERN)",
    tech:     ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "Full-stack MERN finance tracker with JWT-based role-based access control supporting 500+ concurrent users. Integrated Chart.js-powered dashboards across 8 spending categories, enabling users to reduce average monthly expenses by 15%.",
    metrics: [
      "500+ concurrent users",
      "8 spending categories",
      "15% average expense reduction",
    ],
    github:   "https://github.com/Me-Rahul-Raj-R/endee",
    featured: false,
  },
  {
    id: 4,
    name:     "HAIRLOON",
    subtitle: "AI Hairstyle Recommendation System",
    tech:     ["HTML5", "CSS3", "JavaScript", "Machine Learning"],
    description:
      "ML-powered web application that recommends hairstyles with 85% accuracy from a curated database of 300+ styles. Integrated Geolocation API to locate salons within a 5 km radius, resulting in a 40% increase in user engagement metrics.",
    metrics: [
      "85% recommendation accuracy",
      "300+ hairstyle database",
      "40% user engagement increase",
    ],
    github:   "https://github.com/Me-Rahul-Raj-R/hair-style-prototype",
    featured: false,
  },
];

// ── EXPERIENCE ───────────────────────────────────────────────
export const experience = [
  {
    id:      1,
    role:    "ServiceNow Developer",
    company: "ServiceNow Virtual Internship Program",
    period:  "April 2026",
    type:    "Internship",
    bullets: [
      "Configured <strong>5+ automated workflows</strong>, reducing manual processing time by <strong>30%</strong>; designed and deployed <strong>3 operational reporting dashboards</strong>.",
      "Administered ITSM modules and system configurations for <strong>50+ administrators</strong> across 2 departments, ensuring reliable IT service delivery.",
    ],
  },
  {
    id:      2,
    role:    "Prompt Engineering Developer",
    company: "Future Interns",
    period:  "January 2026",
    type:    "Internship",
    bullets: [
      "Engineered <strong>20+ structured AI prompts</strong> that improved model output relevance from <strong>72% to 91%</strong>, enhancing overall AI response quality.",
      "Developed reusable prompt templates that reduced prompt engineering effort by <strong>50%</strong> for a team of <strong>8 members</strong>.",
    ],
  },
  {
    id:      3,
    role:    "Full Stack Developer (MERN)",
    company: "VIRUZVERSE Solutions",
    period:  "December 2025",
    type:    "Internship",
    bullets: [
      "Built <strong>3 full-stack production modules</strong> handling <strong>1,000+ daily transactions</strong> using MongoDB, Express.js, React.js, and Node.js.",
      "Implemented JWT-based authentication and RESTful APIs supporting <strong>5,000+ user records</strong> with role-based access control.",
      "Reduced application defects by <strong>40%</strong> through structured code reviews, refactoring, and performance optimization.",
    ],
  },
  {
    id:      4,
    role:    "Full Stack Developer Trainee",
    company: "Gateway Software Solutions",
    period:  "June 2025",
    type:    "Training",
    bullets: [
      "Completed <strong>15-day intensive training</strong> in Java backend development, HTML5, CSS3, and MySQL database integration.",
      "Built <strong>2 functional end-to-end applications</strong> with complete frontend-to-database data flow using REST architecture.",
    ],
  },
];

// ── ACHIEVEMENTS ─────────────────────────────────────────────
// CHANGES:
//   1. SIH updated from "1st / 15" → "Top 20"
//   2. TCS CodeVita Season 13 — Rank 946 ADDED (NEW)
export const achievements = [
  {
    id:          1,
    icon:        "🏆",
    highlight:   "Top 20",                   // CHANGED (was "1st / 15")
    title:       "SIH 2025 Internal Hackathon",
    description:
      "EDUTRACK Smart Attendance System ranked in the Top 20 teams at SIH 2025 Internal Hackathon — a QR-code based Java & MySQL solution achieving 99.5% attendance accuracy.",
  },
  {
    id:          2,
    icon:        "🎯",
    highlight:   "Rank #946",                // NEW — TCS CodeVita
    title:       "TCS CodeVita Season 13",
    description:
      "Secured Global Rank 946 in TCS CodeVita Season 13 — Tata Consultancy Services' worldwide competitive programming contest, awarded for showcasing exceptional coding skills.",
  },
  {
    id:          3,
    icon:        "🚀",
    highlight:   "Round 2",
    title:       "Cognizant Technoverse Hackathon",
    description:
      "Advanced to Round 2 of the national-level Cognizant Technoverse contest, competing against 1,000+ initial applicants.",
  },
  {
    id:          4,
    icon:        "💡",
    highlight:   "150+ | 85%+",
    title:       "LeetCode Problem Solver",
    description:
      "Solved 150+ problems spanning Arrays, Strings, Recursion, and Dynamic Programming with an 85%+ submission consistency rate.",
  },
];

// ── EDUCATION ───────────────────────────────────────────────
export const education = [
  {
    id:          1,
    degree:      "B.E. in Computer Science & Engineering",
    institution: "V.S.B. College of Engineering, Coimbatore",
    period:      "2023 – 2027",
    score:       "CGPA: 8.585 / 10.0",
    current:     true,
  },
  {
    id:          2,
    degree:      "Higher Secondary Certificate (HSC)",
    institution: "Our Lady of Lourdes Mat. Hr. Sec. School, Pollachi",
    period:      "2021 – 2023",
    score:       "81%",
    current:     false,
  },
];

// ── CERTIFICATIONS ───────────────────────────────────────────
export const certifications = [
  { id: 1, name: "Full Stack Development",          issuer: "Novi-Tech R&D PVT. Ltd.", year: "2026",        color: "cyan"    },
  { id: 2, name: "Critical Thinking in the AI Era", issuer: "HP LIFE",                 year: "2026",        color: "indigo"  },
  { id: 3, name: "Java Programming Fundamentals",   issuer: "Scaler Academy",          year: "2025 – 2026", color: "emerald" },
  { id: 4, name: "AI for Web Development",          issuer: "Simplilearn",             year: "2025",        color: "violet"  },
  { id: 5, name: "Cloud Computing Essentials",      issuer: "NPTEL",                   year: "2024",        color: "amber"   },
];
