import React from "react";
import { Link } from "react-router-dom";
import "./home.scss"

function Home() {
  return (
    <div className="about">
      <img src="" />
      <h1>Heba Alhyari</h1>
      <p>
        An architect turned software engineer, with a diverse skillset of
        problem-solving, building full-stack websites and design.
      </p>
      <Link className="button">View Projects</Link>
    </div>
  );
}

export default Home;
