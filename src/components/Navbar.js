// React components that are not in the page routes are put in the components folder and NOT in the page folder

import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav id="main">
      <h1>Jerome Tolentino</h1>
      <div className="links">
        <Link to="/">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
