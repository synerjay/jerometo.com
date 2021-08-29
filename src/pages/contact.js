import React, { useEffect } from "react"
import Layout from "../components/Layout"

export default function Contact() {
  useEffect(() => {
    document.getElementById("contact-me").addEventListener(
      "invalid",
      function (event) {
        this.classList.add("check")
      },
      true
    )

    // TEXT AREA AUTO EXPAND
    //   var textarea = document.querySelector("textarea.autoexpand")

    //   textarea.addEventListener("keydown", autosize)

    //   function autosize() {
    //     var el = this
    //     setTimeout(function () {
    //       el.style.cssText = "height:auto; padding: 1.4rem .2rem .5rem"

    //       el.style.cssText = "height:" + el.scrollHeight + "px"
    //     }, 0)
    //   }
  }, [])

  return (
    <Layout>
      <form
        id="contact-me"
        name="contact"
        method="POST"
        data-netlify="true"
        className="w-full mt-10 mx-auto max-w-3xl p-8 text-gray-700 "
      >
        <div className="text-center mb-10 md:mb-10">
          <h1 className="font-header title-font uppercase  mb-4 text-xl leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-3xl">
            Contact
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              L'informatique est vaste et les langages naissent presque à tout
              moment, je fais tout mon possible pour être à la hauteur afin de
              répondre au besoin de mes clients et d'apporter de l'aide aux
              nouveaux développeurs.
            </p> */}
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 bg-theme-accent inline-flex"></div>
          </div>
        </div>

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
              for="name"
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
              placeholder="YOUR EMAIL"
              required
            />
            <label
              for="name"
              className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              YOUR EMAIL
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
              placeholder="YOUR MESSAGE"
            ></textarea>
            <label
              for="message"
              className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              YOUR MESSAGE
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
    </Layout>
  )
}
