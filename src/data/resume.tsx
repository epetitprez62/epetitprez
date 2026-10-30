import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "Eliot Petitprez - Élève Ingénieur",
  initials: "EP",
  url: "https://epetitprez.io",
  location: "Toulouse, France",
  locationLink: "https://www.google.com/maps/place/Toulouse+INP-ENSEEIHT/@43.6021194,1.455808,17z/data=!3m1!4b1!4m6!3m5!1s0x12aebc90e5abb5e5:0x3affd3008b8b9f03!8m2!3d43.6021194!4d1.455808!16zL20vMDRxd25m?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Élève de première année à l'ENSEEIHT dans le département MF2E (Mécanique des Fluides, Énergétique et Environnement). La conception d'infrastructures énergétiques m'intéressent grandement",
  summary:
    "J'ai effectué une classe préparatoire MPI (Mathématiques, Physique et Informatique) ce qui m'a fait comprendre que l'informatique me déplaisait et que je cherchais de quelque chose de plus concret. C'est en discutant avec des professionnels du métier que l'ingénierie énergetique m'a séduit.",
  avatarUrl: "/epetitprez/photo_eliot.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "À propos" },
    work: { order: 2, enabled: true, heading: "Expérience professionnelle", presentLabel: "Présent" },
    education: { order: 3, enabled: true, heading: "Éducation" },
    skills: { order: 4, enabled: true, heading: "Compétences" },
    projects: {
      order: 5, enabled: true,
      label: "Mes Projets",
      heading: "Mes derniers travaux",
      text: "J'ai travaillé sur divers projets durant ma scolarité, voici une sélection de mes préférés.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "Mes récents voyages",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Restons en contact!",
      text: "Envie de me joindre? Envoie moi un message LinkedIn ou un mail!",
    },
  },
  photos: [
    { src: "/epetitprez/photos/islande_cascadetexte.png", alt: "Svartifoss (Islande)" },
    { src: "/epetitprez/photos/islande_cabanon.jpg", alt: "Islande" },
    { src: "/epetitprez/photos/monumentvalleytexte.png", alt: "Monument Valley (USA)" },
    { src: "/epetitprez/photos/gr20texte.png", alt: "Sentier GR20" },
    { src: "/epetitprez/photos/boutdefrancetexte.png", alt: "Petit bout de France" },
    { src: "/epetitprez/photos/villelumiere.png", alt: "Paris, Ville Lumière" },
  ],
  skills: [
  { name: "Python", icon: Python },
  { name: "C", icon: "/epetitprez/photos/langage_c.png" },
  { name: "OCaml", icon: "/epetitprez/photos/langage_ocaml.jpg" },
],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "eliot.petitprez@gmail.com",
    tel: "+1 512 000 0000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/epetitprez62",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eliot-petitprez-304b90292/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/e_ptz62",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:eliot.petitprez@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Finances publiques",
      href: "https://www.impots.gouv.fr/accueil",
      badges: [],
      location: "Arras, France",
      title: "Vacataire",
      logoUrl: "/epetitprez/photos/finances_publiques_logo.png",
      start: "Août 2024",
      end: "Août 2024",
      description:
        "Découverte du système administratif français.",
    },
    {
      company: "SARL Jourdain",
      badges: [],
      location: "Nord, France",
      title: "Moisson",
      logoUrl: "/epetitprez/photos/agriculture_logo.jpg",
      start: "Juillet 2023",
      end: "Août 2023",
      description:
        "Accueil des agriculteurs, prélèvement et analyse de leurs céréales ainsi que gestion du dépôt. Ce travail recquiert de l'adaptation et beaucoup d'heures.",
    },
    {
      company: "UNIS",
      href: "https://www.unis.fr/",
      badges: [],
      location: "Lille",
      title: "Stage ingénieur informatique",
      logoUrl: "/epetitprez/photos/unis_logo.jpg",
      start: "Juin 2020",
      end: "Juillet 2020",
      description:
        "Intégration d'une jeune équipe de développeurs. Analyse et compréhension du métier d'ingénieur développeur.",
    },
    
  ],
  education: [
    {
      school: "ENSEEIHT",
      href: "https://www.enseeiht.fr/fr/index.html",
      degree: "Ingénieur Mécanique et Génie Hydraulique",
      logoUrl: "/epetitprez/photos/Logo_n7_inp.png",
      start: "2026",
      end: "2029",
    },
    {
      school: "Lycée Faidherbe",
      href: "https://www.faidherbe.org/",
      degree: "CPGE filière MPI",
      logoUrl: "/epetitprez/photos/faidherbe_logo.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "Lycée Saint Paul",
      href: "https://lyceestpaul-lens.fr/",
      degree: "Baccalauréat",
      logoUrl: "/epetitprez/photos/stpaul_logo.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Stackwise",
      href: "https://stackwise.dev",
      dates: "March 2024 - Present",
      active: true,
      description:
        "Built an AI-powered code review tool that integrates with GitHub PRs and provides context-aware feedback based on your team's codebase conventions. Used by 300+ engineering teams.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://stackwise.dev",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/example-website.webp",
      video: "",
    },




    
    {
      title: "Logport",
      href: "https://logport.io",
      dates: "October 2023 - February 2024",
      active: true,
      description:
        "Open-source structured logging dashboard for Node.js and Python services. Ingest logs via a lightweight SDK, query them with a SQL-like syntax, and set up alerts in minutes.",
      technologies: [
        "Next.js",
        "TypeScript",
        "ClickHouse",
        "TailwindCSS",
        "Shadcn UI",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://logport.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alexmercer-dev/logport",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Formbase",
      href: "https://formbase.dev",
      dates: "June 2023 - September 2023",
      active: true,
      description:
        "A headless form backend that handles submissions, spam filtering, file uploads, and email notifications - no server required. Drop in one script tag and you're done.",
      technologies: [
        "Astro",
        "TypeScript",
        "Cloudflare Workers",
        "TailwindCSS",
        "Stripe",
        "Resend",
      ],
      links: [
        {
          type: "Website",
          href: "https://formbase.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alexmercer-dev/formbase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/example-website.png",
      video: "",
    },
    {
      title: "Patchwork",
      href: "https://patchwork.run",
      dates: "February 2023 - May 2023",
      active: false,
      description:
        "A visual diff tool for design tokens and Tailwind config changes. Connect it to your repo and get a live preview of how a config change affects every component in your design system.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://patchwork.run",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
}
     as const;
