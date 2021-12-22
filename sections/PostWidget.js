import React,{useState,useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import {getRecentPosts,getSimilarPosts} from '../services'

const PostWidget = ({categories,slug}) => {
    const [relatedPosts,setRelatedPosts]=useState([])

    useEffect(() => {
        if(slug){
            getSimilarPosts(categories,slug)
            .then((result)=>setRelatedPosts(result))
        }else{
            getRecentPosts()
            .then((result)=>setRelatedPosts(result))
        }
    }, [slug])

    return (
        <div className='postwidget bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8  font-semibold border-b'>
                {slug ? 'Related Posts':'Recent Posts'}
            </h3>
            {relatedPosts.map((post,index)=>(
                <div className='postwidget__post flex items-center w-full bb-4' key={index}>
                    <div className='w-16 flex-none'> 
                        <img 
                            alt={post.title}
                            height={'50px'}
                            width={'50px'}
                            className='align-middle rounded-full'
                            src={post.featuredimage.url}
                        />
                    </div>
                    <div className='postwidget__post-detail flex-grow ml-4'>
                    <p className='text-gray-500 font-xs'>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </p>
                    <Link href={`/post/${post.slug}`} className='text-md' key={post.title}>
                        <span>{post.title}</span>
                    </Link>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget
