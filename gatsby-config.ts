import dotenv from "dotenv"

dotenv.config()

export default {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-inline-svg",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.REACT_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
