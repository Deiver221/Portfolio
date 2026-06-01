export const languages = {
  en: "EN",
  es: "ES",
} as const

export type Language = keyof typeof languages

export const defaultLang: Language = "en"

export const translations = {
  en: {
    // Navbar
    nav: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    // Hero
    hero: {
      available: "Available for work",
      title: "Hey, I'm",
      description: "Aspiring Backend Developer specializing in Laravel and PHP. Building real-world applications and seeking my first professional opportunity.",
      contact: "Contact me",
    },
    // Projects
    projects: {
      title: "Projects",
      code: "Code",
      preview: "Preview",
      note: "⚠️ Demo Notice",
      items: [
        {
          title: "Vehicle Rental Management System",
          description: [
            "Vehicle rental management web application that allows users to browse available cars, make reservations, and manage rental operations.",
            "I developed the backend with Laravel, implementing business logic, database relationships, and APIs for communication with the React frontend."
          ],
          note: "This project is hosted on Render's free plan. The server may take up to 30 seconds to activate after a period of inactivity.",
        },
        {
          title: "AI-Powered Vehicle Finder",
          description: [
            "Web application that enables users to search for vehicles using natural language, interpreting user intent to provide personalized recommendations.",
            "I implemented the backend with Laravel, integrating the Groq API for query processing and dynamic response building, along with a React and Tailwind CSS frontend."
          ],
          note: "This project is hosted on Render's free plan. The server may take up to 30 seconds to activate after a period of inactivity.",
        }
      ]
    },
    // About
    about: {
      title: "About me",
      paragraphs: [
        "I started programming in 2019 out of curiosity, fascinated by how software is built and how code can solve real-world problems. I began by creating small terminal programs to solve simple problems, which sparked my interest in development. Over time I discovered backend development, where I found what motivates me most: working with logic, APIs, and databases. I'm currently focused on backend development using Laravel and PHP.",
        "I've developed projects like a vehicle rental management system with role-based authentication, full CRUD and a reservation system, working with relational databases like PostgreSQL. One of the biggest challenges was designing the reservation logic to avoid date conflicts, which I solved through research and trial and error. I also developed a vehicle search engine with AI by integrating Laravel with the Groq API.",
        "I'm seeking my first professional opportunity as a backend developer, where I can continue learning, growing, and contributing to real-world projects."
      ]
    },
    // Contact
    contact: {
      title: "Contact",
      description: "Do you have a project in mind or want to chat about an opportunity? Write to me, I respond within 24 hours.",
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
    }
  },

  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para trabajar",
      title: "Hey, soy",
      description: "Desarrollador Backend en formación especializado en Laravel y PHP. Construyendo aplicaciones reales y buscando mi primera oportunidad profesional.",
      contact: "Contáctame",
    },
    projects: {
      title: "Proyectos",
      code: "Code",
      preview: "Preview",
      note: "⚠️ Nota",
      items: [
        {
          title: "Sistema de gestión de alquiler de vehículos",
          description: [
            "Aplicación web para la gestión de alquiler de vehículos que permite explorar autos disponibles, gestionar reservas y administrar la información del sistema.",
            "Desarrollé el backend con Laravel, implementando la lógica de negocio, relaciones en base de datos y APIs para la comunicación con el frontend en React."
          ],
          note: "Este proyecto está alojado en el plan gratuito de Render. El servidor puede tardar hasta 30 segundos en activarse tras un periodo de inactividad.",
        },
        {
          title: "Buscador inteligente de vehículos con IA",
          description: [
            "Aplicación web que permite buscar vehículos utilizando lenguaje natural, interpretando la intención del usuario para generar resultados personalizados.",
            "Implementé el backend con Laravel, integrando la API de Groq para el procesamiento de consultas y construcción de respuestas dinámicas, junto a un frontend en React y Tailwind CSS."
          ],
          note: "Este proyecto está alojado en el plan gratuito de Render. El servidor puede tardar hasta 30 segundos en activarse tras un periodo de inactividad.",
        }
      ]
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Comencé en la programación en 2019 por curiosidad, explorando cómo interactuar con una computadora a través del código. Empecé creando pequeños programas en terminal para resolver problemas simples, lo que despertó mi interés por el desarrollo. Con el tiempo descubrí el backend, donde encontré lo que más me motiva: trabajar con lógica, APIs y bases de datos. Actualmente me estoy formando en desarrollo backend con Laravel y PHP.",
        "He desarrollado proyectos como un sistema de gestión de alquiler de vehículos con autenticación por roles, CRUD completo y sistema de reservas, trabajando con bases de datos relacionales como PostgreSQL. Uno de los mayores desafíos fue diseñar la lógica de reservas evitando conflictos de fechas, lo cual resolví mediante investigación y prueba y error. También desarrollé un buscador de vehículos con IA integrando Laravel con la API de Groq.",
        "Busco mi primera oportunidad como desarrollador backend en un entorno donde pueda aprender y seguir creciendo. Actualmente estoy enfocado en mejorar mis habilidades en Laravel, bases de datos y APIs REST. Me considero una persona constante y disciplinada."
      ]
    },
    contact: {
      title: "Contacto",
      description: "¿Tienes un proyecto en mente o quieres charlar sobre una oportunidad? Escríbime, respondo en menos de 24hs.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    }
  }
} as const