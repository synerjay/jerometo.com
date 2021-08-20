// React components that are not in the page routes are put in the components folder and NOT in the page folder

import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav id="main">
      <Link className="flex items-center text-sm font-bold" to="/">
        JEROME <h2 className="font-logo text-black text-5xl">JT</h2> TOLENTINO
      </Link>
      <div className="links">
        <Link className="font-bold relative w-max two" to="/">
          <span className="uppercase">About</span>{" "}
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
        </Link>
        <Link className="font-bold relative w-max two" to="/work">
          <span className="uppercase">Work</span>
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
        </Link>
        <Link className="font-bold relative w-max two" to="/contact">
          <span className="uppercase">Contact</span>{" "}
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
        </Link>
      </div>
    </nav>
  )
}
