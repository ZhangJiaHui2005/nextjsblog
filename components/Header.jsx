import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">
        <h1 className='text-2xl md:text-2xl lg:text-3xl font-bold'>Nextjs Blog</h1>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black hover:shadow-[-7px_7px_0px_#000000] ease-in-out duration-200'>
            Get Started
            <i className='bx bx-right-arrow-alt text-lg'></i>
        </button>
      </div>
    </div>
  )
}

export default Header
