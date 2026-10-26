import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";

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
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
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
    { name: "Astro", icon: Astro },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
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

  
  ],
} as const;
