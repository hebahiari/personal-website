import React from "react";
import "./projectCard.scss";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";

function ProjectCard({ project }) {
  let { name, desc, tags, image, links, type } = project;
  return (
    <div className="card">
      <a
        href={links[1] ? links[1] : links[0]}
        target="_blank"
        className="imageContainer"
      >
        <img src={image} />
      </a>

      <div className="description">
        <div className="info">
          <div className="title">
            <div className="name">
              <a href={links[1] ? links[1] : links[0]} target="_blank">
                <h3>{name}</h3>
              </a>
              <p>{type ? type : "type"}</p>
            </div>

            <div className="icons">
              {links[1] ? (
                <a href={links[1]} target="_blank">
                  <BiLinkAlt />
                </a>
              ) : null}
              <a href={links[0]} target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
          <ul>
            {desc.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

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
