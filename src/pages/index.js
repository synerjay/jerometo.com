import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { header, btn } from "../styles/home.module.css" // <-- changes in Gatsby v3 - CSS needs to be destructured to be used in the tags
import Testing from "../components/Testing"
import About from "../components/About"
// The styles module is a CSS styling to scope one component of the site.
//Only this component will have styling from this module
//The CSS styling scopes the specific HTML tags in this component

export default function Home({ data }) {
  function debounce(func, wait = 20, immediate = true) {
    var timeout
    return function () {
      var context = this,
        args = arguments
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  // function checkSlide(e) {
  //   console.count(e)
  // }

  useEffect(() => {
    const sliderImages = document.querySelectorAll(".slide-in")
    const nav = document.querySelector("#main")

    function fixNav() {
      if (window.scrollY > 0) {
        document.querySelector(".layout").style.paddingTop =
          nav.offsetHeight + "px"
        document.querySelector(".layout").classList.add("fixed-nav")
      } else if (window.scrollY === 0) {
        document.querySelector(".layout").style.paddingTop = 0
        document.querySelector(".layout").classList.remove("fixed-nav")
      }
    }

    function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt =
          window.scrollY + window.innerHeight - sliderImage.offsetHeight / 2
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight
        const isHalfShown = slideInAt > sliderImage.offsetTop
        const isNotScrolledPast = window.scrollY < imageBottom
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add("active")
        } else {
          sliderImage.classList.remove("active")
        }
      })
    }

    window.addEventListener("scroll", fixNav)
    window.addEventListener("scroll", debounce(checkSlide, 5))
  }, [])

  console.log(data)
  // the data image is passed down as props once graphQl is exported below
  // In an optimized image, the query needs to access is:
  // data > file > childImageSharp > fluid
  // then passed it on as <Img fluid={data.file.childImageSharp.fluid} />
  const projectArray = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Tokyo.</p>
          <Link className={btn} to="#portfolio">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
      <About />
      <Testing projectArray={projectArray} contact={contact} />
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
