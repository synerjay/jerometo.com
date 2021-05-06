import React from "react"
import { header, btn } from "../styles/home.module.css"

export default function About() {
  return (
    <section className={header} id="about">
      <div>
        <h2>I am Jerome.</h2>
        <h3>Explorer Extroardinaire</h3>
        <p>React Engineer & Data Scientist</p>
      </div>
      <div>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eum
          assumenda quisquam, libero perspiciatis cumque magni, natus cupiditate
          aperiam officia doloremque. Animi consequuntur vitae, officia enim
          necessitatibus voluptatibus quis dicta! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Laboriosam doloremque repellendus omnis
          id nihil eum, dicta incidunt eos soluta perferendis eveniet sapiente
          molestiae fugiat adipisci molestias sequi dolores voluptatum
          consequatur?
        </p>
        <img src="http://unsplash.it/400/400" className="align-left slide-in" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          optio dicta praesentium. Quae atque fugiat sed at ipsum ab consectetur
          ducimus hic porro iure, architecto consequuntur suscipit dolore?
          Neque, non? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit a optio pariatur consectetur saepe error magni quis? Quas
          repellat similique iusto consequatur impedit mollitia molestias? Sit,
          inventore assumenda! Placeat, obcaecati. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Porro, laboriosam quos! Voluptatum
          cumque laborum aut sint ut, velit non, omnis corporis, nisi voluptate
          ea at. Tempore distinctio ab alias nesciunt.
        </p>
      </div>
    </section>
  )
}
