import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'

const mywork_data = [
  {
    id: 1,
    title: "Battleship",
    w_img: project1_img,
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
    description:
      "Used components of JavaScript to implement basic data structures through the game of Battleship. Terminal-based UI shows hits & misses.",
    company: "Personal Project",
    points: ["Implemented ship placement logic", "Terminal UI", "Unit-tested core functions"],
    duration: "Mar 2022 - Jun 2022",
    skillsDetail: "JavaScript, Node.js",
    github: "https://github.com/you/battleship",
    demo: ""
  },
  {
    id: 2,
    title: "Movie Titles API",
    w_img: project6_img,
    skills: ["HTML", "CSS", "JavaScript", "API"],
    description:
      "Aggregates movie data from a public API, sorts titles A–Z, and allows users to save favorites.",
    company: "Freelance",
    points: ["API integration", "Favorites persistence", "Responsive layout"],
    duration: "Sep 2021 - Dec 2021",
    skillsDetail: "Fetch API, LocalStorage, Vanilla JS",
    github: "https://github.com/you/movie-api",
    demo: "https://example.com/movie-demo"
  },
  {
    id: 3,
    title: "Portfolio Website",
    w_img: project4_img,
    skills: ["React", "CSS", "Netlify"],
    description: "A personal portfolio demonstrating projects, experience, and a contact form.",
    company: "Personal",
    points: ["React SPA", "Responsive design", "Deployed to Netlify"],
    duration: "Jan 2023 - Feb 2023",
    skillsDetail: "React, CSS Modules",
    github: "https://github.com/you/portfolio",
    demo: "https://your-portfolio.example"
  },
  {
    id: 4,
    title: "Portfolio Website",
    w_img: project4_img,
    skills: ["React", "CSS", "Netlify"],
    description: "A personal portfolio demonstrating projects, experience, and a contact form.",
    company: "Personal",
    points: ["React SPA", "Responsive design", "Deployed to Netlify"],
    duration: "Jan 2023 - Feb 2023",
    skillsDetail: "React, CSS Modules",
    github: "https://github.com/you/portfolio",
    demo: "https://your-portfolio.example"
  },
  {
    id: 5,
    title: "Portfolio Website",
    w_img: project4_img,
    skills: ["React", "CSS", "Netlify"],
    description: "A personal portfolio demonstrating projects, experience, and a contact form.",
    company: "Personal",
    points: ["React SPA", "Responsive design", "Deployed to Netlify"],
    duration: "Jan 2023 - Feb 2023",
    skillsDetail: "React, CSS Modules",
    github: "https://github.com/you/portfolio",
    demo: "https://your-portfolio.example"
  }
];

export default mywork_data;

