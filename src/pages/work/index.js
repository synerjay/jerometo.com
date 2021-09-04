import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../../components/Layout"
import Img from "gatsby-image"
import { portfolio, projects } from "../../styles/projects.module.css"
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
            {/* Put mapping cards here */}
            {projectArray.map(project => (
              <Card project={project.frontmatter} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "major" } } }
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

{
  /* <Layout>
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
</Layout> */
}

// Original Cards

{
  /* Start of Card 1 */
}
{
  /* <div className="p-10  md:w-1/3 md:mb-0 mb-6 flex flex-col ">
<div className="pattern-dots-md gray-light">
  <div className=" bg-white border-2 border-black p-4 transform translate-x-6 -translate-y-6  ">
    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        ></path>
      </svg>{" "}
    </div>
    <div className="flex-grow ">
      <h2 className=" text-xl title-font font-medium mb-3">
        Webdesign
      </h2>
      <p className="leading-relaxed text-sm text-justify">
        Donner du goût 😍 de la couleur aux applications, je le
        fais afin de rendre vos sites attrayants 🎨. Avant de
        devenir webdesigner, depuis tout petit j'étais déjà
        familier à la couleur et du dessin. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quidem dolor deserunt
      </p>
    </div>
  </div>
</div>
</div> */
}
{
  /* End of Card 1 */
}
{
  /* Start of Card 2 */
}
{
  /* <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
<div className="pattern-dots-md gray-light">
  <div className=" bg-white border-2 border-black p-4 transform translate-x-6 -translate-y-6 ">
    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        ></path>
      </svg>
    </div>
    <div className="flex-grow">
      <h2 className=" text-xl title-font font-medium mb-3">
        Intégration web
      </h2>
      <p className="leading-relaxed text-sm text-justify">
        Donner du goût 😍 de la couleur aux applications, je le
        fais afin de rendre vos sites attrayants 🎨. Avant de
        devenir webdesigner, depuis tout petit j'étais déjà
        familier à la couleur et du dessin.
      </p>
    </div>
  </div>
</div>
</div> */
}
{
  /* End of Card 2 */
}
{
  /* Start of Card 3 */
}
{
  /* <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
<div className="pattern-dots-md gray-light">
  <div className=" bg-white border-2 border-black p-4 transform translate-x-6 -translate-y-6 ">
    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        ></path>
      </svg>
    </div>
    <div className="flex-grow">
      <h2 className=" text-xl title-font font-medium mb-3">
        Developpement Back-end
      </h2>
      <p className="leading-relaxed text-sm text-justify">
        Grâce à Php et ces frameworks (Larave, Symfoni, Slim), je
        peux vous réaliser un site dynamique c'est-à-dire qui
        interagie avec votre base de données 💪. Nous pouvons
        essayer.
      </p>
    </div>
  </div>
</div>
</div> */
}
{
  /* End of Card 3 */
}
