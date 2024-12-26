import Image from 'next/image'
import React from 'react'

const BlogItem = ({ title, description, category, image }) => {
  return (
    <div className='max-w-[330px] sm:max-w[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] ease-in-out duration-200'>
      <Image src={image} alt='blog image' width={400} height={400} className='border-b border-black' />
      <p className='mt-5 px-1 inline-block bg-black text-white text-lg'>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
        <div className="inline-flex items-center py-2 font-semibold text-center">
            <button className='inline-flex items-center gap-2 border border-black px-2 py-2'>Read more <i className='bx bx-right-arrow-alt text-lg'></i></button>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
