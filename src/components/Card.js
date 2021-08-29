import React from "react"
import Img from "gatsby-image"

export default function Card({ project }) {
  const background =
    "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
  return (
    <div className="p-4 w-full md:w-1/3 md:mb-0 mb-0 flex flex-col justify-center items-center max-w-lg mx-auto">
      <div
        className="bg-gray-300 h-48 w-full border-2 border-black shadow-lg bg-cover bg-center"
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
            {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>{" "}
            </div> */}
            <div className="flex-grow ">
              <h2 className=" text-xl font-header uppercase title-font font-bold mb-3">
                {project.title}
              </h2>
              <p className="leading-relaxed text-sm text-justify">
                {project.description}
              </p>
              <div className="flex flex-col space-y-2 mb-6">
                {project.stack.split(", ").map(stack => (
                  <div
                    key={stack}
                    className="text-center w-full text-white bg-indigo-400"
                  >
                    {stack}
                  </div>
                ))}
              </div>
              <div className="text-center mt-2 leading-none flex justify-between w-full">
                <a
                  href={project.live}
                  className="border-2 border-black mr-3 cursor-pointer inline-flex items-center leading-none h-10 shadow-inner bg-white hover:bg-indigo-400 hover:text-white transition ease-in-out duration-700 focus:shadow-outline focus:outline-none text-black uppercase font-bold text-sm py-2 px-4"
                >
                  PROJECT LIVE
                </a>
                <a
                  href={project.source}
                  className="border-2 border-black cursor-pointer inline-flex items-center leading-none h-10 shadow-inner bg-white hover:bg-indigo-400 hover:text-white transition ease-in-out duration-700 focus:shadow-outline focus:outline-none text-black uppercase font-bold text-sm py-2 px-4"
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
