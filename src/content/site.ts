export type NavItem = {
  id: string;
  href: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  tone: string;
  icon: "pen" | "monitor" | "palette" | "megaphone";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  stack: string[];
  repoUrl?: string;
  art: "dashboard" | "travel" | "brand";
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  tone: string;
};

export const site = {
  name: "Raj Sanja",
  logo: "Raj.",
  role: "Creative Designer",
  handle: "rajsanja",
  github: "https://github.com/rajsanja",
  copyrightYear: 2026,
  availability: "Available for new projects",
  description:
    "Raj Sanja is a creative designer who builds digital experiences that people love.",
  nav: [
    { id: "home", href: "/#home", label: "Home" },
    { id: "about", href: "/#about", label: "About" },
    { id: "services", href: "/#services", label: "Services" },
    { id: "work", href: "/#work", label: "Work" },
    { id: "testimonials", href: "/#testimonials", label: "Testimonials" },
    { id: "contact", href: "/#contact", label: "Contact" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Hello, I'm",
    name: "Raj Sanja",
    summary:
      "I help brands and businesses turn ideas into beautiful, high-performing digital products.",
  },
  about: {
    eyebrow: "About me",
    title: "Turning Ideas Into Meaningful Experiences",
    body: "I'm Raj, a multidisciplinary designer based in Pakistan, passionate about creating clean, modern and user-focused digital experiences. I combine strategy, design and technology to help brands grow and make a real impact.",
  },
  stats: [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years of Experience" },
  ],
  services: [
    {
      title: "UI/UX Design",
      description: "Creating user-friendly interfaces and seamless digital experiences.",
      tone: "#f8ecdf",
      icon: "pen",
    },
    {
      title: "Web Development",
      description: "Building fast, modern and responsive websites that perform.",
      tone: "#e7f1fb",
      icon: "monitor",
    },
    {
      title: "Brand Identity",
      description: "Designing unique brand identities that make a lasting impression.",
      tone: "#e7f6ea",
      icon: "palette",
    },
    {
      title: "Digital Marketing",
      description: "Helping brands grow through strategic and creative marketing.",
      tone: "#f7f4dc",
      icon: "megaphone",
    },
  ] satisfies Service[],
  projects: [
    {
      slug: "modern-dashboard",
      title: "Modern Dashboard",
      category: "Web App Design",
      summary: "A clean product dashboard with a quiet sidebar, summary cards, and a readable chart.",
      details: [
        "A web app design for a product dashboard. The screen keeps navigation, daily numbers, and the chart in one calm layout.",
        "Spacing, type, and color stay quiet so the numbers stay easy to scan.",
      ],
      stack: ["UI design", "Dashboard", "Responsive"],
      art: "dashboard",
    },
    {
      slug: "travel-mobile-app",
      title: "Travel Mobile App",
      category: "UI/UX Design",
      summary: "A mobile travel screen with a large destination photo, a short itinerary, and a clear booking action.",
      details: [
        "A mobile interface study for a travel app. The first screen leads with the destination, then the trip details.",
        "The layout is built for a phone: one column, a large photo, and a single primary action.",
      ],
      stack: ["UI/UX", "Mobile", "Travel"],
      art: "travel",
    },
    {
      slug: "brand-identity",
      title: "Brand Identity",
      category: "Branding",
      summary: "A small identity set for Lumo: wordmark, dark green packaging, and a cream product card.",
      details: [
        "A brand board for Lumo. The set uses a short wordmark, deep green packaging, and a warm cream ground.",
        "The arrangement is a still life of the product line, not a launched storefront.",
      ],
      stack: ["Brand", "Packaging", "Typography"],
      art: "brand",
    },
  ] as Project[],
  testimonials: [
    {
      quote:
        "Raj is a fantastic designer! He understood my vision perfectly and delivered beyond expectations.",
      name: "Ahmed Raza",
      role: "Founder, TechHive",
      tone: "#d7e6d4",
    },
    {
      quote:
        "Professional, creative and reliable. The whole process was smooth and the results were outstanding.",
      name: "Sara Khan",
      role: "Marketing Manager",
      tone: "#f8ecdf",
    },
    {
      quote:
        "Amazing work and great communication. Highly recommended for anyone looking for quality design.",
      name: "Bilal Ahmed",
      role: "CEO, BrightLab",
      tone: "#e7f1fb",
    },
  ] satisfies Testimonial[],
};

export function getProject(slug: string) {
  return site.projects.find((project) => project.slug === slug);
}
