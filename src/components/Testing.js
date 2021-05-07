import React from "react"
import { portfolio, projects } from "../styles/projects.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function Testing({ projectArray, contact }) {
  return (
    <div className={portfolio} id="portfolio">
      <h2 className="align-left slide-in">Portfolio</h2>
      <h3 className="align-left slide-in"> Projects & Websites I've Created</h3>
      <div className={projects}>
        {projectArray.map(project => (
          <Link
            to={"/projects/" + project.frontmatter.slug}
            key={project.id}
            className="align-left slide-in"
          >
            <div>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </div>
          </Link>
        ))}
      </div>
      <p>Like what you see? Email me at {contact} for a quote!</p>
    </div>
  )
}
