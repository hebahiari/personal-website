import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./projects.scss";

let projects = [
  {
    name: "Petsgram",
    type: "(Social media website)",

    desc: "A MERN full-stack social media website with a mobile-first, responsive design. It has a React frontend, an Express and NodeJS backend, and uses Postgres as its database.",
    tags: ["JavaScript", "React", "Express", "NodeJS", "Postgres"],
    image: "/img/portfolio/7.PNG",
    links: [
      "https://github.com/hebahiari/petsgram",
      "https://petsgram.hebahiari.com/",
    ],
  },

  {
    name: "TechWearCo",
    type: "(E-commerce website)",
    desc: "An e-commerce website built to sell products, with a React frontend that utilizes react router and redux for smooth navigation and user experience. The backend of the site is developed using Strapi, which also serves as the database management system for the site. To facilitate online transactions, the site uses Stripe as its payment portal.",
    tags: ["JavaScript", "React", "Express", "NodeJS", "Postgres"],
    image: "/img/portfolio/5.jpg",
    links: [
      "https://github.com/hebahiari/petsgram",
      "https://techwearco.hebahiari.com/",
    ],
  },

  {
    name: "Booked.",
    type: "(Scheduling website)",
    desc: "This is a full stack restaurant reservation system built with JavaScript/React for the frontend, and Node/Express with Knex for the backend. The website is designed to be responsive, with a user-friendly UI styled using CSS and Bootstrap.   ",
    tags: ["JavaScript", "React", "NodeJS", "Express", "Knex"],
    image: "/img/portfolio/1.jpg",
    links: [
      "https://github.com/hebahiari/restaurant-reservation",
      "https://booked.hebahiari.com/",
    ],
  },

  {
    name: "GrubDash",
    desc: "",
    tags: ["HTML", "CSS", "React", "Express", "NodeJS", "Postgres"],
    image: "/img/portfolio/2.jpg",
    links: ["https://github.com/hebahiari/GrubDash"],
  },

  {
    name: "WeLoveMovies",
    desc: "",
    tags: ["HTML", "CSS", "React", "Express", "NodeJS", "Postgres"],
    image: "/img/portfolio/3.jpg",
    links: ["https://github.com/hebahiari/we-love-movies"],
  },

  {
    name: "Flashcard-o-matic",
    desc: "",
    tags: ["HTML", "CSS", "React", "Express", "NodeJS", "Postgres"],
    image: "/img/portfolio/4.jpg",
    links: ["https://github.com/hebahiari/flashcard-app"],
  },
];

function Projects() {
  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}

export default Projects;
