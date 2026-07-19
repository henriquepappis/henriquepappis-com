export type Locale = "pt" | "en";

export type Profile = {
  name: string;
  title: string;
  location: string;
  phone: string;
  whatsappUrl: string;
  email: string;
  linkedinLabel: string;
  linkedinUrl: string;
  pcd: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  duration?: string;
  location?: string;
  bullets?: string[];
};

export type PersonalProject = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
};

export type InternationalExperience = {
  period: string;
  location: string;
  description: string;
  volunteer: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type Courses = {
  institution: string;
  completed: string[];
  inProgress: string[];
};

export type StackGroup = {
  category: string;
  items: string[];
};

export type Language = {
  name: string;
  level: string;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
};

export type UiCopy = {
  nav: {
    about: string;
    experience: string;
    education: string;
    projects: string;
    stack: string;
    contact: string;
  };
  sections: {
    about: SectionCopy;
    experience: SectionCopy;
    education: SectionCopy;
    courses: SectionCopy & { completed: string; inProgress: string };
    international: SectionCopy;
    projects: SectionCopy;
    stack: SectionCopy;
    languages: SectionCopy;
    contact: SectionCopy;
  };
  themeToggleLabel: string;
  localeToggleLabel: string;
};

export type ContentShape = {
  htmlLang: string;
  pageTitle: string;
  pageDescription: string;
  ui: UiCopy;
  profile: Profile;
  summary: string;
  experience: Experience[];
  personalProjects: PersonalProject[];
  internationalExperience: InternationalExperience;
  education: Education[];
  courses: Courses;
  stack: StackGroup[];
  languages: Language[];
};
