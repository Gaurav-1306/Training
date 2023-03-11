import React from 'react'
import { graphql } from 'gatsby'
import YAMLData from '../data/project.yaml'
const IndexPage = ({ data }) => {
  const projects = YAMLData
console.log(YAMLData)
  return (
    <div>
      <h1>Traning Website</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Status: {project.status}</p>
          <p>Repository: <a href={project.repository}>{project.repository}</a></p>
          <p>Webpage: <a href={project.webpage}>{project.webpage}</a></p>
          <p>Video: <a href={project.videos}>{project.videos}</a></p>
        </div>
      ))}
    </div>
  )
}



export default IndexPage
