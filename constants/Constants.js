import project1 from '../src/app/assets/images/ecommerce.webp';
import project2 from '../src/app/assets/images/mcro.png';
import project3 from '../src/app/assets/images/sign-language.png';

export const HERO_CONTENT =
  "I’m a motivated web developer with a passion for building scalable, user-friendly web applications. I have hands-on experience with front-end technologies like React and Next.js, and back-end tools such as Node.js, Express, and MongoDB. Through academic projects and personal initiatives, I’ve developed a strong understanding of modern web development practices. I enjoy learning new technologies and turning ideas into meaningful solutions that enhance user experience and drive innovation.";
export const ABOUT_TEXT = `I am a motivated and adaptable web developer with hands-on experience in building responsive and scalable web applications using the MERN stack. My journey started with a strong academic foundation in Computer Science and has evolved through real-world projects, freelance work, and internships. I’ve developed and contributed to multiple production-level applications, converting Figma designs into high-quality, responsive code and integrating complex functionalities like authentication, email templates, and dynamic data management.

Proficient in React.js, Node.js, Express.js, MongoDB, and modern front-end tools like Tailwind CSS and SCSS, I bring both technical depth and a keen eye for UI/UX. Whether working in a team or independently, I thrive on solving challenges, writing clean code, and continuously learning new technologies to deliver high-impact solutions.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - September 2024",
    role: "Software Engineer Intern",
    company: "SprintX",
    description: `
      • MERN Stack Training: Gained hands-on experience with the MERN stack through various projects, strengthening expertise in React, Node.js, Express, MongoDB, and front-end technologies like HTML, CSS, and SASS.
      • Real-World Project Experience: Collaborated on a fast-paced project within a 4-member team, primarily focusing on front-end development. Converted Figma designs into a fully responsive website and developed email templates compatible with multiple email clients. Integrated these templates into key authentication flows, including login, sign-up, password recovery, and account verification.
      • Company Product Development: Worked on the company’s product as part of a 5-member team, focusing on a website revamp. Improved functionality and UI to enhance user experience while ensuring modern front-end best practices and optimized performance.
      • Tools & Practices: Used Git for version control and actively participated in daily stand-ups and code reviews to ensure smooth project progress.
    `,
    technologies: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "SCSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website | ",
    link: "https://shadewave.vercel.app/",
    linkTitle: "shadewave.vercel.app",
    image: project1,
    description: `
    • Developed an e-commerce website as a freelance project using MERN stack 
    • Designed and implemented both the front-end and back-end, ensuring aseamless user experience and efficient data management.
    • Implemented key features, including product management, user authentication with JWT, shopping cart functionality, and order processing.
    • Developed an admin dashboard for inventory management and secured it using role-based access control.`,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    title: "MCRO | ",
    link: "https://mcro.ai/",
    linkTitle: "mcro.ai",
    image: project2,
    description: `
    • A powerful tool that helps brands optimize TikTok campaigns through automation, affiliate outreach, and data insights.
    • Converted Figma designs into a pixel-perfect responsive user interface using React.js and Tailwind CSS.
    • Built scalable, reusable components to streamline development.
    • Integrated custom email templates for authentication flows: login, sign-up, password recovery and account verification.`,
    technologies: ["Next.js", "React.js", "Tailwind CSS"],
  },
  {
    title: `URDU SIGN LANGUAGE RECOGNITION & LEARNING APP | Final Year Project`,
    image: project3,
    description: `
    • Developed a mobile app for recognizing and translating Urdu Sign Language using Flutter and ML techniques.
    • Led the app development, creating a user-friendly interface and ensuring seamless functionality with Flutter.
    • Contributed to the development of the machine learning model for sign language recognition.
    • Integrated 3D animations using Blender for interactive sign language learning.`,
    technologies: ["Flutter", "Machine Learning", "Blender"],
  },
];

export const CONTACT = {
  phoneNo: "+92 322 9497699",
  email: "abdulrehmannjutt@gmail.com",
  whatsapp: "923229497699"
};
