import {request,gql} from 'graphql-request'

const graphqlAPI=process.env.NEXT_PUBLIC_GRAPPHCMS_ENDPOINT

 const getPosts=async()=>{
    const query=gql`
        query MyQuerry{
            postsConnection {
                edges {
                  node {
                    author {
                      name
                      bio
                      id
                      photo {
                        url
                      }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featuredimage {
                      url
                    }
                    categories {
                      name
                      slug
                    }
                  }
                }
              }
        }
    `

    const result=await request(graphqlAPI,query)

    return result.postsConnection.edges
}



 const getPostDetails=async(slug)=>{
    const query=gql`
        query GetPostDetails($slug:String){
          post(where:{slug:$slug}){
                    author {
                      name
                      bio
                      id
                      photo {
                        url
                      }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featuredimage {
                      url
                    }
                    categories {
                      name
                      slug
                    }
                    content{
                      raw
                    }
                  }
                }
    `

    const result=await request(graphqlAPI,query, {slug})

    return result.post
}


const getRecentPosts=async()=>{
  const query=gql`
    query GetPostDetails(){
      posts(
        orderBy:createdAt_ASC
        last:3
      ){
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result=await request(graphqlAPI,query)
 
    return result.posts
}

const getSimilarPosts=async(categories,slug)=>{
  const query=gql`
    query GetPostDetails($slug:String!, $categories:[String!]){
      posts(
        where:{slug_not:$slug, AND: {categories_some:{slug_in:$categories}}}
        last:3
        ){
          title
          featuredimage {
            url
          }
          createdAt
          slug
        }
    }
  `
  const result=await request(graphqlAPI,query, {categories,slug})
 
    return result.posts
}


const getCategories=async()=>{
const query =gql`
  query GetCategories{
    categories{
      name
      slug
    }
  }
`
const result=await request(graphqlAPI,query)
 
    return result.categories
}


const submitComment=async(obj)=>{
  const result =await fetch('/api/comments',{
    method:'POST',
    headers:{
    'Content-Type':'application/json'
    },
    body: JSON.stringify(obj),
  })

  return result.json()
}

const getComments=async(slug)=>{
  const query =gql`
    query GetComments($slug:String!){
      comments(where:{post:{slug:$slug}}){
        name
        createdAt
        comment
      }
        
    }
  `
  const result=await request(graphqlAPI,query,{slug})
   
      return result.comments
  }

 const getFeaturedPosts = async () => {
    const query = gql`
      query GetCategoryPost() {
        posts(where: {featuredPost: true}) {
          author {
            name
            photo {
              url
            }
          }
          featuredimage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.posts;
  };

export {getFeaturedPosts,getPosts,getRecentPosts,getSimilarPosts,getCategories,getPostDetails,submitComment,getComments}