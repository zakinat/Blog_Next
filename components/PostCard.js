import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import AuthorShortDetails from './AuthorShortDetails'
const PostCard = ({post}) => {
    return (
        <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                <img
                    src={post.featuredimage.url}
                    alt={post.title}
                    className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
                />
            </div>
            <h1 className={`transation duration-700 text-center mb-8 cursor-pointer
                                hover:text-pink-600 text-3xl font-semibold`}>

                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <AuthorShortDetails name={post.author.name} photo={post.author.photo.url} date={post.createdAt} />
            <p className='text-center text-sm text-gray-700 font-normal px-4 lg:px-20 mb-8 '>
               {post.excerpt} 
            </p>
            <div className='text-center'>
                <Link href={`/post/${post.slug}`}>
                    <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 font-medium rounded-full px-8 py-3 cursor-pointer'>
                        continue reading
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard
