import type {
  CreatePagesArgs,
  CreateResolversArgs,
  CreateSchemaCustomizationArgs,
  CreateWebpackConfigArgs,
} from "gatsby"

import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"

import allPages from "./scripts/pages"

import { typeDefs } from "./types"

// Webpack config for support ts routing absolute / relative path
exports.onCreateWebpackConfig = ({
  actions,
  loaders,
}: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  })
}

// Create resolvers for linking nodes by id, etc...
exports.createResolvers = ({
  createResolvers,
  getNodesByType,
}: CreateResolversArgs) => {
  createResolvers({})
}

// Create all pages by gatsby nodes
exports.createPages = async (args: CreatePagesArgs) => {
  await allPages(args)
}

// Handle 404 page redirect
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/404/)) {
    page.matchPath = "/*"
    createPage(page)
  }
}

// Create graphql schema
exports.createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions

  createTypes(typeDefs)
}
