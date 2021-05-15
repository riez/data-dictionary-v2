import { createClient } from "../generated-gql-client"

export const client = createClient({
  url: "http://localhost:3001/api/graphql",
})
