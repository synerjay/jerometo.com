// React components that are not in the page routes are put in the components folder and NOT in the page folder

import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav
      className="flex flex-col gap-y-1 md:gap-y-0 items-center md:justify-between md:flex-row"
      id="main"
    >
      <Link className="w-full" to="/">
        <h2 className="text-black -ml-7 font-second font-bold text-2xl md:text-3xl tracking-widest">
          JEROME TOLENTINO
        </h2>
      </Link>
      <div className="links">
        <Link className="relative w-max two" to="/">
          <span className="uppercase font-header">About</span>{" "}
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 ease-in-out duration-300 bg-theme-accent"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 ease-in-out duration-300 bg-theme-accent"></span>
        </Link>
        <Link className="relative w-max two" to="/work">
          <span className="uppercase font-header">Work</span>
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 ease-in-out duration-300 bg-theme-accent"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 ease-in-out duration-300 bg-theme-accent"></span>
        </Link>
        <Link className="relative w-max two" to="/contact">
          <span className="uppercase font-header">Contact</span>{" "}
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 ease-in-out duration-300 bg-theme-accent"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 ease-in-out duration-300 bg-theme-accent"></span>
        </Link>
      </div>
    </nav>
  )
}
