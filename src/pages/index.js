import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { header, btn } from "../styles/home.module.css" // <-- changes in Gatsby v3 - CSS needs to be destructured to be used in the tags

// The styles module is a CSS styling to scope one component of the site.
//Only this component will have styling from this module
//The CSS styling scopes the specific HTML tags in this component

export default function Home({ data }) {
  console.log(data)
  // the data image is passed down as props once graphQl is exported below
  // In an optimized image, the query needs to access is:
  // data > file > childImageSharp > fluid
  // then passed it on as <Img fluid={data.file.childImageSharp.fluid} />
  // const projectArray = data.projects.nodes
  // const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <section className={header}>
        <div className="flex flex-col gap-y-7 md:gap-y-0 md:gap-x-16 md:flex-row mt-0 md:mt-10 items-center w-full">
          <div className="flex items-center justify-center w-full md:w-11/12   ">
            {/* <h2>Design</h2>
          <h3>Develop & Deploy</h3> */}
            <p className="text-black leading-9 text-justify w-full px-5 md:px-16">
              UX designer & web developer based in Tokyo. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nihil provident itaque omnis
              quod sunt quaerat, natus nobis unde sit ut quia reprehenderit,
              libero voluptatibus nam consequatur excepturi eum iusto officiis?
            </p>
            {/* <Link className="bg-black text-white p-3 rounded-lg" to="/work">
            My Portfolio Projects
          </Link> */}
          </div>
          <div className="w-1/2 mx-auto md:w-4/6  ">
            <Img
              style={{
                borderRadius: "999px",
                maxHeight: "380px",
                maxWidth: "380px",
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              fluid={data.file.childImageSharp.fluid}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
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
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
