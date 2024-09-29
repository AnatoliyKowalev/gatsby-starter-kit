import { createClient } from "contentful"

export const client = createClient({
  space: process.env.REACT_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.REACT_CONTENTFUL_ACCESS_TOKEN as string,
})
