import project1 from '../src/app/assets/images/project-1.jpg';
import project2 from '../src/app/assets/images/project-2.jpg';
import project3 from '../src/app/assets/images/project-3.jpg';
import project4 from '../src/app/assets/images/project-4.jpg';

export const HERO_CONTENT =
  "I am a passionate and motivated full-stack developer eager to build scalable and user-friendly web applications. I have hands-on experience with front-end technologies like React and Next.js, along with back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. Through academic projects and personal initiatives, I have developed a solid understanding of modern web development. I am always excited to learn new technologies and contribute to innovative solutions that enhance user experience and business growth.";
//   "I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.";
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
    technologies: ["JavaScript", "React.js", "Next.js", "Tailwind CSS", "SCSS"],
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
