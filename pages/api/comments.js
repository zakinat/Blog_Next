// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */
import { GraphQLClient,gql } from "graphql-request"
const graphqlAPI=process.env.NEXT_PUBLIC_GRAPPHCMS_ENDPOINT

export default async function asynchandler(req, res){
  
  const graphQLClient= new GraphQLClient(graphqlAPI,{

  headers:{
    authorization:`Bearer ${process.env.GRAPH_TOKEN}`
  }
  })

  const query = gql`
  mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
    createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
  }
`

try {
  const result =await graphQLClient.request(query,req.body)
  return res.status(200).send(result)
} catch (error) {
  console.log(error)
  console.log('you are in error')
}

}

