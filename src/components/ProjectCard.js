import React from 'react'
import "./projectCard.scss"

function ProjectCard({project}) {
    let {name, desc, tags, image, links} = project
  return (
    <div className="card">
    <img src="./5.jpg"/>
    <div className="description">
      <h3>{name}</h3>
      <p>{desc}</p>
        <div className="tags">{tags.map((tag)=><div className="tag">{tag}</div>)}
        </div>
      <div className="icons">
        <a href={links[0]}><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-64.png"/></a>
        {links[1]? <a href={links[1]}><img src="https://cdn4.iconfinder.com/data/icons/materia-social-free/24/038_030_share_link_friends_send_android_material-64.png"/></a>: null}
      </div>
    </div>
  </div>
  )
}

export default ProjectCard