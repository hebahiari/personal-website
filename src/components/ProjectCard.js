import React from 'react'

function ProjectCard({project}) {
    let {name, desc, tags, image, links} = project
  return (
    <div class="card">
    <img src={image}/>
    <div class="description">
      <h3>{name}</h3>
      <p>{desc}</p>
        <div class="tags">{tags.map((tag)=><div class="tag">{tag}</div>)}
        </div>
      <div class="icons">
        <a href={links[0]}><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-64.png"/></a>
        <a href={links[1]}><img src="https://cdn4.iconfinder.com/data/icons/materia-social-free/24/038_030_share_link_friends_send_android_material-64.png"/></a>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard