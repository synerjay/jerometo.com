import React from "react"
import Navbar from "./Navbar"
// in the layout component, the contents are passed through the props as children
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}
