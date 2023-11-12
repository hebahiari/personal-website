import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./projects.scss";

let projects = [
  {
    name: "Petsgram",
    type: "(Social media website)",

    desc: [
      "Sign in/Sign up",
      "Add Posts/Comments/Likes",
      "Delete posts/comments",
      "Follow/Unfollow other users",
      "Search Users",
      "Notifications",
      "Explore Page/Following Page",
    ],
    tags: ["JavaScript", "React", "Express", "Node.js", "Postgres"],
    image: "/img/portfolio/7.PNG",
    links: [
      "https://github.com/hebahiari/petsgram",
      "https://petsgram.hebahiari.com/",
    ],
  },

  {
    name: "TechWearCo",
    type: "(E-commerce website)",
    desc: [
      "Explore items by category",
      "Add items to cart",
      "Remove items from cart",
      "Checkout",
      "Filter items by price or category",
      "Sort items by price (lowest to highest, highest to lowest)",
    ],
    tags: ["JavaScript", "React", "Redux", "SCSS", "Strapi", "Stripe"],
    image: "/img/portfolio/5.jpg",
    links: [
      "https://github.com/hebahiari/ecommerce",
      "https://techwearco.hebahiari.com/",
    ],
  },

  {
    name: "TechTopic",
    type: "(Blog/Social Website)",
    desc: [
      "Sign in/Sign up with Google",
      "Sign in/Sign up with Credentials",
      "Add Posts",
      "Delete Posts",
      "Explore Page to view all posts",
      "Contact us to send a message",
      "Dark/Light mode",
    ],
    tags: ["JavaScript", "Next.js", "React", "MongoDB"],
    image: "/img/portfolio/TechTopic.png",
    links: [
      "https://github.com/hebahiari/techtopic",
      "https://techtopic.hebahiari.com/",
    ],
  },

  {
    name: "Trivia Night",
    type: "(Quiz Game)",
    desc: [
      "Select difficulty",
      "Answer questions before time runs out",
      "Score is displayed at the end",
      "Restart",
    ],
    tags: ["TypeScript", "React", "MUI"],
    image: "/img/portfolio/8.PNG",
    links: [
      "https://github.com/hebahiari/quiz-app",
      "https://trivia.hebahiari.com/",
    ],
  },

  {
    name: "Booked.",
    type: "(Scheduling website)",
    desc: [
      "View all reservation for a specified date",
      "Create new reservations",
      "Cancel/edit/update existing reservations",
      "Search for a reservation by phone number",
      "Seat a reservation at a table",
      "Create New Tables/ Clear existing tables",
      "View all tables and whether they are occupied or open",
      "Includes built in validation to make sure reservations are at valid times",
    ],
    tags: ["JavaScript", "React", "Node.js", "Express", "Knex"],
    image: "/img/portfolio/1.jpg",
    links: [
      "https://github.com/hebahiari/restaurant-reservation",
      "https://booked.hebahiari.com/",
    ],
  },

  {
    name: "Flashcard-o-matic",
    type: "(Studying flashcards)",
    desc: [
      "Create a deck of flashcards",
      "Edit/delete decks",
      "Add flashcards to deck",
      "Edit/delete flashcards",
      "Study deck by going through the cards and flipping to see the answer",
    ],
    tags: ["JavaScript", "React", "Bootstrap"],
    image: "/img/portfolio/4.jpg",
    links: [
      "https://github.com/hebahiari/flashcard-app",
      "https://flashcards.hebahiari.com/",
    ],
  },

  {
    name: "GrubDash",
    type: "(Food ordering)",
    desc: ["Add food order to cart", "View food orders", "Edit/delete order"],
    tags: ["Javascript", "Express", "Node.js", "Postgres"],
    image: "/img/portfolio/2.jpg",
    links: ["https://github.com/hebahiari/GrubDash"],
  },

  {
    name: "WeLoveMovies",
    type: "(Movies library)",
    desc: [
      "Displays a list of movies",
      "Shows Available Theatures",
      "Shows the reviews on each movie",
    ],
    tags: ["JavaScript", "React", "Express", "Node.js", "Postgres", "Knex"],
    image: "/img/portfolio/3.jpg",
    links: ["https://github.com/hebahiari/we-love-movies"],
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
