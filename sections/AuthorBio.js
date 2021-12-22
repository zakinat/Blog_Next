import React from 'react';
import Image from 'next/image';


const AuthorBio = ({ author }) => (
  <div className="authorBio text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div >
      <Image
        unoptimized
        
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
);

export default AuthorBio;