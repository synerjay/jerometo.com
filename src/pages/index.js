import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css" // <-- changes in Gatsby v3 - CSS needs to be destructured to be used in the tags
// The styles module is a CSS styling to scope one component of the site.
//Only this component will have styling from this module
//The CSS styling scopes the specific HTML tags in this component

export default function Home() {
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
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}
