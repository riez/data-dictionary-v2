# Hasura Data Dictionary
- This is an adjusted version from the official repository (https://github.com/hasura/data-dictionary) to fit the current version of Hasura Graphql Server.

## Install Instruction
### Docker Container 
- Run `docker-compose up -d`

We'll see 4 containers up. Contains old and new version of Hasura Graphql.
- The new Hasura Graphql is running and exposed on port 8080
- The old Hasura Graphql is running and exposed on port 8081
### React App
- Run `pnpm/yarn/npm install`
- Run `pnpm/yarn/npm run dev`
- Run `pnpm/yarn/npm run generate-gql-client`

If you want to run this on the custom host try using this command:
`pnpm/yarn/npm run dev -- -H 0.0.0.0`

#### Note
By default React Client running on the same port which is 3000. So you might need specify port on one of react app that you want run (if you run both React client).
```
pnpm/yarn/npm run dev -- -H 0.0.0.0 --port 3001
```