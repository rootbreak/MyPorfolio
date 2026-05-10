/**
 * data.js
 * Toda la información del CV centralizada aquí.
 * Editar este archivo para actualizar el portfolio sin tocar los componentes.
 */

export const personal = {
  name: "Miguel Ángel",
  lastName: "Mejía Mateo",
  title: "Técnico en Soporte Informático",
  subtitle: "Estudiante de Ingeniería en Software",
  location: "Yaguate, San Cristóbal · Rep. Dominicana",
  email: "miguelangelmejiamateo@gmail.com",
  phone: "+1 (829) 276 0743",
  born: "31/05/2004",
  nationality: "Dominicano",
  bio: "Técnico en soporte informático con formación en administración y desarrollo de aplicaciones. Orientado al trabajo en equipo, con atención al detalle y alto sentido de responsabilidad. Apasionado por la tecnología y en constante crecimiento profesional.",
}

export const experience = [
  {
    id: 1,
    role: "Material Handler",
    company: "Baxter Healthcare",
    period: "03/2024 – 01/2026",
    current: false,
    highlights: [
      "Abastecí 15–16 materiales a 20 estaciones de trabajo por turno",
      "Registré y validé datos de producción en el sistema interno",
      "Verifiqué materiales y realicé conciliaciones durante cambios de lote",
      "Trabajo en equipo para mantener orden y control operativo",
    ],
    tags: ["Gestión de datos", "Control operativo", "Trabajo en equipo"],
  },
  {
    id: 2,
    role: "Soporte Técnico",
    company: "Acevedo Data Technology",
    period: "12/2022 – 01/2024",
    current: false,
    highlights: [
      "Soporte técnico básico a usuarios en equipos de cómputo",
      "Instalé y configuré Windows 7, 8, 10, 11 y Linux (Ubuntu)",
      "Instalación de drivers, software de ofimática y configuración de equipos",
      "Mantenimiento básico de computadoras de escritorio y laptops",
    ],
    tags: ["Windows", "Linux", "Hardware", "Soporte"],
  },
  {
    id: 3,
    role: "Soporte Informático",
    company: "Miscelania Ella y Yo",
    period: "Freelance",
    current: false,
    highlights: [
      "Soporte técnico a los distintos equipos del negocio",
      "Configuración de SO e instalación de software",
      "Mantenimiento preventivo a equipos",
    ],
    tags: ["Freelance", "Mantenimiento", "Configuración"],
  },
  {
    id: 4,
    role: "Censador",
    company: "Oficina Nacional de Estadística (ONE)",
    period: "Voluntario",
    current: false,
    highlights: [
      "Recolecté información de hogares durante el Censo Nacional",
      "Utilicé tablet y sistema digital para captura de datos",
      "Cumplí protocolos establecidos tras capacitación previa",
    ],
    tags: ["Datos", "Voluntariado", "Trabajo de campo"],
  },
]

export const education = [
  {
    id: 1,
    degree: "Ingeniería en Software",
    institution: "Universidad del Caribe (UNICARIBE)",
    period: "02/2023 – Presente",
    current: true,
  },
  {
    id: 2,
    degree: "Técnico en Administración y Desarrollo de Aplicaciones Informáticas",
    institution: "Politécnico Ana Lilliams Miranda",
    period: "2019 – 2022",
    current: false,
  },
  {
    id: 3,
    degree: "Bachillerato",
    institution: "Liceo Secundario Ana Lilliams Miranda",
    period: "2018 – 2019",
    current: false,
  },
]

export const certifications = [
  {
    id: 1,
    name: "Introducción a la Programación",
    issuer: "ITLA",
    description: "Fundamentos, lógica computacional y C++",
  },
  {
    id: 2,
    name: "Servicios Auxiliares en Ciberseguridad",
    issuer: "INFOTEP",
    description: "Principios de ciberseguridad y seguridad de redes",
  },
  {
    id: 3,
    name: "Introduction to Secure Networking",
    issuer: "Microsoft · Coursera",
    description: "Redes seguras y protocolos de seguridad",
  },
  {
    id: 4,
    name: "Internet History, Technology & Security",
    issuer: "University of Michigan · Coursera",
    description: "Historia y fundamentos de internet",
  },
  {
    id: 5,
    name: "Networking Fundamentals",
    issuer: "Akamai Technologies · Coursera",
    description: "Fundamentos de redes y arquitectura",
  },
]

export const skills = {
  technical: [
    { name: "Windows (7/8/10/11)", level: 90 },
    { name: "Linux (Ubuntu)", level: 75 },
    { name: "Soporte Técnico", level: 85 },
    { name: "Redes & Networking", level: 65 },
    { name: "C++ / Programación", level: 55 },
    { name: "Ciberseguridad", level: 50 },
  ],
  soft: [
    "Adaptabilidad",
    "Trabajo en equipo",
    "Pensamiento crítico",
    "Resolución de problemas",
    "Atención al detalle",
    "Responsabilidad",
  ],
}
