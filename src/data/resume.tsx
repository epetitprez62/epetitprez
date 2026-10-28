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
      order: 7, enabled: true,
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
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
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

  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description: "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "January 15th - 16th, 2022",
      location: "Vancouver, BC",
      description: "Created an accessibility-first browser extension that rewrites complex legal documents into plain English using GPT-3.",
      image: "https://avatar.vercel.sh/nwhacks-2022?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2021",
      dates: "September 17th - 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description: "Built a distributed key-value store in Go with a Raft consensus implementation from scratch. Finalist in the systems track.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
      ],
    },
    {
      title: "DubHacks 2021",
      dates: "October 9th - 10th, 2021",
      location: "Seattle, Washington",
      description: "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "April 24th - 25th, 2021",
      location: "Burnaby, BC (Remote)",
      description: "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/bugout",
        },
      ],
    },
    {
      title: "HackCamp 2020",
      dates: "November 14th - 15th, 2020",
      location: "Vancouver, BC (Remote)",
      description: "Created a CLI tool that automatically generates unit test scaffolding from TypeScript function signatures using static analysis.",
      image: "https://avatar.vercel.sh/hackcamp-2020?size=40",
      win: "1st Place Overall",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/testgen",
        },
      ],
  
    },
    {
      title: "cmd-f 2020",
      dates: "March 7th - 8th, 2020",
      location: "Vancouver, BC",
      description: "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "January 11th - 12th, 2020",
      location: "Vancouver, BC",
      description: "Developed a peer-to-peer study session platform with live video, shared whiteboards, and Pomodoro timers.",
      image: "https://avatar.vercel.sh/nwhacks-2020?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2019",
      dates: "September 13th - 15th, 2019",
      location: "Waterloo, Ontario",
      description: "Built an API rate-limit visualizer that tracks usage across multiple providers and surfaces anomalies in real time.",
      image: "https://avatar.vercel.sh/hackthenorth-2019?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/ratelens",
        },
      ],
    },
    {
      title: "DeltaHacks V",
      dates: "January 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description: "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],

} as const;
