import React from 'react'
import moment from 'moment'

const AuthorShortDetails = ({name,photo,date}) => {
    return (
        <div className='block lg:flex text-center item-center justify-center mb-4 w-full'>
                <div className='flex item-center justify-center mb-4 lg:mb-0 lg:w-auto mr-8'>
                    <img 
                    alt={name}
                    height={'30px'}
                    width={'30px'}
                    className='align-middle rounded-full'
                    src={photo}
                    />
                    <p className='inline align-middle text-gray-700 ml-2 text-lg'>
                        {name}
                    </p>
                </div>  
                <div className='font-medium text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>
                        {moment(date).format('MMM DD, YYYY')}
                    </span>
                </div>
            </div>
    )
}

export default AuthorShortDetails
