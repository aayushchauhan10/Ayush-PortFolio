import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  microsoft,
  shopify,
  carrent,
  jobit,
  edith,
  browser,
  tripguide,
  threejs,
  pentagonspace,
  divakar,
  priyanshu,
  rahul,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "C++ Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Microsoft and EY - joint",
    icon: microsoft,
    iconBg: "#383E56",
    date: "October, 2021 - December, 2021",
    points: [
      "Developed and maintained an individual Chatbot web application project using Javascript and other related technologies.",
      "Learnt how to host web applications on MS Azure cloud services",
      "Responsive chatbot design",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Web-Development Trainee",
    company_name: "Pentagon Space",
    icon: pentagonspace,
    iconBg: "#E6DEDD",
    date: "Mar, 2022 - May, 2022",
    points: [
      "Learnt about Full stack Web Technologies like HTML, CSS, Javascript, Python and Django",
      "Created a basic Web Browser project using Python and its library PyQt5.",
      "Learnt about implementing responsive design and ensuring cross-browser compatibility in projects.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as this one, but Ayush proved me wrong.",
    name: "Rahul Kumar",
    designation: "Software Developer",
    company: "Freelancer",
    image: rahul,
  },
  {
    testimonial:
      "I like how this website is looking as in UI and Ayush has really done a great Job in creating this portfolio.",
    name: "Priyanshu Sharma",
    designation: "Full Stack Web Developer",
    company: "Freelancer",
    image: priyanshu,
  },
  {
    testimonial:
      "I am so amazed to see that how beautiful this website is and how smoothly transitions are used",
    name: "Divakar Bansal",
    designation: " Web Developer",
    company: "Freelancer",
    image: divakar,
  },
];

const projects = [
  {
    name: "Stuart Web Browser",
    description:
      "Web-Browser platform that allows users to search, and manage different terma with google search engine APIs.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "PyQt5",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: browser,
    source_code_link:
      "https://github.com/aayushchauhan10/Stuart--A-web-browser-Clone",
  },
  {
    name: "Edith - ChatBot",
    description:
      "Web application that enables users to talk with a chatbot which generates pre-defiend replies in the absence of the operator.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: edith,
    source_code_link: "https://github.com/aayushchauhan10/Edith-chatbot",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
