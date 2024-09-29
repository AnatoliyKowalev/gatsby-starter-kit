// import { client } from "../contentfulClient"

// const TypeName = "Header"

// const headerNode = ({
//   actions: { createNode },
//   createNodeId,
//   createContentDigest,
//   getNodesByType,
// }) =>
//   new Promise(async resolve => {
//     const pages = await client
//       .getEntries({
//         content_type: "page",
//         include: 1,
//       })
//       .then((res: { items: any[] }) => {
//         return res.items
//       })

//     const getAssetByTitle = async (title: string) => {
//       const assets = await client.getAssets({
//         "fields.title[match]": title,
//       })

//       return assets.items.length > 0 ? assets.items[0] : null
//     }

//     // const logoAsset = await getAssetByTitle("logo")

//     const allAssets = getNodesByType("ContentfulAsset")

//     // Find the asset with contentful_id of "5LyV1puGWkDTQdjEA74PJ2"
//     const logoAsset = allAssets.find(
//       asset => asset.contentful_id === "5LyV1puGWkDTQdjEA74PJ2"
//     )

//     const header = {
//       links: pages.map(({ fields }) => ({
//         path: fields.slug.includes("/") ? "/" : `/${fields.slug}`,
//         name: fields.name,
//       })),
//       logo: { ...logoAsset },
//     }

//     createNode({
//       ...header,
//       id: createNodeId("site-header"),
//       internal: {
//         type: TypeName,
//         contentDigest: createContentDigest(header),
//       },
//     })
//     resolve(TypeName)
//   })

// export default headerNode
