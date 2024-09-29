const PagesType = `
  type ContentfulPage {
    name: String!
    slug: String!
    seo: ContentfulSeo @link(by: "id", from: "seo___NODE")
  }
`

export default PagesType
