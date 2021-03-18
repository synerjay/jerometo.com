import React from "react"
import Navbar from "./Navbar"
//To use the global CSS. we must use the component in which every page has. In this case it is the layout component
import "../styles/global.css"

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
