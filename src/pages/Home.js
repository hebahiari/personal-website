import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

function Home() {
  return (
    <div className="about">
      <img src="/img/Heba.jpg" className="profilepic" />
      <h1>Heba Alhyari</h1>
      <div className="icons">
        <a href="">
          <img src="" />
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
