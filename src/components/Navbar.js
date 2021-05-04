// React components that are not in the page routes are put in the components folder and NOT in the page folder

import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>Jerome Tolentino</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/#about">About</Link>
        <Link to="/#portfolio">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
