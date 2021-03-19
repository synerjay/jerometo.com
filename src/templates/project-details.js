// this is a Template component for the Project Details pages

import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { details, featured, html } from "../styles/project-details.module.css"
import { graphql } from "gatsby"

const ProjectDetails = ({ data }) => {
  return (
    <Layout>
      <div className={details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={featured}>{/* <Img fluid={} /> */}</div>
        {/* <div className={html} dangerouslySetInnerHTML={}/> */}
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
