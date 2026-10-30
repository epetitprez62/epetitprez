import { Icons } from "@/components/icons";
import { House } from "lucide-react";
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
    cv: {order: 2, enabled: true, heading: "CV"},
    work: { order: 3, enabled: true, heading: "Expérience professionnelle", presentLabel: "Présent" },
    education: { order: 4, enabled: true, heading: "Éducation" },
    skills: { order: 5, enabled: true, heading: "Compétences" },
    pitch: {order: 6, enabled: true, heading: "Elevator Pitch"},
    projects: {
      order: 7, enabled: true,
      label: "Mes Projets",
      heading: "Mes derniers travaux",
      text: "J'ai travaillé sur divers projets durant ma scolarité, en voici une sélection",
    },
    
    photos: {
      order: 8, enabled: true,
      heading: "Mes récents voyages",
    },
    contact: {
      order: 9, enabled: true,
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
  { href: "#hero", icon: House, label: "Home" },
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

  cv: [
    {
    language: "Français",
    href: "/epetitprez/cv_fr_eliot.odt",
  },
  {
    language: "English",
    href: "/epetitprez/cv_fr_eliot.odt",
  },
  ],
  
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

  pitch:[
    { src: "/epetitprez/photos/pitch_remplacement.mp4", alt: "Elevator Pitch" },
    ],


    
   projects: [

    {
      title: "Modélisation informatique de la sélection naturelle",
      href: "/epetitprez/PETITPREZ_Eliot_MCOT_scei.pdf",
      dates: " Décembre 2024 - Juillet 2026",
      active: true,
      description:
        "Projet relatif aux concours de CPGE, j'ai observé l'émergence de la locomotion terrestre via une simulation informatique de la sélection naturelle reposant sur les algorithmes évolutifs.",
      technologies: [
        "Python",
        "Algorithmie",
      ],
      links: [
        {
          type: "PDF",
          href: "/epetitprez/PETITPREZ_Eliot_MCOT_scei.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/epetitprez/photos/tipe_crea.png",
      video: "",
    },
     

     {
      title: "Nuit du code",
      href: "https://lyceestpaul-lens.fr/la-vie-au-lycee-saint-paul/articles/la-nuit-du-code-edition-2024/",
      dates: "Juin 2024",
      active: true,
      description:
        "Travail de groupe de 6 h pour coder un jeu avec scratch ou python. Cet évènement encourage la collaboration, la créativité, l’innovation, offrant aux participants une opportunité unique de démontrer leurs compétences en informatique.",
      technologies: [
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://lyceestpaul-lens.fr/la-vie-au-lycee-saint-paul/articles/la-nuit-du-code-edition-2024/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/epetitprez/photos/nuitducode.png",
      video: "",
    },


     {
      title: "Préparation certification LPI",
      href: "https://lyceestpaul-lens.fr/la-vie-au-lycee-saint-paul/articles/nos-professeurs-en-nsi-devoues-pour-preparer-des-eleves-a-la-1ere-certification-linux/",
      dates: "Février 2024",
      active: true,
      description:
        "Cette formation a eu pour but d’initier à un système fortement utilisé en entreprise, et de préparer à la première certification LPI (Linux Professionnal Institute Essentials).",
      technologies: [
        "Linux",
      ],
      links: [
        {
          type: "Website",
          href: "https://lyceestpaul-lens.fr/la-vie-au-lycee-saint-paul/articles/nos-professeurs-en-nsi-devoues-pour-preparer-des-eleves-a-la-1ere-certification-linux/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/epetitprez/photos/preparationlinux.png",
      video: "",
    },
  ],
} as const;
