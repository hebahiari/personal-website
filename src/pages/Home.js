import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

function Home() {
  return (
    <div className="about">
      <img src="/img/Heba.jpg" className="profilepic" />
      <h1>Heba Alhyari</h1>
      <div className="icons">
        <a target="_blank" href="https://github.com/hebahiari">
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-64.png" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/hebadev/">
          <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" />
        </a>
        <a target="_blank" href="https://www.instagram.com/capturingflow/">
          <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" />
        </a>
      </div>
      <p>
        An architect turned software engineer, with a diverse skillset of
        problem-solving, building full-stack websites and design.
      </p>
      {/* <Link className="button">View Projects</Link> */}
    </div>
  );
}

export default Home;
