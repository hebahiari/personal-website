import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="about">
      <div className="background"></div>
      <img src="/img/Heba.jpeg" className="profilepic" />
      <h1>Heba Alhyari</h1>
      <h2>Full Stack Engineer</h2>
      <p className="email">(hebahiary@gmail.com)</p>
      <div className="icons">
        <a target="_blank" href="https://github.com/hebahiari">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/hebadev/">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://www.instagram.com/capturingflow/">
          <FaInstagram />
        </a>
      </div>
      <p>
        Fullstack engineer with a focus on developing and implementing web-based
        solutions, maintaining and updating web applications, and improving the
        user experience.
      </p>
      <a href="Heba-Alhyari-Resume.pdf" target="_blank" class="button">
        View Resume
      </a>
      <h3>Skills:</h3>
      <p className="skills">
        <b>Front-end:</b> HTML5, CSS3, JavaScript, TypeScript, React.js, React
        Router, Next.js
      </p>
      <p className="skills">
        <b>Back-end:</b> Node.js, Express, PostgreSQL, Knex
      </p>
      <p className="skills">
        <b>Cloud:</b> AWS, MongoDB, Heroku, Vercel
      </p>
      <p className="skills">
        <b>Design:</b> Figma, Adobe Photoshop/InDesign, Autodesk 3Ds Max
      </p>
      {/* <Link className="button">View Projects</Link> */}
    </div>
  );
}

export default Home;
