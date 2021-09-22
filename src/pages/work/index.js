import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import SEO from "../../components/seo"

export default function WorkIndex({ data }) {
  const projectArray = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <SEO title="Work | Jerome Tolentino" />
      <section className="max-h-screen h-auto mt-30 md:-mt-2">
        <div className="max-w-6xl mx-auto px-5 py-0 ">
          {/* Start of Wrapper of Cards */}
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            {/* Map Major projects here */}
            {projectArray
              .filter(project => project.frontmatter.type === "major")
              .map(project => (
                <Card project={project.frontmatter} />
              ))}
          </div>
          <div className="text-left my-5 md:my-7">
            <h1 className="font-header text-center title-font uppercase  mb-4 text-xl leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-3xl">
              Side Projects
            </h1>
            <div className="flex my-6 justify-center">
              <div className="w-16 h-1 bg-theme-accent inline-flex"></div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4">
              {/* Map Side projects cards here */}
              {projectArray
                .filter(project => project.frontmatter.type === "side")
                .map(project => (
                  <Card project={project.frontmatter} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { in: ["major", "side"] } } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          description
          source
          live
          type
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
