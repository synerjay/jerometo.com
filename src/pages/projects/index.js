import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import Img from "gatsby-image"
import { portfolio, projects } from "../../styles/projects.module.css"

//graphql queries become the props of the component page

export default function ProjectIndex({ data }) {
  console.log(data)

  const projectArray = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    // <div>
    //   <h1> Testing Testing</h1>
    //   <p>Yay</p>
    // </div>
    <Layout>
      <div className={portfolio}>
        <h2 className="font-bold text-red-600">Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects}>
          {projectArray.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
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
    </Layout>
  )
}

// export page query
//You can also have multiple queries in one component
// In this example, you can still use the same graphql function but now it has the projects query and the contact query

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
