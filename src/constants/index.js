import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Desenvolvedor experiente em criação de soluções inovadoras e eficientes.
Por ter experiência Full-Stack tenho conhecimento tanto no Front-end (React JS, Html, Sass/Scss, React-Native)
quanto no Back-end (Node JS, Javascript, API-Rest, SQL, Mysql).`;

export const ABOUT_TEXT = `Sou um desenvolvedor dedicado e versátil que está sempre disposto a aprender. Estou a quase 4 anos no mercado de trabalho, onde, 
tenho focado em JS, mais especificamente Node JS para o backend e React JS ou React Native no frontend . Busco entregar soluções inteligentes e inovadoras baseadas em um levantamento
 de requsitos detalhados, onde a conversa e interpretação do que o cliente me passa é um passo muito importante para a entrega de um produto com excelência. Sou bem sociável e trabalho bem em grupo,
 possuo a vantagem de ser muito sincero em tudo que faço, mas isso não me impede de ser um bom ouvinte. De liderado a lider, de lider a liderado, o respeito deve sempre ser mantido.
`;

export const EXPERIENCES = [
  {
    year: "DEZ 2021 - DEZ 2024",
    role: "Desenvolvedor Pleno",
    company: "RIOTELE REAL INTERNET OPTICA TELECOMUNICAÇÕES - HORTOLÂNDIA",
    description: `Resolução de problemas, automatização e otimização de processos, 
    Experiência em desenvolvimento de software, 
    Desenvolvimento Web,
    Aplicações locais e aplicativos para smartphones,
    Aplicações na VPS`,
    technologies: [
      "React JS",
      "React Native",
      "Javascript",
      "Node JS",
      "SQL",
      "mySQL",
      "MongoDB",
      "MariaDB",
    ],
  },
  {
    year: "MAR 2021 - DEZ 2021",
    role: "Aprendiz de Desenvolvimento",
    company: "ROBERT BOSH Ltda - CAMPINAS",
    description: `Desenvolvimento de softwares e automatização de processos e
    Redução de custo das áreas com base nas automatizações desenvolvidas.`,
    technologies: [
      "VBA",
      "HTML",
      "CSS",
      "Vue.js",
      "React JS",
      "React Native",
      "Javascript",
      "SQL",
      "mySQL",
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
  address: "Americana, SP",
  phoneNo: "+55 (19) 98881-0189",
  email: "rafaeljesusalexandre@gmail.com",
};
