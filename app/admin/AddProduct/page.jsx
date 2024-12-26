'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Zhang Jia Hui",
    authorImg: "/author_img.png"
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('author', data.author)
    formData.append('authorImg', data.authorImg)
    formData.append('image', image)

    const response = await axios.post('/api/blog', formData)

    if (response.data.success) {
      toast.success(response.data.msg)
      setImage(false)
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Zhang Jia Hui",
        authorImg: "/author_img.png"
      })
    } else {
      toast.error("Error!!!")
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} className='py-5 px-5 w-full'>
        <h1 className='text-2xl font-medium'>Upload thumbnails</h1>

        <div className='flex flex-col my-5 w-full'>
          <label htmlFor='image' className='mb-3'>Image:</label>
          <input type='file' onChange={(e) => setImage(e.target.files[0])} id='image' name='image' required></input>
        </div>

        <div className='flex flex-col my-5 w-full'>
          <label htmlFor='title' className='mb-3'>Title:</label>
          <input type='text' onChange={onChangeHandler} value={data.title} id='title' name='title' className='border border-black rounded px-3 py-3 '></input>
        </div>

        <div className='flex flex-col my-5'>
          <label htmlFor='description' className='mb-3'>Description:</label>
          <textarea type='text' onChange={onChangeHandler} value={data.description} id='description' name='description' className='border border-black rounded px-3 py-3 h-72' required></textarea>
        </div>

        <div className='flex flex-col my-5'>
          <label htmlFor='category' className='mb-3'>Category:</label>
          <select name='category' onChange={onChangeHandler} value={data.category} className='border border-black rounded'>
            <option value='startup'>Startup</option>
            <option value='technology'>Technology</option>
            <option value='lifestyle'>Lifestyle</option>
          </select>
        </div>
        
        <button type='submit' className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black hover:shadow-[-7px_7px_0px_#000000] ease-in-out duration-200'>Add Blog</button>
      </form>
    </div>
  )
}

export default AddProduct
