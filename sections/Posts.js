import React from 'react'
import { PostCard } from '../components'

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map((post,index)=>(
                <PostCard post={post.node} key={index}/>        
            ))}
        </div>
            
        
    )
}

export default Posts
