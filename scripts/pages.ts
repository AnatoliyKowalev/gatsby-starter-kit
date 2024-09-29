const path = require(`path`)

const Page = path.resolve(`./src/templates/Page/Page.tsx`)

const generalPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulPage {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    console.error("Error loading pages:", result.errors)
    return
  }

  const pages = result.data.allContentfulPage.nodes

  pages.forEach(page => {
    createPage({
      path: page.slug.trim(),
      component: Page,
      context: page,
    })
  })
}

export default generalPages
