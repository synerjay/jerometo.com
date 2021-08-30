import React, { useEffect } from "react"
import Layout from "../components/Layout"

export default function NotFound() {
  useEffect(() => {
    document.title = "404 | Jerome Tolentino"
  }, [])

  return (
    <Layout>
      <div>
        <h2>404 Not Found</h2>
        <p>Sorry that page doesnt exist</p>
      </div>
    </Layout>
  )
}
