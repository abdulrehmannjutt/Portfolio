import project1 from '../src/app/assets/images/project-1.jpg';
import project2 from '../src/app/assets/images/project-2.jpg';
import project3 from '../src/app/assets/images/project-3.jpg';
import project4 from '../src/app/assets/images/project-4.jpg';

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
      - MERN Stack Training: Gained hands-on experience with the MERN stack through various projects, strengthening expertise in React, Node.js, Express, MongoDB, and front-end technologies like HTML, CSS, and SASS.
      - Real-World Project Experience: Collaborated on a fast-paced project within a 4-member team, primarily focusing on front-end development. Converted Figma designs into a fully responsive website and developed email templates compatible with multiple email clients. Integrated these templates into key authentication flows, including login, sign-up, password recovery, and account verification.
      - Company Product Development: Worked on the company’s product as part of a 5-member team, focusing on a website revamp. Improved functionality and UI to enhance user experience while ensuring modern front-end best practices and optimized performance.
      - Tools & Practices: Used Git for version control and actively participated in daily stand-ups and code reviews to ensure smooth project progress.
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
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  phoneNo: "+92 322 9497699",
  email: "abdulrehmannjutt@gmail.com",
  whatsapp: "923229497699"
};
