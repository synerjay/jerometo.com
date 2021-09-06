/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Jerome Tolentino | Full Stack Web Developer",
    description:
      "Portfolio page for full stack web developer Jerome Tolentino specializing in React.js Node.js Express and Django",
    author: `Jerome Tolentino`,
    url: "http://www.jerometo.com",
    image: "/images/metaImage2.png",
    copyright: "This website is copyrighted 2021 Jerome Tolentino",
    contact: "tolent.jay@gmail.com",
  },
}
