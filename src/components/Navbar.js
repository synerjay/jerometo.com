// React components that are not in the page routes are put in the components folder and NOT in the page folder

import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav
      className="flex flex-col items-center md:justify-between md:flex-row"
      id="main"
    >
      <Link className="flex items-center" to="/">
        <h2 className="font-second font-bold text-3xl">JEROME</h2>{" "}
        <h2 className="font-logo text-indigo-500 text-5xl">JT</h2>{" "}
        <h2 className="font-second font-bold text-3xl">TOLENTINO</h2>
      </Link>
      <div className="links">
        <Link className="relative w-max two" to="/">
          <span className="uppercase">About</span>{" "}
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-500"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-500"></span>
        </Link>
        <Link className="relative w-max two" to="/work">
          <span className="uppercase">Work</span>
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-500"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-500"></span>
        </Link>
        <Link className="relative w-max two" to="/contact">
          <span className="uppercase">Contact</span>{" "}
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-500"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-500"></span>
        </Link>
      </div>
    </nav>
  )
}
