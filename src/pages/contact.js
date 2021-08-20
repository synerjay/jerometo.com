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
    var textarea = document.querySelector("textarea.autoexpand")

    textarea.addEventListener("keydown", autosize)

    function autosize() {
      var el = this
      setTimeout(function () {
        el.style.cssText = "height:auto; padding: 1.4rem .2rem .5rem"

        el.style.cssText = "height:" + el.scrollHeight + "px"
      }, 0)
    }
  }, [])

  return (
    <Layout>
      <form
        id="contact-me"
        class="w-full mt-10 mx-auto max-w-3xl bg-white p-8 text-gray-700 "
      >
        {/* <h2 class="w-full my-2 text-3xl font-bold leading-tight my-5">
          Contact
        </h2> */}
        <div className="text-center mb-20">
          <h1 className=" title-font uppercase  mb-4 text-xl leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-3xl">
            Contact
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              L'informatique est vaste et les langages naissent presque à tout
              moment, je fais tout mon possible pour être à la hauteur afin de
              répondre au besoin de mes clients et d'apporter de l'aide aux
              nouveaux développeurs.
            </p> */}
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div class="flex flex-wrap mb-6">
          <div class="relative w-full appearance-none label-floating">
            <input
              class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Your name"
              required
            />
            <label
              for="name"
              class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              Your name
            </label>
          </div>
        </div>

        <div class="flex flex-wrap mb-6">
          <div class="relative w-full appearance-none label-floating">
            <input
              class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Your email"
              required
            />
            <label
              for="name"
              class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              Your email
            </label>
          </div>
        </div>

        <div class="flex flex-wrap mb-6">
          <div class="relative w-full appearance-none label-floating">
            <textarea
              class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              type="text"
              placeholder="Message..."
            ></textarea>
            <label
              for="message"
              class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              Message...
            </label>
          </div>
        </div>

        <div class="w-full flex justify-center">
          <button
            class="w-1/4 h-10 border-2 border-black shadow-inner bg-white hover:bg-gray-200 focus:shadow-outline focus:outline-none text-black uppercase font-bold text-sm py-2 px-4"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </Layout>
  )
}
