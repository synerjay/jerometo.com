import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { header, btn } from "../styles/home.module.css" // <-- changes in Gatsby v3 - CSS needs to be destructured to be used in the tags
import Testing from "../components/Testing"
// The styles module is a CSS styling to scope one component of the site.
//Only this component will have styling from this module
//The CSS styling scopes the specific HTML tags in this component

export default function Home({ data }) {
  console.log(data)
  // the data image is passed down as props once graphQl is exported below
  // In an optimized image, the query needs to access is:
  // data > file > childImageSharp > fluid
  // then passed it on as <Img fluid={data.file.childImageSharp.fluid} />

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Tokyo.</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
      <Testing />
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
