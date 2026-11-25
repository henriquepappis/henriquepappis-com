import type { ContentShape } from "./types";

export const en: ContentShape = {
  htmlLang: "en",
  pageTitle: "Henrique Pappis · Senior PHP Developer",
  pageDescription:
    "Senior PHP Developer with more than 15 years of experience in backend development, REST APIs, and scalable systems. Laravel, MySQL, Docker.",

  ui: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
      toggleMenu: "Toggle navigation menu",
    },
    sections: {
      about: { eyebrow: "01 · Profile", title: "About" },
      experience: { eyebrow: "02 · Career", title: "Experience" },
      education: { eyebrow: "03 · Education", title: "Academic Background" },
      courses: {
        eyebrow: "04 · Courses",
        title: "Additional Courses",
        completed: "Completed",
        inProgress: "In progress",
      },
      international: {
        eyebrow: "05 · International Experience",
        title: "Exchange & Volunteering",
      },
      projects: { eyebrow: "06 · Projects", title: "Personal Projects" },
      stack: { eyebrow: "07 · Toolbox", title: "Tech Stack" },
      languages: { eyebrow: "08 · Languages", title: "Languages" },
      contact: { eyebrow: "09 · Contact", title: "Let's talk" },
    },
    downloadCv: "Download CV (PDF)",
    cv: {
      summary: "Professional summary",
      experience: "Professional experience",
      education: "Education",
      courses: "Courses",
      completed: "Completed",
      skills: "Technical skills",
      languages: "Languages",
      international: "International experience",
    },
    themeToggleLabel: "Toggle light/dark theme",
    localeToggleLabel: "Toggle site language",
  },

  profile: {
    name: "Henrique Pappis",
    title: "Senior PHP Developer | Laravel | REST APIs | Technical Leadership | Cloud",
    location: "Recife, Pernambuco, Brazil",
    phone: "(81) 98660-0535",
    whatsappUrl: "https://wa.me/5581986600535",
    email: "contact@henriquepappis.com",
    linkedinLabel: "linkedin.com/in/henriquepappis",
    linkedinUrl: "https://linkedin.com/in/henriquepappis",
    pcd: "PWD",
    cvUrl: "/CV-Henrique-Pappis-en.pdf",
  },

  summary: `Senior PHP Developer with more than 15 years of experience in backend development, REST APIs, and modernizing mission-critical systems, with a specialization in Laravel and solid command of other frameworks in the PHP ecosystem (Symfony, Laminas, Mezzio, Yii, CodeIgniter). I've provided technical leadership for multidisciplinary teams, including an international stint in Portugal as Tech Lead, where I scaled a ticket-sales platform from 5,000 to 100,000 concurrent users. I've built and maintained systems used by tens of thousands of companies, from a tax-compliance SaaS platform to critical financial systems for city governments and oversight bodies, always with a focus on integrations, messaging, observability, and containerized infrastructure (Docker, Kubernetes). I work autonomously between engineering and product teams, combining code quality, performance, and compliance (PCI, ITIL) to deliver solutions that solve real business problems.`,

  experience: [
    {
      company: "Netra Tecnologia",
      role: "Senior Systems Analyst",
      period: "January 2026 – present",
      location: "Recife, PE",
      bullets: [
        "Responsible for internal process automation at the Special Projects Office of Recife's City Hall, using PHP, Oracle, Jenkins, and GitHub.",
        "Cut processing time by 60% for events 2010, 4010, and 4020 of EFD-Reinf, a mandatory Brazilian tax-reporting system.",
        "Improved the bank reconciliation process for expenses and the city's single treasury account statement, cutting manual reconciliation time from 10 days to 1 hour and increasing the reliability of financial data.",
        "Built, from scratch, the parliamentary earmarks control system required by the Pernambuco State Court of Auditors (TCE/PE), ensuring regulatory compliance.",
      ],
    },
    {
      company: "ZONE SOFT",
      role: "Technical Lead",
      period: "April 2024 – July 2025",
      duration: "1y4mo",
      location: "Portugal",
      bullets: [
        "Provided hands-on technical leadership for the backend of Zicket (zicket.pt), a real-time ticket-sales platform.",
        "Scaled the codebase and infrastructure from 5,000 to 100,000 concurrent users, sustaining traffic spikes during major events such as MotoGP and Queima das Fitas (a large Portuguese university festival), with zero critical incidents during the year's 3 biggest events.",
        "Reduced the platform's real-time transaction response time.",
        "Led a team of 8 professionals organized into multidisciplinary squads.",
        "Defined quality standards and architectural decisions, driving the modernization of legacy code.",
      ],
    },
    {
      company: "ACP Group",
      role: "Senior Systems Analyst",
      period: "May 2023 – April 2024",
      duration: "1y",
      location: "Recife, PE",
      bullets: [
        "Developed the backend for mission-critical government systems at Recife City Hall's Finance Department, processing accounts for approximately 15 municipal departments, applying public-sector financial and administrative business rules.",
        "Integrated the system with Oracle and automated deployments via Jenkins.",
      ],
    },
    {
      company: "Qive (formerly Arquivei)",
      role: "Backend Engineer",
      period: "June 2022 – April 2023",
      duration: "11mo",
      location: "Recife, PE",
      bullets: [
        "Worked on development and maintenance of a tax-document SaaS platform used by more than 130,000 companies (by Brazilian tax ID, CNPJ) across Brazil, owning the full deploy and monitoring cycle on GCP with observability via Prometheus, Grafana, and Kibana.",
        "Maintained legacy monoliths in PHP (Zend/Laravel) with PostgreSQL and BigQuery, also working with messaging via Kafka and GCP Pub/Sub, unit and integration testing, in agile teams using Scrum/Kanban.",
      ],
    },
    {
      company: "Datum TI",
      role: "Senior Full-stack Developer",
      period: "May 2021 – June 2022",
      duration: "1y2mo",
      location: "Porto Alegre, RS",
      bullets: [
        "Developed a corporate scheduling system for security patches across roughly 3,000 servers in Linux, Windows, and AIX environments, adhering to PCI compliance.",
        "Worked with PHP and Oracle in a structured corporate environment, following formal development and QA sign-off processes.",
      ],
    },
    {
      company: "Incoders Tecnologia",
      role: "PHP Software Developer",
      period: "September 2019 – April 2021",
      duration: "1y8mo",
      location: "Porto Alegre, RS",
      bullets: [
        "Developed the financial module for Guarida Imóveis, processing roughly 100,000 transactions per month with high reliability, using APIs and applications built with Laminas, Mezzio, Symfony, and Doctrine.",
        "Led the migration of the authentication system to OAuth2.",
        "Worked with MySQL, PostgreSQL, Docker, and Kubernetes across the applications' full development and deployment cycle.",
      ],
    },
    {
      company: "Simers",
      role: "Systems Analyst / Developer",
      period: "October 2016 – September 2019",
      duration: "3y",
      location: "Porto Alegre, RS",
      bullets: [
        "Built, end-to-end, a financial charges system that processed more than 15,000 transactions per day, in PHP and Laravel, automating a previously manual, multi-tool process, with normalization, validation, and full transaction auditing, in a containerized environment with Docker and Kubernetes.",
        "Built applications in Yii and CodeIgniter, with third-party system integrations and MySQL.",
      ],
    },
    {
      company: "Sescon/RS",
      role: "PHP Programmer",
      period: "July 2008 – July 2014",
      duration: "6y1mo",
      bullets: [
        "Developed a management accounting-indicators application used by 14,000 companies affiliated with the accountants' trade association, built for PGQP/RS (Rio Grande do Sul's Quality and Productivity Program).",
        "Provided technical support and development in PHP, MySQL, and SQL Server, following ITIL processes.",
      ],
    },
    {
      company: "Federação dos Círculos Operários do RS",
      role: "PHP Programmer",
      period: "September 2007 – January 2008",
      duration: "5mo",
      bullets: [
        "Developed the institutional website for the Federation and for the Santo Inácio Technical School, which it maintains, in PHP/MySQL.",
        "Built a new student portal entirely from scratch, serving around 2,000 students.",
      ],
    },
  ],

  personalProjects: [
    {
      name: "Narrare",
      tagline: "Custom market research for your business",
      description:
        "SaaS market-research platform with a form builder, response collection, and report generation.",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      name: "Trotula",
      tagline: "Online scheduling for clinics",
      description:
        "Scheduling and management system for clinics, with automatic appointment reminders and confirmations.",
      stack: ["Laravel", "PHP", "MySQL"],
    },
    {
      name: "Comedere",
      tagline: "QR-code self-service for bars and restaurants",
      description:
        "Digital menu and self-service ordering app via table QR code, with real-time order tracking.",
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    },
  ],

  internationalExperience: {
    period: "June 2015 – June 2016",
    location: "Ireland",
    description:
      "Exchange program at Erin College (Ireland), completing the General English course at the Advanced level, to build advanced fluency and adapt to multinational environments. Also worked in fields unrelated to technology.",
    volunteer:
      "Volunteer sales assistant at Gorta Shop, a charity shop run by Self Help Africa (International Development Organisation).",
  },

  education: [
    {
      degree: "Postgraduate Certificate in Object-Oriented Development with Java",
      institution: "Estácio",
      period: "2026–2027 (in progress)",
    },
    {
      degree: "Postgraduate Certificate in Software Engineering",
      institution: "Faculdade Unyleya",
      period: "2019–2021",
    },
    {
      degree: "Information Systems (Bachelor's Degree)",
      institution: "Faculdade Dom Bosco",
      period: "2004–2012",
    },
  ],

  courses: {
    institution: "IFRS (Federal Institute of Rio Grande do Sul)",
    completed: [
      "Software Project Management with PMBOK: Essential Guide for Beginners",
      "Web Systems Design",
      "Scrum: Managing Software Projects with Agility",
    ],
    inProgress: [
      "Strategic Management",
      "People Management: Concepts and Processes",
      "Time Management and Organization",
      "Leadership and Teamwork",
      "Entrepreneurship Track: Organizing Your Idea to Start a Business",
    ],
  },

  stack: [
    {
      category: "Backend",
      items: ["PHP", "Laravel", "Symfony", "Laminas", "Mezzio", "Yii", "CodeIgniter"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server"],
    },
    {
      category: "Infra / DevOps",
      items: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "GCP"],
    },
    {
      category: "Architecture",
      items: [
        "REST APIs",
        "Messaging",
        "Kafka",
        "GCP Pub/Sub",
        "Observability",
        "Distributed systems",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    },
    {
      category: "Node.js",
      items: ["Node.js", "Fastify", "NestJS", "Prisma"],
    },
    {
      category: "Cloud & Hosting",
      items: [
        "Oracle Cloud (OCI)",
        "Cloudflare (DNS, R2, Email Routing)",
        "Coolify (self-hosted PaaS)",
        "Traefik",
        "Automated backups (pg_dump → R2)",
      ],
    },
    {
      category: "Payments & Integrations",
      items: [
        "Recurring payments & subscriptions",
        "Transactional email",
        "JWT authentication",
        "Real-time WebSockets",
      ],
    },
  ],

  languages: [
    { name: "Portuguese", level: "Native / bilingual" },
    { name: "English", level: "Professional fluency" },
    { name: "Spanish", level: "Basic" },
  ],
};
