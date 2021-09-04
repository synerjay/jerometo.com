import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

export default function NotFound() {
  useEffect(() => {
    document.title = "404 | Jerome Tolentino"
  }, [])

  return (
    <Layout>
      <SEO title="404 Not Found | Jerome Tolentino" />
      <div class=" text-white h-full flex items-center">
        <div class="mx-auto items-center justify-center mt-16 p-4 flex flex-wrap w-full">
          <div class="w-full md:w-7/12 text-center md:text-left p-4">
            <div class="text-6xl font-medium text-black">404</div>
            <div class="text-xl md:text-3xl font-medium mb-4">
              Oops! This page doesn't seem to exist.
            </div>
            <div class="text-sm mb-8">
              You may have mistyped the address or the page may have moved.
            </div>
            <Link
              to="/"
              className="border-2 mt-5 border-black mr-3 cursor-pointer inline-flex items-center leading-none h-10 shadow-inner bg-white hover:bg-theme-accent hover:text-white transition ease-in-out duration-700 focus:shadow-outline focus:outline-none text-black uppercase font-bold text-sm py-2 px-4"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
