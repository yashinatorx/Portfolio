// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import mcLogo from './assets/tech_logo/mc.png';
import pythonLogo from './assets/tech_logo/python.png';
import springbootLogo from './assets/tech_logo/springboot.png'

// Educational Section logo's
import lnctLogo from './assets/educational_logo/Lnct-logo.jpg';
import carmelLogo from './assets/educational_logo/carmel-logo.png'

// Project Section logo's
import courseLogo from './assets/Project_logo/course.png';
import ecommerceLogo from './assets/Project_logo/ecommerce.png';
import tictacLogo from './assets/Project_logo/Tic-Tac-Toe.png'
import weatherLogo from './assets/Project_logo/Weather.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
     
    ],
  },
];  

  export const education = [
   
    {
      id: 0,
      img: lnctLogo,
      school: "LNCT College, Bhopal",
      date: "Oct 2022 - June 2026",
      grade: "71.6%",
      desc: "I am currently persuing B-Tech from Lakshmi Narain college of Technology, Bhopal. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at LNCT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - Computer Science & Engineering (Artificial Intelligence & Data Science)",
    },
    {
      id: 1,
      img: carmelLogo,
      school: "Carmel School, Kareli",
      date: "Till July 2021",
      grade: "72.8%",
      desc: "I completed my class 12 education from Carmel School, Kareli, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: carmelLogo,
      school: "Carmel School, Kareli",
      date: "Till May 2019",
      grade: "64%",
      desc: "I completed my class 10 education from Carmel School, Kareli, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Course Selling Website",
      description:
         "Created a complete course-selling web application featuring user authentication, instructor dashboards, and payment processing via Razorpay. Users can browse available courses, enroll securely, and track their progress in an intuitive and responsive UI.",
      image: courseLogo,
      tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "Node JS", "Express JS", "Mongo DB"],
      github: "https://github.com/yashinatorx/Studynotion-Hosting",
      webapp: "https://studynotion-hosting-alpha.vercel.app/",
    },
    {
      id: 1,
      title: "E-commerce Website",
      description:
       "Built a modern e-commerce interface that supports product browsing, shopping cart functionality, and real-time payment gateway integration. Focused on delivering a smooth user experience with responsive design and efficient component architecture using React.",
      image: ecommerceLogo,
      tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS"],
      github: "https://github.com/yashinatorx/minorproject2",
      webapp: "https://yashinatorx.github.io/minorproject2/",
    },
    {
      id: 2,
      title: "Weather API",
      description:
         "Developed a live weather dashboard by integrating third-party APIs to fetch and display city-specific weather details. Emphasized clean UI design, API key security, and dynamic data rendering to ensure a real-time experience for users.",
      image:  weatherLogo,
      tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS","API"],
      github: "https://github.com/yashinatorx/weatherAPI",
      webapp: "https://weatherapp-blond-chi.vercel.app/",
    },
    {
      id: 3,
      title: "Tic-Tac-Toe Game",
      description:
        "An interactive X/O (Tic Tac Toe) game built with JavaScript, offering both single-player mode against a basic AI and multiplayer mode for two users. Designed with a clean interface and responsive layout using Tailwind CSS, the game provides a smooth and fun user experience directly in the browser.",
      image: tictacLogo,
      tags: ["HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yashinatorx/xogame3",
      webapp: "https://yashinatorx.github.io/xogame3/",
    },
  ];  

