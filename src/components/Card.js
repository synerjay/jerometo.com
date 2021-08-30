import React from "react"
import Img from "gatsby-image"

export default function Card({ project }) {
  const background =
    "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
  return (
    <div className="p-4 w-full md:w-1/3 md:mb-0 mb-0 flex flex-col justify-center items-center max-w-lg mx-auto">
      <div
        className="bg-gray-300 h-30 md:h-48 w-full border-2 border-black shadow-lg bg-cover bg-center"
        // style={{
        //   backgroundImage: `url(${background})`,
        // }}
      >
        <Img fluid={project.thumb.childImageSharp.fluid} />
      </div>
      {/* // Original Card start */}
      <div className="p-7 md:p-5 -ml-7 md:-ml-10 -mt-5 md:w-full md:mb-0 mb-0 flex flex-col ">
        <div className="pattern-dots-md gray-light">
          <div className=" bg-white border-2 border-black p-4 transform translate-x-6 -translate-y-6  ">
            <div className="flex-grow ">
              <h2 className="text-black text-lg font-header uppercase title-font font-bold mb-0">
                {project.title}
              </h2>
              <p className="leading-relaxed text-xs text-justify">
                {project.description}
              </p>
              <div className="flex flex-col space-y-2 mb-6">
                {project.stack.split(", ").map(stack => (
                  <div
                    key={stack}
                    className="text-center w-full text-white bg-theme-accent"
                  >
                    {stack}
                  </div>
                ))}
              </div>
              <div className="text-center mt-2 leading-none flex justify-between w-full">
                <a
                  href={project.live}
                  target="_blank"
                  className="border-2 border-black mr-3 cursor-pointer inline-flex items-center leading-none h-10 shadow-inner bg-white hover:bg-theme-accent hover:text-white transition ease-in-out duration-700 focus:shadow-outline focus:outline-none text-black uppercase font-bold text-sm py-2 px-4"
                >
                  PROJECT LIVE
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  className="border-2 border-black cursor-pointer inline-flex items-center leading-none h-10 shadow-inner bg-white hover:bg-theme-accent hover:text-white transition ease-in-out duration-700 focus:shadow-outline focus:outline-none text-black uppercase font-bold text-sm py-2 px-4"
                >
                  CODE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // Original Card End */}
    </div>
  )
}
