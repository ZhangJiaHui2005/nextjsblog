import { connectDb } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel"

const { NextRequest, NextResponse } = require("next/server")
import { writeFile } from 'fs/promises'

const loadDB = async () => {
    await connectDb()
}

loadDB()

export async function GET(request) {
    console.log("Blog GET hit")
    return NextResponse.json({msg:"api working"})
}

export async function POST(request) {
    const formData = await request.formData()
    const timestamp = Date.now()

    const image = formData.get("image")
    const imageByteData = await image.arrayBuffer()
    const buffer = Buffer.from(imageByteData)
    const path = `./public/${timestamp}_${image.name}`
    await writeFile(path, buffer)

    const imgUrl = `/${timestamp}_${image.name}`
    
    const blogData = {
        title: `${formData.get("title")}`,
        description: `${formData.get("description")}`,
        category: `${formData.get("category")}`,
        author: `${formData.get("author")}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get("authorImg")}`
    }

    await BlogModel.create(blogData)
    console.log("Blog Saved")

    return NextResponse.json({ success: true, msg: "Blog Added" })
}