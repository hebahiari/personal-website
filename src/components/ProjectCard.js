import React from "react";
import "./projectCard.scss";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  let { name, desc, tags, image, links, type } = project;
  return (
    <div className="card">
      <a href={links[1]}>
        <img src={image} />
      </a>

      <div className="description">
        <div className="title">
          <div className="name">
            <h3>{name}</h3>
            <p>{type ? type : "type"}</p>
          </div>

          <div className="icons">
            {links[1] ? (
              <a href={links[1]}>
                <img src="https://cdn4.iconfinder.com/data/icons/materia-social-free/24/038_030_share_link_friends_send_android_material-64.png" />
              </a>
            ) : null}
            <a href={links[0]}>
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-64.png" />
            </a>
          </div>
        </div>

        <p>{desc}</p>
        <div className="tags">
          {tags.map((tag) => (
            <div className="tag">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
