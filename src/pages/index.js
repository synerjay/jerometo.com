import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { header, btn } from "../styles/home.module.css" // <-- changes in Gatsby v3 - CSS needs to be destructured to be used in the tags
import SEO from "../components/seo"

// The styles module is a CSS styling to scope one component of the site.
//Only this component will have styling from this module
//The CSS styling scopes the specific HTML tags in this component

export default function Home({ data }) {
  // the data image is passed down as props once graphQl is exported below
  // In an optimized image, the query needs to access is:
  // data > file > childImageSharp > fluid
  // then passed it on as <Img fluid={data.file.childImageSharp.fluid} />

  return (
    <Layout>
      <SEO />
      <section className={header}>
        <div className="flex flex-col-reverse gap-y-7 md:gap-y-0 md:gap-x-16 md:flex-row mt-2 md:mt-10 items-center w-full">
          <div className="flex flex-col items-center md:items-start w-full md:w-11/12   ">
            {/* <h2>Design</h2>
          <h3>Develop & Deploy</h3> */}
            <p className="text-md leading-9 text-justify w-full px-5 md:px-16">
              Hello! I am Jerome, a full stack web developer and designer with
              diverse skills in various modern technologies. I am passionate
              about building sleek innovative web applications and contributing
              to open source projects. I invite you to get to know me better by
              getting a copy of my{" "}
              <a
                href="resume.pdf"
                target="_blank"
                className="underline cursor-pointer font-bold hover:text-theme-accent"
              >
                resume
              </a>{" "}
              or directly{" "}
              <Link
                className="underline cursor-pointer font-bold hover:text-theme-accent"
                to="/contact"
              >
                contacting me
              </Link>
              .
            </p>
            <Link
              className="border-2 mt-5 border-black mr-3 cursor-pointer inline-flex items-center leading-none h-10 shadow-inner bg-white hover:bg-theme-accent hover:text-white transition ease-in-out duration-700 focus:shadow-outline focus:outline-none text-black uppercase font-bold text-sm py-2 px-4 md:mx-16"
              to="/work"
            >
              See my work
            </Link>
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
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
