import portfolio from "./images/portfolio.png";
import adventureGenerator from "./images/adventure_generator.png";
import monolithconcorp from "./images/monolithconcorp.png";

export const experienceDetails = [
    {
        company: "Monolith Construciton Corp",
        date: "Jan 2024 - Present",
        position: "Web Developer",
        location: "Lakeville, MA",
        description: "Freelance",
    }
]

export const educationDetails = [
    {
        company: "University of Massachusetts Amherst",
        position: "Bachelor of Science in Computer Science",
        date: "Dec 2023",
        location: "Amherst, MA",
        description: "GPA: 3.725",
    }

];

export const projectDetails = [
  {
    name: "Personal Portfolio",
    description:
      "The website you are currently on! This was my first React project, styled with TailwindCSS and hosted on GitHub Pages.",
    image: portfolio,
    livelink: "https://nathanstudley.github.io",
    codelink: "https://github.com/NathanStudley/nathanstudley.github.io",
  },
  {
    name: "Monolith Construction Website",
    description:
      "A freelance web development project, the site was designed and developed for use by the Monolith Construction Corp.",
    image: monolithconcorp,
    livelink: "https://main.d3hs03mzk0n84j.amplifyapp.com/",
  },
  {
    name: "Adventure Generator",
    description:
      "A single page web app that lets you generate your very own adventures. Developed using straight up JavaScript, HTML, and CSS, with MongoDB implemented as the database.",
    image: adventureGenerator,
    codelink: "https://github.com/NathanStudley/AdventureGenerator",
  },
];

