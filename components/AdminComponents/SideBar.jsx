import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col'>
      <div className='px-2 text-center py-3 border border-black'>
        <Link href='/admin' className='sm:text-lg lg:text-3xl font-bold'>
          <h1>Nextjs Blog</h1>
        </Link>
      </div>

      <div className='w-28 sm:w-80 h-[100vh] px-2 flex flex-col gap-5 py-12 border border-black'>
        <Link href='/admin/AddProduct' className='flex items-center border border-y-black gap-3 font-medium px-3 py-2 hover:shadow-[-5px_5px_0px_#000000] bg-white ease-in-out duration-200'>
            <i className='bx bx-plus-circle'></i>
            <p>Add Blog</p>
        </Link>

        <Link href='/admin/BlogList' className='flex items-center border border-y-black gap-3 font-medium px-3 py-2 hover:shadow-[-5px_5px_0px_#000000] bg-white ease-in-out duration-200'>
            <i className='bx bxs-edit' ></i>
            <p>Blog Lists</p>
        </Link>

        <Link href="/admin/Subcriptions" className='flex items-center border border-y-black gap-3 font-medium px-3 py-2 hover:shadow-[-5px_5px_0px_#000000] bg-white ease-in-out duration-200'>
            <i className='bx bx-envelope' ></i>
            <p>Subcriptions</p>
        </Link>

        <hr className=' border border-black mt-5'></hr>

        <div className='flex items-center gap-5 justify-center'>
          <Link href='/admin/login'>Login</Link>
          <Link href='/admin/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar
