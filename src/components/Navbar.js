// React components that are not in the page routes are put in the components folder and NOT in the page folder

import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav id="main">
      <Link className="text-2xl font-bold" to="/">
        Jerome Tolentino
      </Link>
      <div className="links">
        <Link className="font-bold relative w-max two" to="/">
          <span>/About</span>{" "}
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
        </Link>
        <Link className="font-bold relative w-max two" to="/work">
          <span>/Work</span>
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
        </Link>
        <Link className="font-bold relative w-max two" to="/contact">
          <span>/Contact</span>{" "}
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
        </Link>
      </div>
    </nav>
  )
}
