import { Link } from "gatsby"
import React from "react"
import { portfolio, projects } from "../styles/projects.module.css"

export default function Testing() {
  return (
    <div className={portfolio}>
      <h2>Portfolio</h2>
      <h3>Projects & Websites I've Created</h3>
      <div className={projects}>
        <Link to="/">
          <div>
            <h3>Testing Title</h3>
            <p>Testing Description</p>
          </div>
        </Link>
        <Link to="/">
          <div>
            <h3>Testing Title</h3>
            <p>Testing Description</p>
          </div>
        </Link>
        <Link to="/">
          <div>
            <h3>Testing Title</h3>
            <p>Testing Description</p>
          </div>
        </Link>
        <Link to="/">
          <div>
            <h3>Testing Title</h3>
            <p>Testing Description</p>
          </div>
        </Link>
        <Link to="/">
          <div>
            <h3>Testing Title</h3>
            <p>Testing Description</p>
          </div>
        </Link>
        <Link to="/">
          <div>
            <h3>Testing Title</h3>
            <p>Testing Description</p>
          </div>
        </Link>
        <Link to="/">
          <div>
            <h3>Testing Title</h3>
            <p>Testing Description</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
