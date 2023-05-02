import React from 'react'
import ProjectCard from '../components/ProjectCard'
import "./projects.scss"

let projects = [{name: "Petsgram", desc: "A MERN full-stack social media website with a mobile-first, responsive design. It has a React frontend, an Express and NodeJS backend, and uses Postgres as its database.", tags: ["HTML", "CSS", "React", "Express", "NodeJS", "Postgres"], image: "./5.jpg", links: ["https://github.com/hebahiari/petsgram","https://petsgram.hebahiari.com/"]},

{name: "TechWearCo", desc: "An e-commerce website built to sell products, with a React frontend that utilizes react router and redux for smooth navigation and user experience. The backend of the site is developed using Strapi, which also serves as the database management system for the site. To facilitate online transactions, the site uses Stripe as its payment portal.", tags: ["HTML", "CSS", "React", "Express", "NodeJS", "Postgres"], image: "", links: ["https://github.com/hebahiari/petsgram","https://techwearco.hebahiari.com/"]},

{name: "Booked.", desc: "This is a full stack restaurant reservation system built with JavaScript/React for the frontend, and Node/Express with Knex for the backend. The website is designed to be responsive, with a user-friendly UI styled using CSS and Bootstrap.   ", tags: ["HTML", "CSS", "React", "NodeJS", "Express", "Knex"], image: "", links: ["https://github.com/hebahiari/restaurant-reservation","https://booked.hebahiari.com/"]},

{name: "GrubDash", desc: "", tags: ["HTML", "CSS", "React", "Express", "NodeJS", "Postgres"], image: "", links: ["https://github.com/hebahiari/GrubDash"]},

{name: "WeLoveMovies", desc: "", tags: ["HTML", "CSS", "React", "Express", "NodeJS", "Postgres"], image: "", links: ["https://github.com/hebahiari/we-love-movies"]},

{name: "Flashcard-o-matic", desc: "", tags: ["HTML", "CSS", "React", "Express", "NodeJS", "Postgres"], image: "", links: ["https://github.com/hebahiari/flashcard-app"]},
]

function Projects() {
  return (
    <div className='projects'>{projects.map((project)=><ProjectCard project={project
    }/>)}</div>
  )
}

export default Projects