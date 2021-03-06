import React, { useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

export default function Contact() {
  useEffect(() => {
    document.getElementById("contact-me").addEventListener(
      "invalid",
      function (event) {
        this.classList.add("check")
      },
      true
    )
  }, [])

  return (
    <Layout>
      <SEO title="Contact | Jerome Tolentino" />
      <div className="w-full mt-5 mx-auto max-w-3xl p-8 text-gray-700 ">
        <div className="text-center mb-7 md:mb-7">
          <h1 className="font-header title-font uppercase  mb-4 text-xl leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-3xl">
            Contact
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 bg-theme-accent inline-flex"></div>
          </div>
          <div className="flex w-full items-center justify-center mt-5 gap-x-16">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/synerjay"
              className="w-7 h-7 hover:shadow-xl transform hover:text-theme-accent hover:-translate-y-1.5 transition duration-500"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                class="svg-inline--fa fa-github fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/jeromeintokyo"
              className="w-7 h-7 hover:shadow-xl transform hover:-translate-y-1.5 transition duration-500"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                class="svg-inline--fa fa-twitter fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:tolent.jay@gmail.com"
              className="h-7 w-7 hover:shadow-xl transform hover:-translate-y-1.5 transition duration-500"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                class="svg-inline--fa fa-envelope fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <form
          id="contact-me"
          netlify-honeypot="bot-field"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <input
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-white border-2 border-black focus:outline-none focus:border-theme-accent"
                id="name"
                type="text"
                name="name"
                placeholder="YOUR NAME"
                required
              />
              <label
                htmlFor="name"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                YOUR NAME
              </label>
            </div>
          </div>

          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <input
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-white border-2 border-black focus:outline-none focus:border-theme-accent"
                id="name"
                type="email"
                name="email"
                placeholder="YOUR EMAIL ADDRESS"
                required
              />
              <label
                htmlFor="name"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                YOUR EMAIL ADDRESS
              </label>
            </div>
          </div>

          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <textarea
                className="tracking-wide py-2 h-36  resize-none px-4 mb-3 leading-relaxed appearance-none block w-full bg-white border-2 border-black focus:outline-none focus:border-theme-accent"
                id="message"
                name="message"
                type="text"
                placeholder="SEND ME A MESSAGE"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                SEND ME A MESSAGE
              </label>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button
              className="w-1/4 h-10 border-2 border-black shadow-inner bg-white hover:bg-theme-accent hover:text-white transition ease-in-out duration-700 focus:shadow-outline focus:outline-none text-black uppercase font-bold text-sm py-2 px-4"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
